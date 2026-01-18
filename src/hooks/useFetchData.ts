// src/hooks/useFetchData.ts
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase";

export function useFetchData<T extends Record<string, any[]>>(
    nodes: (keyof T & string)[],
    businessSlug?: string
) {
  // Используем Record, чтобы избежать проблем с Partial при доступе к ключам
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!businessSlug) {
      setLoading(false);
      return;
    }

    const fetchAll = async () => {
      setLoading(true);

      // Явно типизируем объект результатов
      const results = {} as T;

      try {
        const promises = nodes.map(async (node) => {
          const snapshot = await get(ref(db, `businesses/${businessSlug}/${node}`));

          if (snapshot.exists()) {
            const val = snapshot.val();
            // Преобразуем объект Firebase в массив с ID
            // Используем unknown как мост для приведения типов
            results[node] = Object.entries(val).map(([id, item]) => ({
              id,
              ...(item as object),
            })) as unknown as T[typeof node];
          } else {
            results[node] = [] as unknown as T[typeof node];
          }
        });

        await Promise.all(promises);
        setData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
    // Используем JSON.stringify для стабильной зависимости массива
  }, [JSON.stringify(nodes), businessSlug]);

  return { data, loading };
}