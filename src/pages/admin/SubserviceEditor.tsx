import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase";
import { useFetchData } from "../../hooks/useFetchData";
import { SyncedRelationSelect } from "../../components/SyncedRelationSelect.tsx";
import RelationSelect from "../../components/RelationSelect.tsx";

import type { Subservice } from "../../models/Subservice";
import type { ContentBlock } from "../../models/ContentBlock";
import type { Employee } from "../../models/Employee";
import type { Blog } from "../../models/Blog";
import type { PriceModel } from "../../models/Price";

export default function SubserviceEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptySubservice: Subservice = {
    serviceId: "",
    title: {},
    slug: "",
    mainImage: "",
    content: [],
    prices: [],
    employees: [],
    blogs: [],
  };

  const [subservice, setSubservice] = useState<Subservice>(emptySubservice);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [services, setServices] = useState<{ id: string; title: string }[]>([]);

  // 🔹 Загружаем связанные данные (prices, blogs, employees)
  const { data: relatedData, loading } = useFetchData([
    "prices",
    "blogs",
    "employees",
  ]);

  // 🔹 Загружаем список сервисов
  useEffect(() => {
    get(ref(db, "services")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const list = Object.values(data).map((s: any) => ({
          id: s.id,
          title: s.title?.en || s.title?.ru || s.title?.uk || s.slug,
        }));
        setServices(list);
      }
    });
  }, []);

  // 🔹 Загружаем Subservice при редактировании
  useEffect(() => {
    if (id) {
      get(ref(db, `subservices/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setSubservice(snapshot.val());
      });
    }
  }, [id]);

  // 🔹 Обновление локализованных значений
  const handleLocalizedChange = (lang: string, value: string) => {
    setSubservice((prev) => ({
      ...prev,
      title: { ...(prev.title || {}), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, title: "" }));
  };

  // 🔹 Добавление контент-блока
  const addContentBlock = (type: "paragraph" | "image" | "heading" | "list") => {
    const newBlock: ContentBlock = {
      type,
      content: {},
      align: "left",
      ...(type === "image"
          ? { media: "https://via.placeholder.com/400x200?text=Image" }
          : {}),
    };
    setSubservice({ ...subservice, content: [...(subservice.content || []), newBlock] });
  };

  const handleBlockChange = (index: number, lang: string, value: string) => {
    const updated = [...(subservice.content || [])];
    updated[index] = {
      ...updated[index],
      content: { ...(updated[index].content || {}), [lang]: value },
    };
    setSubservice({ ...subservice, content: updated });
  };

  const handleAlignChange = (index: number, align: "left" | "center" | "right") => {
    const updated = [...(subservice.content || [])];
    updated[index] = { ...updated[index], align };
    setSubservice({ ...subservice, content: updated });
  };

  const moveContentBlock = (index: number, direction: "up" | "down") => {
    const updated = [...(subservice.content || [])];
    if (direction === "up" && index > 0)
      [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    if (direction === "down" && index < updated.length - 1)
      [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setSubservice({ ...subservice, content: updated });
  };

  const removeContentBlock = (index: number) => {
    const updated = [...(subservice.content || [])];
    updated.splice(index, 1);
    setSubservice({ ...subservice, content: updated });
  };

  // 🔹 Валидация
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!subservice.serviceId?.trim()) newErrors.serviceId = "Service ID обязателен!";
    if (!Object.values(subservice.title || {}).some((v) => v.trim()))
      newErrors.title = "Title хотя бы на одном языке обязателен!";
    if (!subservice.slug?.trim()) newErrors.slug = "Slug обязателен!";
    if (!subservice.mainImage?.trim()) newErrors.mainImage = "Main image обязателен!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Сохранение
  const handleSave = async () => {
    if (!validate()) return;
    if (id) {
      await update(ref(db, `subservices/${id}`), subservice);
    } else {
      const newRef = push(ref(db, "subservices"));
      await set(newRef, { ...subservice, id: newRef.key });
    }
    navigate("/admin/subservices");
  };

  // 🔹 Контент-блоки
  const renderBlockEditor = (block: ContentBlock, index: number) => (
      <div key={index} className="border border-gray-300 rounded-lg p-4 my-3 bg-gray-50 w-full">
        <div className="flex justify-between items-center mb-2">
          <strong>Block {index + 1} (type: {block.type})</strong>
          <div className="flex gap-2">
            <button
                onClick={() => moveContentBlock(index, "up")}
                className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
            >
              ⬆️
            </button>
            <button
                onClick={() => moveContentBlock(index, "down")}
                className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
            >
              ⬇️
            </button>
            <button
                onClick={() => removeContentBlock(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Удалить
            </button>
          </div>
        </div>

        {/* Align buttons */}
        <div className="flex gap-2 mb-2">
          {["left", "center", "right"].map((a) => (
              <button
                  key={a}
                  className={`px-2 py-1 border rounded ${
                      block.align === a ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"
                  }`}
                  onClick={() => handleAlignChange(index, a as "left" | "center" | "right")}
              >
                {a}
              </button>
          ))}
        </div>

        {block.type === "image" ? (
            <div className="flex flex-col gap-2">
              <input
                  type="text"
                  placeholder="Image URL"
                  value={block.media || ""}
                  onChange={(e) => {
                    const updated = [...(subservice.content || [])];
                    updated[index].media = e.target.value;
                    setSubservice({ ...subservice, content: updated });
                  }}
                  className="border rounded-lg p-2 w-full"
              />
              {block.media && (
                  <img
                      src={block.media}
                      alt="Preview"
                      className="max-w-xs rounded-lg border border-gray-200"
                  />
              )}
            </div>
        ) : (
            ["uk", "ru", "en", "de"].map((lang) => (
                <div key={lang} className="mb-3">
                  <label className="block text-sm font-medium mb-1">
                    Content ({lang})
                  </label>
                  <input
                      type="text"
                      placeholder={`Content (${lang})`}
                      value={block.content?.[lang] || ""}
                      onChange={(e) => handleBlockChange(index, lang, e.target.value)}
                      className="border rounded-lg p-2 w-full"
                  />
                </div>
            ))
        )}
      </div>
  );

  if (loading) return <p>Loading related data...</p>;

  return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">
          {id ? "Edit Subservice" : "Create New Subservice"}
        </h1>

        {/* Service selection */}
        <div className="flex flex-col mb-4">
          <label className="font-semibold mb-1">Parent Service</label>
          <select
              value={subservice.serviceId}
              onChange={(e) => setSubservice({ ...subservice, serviceId: e.target.value })}
              className="border rounded p-2"
          >
            <option value="">-- Select Service --</option>
            {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
            ))}
          </select>
          {errors.serviceId && <p className="text-red-600 text-sm">{errors.serviceId}</p>}
        </div>

        {/* Titles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {["uk", "ru", "en", "de"].map((lang) => (
              <div key={lang} className="flex flex-col">
                <label className="capitalize">Title ({lang})</label>
                <input
                    value={subservice.title?.[lang] || ""}
                    onChange={(e) => handleLocalizedChange(lang, e.target.value)}
                    className="border rounded p-2"
                />
              </div>
          ))}
          {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
        </div>

        {/* Slug */}
        <div className="flex flex-col mb-4">
          <label>Slug</label>
          <input
              type="text"
              value={subservice.slug}
              onChange={(e) => setSubservice({ ...subservice, slug: e.target.value })}
              className="border rounded p-2"
          />
          {errors.slug && <span className="text-red-500 text-sm">{errors.slug}</span>}
        </div>

        {/* Main Image */}
        <div className="flex flex-col mb-4 gap-2">
          <label className="font-medium">Main Image</label>
          {subservice.mainImage && (
              <img
                  src={subservice.mainImage}
                  alt="Main"
                  className="mb-2 max-w-xs rounded-lg border border-gray-200"
              />
          )}
          <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) =>
                    setSubservice((prev) => ({ ...prev, mainImage: ev.target?.result as string }));
                reader.readAsDataURL(file);
              }}
              className="border rounded-lg p-2"
          />
          <input
              type="text"
              placeholder="URL або CSS фон"
              value={subservice.mainImage || ""}
              onChange={(e) => setSubservice({ ...subservice, mainImage: e.target.value })}
              className="border rounded-lg p-2"
          />
          {errors.mainImage && <span className="text-red-500 text-sm">{errors.mainImage}</span>}
        </div>

        {/* 🔹 RelationSelect — вместо ArrayField */}
        <div className="mt-6 space-y-4">
          <SyncedRelationSelect<PriceModel>
              label="Prices"
              value={subservice.prices || []}
              options={relatedData.prices || []}
              getLabel={(o) => o.category?.uk || "Untitled"}
              getValue={(o) => o.category?.uk || ""}
              firebasePath="prices"
              parentId={subservice.id}
              onChange={(v) => setSubservice({ ...subservice, prices: v })}
          />

          <SyncedRelationSelect<Employee>
              label="Employees"
              value={subservice.employees || []}
              options={relatedData.employees || []}
              getLabel={(o) => o.fullName?.en || "Unnamed"}
              getValue={(o) => o.id || ""}
              firebasePath="employees"
              parentId={subservice.id}
              onChange={(v) => setSubservice({ ...subservice, employees: v })}
          />

          <SyncedRelationSelect<Blog>
              label="Blogs"
              value={subservice.blogs || []}
              options={relatedData.blogs || []}
              getLabel={(o) => o.title?.uk || "Untitled"}
              getValue={(o) => o.id || ""}
              firebasePath="blogs"
              parentId={subservice.id}
              onChange={(v) => setSubservice({ ...subservice, blogs: v })}
          />
        </div>

        {/* Content blocks */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Content Blocks</h2>
          {(subservice.content || []).map((block, i) => renderBlockEditor(block, i))}
          <div className="flex gap-3 mt-3">
            <button onClick={() => addContentBlock("heading")} className="text-blue-600 hover:text-blue-800">
              + Heading
            </button>
            <button onClick={() => addContentBlock("paragraph")} className="text-blue-600 hover:text-blue-800">
              + Paragraph
            </button>
            <button onClick={() => addContentBlock("image")} className="text-blue-600 hover:text-blue-800">
              + Image
            </button>
            <button onClick={() => addContentBlock("list")} className="text-blue-600 hover:text-blue-800">
              + List
            </button>
          </div>
        </div>

        <button
            onClick={handleSave}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
        >
          Save
        </button>
      </div>
  );
}
