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
import {adminPath} from "../../utils/adminNavigate.ts";

const emptySpecial: Special = {
  title: { uk: "", ru: "", en: "", de: "" },
  subtitle: { uk: "", ru: "", en: "", de: "" },
  headerTitle: { uk: "", ru: "", en: "", de: "" },
  slug: "",
  mainImage: "",
  content: [],
  prices: [],
  serviceId: [],
  blogs: [],
};

export default function SpecialEditor() {
  const { lang = "en", businessSlug, id } = useParams<{
    lang: string;
    businessSlug: string;
    id: string
  }>();
  const navigate = useNavigate();

  const [special, setSpecial] = useState<Special>(emptySpecial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dataLoading, setDataLoading] = useState(true);

  // Загрузка связанных данных (передаем businessSlug)
  const { data: relatedData, loading: relatedLoading } = useFetchData([
    "services",
    "prices",
    "blogs",
  ], businessSlug);

  const allServices = (relatedData.services || []) as Service[];
  const allBlogs = (relatedData.blogs || []) as Blog[];

  const displayName = businessSlug;

  // Загрузка данных конкретной акции
  useEffect(() => {
    if (id === "new" || !id) {
      setSpecial(emptySpecial);
      setDataLoading(false);
      return;
    }

    if (!businessSlug) return;

    setDataLoading(true);
    get(ref(db, `businesses/${businessSlug}/specials/${id}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setSpecial({ ...emptySpecial, ...snapshot.val(), id });
          }
        })
        .finally(() => setDataLoading(false));
  }, [id, businessSlug]);

  const handleLocalizedChange = (field: keyof Special, l: string, value: string) => {
    setSpecial((prev) => ({
      ...prev,
      [field]: { ...((prev[field] as LocalizedText) || {}), [l]: value },
    }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  /* ------------------ CONTENT BLOCKS LOGIC ------------------ */
  const addContentBlock = (type: "paragraph" | "image" | "heading" | "list", parentIndex?: number) => {
    const newBlock: ContentBlock = {
      type,
      content: { uk: "", ru: "", en: "", de: "" },
      align: "left",
      ...(type === "image" ? { media: "", widthPercent: 100 } : {}),
    };
    const updated = [...(special.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children = [...(updated[parentIndex].children || []), newBlock];
    } else {
      updated.push(newBlock);
    }
    setSpecial({ ...special, content: updated });
  };

  const handleBlockChange = (index: number, l: string, value: string, parentIndex?: number) => {
    const updated = [...(special.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children![index].content = { ...updated[parentIndex].children![index].content, [l]: value };
    } else {
      updated[index].content = { ...updated[index].content, [l]: value };
    }
    setSpecial({ ...special, content: updated });
  };

  const moveContentBlock = (index: number, direction: "up" | "down", parentIndex?: number) => {
    const swap = (arr: any[], i1: number, i2: number) => { [arr[i1], arr[i2]] = [arr[i2], arr[i1]]; };
    const updated = [...(special.content || [])];
    if (typeof parentIndex === "number") {
      const children = [...(updated[parentIndex].children || [])];
      if (direction === "up" && index > 0) swap(children, index, index - 1);
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
    const blockKey = `${parentIndex ?? "root"}-${index}`;
    return (
        <div className="w-full flex" key={blockKey}>
          <div className="border border-gray-100 rounded-[32px] p-6 my-3 bg-white shadow-sm w-full transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">
              {parentIndex !== undefined ? `Child ${index + 1}` : `Block ${index + 1}`} — {block.type}
            </span>
              <div className="flex gap-2">
                <button onClick={() => moveContentBlock(index, "up", parentIndex)} className="p-2 hover:bg-gray-100 rounded-xl transition">↑</button>
                <button onClick={() => moveContentBlock(index, "down", parentIndex)} className="p-2 hover:bg-gray-100 rounded-xl transition">↓</button>
                <button onClick={() => removeContentBlock(index, parentIndex)} className="text-red-400 hover:text-red-600 font-bold text-[10px] uppercase ml-2 tracking-widest">Delete</button>
              </div>
            </div>

            {block.type === "image" ? (
                <div className="max-w-sm mx-auto">
                  <ImageInputBlock
                      image={block.media || ""}
                      onChange={(url) => {
                        const updated = [...(special.content || [])];
                        if (typeof parentIndex === "number") updated[parentIndex].children![index].media = url;
                        else updated[index].media = url;
                        setSpecial({ ...special, content: updated });
                      }}
                  />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["uk", "ru", "en", "de"].map((l) => (
                      <div key={l}>
                        <div className="text-[9px] font-black text-gray-300 mb-1 ml-1 uppercase">{l}</div>
                        <textarea
                            className="w-full border border-gray-100 rounded-2xl p-4 text-sm h-24 focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none shadow-inner bg-gray-50/30"
                            value={(block.content?.[l] as string) || ""}
                            onChange={(e) => handleBlockChange(index, l, e.target.value, parentIndex)}
                            placeholder={`Content in ${l}...`}
                        />
                      </div>
                  ))}
                </div>
            )}
            {block.children?.map((child, i) => renderBlockEditor(child, i, index))}
          </div>
        </div>
    );
  };

  const handleSave = async () => {
    if (!businessSlug) return;
    try {
      const specialsRef = ref(db, `businesses/${businessSlug}/specials`);
      const sId = (id === "new" || !id) ? push(specialsRef).key : id;
      if (!sId) return;

      await set(ref(db, `businesses/${businessSlug}/specials/${sId}`), {
        ...special,
        id: sId,
        updatedAt: Date.now(),
      });
      navigate(adminPath(lang!, businessSlug!, "specials"));
    } catch (e) {
      console.error("Save error:", e);
    }
  };

  if (dataLoading) {
    return <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">Loading Special Data...</div>;
  }

  return (
      <div className="p-6 max-w-6xl mx-auto bg-white shadow-2xl rounded-[40px] my-10 border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 border-b border-gray-50 pb-8">
          <div>
            <h1 className="text-4xl font-black text-gray-800 tracking-tighter uppercase">
              {displayName} —  {id === "new" ? "New Special" : "Edit Special"}
            </h1>
            <p className="text-gray-400 text-sm font-medium tracking-tight mt-1">Configure promotion details and marketing links</p>
          </div>
          <div className="flex justify-end items-center gap-6">
            <button onClick={() => navigate(adminPath(lang!, businessSlug!, "specials"))} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition">
              Discard
            </button>
            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl transition-all font-bold shadow-lg shadow-blue-100 active:scale-95">
              Save Special
            </button>
          </div>
        </div>

        {/* Main Fields */}
        <div className="space-y-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50/30 p-8 rounded-[32px] border border-gray-100 space-y-4">
              <label className="block font-black text-gray-400 uppercase text-[10px] tracking-widest ml-1">Slug (URL Path)</label>
              <input
                  className="w-full border border-gray-100 bg-white rounded-2xl p-4 shadow-inner outline-none focus:ring-4 focus:ring-blue-50 transition font-mono text-sm"
                  value={special.slug}
                  onChange={(e) => setSpecial({ ...special, slug: e.target.value })}
                  placeholder="summer-sale-2024"
              />
            </div>
            <div className="bg-gray-50/30 p-8 rounded-[32px] border border-gray-100 text-center">
              <label className="block font-black text-gray-400 mb-4 uppercase text-[10px] tracking-widest">Promo Banner</label>
              <ImageInputBlock image={special.mainImage || ""} onChange={(url) => setSpecial({ ...special, mainImage: url })} />
            </div>
          </div>

          {(["title", "subtitle", "headerTitle"] as const).map((field) => (
              <div key={field} className="p-8 border border-gray-100 rounded-[32px] bg-white shadow-sm">
                <label className="block font-black text-gray-400 mb-5 uppercase text-[10px] tracking-[0.3em] ml-1">{field}</label>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {["uk", "ru", "en", "de"].map((l) => (
                      <div key={l}>
                        <div className="text-[9px] font-black text-gray-300 mb-1 ml-2 uppercase">{l}</div>
                        <input
                            className="w-full border border-gray-50 bg-white rounded-2xl p-4 text-xs font-bold shadow-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all hover:border-gray-200"
                            value={(special[field] as LocalizedText)?.[l] || ""}
                            onChange={(e) => handleLocalizedChange(field, l, e.target.value)}
                        />
                      </div>
                  ))}
                </div>
              </div>
          ))}
        </div>

        {/* Marketing Connectivity */}
        <div className="bg-blue-900 p-10 rounded-[40px] mb-12 shadow-2xl">
          <h2 className="text-white text-xs font-black mb-8 flex items-center gap-4 uppercase tracking-[0.4em]">Marketing Integration</h2>
          <div className="grid grid-cols-1 gap-6">
            {relatedLoading ? (
                <div className="text-blue-300 animate-pulse text-xs font-bold uppercase tracking-widest">Synchronizing Database...</div>
            ) : (
                <>
                  <SyncedRelationSelect<Service>
                      label="Apply to Services"
                      value={special.serviceId || []}
                      options={allServices}
                      getLabel={(o) => String(o.title?.[lang] || o.title?.uk || "Untitled Service")}
                      getValue={(o) => o.id!}
                      onChange={(v) => setSpecial({ ...special, serviceId: v })}
                      firebasePath={`businesses/${businessSlug}/services`}
                      parentId={special.id}
                      parentFieldName="specials"
                      syncType="array"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SyncedRelationSelect<PriceModel>
                        label="Special Pricing"
                        value={special.prices || []}
                        options={(relatedData.prices || []) as PriceModel[]}
                        getLabel={(o) => String(o.category?.[lang] || o.category?.uk || "Untitled Price")}
                        getValue={(o) => o.id!}
                        onChange={(v) => setSpecial({ ...special, prices: v })}
                        firebasePath={`businesses/${businessSlug}/prices`}
                        parentId={special.id}
                        parentFieldName="specials"
                        syncType="array"
                    />
                    <SyncedRelationSelect<Blog>
                        label="Featured in Blogs"
                        value={special.blogs || []}
                        options={allBlogs}
                        getLabel={(o) => String(o.title?.[lang] || o.title?.uk || "Untitled Blog")}
                        getValue={(o) => o.id!}
                        onChange={(v) => setSpecial({ ...special, blogs: v })}
                        firebasePath={`businesses/${businessSlug}/blogs`}
                        parentId={special.id}
                        parentFieldName="specials"
                        syncType="array"
                    />
                  </div>
                </>
            )}
          </div>
        </div>

        {/* Content Builder */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-10 px-4">
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">Offer Page Builder</h2>
            <div className="flex gap-2">
              {["heading", "paragraph", "image", "list"].map((type) => (
                  <button
                      key={type}
                      onClick={() => addContentBlock(type as any)}
                      className="bg-gray-100 hover:bg-black hover:text-white px-5 py-2 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest text-gray-500"
                  >
                    + {type}
                  </button>
              ))}
            </div>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {special.content?.length ? (
                special.content.map((block, i) => renderBlockEditor(block, i))
            ) : (
                <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-[40px] text-gray-300 font-bold uppercase tracking-widest text-[10px]">
                  No content blocks yet. Start building.
                </div>
            )}
          </div>
        </div>

        <div className="flex justify-end items-center gap-6">
          <button onClick={() => navigate(adminPath(lang!, businessSlug!, "specials"))} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition">
            Discard
          </button>
          <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl transition-all font-bold shadow-lg shadow-blue-100 active:scale-95">
            Save Special
          </button>
        </div>
      </div>
  );
}