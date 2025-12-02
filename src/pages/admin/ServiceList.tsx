import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import SolarPowerBold from "~icons/solar/power-bold";
import {db} from "../../firebase.ts";
import type {Service} from "../../models/Service.ts";


export default function ServiceList() {
  const [services, setServices] = useState<Record<string, Service>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const serviceRef = ref(db, "services");
    const unsubscribe = onValue(serviceRef, (snapshot) => {
      const data = snapshot.val();
      setServices(data || {});
    });
    return () => unsubscribe();
  }, []);



  return (
      <div className="p-6">
        {/* Заголовок + кнопка */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Services</h1>

          <button
              onClick={() => navigate("/admin/services/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span className="hidden md:block">New Service</span>
          </button>
        </div>

        {/* Список блогов */}
        <div className="space-y-3">
          {Object.entries(services).map(([key, service]) => (
              <div
                  key={key}
                  className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => navigate(`/admin/services/${key}`)}
              >
                <p className="text-sm text-gray-600">{service.id || "No slug"} : </p>
                <h2 className="font-semibold">{service.title?.en || "No title"}</h2>

              </div>
          ))}
        </div>
      </div>
  );
}
