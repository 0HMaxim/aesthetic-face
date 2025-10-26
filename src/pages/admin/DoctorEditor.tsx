import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase.ts";
import type { LocalizedText } from "../../models/LocalizedText";
import type { Doctor } from "../../models/Doctor";

export default function DoctorEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyDoctor: Doctor = {
    fullName: {},
    position: {},
    shortName: {},
    specializations: [],
    education: [],
    certificates: [],
    photo: "",
    slug: "",
  };

  const [doctor, setDoctor] = useState<Doctor>(emptyDoctor);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (id) {
      get(ref(db, `doctors/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setDoctor(snapshot.val());
      });
    }
  }, [id]);

  const handleLocalizedChange = (field: keyof Doctor, lang: string, value: string) => {
    setDoctor((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = async () => {
    const newErrors: { [key: string]: string } = {};
    const requiredFields: (keyof Doctor)[] = ["fullName", "position", "shortName", "slug"];

    requiredFields.forEach((field) => {
      const value = doctor[field];
      if (typeof value === "string") {
        if (!value.trim()) newErrors[field] = `${field} обязателен!`;
      } else if (typeof value === "object") {
        if (!Object.values(value || {}).some((v) => (typeof v === "string" ? v.trim() : false))) {
          newErrors[field] = `${field} хотя бы на одном языке обязателен!`;
        }
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (id) {
      await update(ref(db, `doctors/${id}`), doctor);
    } else {
      const newRef = push(ref(db, "doctors"));
      await set(newRef, { ...doctor, id: newRef.key });
    }

    navigate("/admin/doctors");
  };

  return (
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold">{id ? "Edit Doctor" : "Create Doctor"}</h1>

        {/* Поля fullName, position, shortName */}
        {["fullName", "position", "shortName"].map((field) => (
            <div key={field} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["uk", "ru", "en", "de"].map((lang) => (
                  <div key={`${field}-${lang}`} className="flex flex-col">
                    <label className="capitalize">{`${field} (${lang})`}</label>
                    <input
                        type="text"
                        value={(doctor as any)[field]?.[lang] || ""}
                        onChange={(e) => handleLocalizedChange(field as keyof Doctor, lang, e.target.value)}
                        className="border rounded-lg p-2"
                    />
                  </div>
              ))}
              {(errors as any)[field] && (
                  <p className="text-red-600 col-span-2">{(errors as any)[field]}</p>
              )}
            </div>
        ))}

        {/* Slug */}
        <div className="flex flex-col md:col-span-2">
          <label>Slug</label>
          <input
              type="text"
              value={doctor.slug}
              onChange={(e) => {
                setDoctor({ ...doctor, slug: e.target.value });
                setErrors((prev) => ({ ...prev, slug: "" }));
              }}
              className="border rounded-lg p-2"
          />
          {errors.slug && <p className="text-red-600">{errors.slug}</p>}
        </div>

        {/* Фото */}
        <div className="flex flex-col mb-4">
          <label>Photo</label>
          {doctor.photo && (
              <div className="flex items-center gap-4 mb-2">
                <img
                    src={doctor.photo}
                    alt="Doctor"
                    className="w-32 h-32 object-cover rounded-lg border"
                />
                <button
                    onClick={() => setDoctor({ ...doctor, photo: "" })}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
                >
                  Remove
                </button>
              </div>
          )}
          <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (ev) => setDoctor({ ...doctor, photo: ev.target?.result as string });
                  reader.readAsDataURL(file);
                }
              }}
              className="border rounded-lg p-2"
          />
        </div>

        {/* Certificates */}
        <div className="flex flex-col mb-4">
          <label>Certificates</label>
          {doctor.certificates?.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-1">
                <span className="flex-1">{cert.split("/").pop()}</span>
                <button
                    onClick={() => {
                      const newCerts = [...(doctor.certificates || [])];
                      newCerts.splice(idx, 1);
                      setDoctor({ ...doctor, certificates: newCerts });
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
                >
                  Remove
                </button>
              </div>
          ))}
          <input
              type="file"
              accept="image/*,application/pdf"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                const newCerts = files.map((f) => URL.createObjectURL(f));
                setDoctor({ ...doctor, certificates: [...(doctor.certificates || []), ...newCerts] });
              }}
              className="border rounded-lg p-2"
          />
        </div>

        {/* Specializations */}


        {/* Specializations */}
        <div className="flex flex-col mb-4">
          <label>Specializations</label>
          {(doctor.specializations || []).map((spec, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 items-start">
                {["uk", "ru", "en", "de"].map((lang) => (
                    <div key={`${idx}-spec-${lang}`} className="flex flex-col">
                      <input
                          type="text"
                          value={(spec as any)[lang] || ""}
                          placeholder={`Specialization (${lang})`}
                          onChange={(e) => {
                            const newSpecs = [...(doctor.specializations || [])];
                            newSpecs[idx] = { ...(newSpecs[idx] || {}), [lang]: e.target.value };
                            setDoctor({ ...doctor, specializations: newSpecs });
                          }}
                          className="border rounded-lg p-2"
                      />
                    </div>
                ))}
                <button
                    onClick={() => {
                      if (confirm("Вы уверены, что хотите удалить эту специализацию?")) {
                        const newSpecs = [...(doctor.specializations || [])];
                        newSpecs.splice(idx, 1);
                        setDoctor({ ...doctor, specializations: newSpecs });
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition h-10 self-end"
                >
                  Remove
                </button>
              </div>
          ))}
          <button
              onClick={() => setDoctor({ ...doctor, specializations: [...(doctor.specializations || []), {}] })}
              className="text-blue-600 mt-1"
          >
            + Add Specialization
          </button>
        </div>

        {/* Education */}
        <div className="flex flex-col mb-4">
          <label>Education</label>
          {(doctor.education || []).map((edu, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 items-start">
                {["uk", "ru", "en", "de"].map((lang) => (
                    <div key={`${idx}-edu-${lang}`} className="flex flex-col">
                      <input
                          type="text"
                          value={(edu as any)[lang] || ""}
                          placeholder={`Education (${lang})`}
                          onChange={(e) => {
                            const newEdu = [...(doctor.education || [])];
                            newEdu[idx] = { ...(newEdu[idx] || {}), [lang]: e.target.value };
                            setDoctor({ ...doctor, education: newEdu });
                          }}
                          className="border rounded-lg p-2"
                      />
                    </div>
                ))}
                <button
                    onClick={() => {
                      if (confirm("Вы уверены, что хотите удалить это образование?")) {
                        const newEdu = [...(doctor.education || [])];
                        newEdu.splice(idx, 1);
                        setDoctor({ ...doctor, education: newEdu });
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition h-10 self-end"
                >
                  Remove
                </button>
              </div>
          ))}
          <button
              onClick={() => setDoctor({ ...doctor, education: [...(doctor.education || []), {}] })}
              className="text-blue-600 mt-1"
          >
            + Add Education
          </button>
        </div>





        <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
        >
          Save
        </button>
      </div>
  );
}
