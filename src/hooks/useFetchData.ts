import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase";

interface FirebaseItem {
  id: string;
  [key: string]: any;
}

export function useFetchData(paths: string[]) {
  const [data, setData] = useState<{ [key: string]: FirebaseItem[] }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const results: { [key: string]: FirebaseItem[] } = {};
      for (const path of paths) {
        const snapshot = await get(ref(db, path));
        if (snapshot.exists()) {
          const val = snapshot.val();
          results[path] = Object.keys(val).map((id) => ({ id, ...val[id] }));
        } else {
          results[path] = [];
        }
      }
      setData(results);
      setLoading(false);
    };

    fetchAll();
  }, [paths.join(",")]);

  return { data, loading };
}
