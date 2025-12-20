import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, get } from "firebase/database";
import { db } from "../../firebase";

// Models
import type { LocalizedText } from "../../models/LocalizedText";
import type { ContentBlock } from "../../models/ContentBlock";
import type { PriceModel } from "../../models/Price.ts";
import type { Special } from "../../models/Special.ts";
import type { Service } from "../../models/Service.ts";
import type { Blog } from "../../models/Blog.ts";

// Components
import ImageInputBlock from "../../components/ImageInputBlock.tsx";
import { useFetchData } from "../../hooks/useFetchData.ts";
import { SyncedRelationSelect } from "../../components/SyncedRelationSelect.tsx";

export default function SpecialEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptySpecial: Special = {
    title: {},
    subtitle: {},
    slug: "",
    mainImage: "",
    content: [],
    prices: [],
    serviceId: [],
    blogs: [],
  };

  const [special, setSpecial] = useState<Special>(emptySpecial);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { data: relatedData, loading } = useFetchData([
    "services",
    "prices",
    "blogs",
  ]);

  const allServices = (relatedData.services || []) as Service[];
  const allBlogs = (relatedData.blogs || []) as Blog[];

  useEffect(() => {
    if (id && id !== "new") {
      get(ref(db, `specials/${id}`)).then(async (snapshot) => {
        if (snapshot.exists()) {
          const data: Special = snapshot.val();

          const pricesSnapshot = await get(ref(db, "prices"));
          const allPrices: Record<string, PriceModel> = pricesSnapshot.exists() ? pricesSnapshot.val() : {};

          const selectedPriceIds = Object.entries(allPrices)
              .filter(([_, price]) => price.specials?.includes(id!))
              .map(([priceId]) => priceId);

          setSpecial({
            ...emptySpecial,
            ...data,
            id: id,
            prices: selectedPriceIds,
          });
        }
      });
    }
  }, [id]);

  const handleLocalizedChange = (field: keyof Special, lang: string, value: string) => {
    setSpecial((prev) => ({
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
      ...(type === "image" ? { media: "https://via.placeholder.com/400x200?text=Image", widthPercent: 100 } : {}),
    };

    const updated = [...(special.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children = [...(updated[parentIndex].children || []), newBlock];
    } else {
      updated.push(newBlock);
    }
    setSpecial({ ...special, content: updated });
  };

  const handleBlockChange = (index: number, lang: string, value: string, parentIndex?: number) => {
    const updated = [...(special.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children![index].content = { ...updated[parentIndex].children![index].content, [lang]: value };
    } else {
      updated[index].content = { ...updated[index].content, [lang]: value };
    }
    setSpecial({ ...special, content: updated });
  };

  const handleAlignChange = (index: number, align: "left" | "center" | "right", parentIndex?: number) => {
    const updated = [...(special.content || [])];
    if (typeof parentIndex === "number") updated[parentIndex].children![index].align = align;
    else updated[index].align = align;
    setSpecial({ ...special, content: updated });
  };

  const moveContentBlock = (index: number, direction: "up" | "down", parentIndex?: number) => {
    const swap = (arr: any[], i1: number, i2: number) => {
      const temp = arr[i1]; arr[i1] = arr[i2]; arr[i2] = temp;
    };
    const updated = [...(special.content || [])];
    if (typeof parentIndex === "number") {
      const children = [...(updated[parentIndex].children || [])];
      if (direction === "up" && index > 0) swap(children, index, index - 1);
      if (direction === "down" && index < children.length - 1) swap(children, index, index + 1);
      updated[parentIndex].children = children;
    } else {
      if (direction === "up" && index > 0) swap(updated, index, index - 1);
      if (direction === "down" && index < updated.length - 1) swap(updated, index, index + 1);
    }
    setSpecial({ ...special, content: updated });
  };

  const removeContentBlock = (index: number, parentIndex?: number) => {
    const updated = [...(special.content || [])];
    if (typeof parentIndex === "number") updated[parentIndex].children?.splice(index, 1);
    else updated.splice(index, 1);
    setSpecial({ ...special, content: updated });
  };

  const renderBlockEditor = (block: ContentBlock, index: number, parentIndex?: number) => {
    const blockLabel = parentIndex !== undefined ? `Child ${index + 1}` : `Block ${index + 1}`;
    return (
        <div className="w-full flex" key={`${parentIndex ?? "root"}-${index}`}>
          <div className="border border-gray-200 rounded-xl p-4 my-3 bg-gray-50/50 w-full shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{blockLabel} ({block.type})</span>
              <div className="flex gap-1">
                <button onClick={() => moveContentBlock(index, "up", parentIndex)} className="p-1 hover:bg-gray-200 rounded">⬆️</button>
                <button onClick={() => moveContentBlock(index, "down", parentIndex)} className="p-1 hover:bg-gray-200 rounded">⬇️</button>
                <button onClick={() => removeContentBlock(index, parentIndex)} className="bg-red-500 text-white px-2 py-1 rounded text-[10px] ml-2 font-bold uppercase">Delete</button>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              {(["left", "center", "right"] as const).map(a => (
                  <button
                      key={a}
                      className={`px-3 py-1 text-[10px] font-bold border rounded-lg transition-all ${block.align === a ? "bg-blue-600 text-white shadow-md shadow-blue-100 border-blue-600" : "bg-white text-gray-400 border-gray-200 hover:border-blue-300"}`}
                      onClick={() => handleAlignChange(index, a, parentIndex)}
                  >
                    {a.toUpperCase()}
                  </button>
              ))}
            </div>

            {block.type === "image" ? (
                <div className="space-y-3">
                  <ImageInputBlock
                      image={block.media || ""}
                      onChange={(url) => {
                        const updated = [...(special.content || [])];
                        if (typeof parentIndex === "number") updated[parentIndex].children![index].media = url;
                        else updated[index].media = url;
                        setSpecial({ ...special, content: updated });
                      }}
                  />
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <span>Width:</span>
                    <input type="number" className="border rounded-lg p-1 w-16 text-center" value={block.widthPercent || 100}
                           onChange={(e) => {
                             const val = parseInt(e.target.value);
                             const updated = [...(special.content || [])];
                             if (typeof parentIndex === "number") updated[parentIndex].children![index].widthPercent = val;
                             else updated[index].widthPercent = val;
                             setSpecial({ ...special, content: updated });
                           }}
                    /> %
                  </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["uk", "ru", "en", "de"].map(l => (
                      <div key={l}>
                        <div className="text-[10px] font-bold text-gray-400 mb-1 ml-1 uppercase">{l}</div>
                        {block.type === "list" ? (
                            <textarea
                                className="w-full border border-gray-200 rounded-xl p-3 text-sm h-24 font-mono focus:ring-2 focus:ring-blue-50 transition outline-none"
                                value={String(block.content?.[l] || "")}
                                onChange={(e) => handleBlockChange(index, l, e.target.value, parentIndex)}
                            />
                        ) : (
                            <input
                                type="text"
                                className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-50 transition outline-none"
                                value={String(block.content?.[l] || "")}
                                onChange={(e) => handleBlockChange(index, l, e.target.value, parentIndex)}
                            />
                        )}
                      </div>
                  ))}
                </div>
            )}

            {block.children?.map((child, i) => renderBlockEditor(child, i, index))}
            {block.type === "image" && (
                <div className="flex gap-4 mt-4 border-t border-gray-100 pt-3">
                  {["heading", "paragraph", "list"].map(t => (
                      <button key={t} onClick={() => addContentBlock(t as any, index)} className="text-blue-500 text-[10px] font-black uppercase tracking-tighter hover:text-blue-700 transition">
                        + {t} child
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
    const hasTitle = Object.values(special.title || {}).some(v => typeof v === 'string' && v.trim());
    if (!hasTitle) newErrors.title = "Title is required";

    if (typeof special.slug !== 'string' || !special.slug.trim()) newErrors.slug = "Slug is required";
    if (typeof special.mainImage !== 'string' || !special.mainImage.trim()) newErrors.mainImage = "Main image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    let sId = id === "new" || !id ? push(ref(db, "specials")).key : id;
    if (!sId) return;

    const dataToSave = { ...special, id: sId };
    await set(ref(db, `specials/${sId}`), dataToSave);
    navigate("/admin/specials");
  };

  if (loading) return <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">Loading Special...</div>;

  return (
      <div className="p-6 max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl my-10 border border-gray-100">
        {/* Top Action Bar */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-50 pb-6">
          <div>
            <h1 className="text-3xl font-black text-gray-800 tracking-tight">{id && id !== "new" ? "Edit Special" : "New Special"}</h1>
            <p className="text-gray-400 text-sm font-medium">Create promotional offers and connect them with services</p>
          </div>

          <div className="border-t border-gray-50 pt-8 flex justify-end items-center gap-6">
            <button onClick={() => navigate("/admin/specials")} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition">
              Discard Changes
            </button>
            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl transition-all font-bold shadow-lg shadow-blue-100 active:scale-95">
              Save Special
            </button>
          </div>

        </div>

        {/* Main Fields Area */}
        <div className="space-y-6 mb-10">
          {(["title", "subtitle", "headerTitle"] as const).map(field => (
              <div key={field} className="p-5 border border-gray-100 rounded-3xl bg-gray-50/30 shadow-sm">
                <label className="block font-black text-gray-400 mb-3 uppercase text-[10px] tracking-[0.2em] ml-1">{field}</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["uk", "ru", "en", "de"].map(lang => (
                      <div key={lang}>
                        <div className="text-[10px] font-bold text-gray-300 mb-1 ml-2 uppercase">{lang}</div>
                        <input
                            className={`w-full border rounded-2xl p-3 shadow-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all ${errors[field] ? "border-red-300" : "border-gray-100 hover:border-gray-200"}`}
                            value={String((special[field] as LocalizedText)?.[lang] || "")}
                            onChange={(e) => handleLocalizedChange(field, lang, e.target.value)}
                        />
                      </div>
                  ))}
                </div>
                {errors[field] && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase ml-2">{errors[field]}</p>}
              </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
              <label className="block font-black text-gray-400 mb-2 uppercase text-[10px] tracking-widest ml-1">Slug (URL)</label>
              <input
                  className={`w-full border rounded-2xl p-3 shadow-sm outline-none focus:ring-4 focus:ring-blue-50 transition ${errors.slug ? "border-red-300" : "border-gray-100"}`}
                  value={special.slug}
                  onChange={(e) => setSpecial({ ...special, slug: e.target.value })}
              />
            </div>
            <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
              <label className="block font-black text-gray-400 mb-4 uppercase text-[10px] tracking-widest ml-1">Promo Banner Image</label>
              <ImageInputBlock
                  image={special.mainImage || ""}
                  onChange={(url) => setSpecial({ ...special, mainImage: url })}
              />
              {errors.mainImage && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase ml-2">{errors.mainImage}</p>}
            </div>
          </div>
        </div>

        {/* Relations Section */}
        <div className="bg-blue-50/40 p-8 rounded-[40px] mb-10 border border-blue-100 shadow-inner">
          <h2 className="text-lg font-black text-blue-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
            MARKETING CONNECTIONS
          </h2>
          <div className="space-y-3">
            <SyncedRelationSelect<Service>
                label="Apply to Services"
                value={special.serviceId || []}
                options={allServices}
                getLabel={(o) => String(o.title?.uk || "Untitled Service")}
                getValue={(o) => o.id!}
                onChange={(v) => setSpecial({ ...special, serviceId: v })}
                firebasePath="services"
                parentId={special.id}
                parentFieldName="specials"
                syncType="array"
            />
            <SyncedRelationSelect<PriceModel>
                label="Special Pricing"
                value={special.prices || []}
                options={(relatedData.prices || []) as PriceModel[]}
                getLabel={(o) => String(o.category?.uk || "Untitled Price")}
                getValue={(o) => o.id!}
                onChange={(v) => setSpecial({ ...special, prices: v })}
                firebasePath="prices"
                parentId={special.id}
                parentFieldName="specials"
                syncType="array"
            />
            <SyncedRelationSelect<Blog>
                label="Mentioned in Blogs"
                value={special.blogs || []}
                options={allBlogs}
                getLabel={(o) => String(o.title?.uk || "Untitled Blog")}
                getValue={(o) => o.id!}
                onChange={(v) => setSpecial({ ...special, blogs: v })}
                firebasePath="blogs"
                parentId={special.id}
                parentFieldName="specials"
                syncType="array"
            />
          </div>
        </div>

        {/* Builder & Preview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="bg-gray-50/30 p-6 rounded-[32px] border border-gray-100">
            <h2 className="text-xl font-black text-gray-800 mb-6 border-b border-gray-100 pb-4 uppercase tracking-tighter">Offer Page Content</h2>
            <div className="max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
              {special.content?.map((block, i) => renderBlockEditor(block, i))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-100">
              {["heading", "paragraph", "image", "list"].map(type => (
                  <button key={type} onClick={() => addContentBlock(type as any)}
                          className="bg-white border-2 border-blue-500 text-blue-600 px-5 py-2 rounded-2xl hover:bg-blue-600 hover:text-white transition-all font-black text-[10px] shadow-sm uppercase tracking-widest">
                    + Add {type}
                  </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 border-2 border-dashed border-gray-100 rounded-[32px] sticky top-10 h-[80vh] overflow-y-auto shadow-2xl shadow-gray-100/50">
            <h2 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-8 text-center">Desktop Preview</h2>
            <div className="prose prose-blue max-w-none">
              {special.mainImage && <img src={special.mainImage} className="w-full h-48 object-cover rounded-[2rem] mb-8 shadow-2xl shadow-blue-100/50 border-4 border-white" alt="Special Banner"/>}
              <h1 className="text-3xl font-black text-gray-900 mb-2">{special.title?.uk || "Offer Title"}</h1>
              <p className="text-blue-600 font-bold mb-4">{special.subtitle?.uk}</p>
              <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-8"></div>
              <div className="py-20 text-center text-gray-200 font-black uppercase tracking-widest border-2 border-dashed border-gray-50 rounded-3xl">
                Visual Blocks Area
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-50 pt-8 flex justify-end items-center gap-6">
          <button onClick={() => navigate("/admin/specials")} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition">
            Discard Changes
          </button>
          <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-4 rounded-[2rem] transition-all font-black shadow-xl shadow-blue-100 active:scale-95 uppercase tracking-widest text-sm">
            Publish Special
          </button>
        </div>
      </div>
  );
}