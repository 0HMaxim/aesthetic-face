import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase.ts";
import type { LocalizedText } from "../../models/LocalizedText.ts";
import type { FAQ } from "../../models/FAQ.ts";

export default function FAQEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyFAQ: FAQ = {
    question: {},
    answer: {},
  };

  const [faq, setFAQ] = useState<FAQ>(emptyFAQ);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (id) {
      get(ref(db, `faqs/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setFAQ(snapshot.val());
      });
    }
  }, [id]);

  const handleLocalizedChange = (field: keyof FAQ, lang: string, value: string) => {
    setFAQ((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = async () => {
    const newErrors: { [key: string]: string } = {};
    const requiredFields: (keyof FAQ)[] = ["question", "answer"];

    requiredFields.forEach((field) => {
      const value = faq[field];
      if (!value || !Object.values(value).some((v) => typeof v === "string" && v.trim())) {
        newErrors[field] = `${field} хотя бы на одном языке обязателен!`;
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (id) {
      await update(ref(db, `faqs/${id}`), faq);
    } else {
      const newRef = push(ref(db, "faqs"));
      await set(newRef, { ...faq, id: newRef.key });
    }

    navigate("/admin/faqs");
  };

  return (
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold">{id ? "Edit FAQ" : "Create FAQ"}</h1>

        {/* Question */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["uk", "ru", "en", "de"].map((lang) => (
              <div key={`question-${lang}`} className="flex flex-col">
                <label>Question ({lang})</label>
                <input
                    type="text"
                    value={faq.question?.[lang] || ""}
                    onChange={(e) => handleLocalizedChange("question", lang, e.target.value)}
                    className="border rounded-lg p-2"
                />
              </div>
          ))}
          {errors.question && <p className="text-red-600 col-span-2">{errors.question}</p>}
        </div>

        {/* Answer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["uk", "ru", "en", "de"].map((lang) => (
              <div key={`answer-${lang}`} className="flex flex-col">
                <label>Answer ({lang})</label>
                <input
                    type="text"
                    value={faq.answer?.[lang] || ""}
                    onChange={(e) => handleLocalizedChange("answer", lang, e.target.value)}
                    className="border rounded-lg p-2"
                />
              </div>
          ))}
          {errors.answer && <p className="text-red-600 col-span-2">{errors.answer}</p>}
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
