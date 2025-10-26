import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import SolarPowerBold from "~icons/solar/power-bold";
import {db} from "../../firebase.ts";
import type {Doctor} from "../../models/Doctor.ts";


export default function DoctorList() {
  const [blogs, setBlogs] = useState<Record<string, Doctor>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const blogRef = ref(db, "doctors");
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
          <h1 className="text-xl font-semibold">Doctors</h1>

          <button
              onClick={() => navigate("/admin/doctors/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span className="hidden md:block">New Doctor</span>
          </button>
        </div>

        {/* Список блогов */}
        <div className="space-y-3">
          {Object.entries(blogs).map(([key, doctor]) => (
              <div
                  key={key}
                  className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => navigate(`/admin/doctors/${key}`)}
              >
                <p className="text-sm text-gray-600">{doctor.id || "No slug"} : </p>
                <h2 className="font-semibold">{doctor.fullName?.en || "No title"}</h2>

              </div>
          ))}
        </div>
      </div>
  );
}
