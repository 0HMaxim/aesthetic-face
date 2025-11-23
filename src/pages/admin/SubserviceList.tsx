import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import type { Subservice } from "../../models/Subservice";
import SolarPowerBold from "~icons/solar/power-bold";

export default function SubServiceList() {
  const [subServices, setSubServices] = useState<Record<string, Subservice>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const subServiceRef = ref(db, "subservices"); // путь в БД
    const unsubscribe = onValue(subServiceRef, (snapshot) => {
      const data = snapshot.val();
      setSubServices(data || {});
    });
    return () => unsubscribe();
  }, []);

  return (
      <div className="p-6">
        {/* Заголовок + кнопка */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Subservices</h1>

          <button
              onClick={() => navigate("/admin/subservices/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span>New SubService</span>
          </button>
        </div>

        {/* Список сабсервисов */}
        <div className="space-y-3">
          {Object.entries(subServices).map(([key, sub]) => (
              <div
                  key={key}
                  className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => navigate(`/admin/subservices/${key}`)}
              >
                <p className="text-sm text-gray-600">
                  <span className="font-medium">ID:</span> {sub.id || key}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Parent Service:</span> {sub.serviceId || "—"}
                </p>
                <h2 className="font-semibold">
                  {sub.category || "No category"}
                </h2>
              </div>
          ))}
        </div>
      </div>
  );
}
