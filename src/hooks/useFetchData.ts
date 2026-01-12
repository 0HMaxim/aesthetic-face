import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase";

interface FirebaseItem {
  id: string;
  [key: string]: any;
}

export function useFetchData(nodes: string[], businessSlug: string | undefined) {
  const [data, setData] = useState<{ [key: string]: FirebaseItem[] }>({});
  const [loading, setLoading] = useState(true);

  // Используем useMemo или превращаем массив в строку ПРАВИЛЬНО
  const nodesKey = nodes.join(",");

  useEffect(() => {
    // Если slug еще не определен, ничего не качаем
    if (!businessSlug) return;

    const fetchAll = async () => {
      setLoading(true); // Сбрасываем лоадинг при смене slug
      const results: { [key: string]: FirebaseItem[] } = {};

      try {
        for (const node of nodes) {
          // ИСПРАВЛЕННЫЙ ПУТЬ: добавляем businessSlug в путь запроса
          const dbPath = `businesses/${businessSlug}/${node}`;
          const snapshot = await get(ref(db, dbPath));

          if (snapshot.exists()) {
            const val = snapshot.val();
            results[node] = Object.keys(val).map((id) => ({ id, ...val[id] }));
          } else {
            results[node] = [];
          }
        }
        setData(results);
      } catch (error) {
        console.error("Firebase fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [nodesKey, businessSlug]); // Важно: следим за businessSlug!

  return { data, loading };
}
