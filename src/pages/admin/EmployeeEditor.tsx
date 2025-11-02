import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase";
import type { Employee } from "../../models/Employee";
import type { LocalizedText } from "../../models/LocalizedText";

export default function EmployeeEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyEmployee: Employee = {
    fullName: {},
    shortName: {},
    position: {},
    slug: "",
    specializations: [],
    education: [],
    certificates: [],
    photo: "",
  };

  const [employee, setEmployee] = useState<Employee>(emptyEmployee);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  // ---------- Загрузка ----------
  useEffect(() => {
    if (id) {
      get(ref(db, `employees/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setEmployee(snapshot.val());
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  // ---------- Обработчики ----------
  const handleLocalizedChange = (field: keyof Employee, lang: string, value: string) => {
    setEmployee((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handlePhotoChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (ev) => setEmployee({ ...employee, photo: ev.target?.result as string });
    reader.readAsDataURL(file);
  };

  // ---------- Валидация ----------
  const validate = () => {
    const newErrors: { [key in keyof Employee]?: string } = {};
    const requiredFields: (keyof Employee)[] = ["fullName", "shortName", "position", "slug"];

    requiredFields.forEach((field) => {
      const value = employee[field];
      if (typeof value === "string") {
        if (!value.trim()) newErrors[field] = `${field} обязательно!`;
      } else if (typeof value === "object") {
        if (!Object.values(value || {}).some((v) => (typeof v === "string" ? v.trim() : false))) {
          newErrors[field] = `${field} хотя бы на одном языке обязательно!`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------- Сохранение ----------
  const handleSave = async () => {
    if (!validate()) return;

    try {
      if (id) {
        await update(ref(db, `employees/${id}`), employee);
      } else {
        const newRef = push(ref(db, "employees"));
        await set(newRef, { ...employee, id: newRef.key });
      }
      alert("Employee saved successfully!");
      navigate("/admin/employees");
    } catch (error) {
      console.error("Error saving employee:", error);
      alert("Failed to save employee. Check console.");
    }
  };

  if (loading) return <p className="p-6">Загрузка...</p>;

  // ---------- Рендер ----------
  return (
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">{id ? "Редактировать сотрудника" : "Добавить сотрудника"}</h1>

        {/* Локализованные поля */}
        {(["fullName", "shortName", "position"] as (keyof Employee)[]).map((field) => (
            <div key={field} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["uk", "ru", "en", "de"].map((lang) => (
                  <div key={`${field}-${lang}`} className="flex flex-col">
                    <label className="capitalize">{field} ({lang})</label>
                    <input
                        type="text"
                        value={(employee[field] as LocalizedText)?.[lang] || ""}
                        onChange={(e) => handleLocalizedChange(field, lang, e.target.value)}
                        className={`border rounded-lg p-2 ${errors[field] ? "border-red-600" : ""}`}
                    />
                    {errors[field] && <p className="text-red-600 text-sm mt-1">{errors[field]}</p>}
                  </div>
              ))}
            </div>
        ))}

        {/* Slug */}
        <div className="flex flex-col">
          <label>Slug</label>
          <input
              type="text"
              value={employee.slug}
              onChange={(e) => setEmployee({ ...employee, slug: e.target.value })}
              className={`border rounded-lg p-2 ${errors.slug ? "border-red-600" : ""}`}
          />
          {errors.slug && <p className="text-red-600 text-sm mt-1">{errors.slug}</p>}
        </div>

        {/* Фото */}
        <div className="flex flex-col gap-2">
          <label>Фото сотрудника</label>
          {employee.photo && <img src={employee.photo} alt="Employee" className="max-w-xs rounded-lg border" />}
          <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files && handlePhotoChange(e.target.files[0])}
              className="border rounded-lg p-2"
          />
          <input
              type="text"
              placeholder="URL фото"
              value={employee.photo}
              onChange={(e) => setEmployee({ ...employee, photo: e.target.value })}
              className="border rounded-lg p-2"
          />
        </div>

        {/* Специализации */}
        <LocalizedArraySection title="Специализации" field="specializations" employee={employee} setEmployee={setEmployee} />

        {/* Образование */}
        <LocalizedArraySection title="Образование" field="education" employee={employee} setEmployee={setEmployee} />

        {/* Сертификаты */}
        <CertificatesSection certificates={employee.certificates || []} setCertificates={(arr: string[]) => setEmployee(prev => ({ ...prev, certificates: arr }))} />

        <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mt-4"
        >
          💾 Сохранить
        </button>
      </div>
  );
}

// ---------- Локализованные массивы ----------

type LocalizedArraySectionProps = {
  title: string;
  field: keyof Employee;
  employee: Employee;
  setEmployee: (emp: Employee | ((prev: Employee) => Employee)) => void;
};

function LocalizedArraySection({ title, field, employee, setEmployee }: LocalizedArraySectionProps) {
  const languages = ["uk", "ru", "en", "de"];

  // Приведение типа: если поле есть и это массив, приводим к массиву Record<string,string>
  const arr: Record<string, string>[] = Array.isArray(employee[field])
      ? (employee[field] as Record<string, string>[])
      : [];

  const handleChange = (index: number, lang: string, value: string) => {
    const updated = [...arr];
    updated[index] = { ...(updated[index] || {}), [lang]: value };
    setEmployee(prev => ({ ...prev, [field]: updated }));
  };

  const handleAdd = () => {
    const newItem: Record<string, string> = {};
    languages.forEach(lang => (newItem[lang] = ""));
    setEmployee(prev => {
      const currentArray = Array.isArray(prev[field]) ? (prev[field] as Record<string, string>[]) : [];
      return { ...prev, [field]: [...currentArray, newItem] };
    });
  };

  const handleRemove = (index: number) => {
    setEmployee(prev => {
      const currentArray = Array.isArray(prev[field]) ? (prev[field] as Record<string, string>[]) : [];
      const updated = [...currentArray];
      updated.splice(index, 1);
      return { ...prev, [field]: updated };
    });
  };

  return (
      <div className="flex flex-col gap-2">
        <label>{title}</label>
        {arr.map((item, idx) => (
            <div key={idx} className="border rounded-lg p-2 space-y-2 bg-gray-50">
              {languages.map(lang => (
                  <div key={lang} className="flex gap-2">
                    <span className="w-12">{lang}:</span>
                    <input
                        type="text"
                        value={item[lang] || ""}
                        onChange={e => handleChange(idx, lang, e.target.value)}
                        className="border rounded-lg p-1 flex-1"
                    />
                  </div>
              ))}
              <button onClick={() => handleRemove(idx)} className="bg-red-500 text-white px-2 rounded">
                Удалить
              </button>
            </div>
        ))}
        <button onClick={handleAdd} className="text-blue-600 mt-1">
          + Добавить {title}
        </button>
      </div>
  );
}


// ---------- Certificates ----------
function CertificatesSection({ certificates, setCertificates }: any) {
  const handleFileChange = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const updated = [...certificates];
      updated[index] = ev.target?.result as string;
      setCertificates(updated);
    };
    reader.readAsDataURL(file);
  };

  const addCertificate = () => setCertificates([...certificates, ""]);

  const removeCertificate = (index: number) => {
    const updated = [...certificates];
    updated.splice(index, 1);
    setCertificates(updated);
  };


  return (
      <div className="flex flex-col gap-2">
        <label>Сертификаты</label>
        {(certificates || []).map((cert: string, idx: number) => (
            <div key={idx} className="border rounded-lg p-2 flex flex-col gap-2 bg-gray-50">
              {cert && <img src={cert} alt="Certificate" className="max-w-xs rounded-lg border" />}
              <input
                  type="file"
                  accept="image/*"
                  onChange={e => e.target.files && handleFileChange(idx, e.target.files[0])}
                  className="border rounded-lg p-2"
              />
              <input
                  type="text"
                  placeholder="URL сертификата"
                  value={cert}
                  onChange={e => {
                    const updated = [...certificates];
                    updated[idx] = e.target.value;
                    setCertificates(updated);
                  }}
                  className="border rounded-lg p-2"
              />
              <button onClick={() => removeCertificate(idx)} className="bg-red-500 text-white px-2 rounded">Удалить</button>
            </div>
        ))}
        <button type="button" onClick={addCertificate} className="text-blue-600 mt-1">+ Добавить сертификат</button>
      </div>
  );
}
