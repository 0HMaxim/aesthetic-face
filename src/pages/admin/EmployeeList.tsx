import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SolarPowerBold from "~icons/solar/power-bold";
import {db} from "../../firebase.ts";
import type {Employee} from "../../models/Employee.ts";
import {onValue, ref} from "firebase/database";


export default function EmployeeList() {
  const [employees, setEmployees] = useState<Record<string, Employee>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const blogRef = ref(db, "employees");
    const unsubscribe = onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      setEmployees(data || {});
    });
    return () => unsubscribe();
  }, []);




  return (
      <div className="p-6">
        {/* Заголовок + кнопка */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Employees</h1>

          <button
              onClick={() => navigate("/admin/employees/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span className="hidden md:block">New employee</span>
          </button>
        </div>

        {/* Список блогов */}
        <div className="space-y-3">
          {Object.entries(employees).map(([key, employee]) => (
              <div
                  key={key}
                  className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                  onClick={() => navigate(`/admin/employees/${key}`)}
              >
                <p className="text-sm text-gray-600">{employee.id || "No slug"} : </p>
                <h2 className="font-semibold">{employee.fullName?.en || "No title"}</h2>

              </div>
          ))}
        </div>
      </div>
  );
}
