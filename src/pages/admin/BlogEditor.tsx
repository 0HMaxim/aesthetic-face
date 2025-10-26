import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase.ts";
import type { Blog } from "../../models/Blog.ts";
import type { ContentBlock } from "../../models/ContentBlock.ts";
import type { LocalizedText } from "../../models/LocalizedText.ts";

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
    serviceId: [],
    subservicesId: [],
    specials: [],
  };

  const [blog, setBlog] = useState<Blog>(emptyBlog);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleArrayChange = (field: keyof Blog, index: number, value: string) => {
    const arr = blog[field] || [];
    arr[index] = value;
    setBlog({ ...blog, [field]: arr });
  };

  const addArrayItem = (field: keyof Blog) => {
    const arr = blog[field] || [];
    setBlog({ ...blog, [field]: [...arr, ""] });
  };

  const removeArrayItem = (field: keyof Blog, index: number) => {
    const arr = blog[field] || [];
    arr.splice(index, 1);
    setBlog({ ...blog, [field]: [...arr] });
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

  // --- Контент-блоки ---
  const addContentBlock = (
      type: "paragraph" | "image" | "heading" | "list",
      parentIndex?: number
  ) => {
    const newBlock: ContentBlock = {
      id: crypto.randomUUID(),
      type,
      content: {},
      children: [],
      align: "left",
      ...(type === "image" ? { media: "https://via.placeholder.com/400x200?text=Image" } : {}),
    };



    // НЕ ЗАПОЛНЯЕМ текст тестовыми данными
    // ["uk", "ru", "en", "de"].forEach((lang) => {
    //   if (type !== "image") newBlock.content![lang] = exampleText[type as keyof typeof exampleText];
    // });

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
      const children = [...(parent.children || [])];
      children[index] = {
        ...children[index],
        content: { ...(children[index].content || {}), [lang]: value },
      };
      parent.children = children;
      updated[parentIndex] = parent;
    } else {
      updated[index] = {
        ...updated[index],
        content: { ...(updated[index].content || {}), [lang]: value },
      };
    }
    setBlog({ ...blog, content: updated });
  };

  const handleAlignChange = (index: number, align: string, parentIndex?: number) => {
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
                      <strong className="capitalize mr-4 ">{lang}</strong>
                      {block.type === "heading" ? (
                          <h2 className="text-xl font-bold">{block.content?.[lang] || ""}</h2>
                      ) : block.type === "paragraph" ? (
                          <p>{block.content?.[lang] || ""}</p>
                      ) : block.type === "list" ? (
                          <ul className="list-disc pl-6">
                            {(block.content?.[lang] || "").split("\n").map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                          </ul>
                      ) : null}
                    </div>
                ))}
              </div>
          )}

          {/* Дети */}
          {block.children?.map((child, i) => renderBlockPreview(block.children?.map))}
        </div>
    );
  };





  const renderBlockEditor = (block: ContentBlock, index: number, parentIndex?: number) => {
    return (

        <div className="w-100 flex">
        <div key={`${parentIndex ?? "root"}-${index}`} className="border border-gray-300 rounded-lg p-4 my-3 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <strong>{block.type} {parentIndex !== undefined ? `(Child)` : ""}</strong>
            <button onClick={() => removeContentBlock(index, parentIndex)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Удалить</button>
          </div>

          {/* Выравнивание */}
          <div className="flex gap-2 mb-2">
            {["left", "center", "right"].map(a => (
                <button key={a} className={`px-2 py-1 border rounded ${block.align === a ? "bg-blue-600 text-white" : ""}`}
                        onClick={() => handleAlignChange(index, a, parentIndex)}>{a}</button>
            ))}
          </div>

          {block.type === "image" ? (
              <div className="flex flex-col gap-2">
                <input type="file" accept="image/*" onChange={(e) => {
                  const file = e.target.files?.[0]; if (!file) return;
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    const updated = [...(blog.content || [])];
                    if (typeof parentIndex === "number") updated[parentIndex].children![index].media = ev.target?.result as string;
                    else updated[index].media = ev.target?.result as string;
                    setBlog({ ...blog, content: updated });
                  };
                  reader.readAsDataURL(file);
                }} className="border rounded-lg p-2" />
                <input type="text" placeholder="URL или CSS фон" value={block.media || ""} onChange={(e) => {
                  const updated = [...(blog.content || [])];
                  if (typeof parentIndex === "number") updated[parentIndex].children![index].media = e.target.value;
                  else updated[index].media = e.target.value;
                  setBlog({ ...blog, content: updated });
                }} className="border rounded-lg p-2" />
              </div>
          ) : (
              ["uk", "ru", "en", "de"].map(lang => (
                  <input key={lang} type="text" placeholder={`Content (${lang})`} value={block.content?.[lang] || ""}
                         onChange={(e) => handleBlockChange(index, lang, e.target.value, parentIndex)}
                         className="border rounded-lg p-2 mb-2 w-full" />
              ))
          )}



          {block.type === "list" && (
              <div className="flex flex-col gap-2">
                {["uk", "ru", "en", "de"].map(lang => (
                    <div key={lang} className="flex flex-col gap-1">
                      <label>{lang}</label>
                      <textarea
                          value={block.content?.[lang] || ""}
                          onChange={(e) => handleBlockChange(index, lang, e.target.value, parentIndex)}
                          className="border rounded-lg p-2 w-full h-24"
                      />
                      <button
                          type="button"
                          onClick={() => {
                            const updated = [...(blog.content || [])]; // копируем массив
                            const target = typeof parentIndex === "number"
                                ? { ...updated[parentIndex], children: [...(updated[parentIndex].children || [])] }
                                : updated[index];

                            if (typeof parentIndex === "number") {
                              target.children![index] = {
                                ...target.children![index],
                                content: {
                                  ...target.children![index].content,
                                  [lang]: (target.children![index].content?.[lang] || "") + "\n"
                                }
                              };
                              updated[parentIndex] = target;
                            } else {
                              updated[index] = {
                                ...target,
                                content: { ...target.content, [lang]: (target.content?.[lang] || "") + "\n" }
                              };
                            }

                            setBlog({ ...blog, content: updated });
                          }}
                          className="text-blue-600 w-max"
                      >
                        + New Item
                      </button>
                    </div>
                ))}
              </div>
          )}


          {/* Добавление детей */}
          <div className="flex gap-2 mt-2">
            <button onClick={() => addContentBlock("heading", index)} className="text-blue-600">+ Heading Child</button>
            <button onClick={() => addContentBlock("paragraph", index)} className="text-blue-600">+ Paragraph Child</button>
            <button onClick={() => addContentBlock("image", index)} className="text-blue-600">+ Image Child</button>
            <button onClick={() => addContentBlock("list", index)} className="text-blue-600">+ List Child</button>
          </div>

          {block.children && block.children.length > 0 && (
              <div className="ml-6 mt-3 border-l-2 border-gray-200 pl-3">
                {block.children.map((child, i) => renderBlockEditor(child, i, index))}
              </div>
          )}
        </div>




      </div>


    );
  };

  return (
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">{id ? "Edit Blog" : "Create New Blog"}</h1>

        {/* Title / Subtitle / Header */}
        {["title", "subtitle", "headerTitle"].map((field: keyof Blog) => (
            <div key={field} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {["uk", "ru", "en", "de"].map(lang => (
                  <div key={`${field}-${lang}`} className="flex flex-col">
                    <label className="capitalize">{field} ({lang})</label>
                    <input type="text" value={(blog[field] as LocalizedText)?.[lang] || ""}
                           onChange={(e) => handleLocalizedChange(field, lang, e.target.value)}
                           className={`border rounded-lg p-2 ${errors[field] ? "border-red-600" : ""}`} />
                    {errors[field] && <p className="text-red-600 text-sm mt-1">{errors[field]}</p>}
                  </div>
              ))}
            </div>
        ))}

        {/* Slug */}
        <div className="flex flex-col mb-4">
          <label>Slug</label>
          <input type="text" value={blog.slug} onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
                 className={`border rounded-lg p-2 ${errors.slug ? "border-red-600" : ""}`} />
          {errors.slug && <p className="text-red-600 text-sm mt-1">{errors.slug}</p>}
        </div>

        {/* Main image */}
        <div className="flex flex-col mb-4">
          <label>Main Image</label>
          {blog.mainImage && <img src={blog.mainImage} alt="Main" className="mb-2 max-w-xs rounded-lg" />}
          <input type="file" accept="image/*" onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (ev) => setBlog({ ...blog, mainImage: ev.target?.result as string });
              reader.readAsDataURL(file);
            }
          }} className="border rounded-lg p-2" />
        </div>

        {/* Arrays: serviceId, subservicesId, specials */}
        {["serviceId", "subservicesId", "specials"].map((field: keyof Blog) => (
            <div key={field} className="mb-4">
              <label className="capitalize">{field}</label>
              {(blog[field] || []).map((item, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" value={item} onChange={(e) => handleArrayChange(field, idx, e.target.value)}
                           className="border rounded-lg p-2 flex-1" />
                    <button type="button" onClick={() => removeArrayItem(field, idx)} className="bg-red-500 text-white px-2 rounded">-</button>
                  </div>
              ))}
              <button type="button" onClick={() => addArrayItem(field)} className="text-blue-600">+ Add</button>
            </div>
        ))}

        {/* Content Blocks */}
        <div className="mb-4">
          <div className="w-full flex">
            <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-2">Content Blocks</h2>
            {blog.content?.map((block, i) => renderBlockEditor(block, i))}
            <div className="flex gap-3 mt-3">
              <button onClick={() => addContentBlock("heading")} className="text-blue-600">+ Heading</button>
              <button onClick={() => addContentBlock("paragraph")} className="text-blue-600">+ Paragraph</button>
              <button onClick={() => addContentBlock("image")} className="text-blue-600">+ Image</button>
              <button onClick={() => addContentBlock("list")} className="text-blue-600">+ List</button>
            </div>

          </div>


          <div className="border border-gray-300 rounded-lg p-4 bg-white overflow-auto w-1/2">
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

        </div>

        <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">Save</button>
      </div>
  );
}
