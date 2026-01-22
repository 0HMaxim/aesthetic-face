import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, get } from "firebase/database";
import { db } from "../../firebase";

// Models
import type { Employee } from "../../models/Employee";
import type { LocalizedText } from "../../models/LocalizedText";

// Components
import ImageInputBlock from "../../components/ImageInputBlock.tsx";
import {adminPath} from "../../utils/adminNavigate.ts";
import {Button} from "@heroui/react";

export default function EmployeeEditor() {
  const { id, lang, businessSlug } = useParams<{ id: string; lang: string; businessSlug: string }>();
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
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  useEffect(() => {
    if (id && id !== "new") {
      get(ref(db, `employees/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setEmployee({ ...emptyEmployee, ...snapshot.val(), id });
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleLocalizedChange = (field: keyof Employee, lang: string, value: string) => {
    setEmployee((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Исправленная проверка trim для LocalizedText
    const hasName = Object.values(employee.fullName || {}).some(v =>
        typeof v === 'string' && v.trim().length > 0
    );

    if (!hasName) newErrors.fullName = "Full name is required";
    if (!employee.slug?.trim()) newErrors.slug = "Slug is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


    useEffect(() => {
      if (id && id !== "new") {
        const employeeRef = ref(db, `businesses/${businessSlug}/employees/${id}`);
        get(employeeRef).then((snapshot) => {
          if (snapshot.exists()) {
            setEmployee({ ...emptyEmployee, ...snapshot.val(), id });
          }
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    }, [id, businessSlug]);

    // 3. Исправляем сохранение
    const handleSave = async () => {
      if (!validate()) return;
      try {
        const employeesListRef = ref(db, `businesses/${businessSlug}/employees`);

        const empId = id === "new" || !id
            ? push(employeesListRef).key
            : id;

        if (!empId) return;

        await set(ref(db, `businesses/${businessSlug}/employees/${empId}`), {
          ...employee,
          id: empId
        });

        navigate(adminPath(lang!, businessSlug!, "employees"))
      } catch (error) {
        console.error("Error saving employee:", error);
      }
    };

    if (loading) return <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">Loading Specialist...</div>;

    return (
        <div className="p-6 max-w-6xl mx-auto bg-white shadow-2xl rounded-[40px] my-10 border border-gray-100">

          <div className="flex justify-between items-center mb-12 border-b border-gray-50 pb-8">
            <div>
              <h1 className="text-4xl font-black text-gray-800 tracking-tighter uppercase">
                {id && id !== "new" ? "Edit Profile" : "New Specialist"}
              </h1>
            </div>
            <div className="flex gap-6">
              <Button onClick={() => navigate(adminPath(lang!, businessSlug!, "employees"))} className="text-gray-400 font-black text-xs uppercase tracking-widest">
                Discard Changes
              </Button>
              <button onClick={handleSave} className="bg-blue-600 text-white px-10 py-3 rounded-2xl font-bold">
                Save Employee
              </button>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-1 space-y-10">
            <div className="bg-gray-50/30 p-8 rounded-[32px] border border-gray-100 text-center">
              <label className="block font-black text-gray-400 mb-6 uppercase text-[10px] tracking-[0.3em]">Profile Photo</label>
              <div className="max-w-[240px] mx-auto">
                <ImageInputBlock
                    image={employee.photo || ""}
                    onChange={(url) => setEmployee({ ...employee, photo: url })}
                />
              </div>
            </div>

            <div className="bg-blue-50/30 p-8 rounded-[32px] border border-blue-100/50">
              <label className="block font-black text-blue-900 mb-2 uppercase text-[10px] tracking-[0.2em] ml-1">Personal URL Slug</label>
              <input
                  className={`w-full border rounded-2xl p-4 shadow-inner outline-none focus:ring-4 focus:ring-blue-100 transition font-mono text-sm ${errors.slug ? "border-red-300 bg-red-50" : "border-gray-100 bg-white"}`}
                  value={employee.slug}
                  onChange={(e) => setEmployee({ ...employee, slug: e.target.value })}
                  placeholder="e.g. dr-emily-stone"
              />
              {errors.slug && <p className="text-red-500 text-[9px] font-black uppercase mt-2 ml-1">{errors.slug}</p>}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">

            {(["fullName", "shortName", "position"] as const).map(field => (
                <div key={field} className="p-8 border border-gray-100 rounded-[32px] bg-white shadow-sm hover:shadow-md transition-shadow">
                  <label className="block font-black text-gray-400 mb-5 uppercase text-[10px] tracking-[0.3em] ml-1">{field}</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["uk", "ru", "en", "de"].map(lang => (
                        <div key={lang}>
                          <div className="text-[9px] font-black text-gray-300 mb-1 ml-2 uppercase">{lang}</div>
                          <input
                              className={`w-full border rounded-2xl p-4 text-sm font-bold shadow-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all ${errors[field] ? "border-red-200" : "border-gray-50 hover:border-gray-200"}`}
                              value={(employee[field] as LocalizedText)?.[lang] || ""}
                              onChange={(e) => handleLocalizedChange(field, lang, e.target.value)}
                          />
                        </div>
                    ))}
                  </div>
                </div>
            ))}

            <div className="space-y-8">
              <LocalizedArraySection title="Specializations" field="specializations" employee={employee} setEmployee={setEmployee} />
              <LocalizedArraySection title="Academic Path" field="education" employee={employee} setEmployee={setEmployee} />
              <CertificatesSection certificates={employee.certificates || []} setCertificates={(arr) => setEmployee(prev => ({ ...prev, certificates: arr }))} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-50 mt-16 pt-10 flex justify-end items-center gap-8">
          <button onClick={() => navigate(adminPath(lang!, businessSlug!, "employees"))} className="text-gray-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-gray-900 transition">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-gray-900 hover:bg-black text-white px-20 py-5 rounded-[2.5rem] transition-all font-black shadow-2xl active:scale-95 uppercase tracking-[0.2em] text-xs">
            Save Specialist Profile
          </button>
        </div>
      </div>
  );
}


function LocalizedArraySection({ title, field, employee, setEmployee }: any) {
  const languages = ["uk", "ru", "en", "de"];
  const arr = Array.isArray(employee[field]) ? (employee[field] as any[]) : [];

  const handleAdd = () => {
    const newItem = languages.reduce((acc, l) => ({ ...acc, [l]: "" }), {});
    setEmployee((prev: any) => ({ ...prev, [field]: [...arr, newItem] }));
  };

  const handleRemove = (idx: number) => {
    const updated = [...arr];
    updated.splice(idx, 1);
    setEmployee((prev: any) => ({ ...prev, [field]: updated }));
  };

  return (
      <div className="p-8 border border-gray-100 rounded-[32px] bg-gray-50/30">
        <div className="flex justify-between items-center mb-8 px-2">
          <h2 className="text-[11px] font-black text-gray-800 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
            {title}
          </h2>
          <button onClick={handleAdd} className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-gray-900 hover:text-white transition shadow-sm">
            + Add Line
          </button>
        </div>

        <div className="space-y-4">
          {arr.map((item, idx) => (
              <div key={idx} className="relative p-6 bg-white rounded-[24px] border border-gray-100 group shadow-sm">
                <button onClick={() => handleRemove(idx)} className="absolute top-4 right-4 text-red-300 hover:text-red-500 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">Remove</span>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {languages.map(lang => (
                      <div key={lang}>
                        <div className="text-[9px] font-black text-gray-300 mb-1 uppercase ml-1">{lang}</div>
                        <input
                            className="w-full border border-gray-50 rounded-xl p-3 text-sm font-medium bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                            value={item[lang] || ""}
                            onChange={e => {
                              const updated = [...arr];
                              updated[idx] = { ...item, [lang]: e.target.value };
                              setEmployee((prev: any) => ({ ...prev, [field]: updated }));
                            }}
                        />
                      </div>
                  ))}
                </div>
              </div>
          ))}
          {arr.length === 0 && (
              <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-[24px] text-gray-300 text-[10px] font-black uppercase tracking-widest">
                No entries added yet
              </div>
          )}
        </div>
      </div>
  );
}

function CertificatesSection({ certificates, setCertificates }: { certificates: string[], setCertificates: (arr: string[]) => void }) {
  const addCertificate = () => setCertificates([...certificates, ""]);
  const removeCertificate = (idx: number) => setCertificates(certificates.filter((_, i) => i !== idx));

  return (
      <div className="p-8 border border-gray-100 rounded-[32px] bg-white shadow-inner">
        <div className="flex justify-between items-center mb-8 px-2">
          <h2 className="text-[11px] font-black text-gray-800 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
            Certificates Gallery
          </h2>
          <button onClick={addCertificate} className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition shadow-sm">
            + Upload New
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
              <div key={idx} className="group relative aspect-[3/4] bg-gray-50 rounded-[24px] p-4 border border-gray-100 flex flex-col items-center justify-center overflow-hidden">
                <button
                    onClick={() => removeCertificate(idx)}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-red-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-red-500 hover:text-white"
                >
                  ✕
                </button>
                <div className="w-full h-full">
                  <ImageInputBlock
                      image={cert}
                      onChange={(url) => {
                        const updated = [...certificates];
                        updated[idx] = url;
                        setCertificates(updated);
                      }}
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}