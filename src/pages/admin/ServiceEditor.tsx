import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase.ts";
import type {Doctor} from "../../models/Doctor.ts";
import type {LocalizedText} from "../../models/LocalizedText.ts";


export default function ServiceEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyDoctor: Doctor = {
    fullName: {},
    position: {},
    specializations: [],
    education: [],
    certificates: [],
    shortName: {},
    slug: "",
  };

  const [doctor, setDoctor] = useState<Doctor>(emptyDoctor);

  useEffect(() => {
    if (id) {
      get(ref(db, `services/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setDoctor(snapshot.val());
      });
    }
  }, [id]);

  const handleLocalizedChange = (
      field: keyof Doctor,
      lang: string,
      value: string,
      index?: number
  ) => {
    setDoctor((prev) => {
      const copy = { ...prev };
      const current = copy[field];

      if (Array.isArray(current)) {
        // specializations, education
        if (index !== undefined) {
          current[index] = { ...(current[index] || {}), [lang]: value };
        }
      } else if (typeof current === "object") {
        copy[field] = { ...(current as LocalizedText), [lang]: value };
      } else {
        copy[field] = value;
      }

      return copy;
    });
  };

  const addArrayItem = (field: keyof Doctor) => {
    setDoctor((prev) => {
      const copy = { ...prev };
      copy[field] = [...(copy[field] || []), {}];
      return copy;
    });
  };

  const handleCertificateChange = (value: string, index: number) => {
    setDoctor((prev) => {
      const copy = { ...prev };
      copy.certificates![index] = value;
      return copy;
    });
  };

  const addCertificate = () => {
    setDoctor((prev) => ({
      ...prev,
      certificates: [...(prev.certificates || []), ""],
    }));
  };

  const handleSave = async () => {
    if (!doctor.slug.trim()) {
      alert("Slug обязателен!");
      return;
    }
    if (id) {
      await update(ref(db, `prices/${id}`), doctor);
    } else {
      const newRef = push(ref(db, "prices"));
      await set(newRef, { ...doctor, id: newRef.key });
    }
    navigate("/admin/prices");
  };

  return (
      <div className="p-6 max-w-3xl mx-auto space-y-4">
        <h1 className="text-xl font-semibold">{id ? "Edit Doctor" : "Create prices"}</h1>

        {/* FullName */}
        {["uk", "ru", "en"].map((lang) => (
            <div key={lang}>
              <label>Full Name ({lang})</label>
              <input
                  type="text"
                  value={doctor.fullName?.[lang] || ""}
                  onChange={(e) => handleLocalizedChange("fullName", lang, e.target.value)}
                  className="w-full border rounded-lg p-2"
              />
            </div>
        ))}

        {/* Position */}
        {["uk", "ru", "en"].map((lang) => (
            <div key={lang}>
              <label>Position ({lang})</label>
              <input
                  type="text"
                  value={doctor.position?.[lang] || ""}
                  onChange={(e) => handleLocalizedChange("position", lang, e.target.value)}
                  className="w-full border rounded-lg p-2"
              />
            </div>
        ))}

        {/* Specializations */}
        <div>
          <label className="font-semibold">Specializations</label>
          {doctor.specializations.map((spec, i) =>
              ["uk", "ru", "en"].map((lang) => (
                  <input
                      key={`${i}-${lang}`}
                      type="text"
                      value={spec?.[lang] || ""}
                      placeholder={`${lang}`}
                      onChange={(e) => handleLocalizedChange("specializations", lang, e.target.value, i)}
                      className="w-full border rounded-lg p-2 mb-1"
                  />
              ))
          )}
          <button onClick={() => addArrayItem("specializations")} className="text-blue-600">
            + Add Specialization
          </button>
        </div>

        {/* Education */}
        <div>
          <label className="font-semibold">Education</label>
          {doctor.education.map((edu, i) =>
              ["uk", "ru", "en"].map((lang) => (
                  <input
                      key={`${i}-${lang}`}
                      type="text"
                      value={edu?.[lang] || ""}
                      placeholder={`${lang}`}
                      onChange={(e) => handleLocalizedChange("education", lang, e.target.value, i)}
                      className="w-full border rounded-lg p-2 mb-1"
                  />
              ))
          )}
          <button onClick={() => addArrayItem("education")} className="text-blue-600">
            + Add Education
          </button>
        </div>

        {/* Certificates */}
        <div>
          <label className="font-semibold">Certificates</label>
          {doctor.certificates?.map((cert, i) => (
              <input
                  key={i}
                  type="text"
                  value={cert}
                  onChange={(e) => handleCertificateChange(e.target.value, i)}
                  className="w-full border rounded-lg p-2 mb-1"
              />
          ))}
          <button onClick={addCertificate} className="text-blue-600">
            + Add Certificate
          </button>
        </div>

        {/* Slug */}
        <div>
          <label>Slug</label>
          <input
              type="text"
              value={doctor.slug}
              onChange={(e) => setDoctor({ ...doctor, slug: e.target.value })}
              className="w-full border rounded-lg p-2"
          />
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

