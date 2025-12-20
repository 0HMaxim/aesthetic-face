import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, get } from "firebase/database";
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
  const [loading, setLoading] = useState(id ? true : false);

  useEffect(() => {
    if (id && id !== "new") {
      get(ref(db, `faqs/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setFAQ({ ...emptyFAQ, ...snapshot.val(), id });
        }
        setLoading(false);
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
        newErrors[field] = `${field.toUpperCase()} is required in at least one language`;
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const faqId = id === "new" || !id ? push(ref(db, "faqs")).key : id;
      if (!faqId) return;

      await set(ref(db, `faqs/${faqId}`), { ...faq, id: faqId });
      navigate("/admin/faqs");
    } catch (e) {
      console.error("Save error:", e);
    }
  };

  if (loading) return <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">Loading FAQ...</div>;

  return (
      <div className="p-6 max-w-5xl mx-auto bg-white shadow-2xl rounded-[40px] my-10 border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-50 pb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-800 tracking-tight">
              {id && id !== "new" ? "Edit FAQ" : "Create FAQ"}
            </h1>
            <p className="text-gray-400 text-sm font-medium">Manage frequently asked questions for your clients</p>
          </div>
          <div className="border-t border-gray-50 pt-8 flex justify-end items-center gap-6">
            <button onClick={() => navigate("/admin/faq")} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition">
              Discard Changes
            </button>
            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl transition-all font-bold shadow-lg shadow-blue-100 active:scale-95">
              Save FAQ
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Question Section */}
          <div className="p-8 border border-gray-100 rounded-[32px] bg-gray-50/30 shadow-sm transition-all hover:bg-white hover:shadow-md">
            <label className="block font-black text-blue-500 mb-6 uppercase text-[10px] tracking-[0.3em] flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Question
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["uk", "ru", "en", "de"].map((lang) => (
                  <div key={`question-${lang}`}>
                    <div className="text-[10px] font-bold text-gray-300 mb-2 ml-2 uppercase tracking-tighter">{lang}</div>
                    <input
                        type="text"
                        placeholder={`Write question in ${lang}...`}
                        value={faq.question?.[lang] || ""}
                        onChange={(e) => handleLocalizedChange("question", lang, e.target.value)}
                        className={`w-full border rounded-2xl p-4 shadow-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all ${
                            errors.question ? "border-red-200" : "border-gray-100 hover:border-gray-200"
                        }`}
                    />
                  </div>
              ))}
            </div>
            {errors.question && <p className="text-red-500 text-[10px] mt-4 font-black uppercase ml-2 tracking-widest">{errors.question}</p>}
          </div>

          {/* Answer Section */}
          <div className="p-8 border border-gray-100 rounded-[32px] bg-gray-50/30 shadow-sm transition-all hover:bg-white hover:shadow-md">
            <label className="block font-black text-emerald-500 mb-6 uppercase text-[10px] tracking-[0.3em] flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Answer
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["uk", "ru", "en", "de"].map((lang) => (
                  <div key={`answer-${lang}`}>
                    <div className="text-[10px] font-bold text-gray-300 mb-2 ml-2 uppercase tracking-tighter">{lang}</div>
                    <textarea
                        placeholder={`Provide detailed answer in ${lang}...`}
                        rows={4}
                        value={faq.answer?.[lang] || ""}
                        onChange={(e) => handleLocalizedChange("answer", lang, e.target.value)}
                        className={`w-full border rounded-2xl p-4 shadow-sm focus:ring-4 focus:ring-emerald-50 outline-none transition-all resize-none ${
                            errors.answer ? "border-red-200" : "border-gray-100 hover:border-gray-200"
                        }`}
                    />
                  </div>
              ))}
            </div>
            {errors.answer && <p className="text-red-500 text-[10px] mt-4 font-black uppercase ml-2 tracking-widest">{errors.answer}</p>}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 flex justify-end items-center gap-6 border-t border-gray-50">
          <button
              onClick={() => navigate("/admin/faqs")}
              className="text-gray-400 font-black text-[10px] uppercase tracking-widest hover:text-gray-600 transition"
          >
            Discard Changes
          </button>
          <button
              onClick={handleSave}
              className="bg-gray-800 hover:bg-black text-white px-12 py-4 rounded-2xl transition-all font-black shadow-lg active:scale-95 uppercase tracking-widest text-[10px]"
          >
            Update FAQ
          </button>
        </div>
      </div>
  );
}