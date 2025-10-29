import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase.ts";
import type { Blog } from "../../models/Blog.ts";
import type { ContentBlock } from "../../models/ContentBlock.ts";
import type { LocalizedText } from "../../models/LocalizedText.ts";
import ImageInputBlock from "../../components/ImageInputBlock.tsx";

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
    const arr = Array.isArray(blog[field]) ? [...(blog[field] as string[])] : [];
    arr[index] = value;
    setBlog({ ...blog, [field]: arr });
  };

  const addArrayItem = (field: keyof Blog) => {
    const arr = Array.isArray(blog[field]) ? [...(blog[field] as string[])] : [];
    arr.push("");
    setBlog({ ...blog, [field]: arr });
  };

  const removeArrayItem = (field: keyof Blog, index: number) => {
    const arr = Array.isArray(blog[field]) ? [...(blog[field] as string[])] : [];
    arr.splice(index, 1);
    setBlog({ ...blog, [field]: arr });
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


  const moveContentBlock = (index: number, direction: "up" | "down", parentIndex?: number) => {
    const updated = [...(blog.content || [])];

    const swap = (arr: any[], i1: number, i2: number) => {
      const temp = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = temp;
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



  // --- Контент-блоки ---
  const addContentBlock = (
      type: "paragraph" | "image" | "heading" | "list",
      parentIndex?: number
  ) => {
    const newBlock: ContentBlock = {
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

  const handleAlignChange = (
      index: number,
      align: "left" | "center" | "right",
      parentIndex?: number
  ) => {
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
                            {typeof block.content?.[lang] === "string"
                                ? block.content?.[lang].split("\n").map((item, idx) => <li key={idx}>{item}</li>)
                                : null}
                          </ul>
                      ) : null}
                    </div>
                ))}
              </div>
          )}

          {/* Дети */}
          {block.children?.map((child, i) => renderBlockPreview(child, i))}
        </div>
    );
  };



  const renderBlockEditor = (block: ContentBlock, index: number, parentIndex?: number) => {
    const blockNumber = parentIndex !== undefined
        ? `Content Block ${parentIndex + 1} Child ${index + 1}`
        : `Content Block ${index + 1}`;

    return (
        <div className="w-100 flex" key={`${parentIndex ?? "root"}-${index}`}>
          <div className="border border-gray-300 rounded-lg p-4 my-3 bg-gray-50 w-full">
            <div className="flex justify-between items-center mb-2">
              <strong>
                {blockNumber} (type: {block.type})
              </strong>
              <div className="flex justify-between items-center mb-2">
                <strong>
                  {blockNumber} (type: {block.type})
                </strong>
                <div className="flex justify-between items-center mb-2">
                  <strong>
                    {blockNumber} (type: {block.type})
                  </strong>
                  <div className="flex gap-2">
                    <button
                        onClick={() => moveContentBlock(index, "up", parentIndex)}
                        className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                        title="Move up"
                    >
                      ⬆️
                    </button>
                    <button
                        onClick={() => moveContentBlock(index, "down", parentIndex)}
                        className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                        title="Move down"
                    >
                      ⬇️
                    </button>
                    <button
                        onClick={() => removeContentBlock(index, parentIndex)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Удалить
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Выравнивание */}
            <div className="flex gap-2 mb-2">
              {["left", "center", "right"].map(a => (
                  <button
                      key={a}
                      className={`px-2 py-1 border rounded ${block.align === a ? "bg-blue-600 text-white" : ""}`}
                      onClick={() => handleAlignChange(index, a as "left" | "center" | "right", parentIndex)}
                  >
                    {a}
                  </button>
              ))}
            </div>

            {/* Контент */}
            {block.type === "image" ? (
                <div className="flex flex-col gap-2">
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

                  {/* опционально: ширина картинки */}
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1">
                      <input
                          type="checkbox"
                          checked={block.customWidth || false}
                          onChange={(e) => {
                            const updated = [...(blog.content || [])];
                            if (typeof parentIndex === "number")
                              updated[parentIndex].children![index].customWidth = e.target.checked;
                            else updated[index].customWidth = e.target.checked;
                            setBlog({ ...blog, content: updated });
                          }}
                      />
                      Custom Width
                    </label>

                    <input
                        type="number"
                        min={10}
                        max={90}
                        value={block.widthPercent || 40}
                        disabled={!block.customWidth}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          const updated = [...(blog.content || [])];
                          if (typeof parentIndex === "number")
                            updated[parentIndex].children![index].widthPercent = value;
                          else updated[index].widthPercent = value;
                          setBlog({ ...blog, content: updated });
                        }}
                        className="border rounded-lg p-2 w-20"
                    />
                    <span>%</span>
                  </div>
                </div>
            ) : (
                ["uk", "ru", "en", "de"].map((lang) => (
                    <div key={lang} className="mb-3">
                      <label className="block text-sm font-medium mb-1">
                        Content ({lang})
                      </label>
                      {block.type === "list" ? (
                          <div className="flex gap-2 items-start">
          <textarea
              value={block.content?.[lang] || ""}
              onChange={(e) =>
                  handleBlockChange(index, lang, e.target.value, parentIndex)
              }
              className="border rounded-lg p-2 w-full h-28 font-mono text-sm"
              placeholder={`Each line = one list item`}
              style={{ whiteSpace: "pre" }}
          />
                            <button
                                type="button"
                                onClick={() => {
                                  const current = block.content?.[lang] || "";
                                  handleBlockChange(index, lang, current + "\n", parentIndex);
                                }}
                                className="bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-1 text-sm"
                                title="Add new list item"
                            >
                              ↩️
                            </button>
                          </div>
                      ) : (
                          <input
                              type="text"
                              placeholder={`Content (${lang})`}
                              value={block.content?.[lang] || ""}
                              onChange={(e) =>
                                  handleBlockChange(index, lang, e.target.value, parentIndex)
                              }
                              className="border rounded-lg p-2 w-full"
                          />
                      )}
                    </div>
                ))
            )}



            {/* Дочерние блоки */}
            {block.type === "image" && (
              <div className="flex gap-2 mt-2">
                <button onClick={() => addContentBlock("heading", index)} className="text-blue-600">+ Heading Child</button>
                <button onClick={() => addContentBlock("paragraph", index)} className="text-blue-600">+ Paragraph Child</button>
                <button onClick={() => addContentBlock("image", index)} className="text-blue-600">+ Image Child</button>
                <button onClick={() => addContentBlock("list", index)} className="text-blue-600">+ List Child</button>
              </div>
            )}

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

        {(["title", "subtitle", "headerTitle"] as (keyof Blog)[]).map((field) => (
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
        <div className="flex flex-col mb-4 gap-2">
          <label className="font-medium">Main Image</label>

          {/* превью картинки */}
          {blog.mainImage && (
              <img
                  src={blog.mainImage}
                  alt="Main"
                  className="mb-2 max-w-xs rounded-lg border border-gray-200"
              />
          )}

          {/* выбор файла */}
          <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (ev) => {
                  setBlog((prev) => ({
                    ...prev,
                    mainImage: ev.target?.result as string,
                  }));
                };
                reader.readAsDataURL(file);
              }}
              className="border rounded-lg p-2"
          />

          {/* альтернатива: вставка URL или CSS background */}
          <input
              type="text"
              placeholder="URL або CSS фон (наприклад, linear-gradient(...))"
              value={blog.mainImage || ""}
              onChange={(e) =>
                  setBlog((prev) => ({
                    ...prev,
                    mainImage: e.target.value,
                  }))
              }
              className="border rounded-lg p-2"
          />
        </div>


        {/* Arrays: serviceId, subservicesId, specials */}
        {(["serviceId", "subservicesId", "specials"] as (keyof Blog)[]).map((field) => (
            <div key={field} className="mb-4">
              <label className="capitalize">{field}</label>

              {Array.isArray(blog[field]) &&
                (blog[field] || []).map((item, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input type="text" value={item} onChange={(e) => handleArrayChange(field, idx, e.target.value)}
                             className="border rounded-lg p-2 flex-1" />
                      <button type="button" onClick={() => removeArrayItem(field, idx)} className="bg-red-500 text-white px-2 rounded">-</button>
                    </div>
                ))
              }

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
