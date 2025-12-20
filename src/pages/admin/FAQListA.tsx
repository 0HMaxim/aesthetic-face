import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import SolarPowerBold from "~icons/solar/power-bold";
import {db} from "../../firebase.ts";
import type {FAQ} from "../../models/FAQ.ts";


export default function FAQListA() {
  const [blogs, setBlogs] = useState<Record<string, FAQ>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const blogRef = ref(db, "faqs");
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
          <h1 className="text-xl font-semibold">Faqs</h1>

          <button
              onClick={() => navigate("/admin/faq/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span className="hidden md:block">New Faq</span>
          </button>
        </div>

        {/* Список блогов */}
        <div className="space-y-3">
          {Object.entries(blogs).map(([key, faq]) => (
              <div
                  key={key}
                  className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => navigate(`/admin/faq/${key}`)}
              >

                <p className="text-sm text-gray-600">{faq.id || "No slug"} : </p>
                <h2 className="font-semibold">{faq.question?.en || "No title"}</h2>
                <p className="text-sm text-gray-600">{faq.answer?.en || "No slug"} : </p>

              </div>
          ))}
        </div>
      </div>
  );
}
