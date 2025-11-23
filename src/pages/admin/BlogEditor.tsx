import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase.ts";
import type { Blog } from "../../models/Blog.ts";
import type { ContentBlock } from "../../models/ContentBlock.ts";
import type { LocalizedText } from "../../models/LocalizedText.ts";
import ImageInputBlock from "../../components/ImageInputBlock.tsx";
import { useFetchData } from "../../hooks/useFetchData.ts";
import RelationSelect from "../../components/RelationSelect.tsx";
import {SyncedRelationSelect} from "../../components/SyncedRelationSelect.tsx";
import type {Service} from "../../models/Service.ts";
import type {Subservice} from "../../models/Subservice.ts";
import type {Special} from "../../models/Special.ts";

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyBlog: Blog = {
    title: {},
    subtitle: {},
    headerTitle: {},
    slug: "",
    content: [],
    mainImage: "",
    serviceIds: [],
    subserviceIds: [],
    specials: [],
  };

  const [blog, setBlog] = useState<Blog>(emptyBlog);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Загружаем данные из Firebase
  const { data, loading } = useFetchData(["services", "subservices", "specials"]);
  const services = data["services"] || [];
  const subservices = data["subservices"] || [];
  const specials = data["specials"] || [];

  useEffect(() => {
    if (id) {
      get(ref(db, `blogs/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setBlog(snapshot.val());
      });
    }
  }, [id]);

  const handleLocalizedChange = (field: keyof Blog, lang: string, value: string) => {
    setBlog((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors: { [key in keyof Blog]?: string } = {};
    const requiredFields: (keyof Blog)[] = ["title", "subtitle", "slug"];
    requiredFields.forEach((field) => {
      const value = blog[field];
      if (typeof value === "string") {
        if (!value.trim()) newErrors[field] = `${field} обязателен!`;
      } else if (typeof value === "object") {
        if (!Object.values(value || {}).some((v) => (typeof v === "string" ? v.trim() : false))) {
          newErrors[field] = `${field} хотя бы на одном языке обязателен!`;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    if (id) {
      await update(ref(db, `blogs/${id}`), blog);
    } else {
      const newRef = push(ref(db, "blogs"));
      await set(newRef, { ...blog, id: newRef.key });
    }
    navigate("/admin/blogs");
  };

  // ===== Твоя оригинальная логика управления блоками =====
  const moveContentBlock = (index: number, direction: "up" | "down", parentIndex?: number) => {
    const updated = [...(blog.content || [])];
    const swap = (arr: any[], i1: number, i2: number) => {
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    };

    if (typeof parentIndex === "number") {
      const children = [...(updated[parentIndex].children || [])];
      if (direction === "up" && index > 0) swap(children, index, index - 1);
      if (direction === "down" && index < children.length - 1) swap(children, index, index + 1);
      updated[parentIndex].children = children;
    } else {
      if (direction === "up" && index > 0) swap(updated, index, index - 1);
      if (direction === "down" && index < updated.length - 1) swap(updated, index, index + 1);
    }

    setBlog({ ...blog, content: updated });
  };

  const addContentBlock = (type: "paragraph" | "image" | "heading" | "list", parentIndex?: number) => {
    const newBlock: ContentBlock = {
      type,
      content: {},
      children: [],
      align: "left",
      ...(type === "image" ? { media: "https://via.placeholder.com/400x200?text=Image" } : {}),
    };

    const updated = [...(blog.content || [])];
    if (typeof parentIndex === "number") {
      if (!updated[parentIndex].children) updated[parentIndex].children = [];
      updated[parentIndex].children!.push(newBlock);
    } else {
      updated.push(newBlock);
    }

    setBlog({ ...blog, content: updated });
  };

  const removeContentBlock = (index: number, parentIndex?: number) => {
    const updated = [...(blog.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children?.splice(index, 1);
    } else {
      updated.splice(index, 1);
    }
    setBlog({ ...blog, content: updated });
  };

  const handleBlockChange = (index: number, lang: string, value: string, parentIndex?: number) => {
    const updated = [...(blog.content || [])];
    if (typeof parentIndex === "number") {
      const parent = updated[parentIndex];
      parent.children![index] = { ...parent.children![index], content: { ...(parent.children![index].content || {}), [lang]: value } };
    } else {
      updated[index] = { ...updated[index], content: { ...(updated[index].content || {}), [lang]: value } };
    }
    setBlog({ ...blog, content: updated });
  };

  const handleAlignChange = (index: number, align: "left" | "center" | "right", parentIndex?: number) => {
    const updated = [...(blog.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children![index].align = align;
    } else {
      updated[index].align = align;
    }
    setBlog({ ...blog, content: updated });
  };

  const renderBlockPreview = (block: ContentBlock, index: number) => {
    const textAlign = block.align as "left" | "center" | "right";
    return (
        <div key={index} className={`text-${textAlign} my-2`}>
          {block.type === "image" ? (
              <img src={block.media} alt="Content" className="max-w-full rounded-lg" />
          ) : (
              <div className="space-y-2 border p-2 rounded-lg bg-gray-50">
                {["uk", "ru", "en", "de"].map((lang) => (
                    <div key={lang} className="mb-2 flex">
                      <strong className="capitalize mr-4">{lang}</strong>
                      {block.type === "heading" ? (
                          <h2 className="text-xl font-bold">{block.content?.[lang] || ""}</h2>
                      ) : block.type === "paragraph" ? (
                          <p>{block.content?.[lang] || ""}</p>
                      ) : block.type === "list" ? (
                          <ul className="list-disc pl-6">
                            {typeof block.content?.[lang] === "string"
                                ? block.content?.[lang].split("\n").map((item, idx) => <li key={idx}>{item}</li>)
                                : null}
                          </ul>
                      ) : null}
                    </div>
                ))}
              </div>
          )}
          {block.children?.map((child, i) => renderBlockPreview(child, i))}
        </div>
    );
  };

  const renderBlockEditor = (block: ContentBlock, index: number, parentIndex?: number) => {
    const blockNumber = parentIndex !== undefined ? `Block ${parentIndex + 1} Child ${index + 1}` : `Block ${index + 1}`;

    return (
        <div className="flex w-full" key={`${parentIndex ?? "root"}-${index}`}>
          <div className="border border-gray-300 rounded-lg p-4 my-3 bg-gray-50 w-full">
            <div className="flex justify-between items-center mb-2">
              <strong>
                {blockNumber} (type: {block.type})
              </strong>
              <div className="flex gap-2">
                <button onClick={() => moveContentBlock(index, "up", parentIndex)} className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded">⬆️</button>
                <button onClick={() => moveContentBlock(index, "down", parentIndex)} className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded">⬇️</button>
                <button onClick={() => removeContentBlock(index, parentIndex)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Удалить</button>
              </div>
            </div>

            {/* Контент */}
            {block.type === "image" ? (
                <ImageInputBlock
                    image={block.media || ""}
                    onChange={(value) => {
                      const updated = [...(blog.content || [])];
                      if (typeof parentIndex === "number")
                        updated[parentIndex].children![index].media = value;
                      else updated[index].media = value;
                      setBlog({ ...blog, content: updated });
                    }}
                />
            ) : (
                ["uk", "ru", "en", "de"].map((lang) => (
                    <div key={lang} className="mb-3">
                      <label className="block text-sm font-medium mb-1">Content ({lang})</label>
                      <input
                          type="text"
                          placeholder={`Content (${lang})`}
                          value={block.content?.[lang] || ""}
                          onChange={(e) => handleBlockChange(index, lang, e.target.value, parentIndex)}
                          className="border rounded-lg p-2 w-full"
                      />
                    </div>
                ))
            )}
          </div>
        </div>
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">{id ? "Edit Blog" : "Create New Blog"}</h1>

        {/* Многоязычные поля */}
        {(["title", "subtitle", "headerTitle"] as (keyof Blog)[]).map((field) => (
            <div key={field} className="w-100 gap-4 mb-4 flex flex-wrap">
              {["uk", "ru", "en", "de"].map((lang) => (
                  <div key={`${field}-${lang}`} className="w-[46%]" >
                    <label className="capitalize">{field} ({lang})</label>
                    <input
                        type="text"
                        value={(blog[field] as LocalizedText)?.[lang] || ""}
                        onChange={(e) => handleLocalizedChange(field, lang, e.target.value)}
                        className={`border rounded-lg w-full p-2 ${errors[field] ? "border-red-600" : ""}`}
                    />
                    {errors[field] && <p className="text-red-600 text-sm mt-1">{errors[field]}</p>}
                  </div>
              ))}
            </div>
        ))}

        {/* Slug */}
        <div className="flex flex-col mb-4">
          <label>Slug</label>
          <input
              type="text"
              value={blog.slug}
              onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
              className={`border rounded-lg p-2 ${errors.slug ? "border-red-600" : ""}`}
          />
          {errors.slug && <p className="text-red-600 text-sm mt-1">{errors.slug}</p>}
        </div>

        {/* Main image */}
        <div className="flex flex-col mb-4 gap-2">
          <label className="font-medium">Main Image</label>
          {blog.mainImage && <img src={blog.mainImage} alt="Main" className="mb-2 max-w-xs rounded-lg border border-gray-200" />}
          <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => setBlog((prev) => ({ ...prev, mainImage: ev.target?.result as string }));
                reader.readAsDataURL(file);
              }}
              className="border rounded-lg p-2"
          />
        </div>

        {/* RelationSelect вместо массивов */}
        <div className="mt-6 space-y-4">
          {/* 🔹 Services (Предполагаем, что это связь "многие ко многим" и serviceIds - это массив) */}
          <SyncedRelationSelect<Service>
              label="Services"
              value={blog.serviceIds || []} // ⭐️ ИСПРАВЛЕНИЕ: Безопасное значение по умолчанию
              options={services || []} // ⭐️ ИСПРАВЛЕНИЕ: Безопасное значение по умолчанию
              getLabel={(o) => o.title?.uk || "Untitled Service"}
              getValue={(o) => o.id || ""}
              firebasePath="services"
              parentId={blog.id}
              parentFieldName="blogs" // Blogs связан через массив 'blogs' в Service
              syncType="none" // Одностороннее связывание (Service не хранит blogIds)
              onChange={(v) => setBlog({ ...blog, serviceIds: v as string[] })}
          />

          {/* 🔹 Subservices */}
          <SyncedRelationSelect<Subservice>
              label="Subservices"
              multiple
              value={blog.subserviceIds || []} // ⭐️ ИСПРАВЛЕНИЕ: Безопасное значение по умолчанию
              options={subservices || []} // ⭐️ ИСПРАВЛЕНИЕ: Безопасное значение по умолчанию
              getLabel={(o) => o.title?.uk || "Untitled Subservice"}
              getValue={(o) => o.id || ""}
              firebasePath="subservices"
              parentId={blog.id}
              parentFieldName="blogs" // Blogs связан через массив 'blogs' в Subservice
              syncType="none" // Одностороннее связывание (Subservice не хранит blogIds)
              onChange={(v) => setBlog({ ...blog, subserviceIds: v as string[] })}
          />

          {/* 🔹 Specials */}
          <SyncedRelationSelect<Special>
              label="Specials"
              multiple
              value={blog.specials || []} // ⭐️ ИСПРАВЛЕНИЕ: Безопасное значение по умолчанию
              options={specials || []} // ⭐️ ИСПРАВЛЕНИЕ: Безопасное значение по умолчанию
              getLabel={(o) => o.title?.uk || "Untitled Special"}
              getValue={(o) => o.id || ""}
              firebasePath="specials"
              parentId={blog.id}
              parentFieldName="blogs" // Blogs связан через массив 'blogs' в Special
              syncType="none" // Одностороннее связывание (Special не хранит blogIds)
              onChange={(v) => setBlog({ ...blog, specials: v as string[] })}
          />
        </div>

        {/* Контент-блоки */}
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-2">Content Blocks</h2>
            {blog.content?.map((block, i) => renderBlockEditor(block, i))}
            <div className="flex gap-3 mt-3">
              {["heading", "paragraph", "image", "list"].map((type) => (
                  <button key={type} onClick={() => addContentBlock(type as any)} className="text-blue-600">
                    + {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
              ))}
            </div>
          </div>

          <div className="w-1/2 border border-gray-300 rounded-lg p-4 bg-white overflow-auto">
            <h2 className="text-xl font-semibold mb-2">Preview</h2>
            <div className="space-y-4">
              {blog.mainImage && <img src={blog.mainImage} alt="Main" className="max-w-full rounded-lg" />}
              {["uk", "ru", "en", "de"].map(lang => (
                  <div key={lang}>
                    <h1 className="text-2xl font-bold">{blog.title?.[lang] || ""}</h1>
                    <h2 className="text-xl">{blog.subtitle?.[lang] || ""}</h2>
                    <h3 className="text-lg">{blog.headerTitle?.[lang] || ""}</h3>
                  </div>
              ))}
              {blog.content?.map((block, i) => renderBlockPreview(block, i))}
            </div>
          </div>
        </div>

        <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">
          Save
        </button>
      </div>
  );
}
