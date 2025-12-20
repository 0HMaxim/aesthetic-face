import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import SolarPowerBold from "~icons/solar/power-bold";
import {db} from "../../firebase.ts";
import type {Blog} from "../../models/Blog.ts";

export default function BlogList() {
  const [blogs, setBlogs] = useState<Record<string, Blog>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const blogRef = ref(db, "blogs");
    const unsubscribe = onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      setBlogs(data || {});
    });
    return () => unsubscribe();
  }, []);

  return (
      <div className="p-6">
        {/* Заголовок + кнопка */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Blogs</h1>

          <button
              onClick={() => navigate("/admin/blogs/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span className="hidden md:block">New Blog</span>
          </button>
        </div>

        {/* Список блогов */}
        <div className="space-y-3">
          {Object.entries(blogs).map(([key, blog]) => (
              <div
                  key={key}
                  className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => navigate(`/admin/blogs/${key}`)}
              >
                <p className="text-sm text-gray-600">{blog?.id || "No slug"}</p>
                <h2 className="font-semibold">{blog.title?.en || "No title"}</h2>
                <p className="text-sm text-gray-600">{blog.slug || "No slug"}</p>
              </div>
          ))}
        </div>
      </div>
  );
}
