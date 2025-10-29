import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import SolarPowerBold from "~icons/solar/power-bold";
import {db} from "../../firebase.ts";
import type {PriceModel} from "../../models/Price.ts";

export default function PriceList() {
  const [prices, setPrices] = useState<Record<string, PriceModel>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const priceRef = ref(db, "prices");
    const unsubscribe = onValue(priceRef, (snapshot) => {
      const data = snapshot.val();
      setPrices(data || {});
    });
    return () => unsubscribe();
  }, []);


  return (
      <div className="p-6">
        {/* Заголовок + кнопка */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Prices</h1>

          <button
              onClick={() => navigate("/admin/prices/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span className="hidden md:block">New Price</span>
          </button>
        </div>

        {/* Список блогов */}
        <div className="space-y-3">
          {Object.entries(prices).map(([key, price]) => (
              <div
                  key={key}
                  className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => navigate(`/admin/prices/${key}`)}
              >
                <div className="flex">
                  <p className="text-sm text-gray-600">{price?.serviceId || "No service"}</p>
                  <p className="text-sm text-gray-600">{price?.subserviceId || "No subservice"}</p>
                </div>
                <h2 className="font-semibold">{price.category?.en || "No title"}</h2>
              </div>
          ))}
        </div>
      </div>
  );
}
