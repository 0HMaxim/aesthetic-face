import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, get } from "firebase/database";
import { db } from "../../firebase";

// Models
import type { Blog } from "../../models/Blog";
import type { Service } from "../../models/Service";
import type { LocalizedText } from "../../models/LocalizedText";
import type { ContentBlock } from "../../models/ContentBlock";
import type { PriceModel } from "../../models/Price";
import type { Special } from "../../models/Special";
import type { Employee } from "../../models/Employee.ts";

// Components
import ImageInputBlock from "../../components/ImageInputBlock.tsx";
import { useFetchData } from "../../hooks/useFetchData.ts";
import { SyncedRelationSelect } from "../../components/SyncedRelationSelect.tsx";

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyBlog: Blog = {
    title: {},
    subtitle: {},
    headerTitle: {},
    slug: "",
    mainImage: "",
    content: [],
    services: [],
    specials: [],
    prices: [],
    employees: [],
  };

  const [blog, setBlog] = useState<Blog>(emptyBlog);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { data: relatedData, loading } = useFetchData([
    "services",
    "prices",
    "employees",
    "specials",
  ]);

  useEffect(() => {
    if (id && id !== "new") {
      get(ref(db, `blogs/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setBlog({ ...emptyBlog, ...snapshot.val(), id });
        }
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

  const addContentBlock = (type: "paragraph" | "image" | "heading" | "list", parentIndex?: number) => {
    const newBlock: ContentBlock = {
      type,
      content: {},
      align: "left",
      ...(type === "image" ? { media: "", widthPercent: 100 } : {}),
    };

    const updated = [...(blog.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children = [...(updated[parentIndex].children || []), newBlock];
    } else {
      updated.push(newBlock);
    }
    setBlog({ ...blog, content: updated });
  };

  const handleBlockChange = (index: number, lang: string, value: string, parentIndex?: number) => {
    const updated = [...(blog.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children![index].content = { ...updated[parentIndex].children![index].content, [lang]: value };
    } else {
      updated[index].content = { ...updated[index].content, [lang]: value };
    }
    setBlog({ ...blog, content: updated });
  };

  const moveContentBlock = (index: number, direction: "up" | "down", parentIndex?: number) => {
    const swap = (arr: any[], i1: number, i2: number) => { [arr[i1], arr[i2]] = [arr[i2], arr[i1]]; };
    const updated = [...(blog.content || [])];
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

  const removeContentBlock = (index: number, parentIndex?: number) => {
    const updated = [...(blog.content || [])];
    if (typeof parentIndex === "number") updated[parentIndex].children?.splice(index, 1);
    else updated.splice(index, 1);
    setBlog({ ...blog, content: updated });
  };

  const renderBlockEditor = (block: ContentBlock, index: number, parentIndex?: number) => {
    const blockLabel = parentIndex !== undefined ? `Child ${index + 1}` : `Block ${index + 1}`;
    return (
        <div className="w-full flex" key={`${parentIndex ?? "root"}-${index}`}>
          <div className="border border-gray-100 rounded-[32px] p-6 my-3 bg-white shadow-sm w-full transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">{blockLabel} — {block.type}</span>
              <div className="flex gap-2">
                <button onClick={() => moveContentBlock(index, "up", parentIndex)} className="p-2 hover:bg-gray-100 rounded-xl transition">↑</button>
                <button onClick={() => moveContentBlock(index, "down", parentIndex)} className="p-2 hover:bg-gray-100 rounded-xl transition">↓</button>
                <button onClick={() => removeContentBlock(index, parentIndex)} className="text-red-400 hover:text-red-600 font-bold text-[10px] uppercase ml-2 tracking-widest">Delete</button>
              </div>
            </div>

            {block.type === "image" ? (
                <div className="space-y-3 max-w-sm mx-auto">
                  <ImageInputBlock
                      image={block.media || ""}
                      onChange={(url) => {
                        const updated = [...(blog.content || [])];
                        if (typeof parentIndex === "number") updated[parentIndex].children![index].media = url;
                        else updated[index].media = url;
                        setBlog({ ...blog, content: updated });
                      }}
                  />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["uk", "ru", "en", "de"].map(l => (
                      <div key={l}>
                        <div className="text-[9px] font-black text-gray-300 mb-1 ml-1 uppercase">{l}</div>
                        {block.type === "list" || block.type === "paragraph" ? (
                            <textarea
                                className="w-full border border-gray-100 rounded-2xl p-4 text-sm h-32 focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none shadow-inner bg-gray-50/30"
                                value={(block.content?.[l] as string) || ""}
                                onChange={(e) => handleBlockChange(index, l, e.target.value, parentIndex)}
                                placeholder={`Content in ${l}...`}
                            />
                        ) : (
                            <input
                                type="text"
                                className="w-full border border-gray-100 rounded-2xl p-4 text-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all shadow-inner bg-gray-50/30 font-bold"
                                value={(block.content?.[l] as string) || ""}
                                onChange={(e) => handleBlockChange(index, l, e.target.value, parentIndex)}
                                placeholder={`Heading in ${l}...`}
                            />
                        )}
                      </div>
                  ))}
                </div>
            )}

            {block.children?.map((child, i) => renderBlockEditor(child, i, index))}

            {block.type === "image" && (
                <div className="flex gap-4 mt-6 border-t border-gray-50 pt-4">
                  {["heading", "paragraph", "list"].map(t => (
                      <button key={t} onClick={() => addContentBlock(t as any, index)} className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:text-blue-700 transition px-4 py-2 bg-blue-50 rounded-xl">
                        + Add {t} caption
                      </button>
                  ))}
                </div>
            )}
          </div>
        </div>
    );
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Безопасная проверка LocalizedText
    const isAnyLanguageFilled = (textObj: LocalizedText | undefined) => {
      if (!textObj) return false;
      return Object.values(textObj).some(v => {
        if (typeof v === 'string') return v.trim().length > 0;
        if (Array.isArray(v)) return v.join('').trim().length > 0;
        return false;
      });
    };

    if (!isAnyLanguageFilled(blog.title)) newErrors.title = "Title is required";
    if (!blog.slug?.trim()) newErrors.slug = "Slug is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    const blogId = id === "new" || !id ? push(ref(db, "blogs")).key : id;
    if (!blogId) return;
    await set(ref(db, `blogs/${blogId}`), { ...blog, id: blogId });
    navigate("/admin/blogs");
  };

  if (loading) return <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">Loading Blog Data...</div>;

  return (
      <div className="p-6 max-w-6xl mx-auto bg-white shadow-2xl rounded-[40px] my-10 border border-gray-100">
        {/* Top Action Bar */}
        <div className="flex justify-between items-center mb-12 border-b border-gray-50 pb-8">
          <div>
            <h1 className="text-4xl font-black text-gray-800 tracking-tighter uppercase">{id === "new" ? "New Blog" : "Edit Blog"}</h1>
            <p className="text-gray-400 text-sm font-medium tracking-tight mt-1">Design your story and link it with the ecosystem</p>
          </div>
          <div className="border-t border-gray-50 pt-8 flex justify-end items-center gap-6">
            <button onClick={() => navigate("/admin/employees")} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition">
              Discard Changes
            </button>
            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl transition-all font-bold shadow-lg shadow-blue-100 active:scale-95">
              Save Blog
            </button>
          </div>
        </div>

        {/* Basic Fields */}
        <div className="space-y-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50/30 p-8 rounded-[32px] border border-gray-100 space-y-4">
              <label className="block font-black text-gray-400 uppercase text-[10px] tracking-widest ml-1">Slug (URL Path)</label>
              <input
                  className={`w-full border rounded-2xl p-4 shadow-inner outline-none focus:ring-4 focus:ring-blue-50 transition font-mono text-sm ${errors.slug ? "border-red-300 bg-red-50/30" : "border-gray-100 bg-white"}`}
                  value={blog.slug}
                  placeholder="e.g. how-to-care-about-skin"
                  onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
              />
              {errors.slug && <p className="text-red-500 text-[9px] font-black uppercase ml-2">{errors.slug}</p>}
            </div>
            <div className="bg-gray-50/30 p-8 rounded-[32px] border border-gray-100 text-center">
              <label className="block font-black text-gray-400 mb-4 uppercase text-[10px] tracking-widest">Main Hero Image</label>
              <ImageInputBlock
                  image={blog.mainImage || ""}
                  onChange={(url) => setBlog({ ...blog, mainImage: url })}
              />
            </div>
          </div>

          {(["title", "subtitle", "headerTitle"] as const).map(field => (
              <div key={field} className="p-8 border border-gray-100 rounded-[32px] bg-white shadow-sm">
                <label className="block font-black text-gray-400 mb-5 uppercase text-[10px] tracking-[0.3em] ml-1">{field}</label>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {["uk", "ru", "en", "de"].map(lang => (
                      <div key={lang}>
                        <div className="text-[9px] font-black text-gray-300 mb-1 ml-2 uppercase">{lang}</div>
                        <input
                            className={`w-full border rounded-2xl p-4 text-xs font-bold shadow-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all ${errors[field] ? "border-red-200" : "border-gray-50 hover:border-gray-200"}`}
                            value={(blog[field] as LocalizedText)?.[lang] || ""}
                            onChange={(e) => handleLocalizedChange(field, lang, e.target.value)}
                        />
                      </div>
                  ))}
                </div>
                {errors[field] && <p className="text-red-500 text-[10px] mt-3 font-black uppercase ml-2">{errors[field]}</p>}
              </div>
          ))}
        </div>

        {/* Ecosystem Section */}
        <div className="bg-blue-900 p-10 rounded-[40px] mb-12 shadow-2xl shadow-blue-200">
          <h2 className="text-white text-xs font-black mb-8 flex items-center gap-4 uppercase tracking-[0.4em]">
            <span className="w-12 h-[1px] bg-blue-400"></span>
            Ecosystem Integration
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <SyncedRelationSelect<Service>
                label="Related Services"
                value={blog.services || []}
                options={(relatedData.services || []) as Service[]}
                getLabel={(o) => String(o.title?.uk || "Untitled Service")}
                getValue={(o) => o.id!}
                onChange={(v) => setBlog({ ...blog, services: v })}
                firebasePath="services"
                parentId={blog.id}
                parentFieldName="blogs"
                syncType="array"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SyncedRelationSelect<PriceModel>
                  label="Linked Prices"
                  value={blog.prices || []}
                  options={(relatedData.prices || []) as PriceModel[]}
                  getLabel={(o) => String(o.category?.uk || "Untitled Price")}
                  getValue={(o) => o.id!}
                  onChange={(v) => setBlog({ ...blog, prices: v })}
                  firebasePath="prices"
                  parentId={blog.id}
                  parentFieldName="blogIds"
                  syncType="array"
              />
              <SyncedRelationSelect<Special>
                  label="Current Offers"
                  value={blog.specials || []}
                  options={(relatedData.specials || []) as Special[]}
                  getLabel={(o) => String(o.title?.uk || "Untitled Special")}
                  getValue={(o) => o.id!}
                  onChange={(v) => setBlog({ ...blog, specials: v })}
                  firebasePath="specials"
                  parentId={blog.id}
                  parentFieldName="blogIds"
                  syncType="array"
              />
            </div>
            <SyncedRelationSelect<Employee>
                label="Author / Experts"
                multiple
                value={blog.employees || []}
                options={(relatedData.employees || []) as Employee[]}
                getLabel={(o) => String(o.fullName?.uk || "Unnamed Employee")}
                getValue={(o) => o.id!}
                onChange={(v) => setBlog({ ...blog, employees: v })}
                firebasePath="employees"
                parentId={blog.id}
                syncType="none"
            />
          </div>
        </div>

        {/* Content Builder */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-10 px-4">
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">Blog Builder</h2>
            <div className="flex gap-2">
              {["heading", "paragraph", "image", "list"].map(type => (
                  <button key={type} onClick={() => addContentBlock(type as any)}
                          className="bg-gray-100 hover:bg-black hover:text-white px-5 py-2 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest text-gray-500">
                    + {type}
                  </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {blog.content?.length ? blog.content?.map((block, i) => renderBlockEditor(block, i)) : (
                <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-[40px] text-gray-300 font-bold uppercase tracking-widest text-xs">
                  The canvas is empty. Start building your story.
                </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-50 pt-10 flex justify-end items-center gap-8">
          <button onClick={() => navigate("/admin/blogs")} className="text-gray-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-gray-900 transition">
            Discard changes
          </button>
          <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-20 py-6 rounded-[2.5rem] transition-all font-black shadow-2xl shadow-blue-200 active:scale-95 uppercase tracking-[0.2em] text-sm">
            Publish Post
          </button>
        </div>
      </div>
  );
}