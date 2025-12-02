import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import SolarPowerBold from "~icons/solar/power-bold";
import { db } from "../../firebase.ts";
import type { Special } from "../../models/Special.ts"; // 👈 Импортируем модель Special

export default function SpecialList() {
  // 1. ✅ Меняем стейт на Special
  const [specials, setSpecials] = useState<Record<string, Special>>({});
  const navigate = useNavigate();

  useEffect(() => {
    // 2. ✅ Меняем путь Firebase на 'specials'
    const specialsRef = ref(db, "specials");

    const unsubscribe = onValue(specialsRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object" && !Array.isArray(data)) {
        setSpecials(data); // 👈 Устанавливаем акции
      } else {
        setSpecials({});
      }
    });
    return () => unsubscribe();
  }, []);

  const specialEntries = Object.entries(specials || {}); // 👈 Используем акции

  // Удобная функция для получения заголовка на английском
  const getTitle = (item: Special) => {
    return item.title?.en || item.title?.uk || "Untitled Special";
  }

  // Удобная функция для получения подзаголовка
  const getSubtitle = (item: Special) => {
    return item.subtitle?.en || item.subtitle?.uk || "No description";
  }

  return (
      <div className="p-6">
        {/* Заголовок + кнопка */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Specials List</h1> {/* ✅ Заголовок */}

          <button
              // 3. ✅ Меняем навигацию на страницу создания акции
              onClick={() => navigate("/admin/specials/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span className="hidden md:block">New Special</span> {/* ✅ Текст кнопки */}
          </button>
        </div>

        {/* Список акций */}
        <div className="space-y-3">
          {specialEntries.length > 0 ? (
              // 4. ✅ Обходим specialEntries и используем 'special'
              specialEntries.map(([key, special]) => (
                  <div
                      key={key}
                      className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                      // 5. ✅ Меняем навигацию на страницу редактирования акции
                      onClick={() => navigate(`/admin/specials/${key}`)}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      {special.mainImage ? ( // 6. ✅ Используем mainImage из Special
                          <img
                              src={special.mainImage}
                              alt={getTitle(special)}
                              className="w-32 h-32 object-cover rounded-lg"
                          />
                      ) : (
                          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                            No image
                          </div>
                      )}

                      <div className="flex-1">
                        {/* 7. ✅ Используем title из Special */}
                        <h2 className="font-semibold text-lg">
                          {getTitle(special)}
                        </h2>
                        {/* 8. ✅ Используем subtitle из Special */}
                        <p className="text-sm text-gray-600">
                          {getSubtitle(special)}
                        </p>
                      </div>
                    </div>
                  </div>
              ))
          ) : (
              <p className="text-gray-500 text-center">No specials found.</p>
          )}
        </div>
      </div>
  );
}