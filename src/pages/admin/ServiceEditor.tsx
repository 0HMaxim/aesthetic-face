import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase";

// Models
import type { Service } from "../../models/Service";
import type { LocalizedText } from "../../models/LocalizedText";
import type { ContentBlock } from "../../models/ContentBlock";
import type { PriceModel } from "../../models/Price.ts";
import type { Employee } from "../../models/Employee.ts";
import type { Special } from "../../models/Special.ts";

// Components
import ImageInputBlock from "../../components/ImageInputBlock.tsx";
import { useFetchData } from "../../hooks/useFetchData.ts";
import { SyncedRelationSelect } from "../../components/SyncedRelationSelect.tsx";

export default function ServiceEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyService: Service = {
    title: {},
    subtitle: {},
    headerTitle: {},
    slug: "",
    mainImage: "",
    content: [],
    employees: [],
    subservices: [],
    specials: [],
    prices: [],
    blogs: [],
  };

  const [service, setService] = useState<Service>(emptyService);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { data: relatedData, loading } = useFetchData([
    "services",
    "prices",
    "blogs",
    "employees",
    "specials",
  ]);

  const allServices = (relatedData.services || []) as Service[];
  const availableSubservices = allServices.filter(s => s.id !== id);

  useEffect(() => {
    if (id && id !== "new") {
      get(ref(db, `services/${id}`)).then(async (snapshot) => {
        if (snapshot.exists()) {
          const data: Service = snapshot.val();

          // Получаем связанные цены
          const pricesSnapshot = await get(ref(db, "prices"));
          const allPrices: Record<string, PriceModel> = pricesSnapshot.exists() ? pricesSnapshot.val() : {};
          const selectedPriceIds = Object.entries(allPrices)
              .filter(([_, price]) => price.serviceIds?.includes(id!))
              .map(([priceId]) => priceId);

          // Получаем под-услуги
          const selectedSubserviceIds = allServices
              .filter(s => Array.isArray(s.parentServiceIds) && s.parentServiceIds.includes(id!))
              .map(s => s.id!);

          setService({
            ...emptyService,
            ...data,
            id: id,
            prices: selectedPriceIds,
            subservices: selectedSubserviceIds,
          });
        }
      });
    }
  }, [id, allServices.length]);

  const handleLocalizedChange = (field: keyof Service, lang: string, value: string) => {
    setService((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // --- Логика блоков контента ---
  const addContentBlock = (type: "paragraph" | "image" | "heading" | "list", parentIndex?: number) => {
    const newBlock: ContentBlock = {
      type,
      content: {},
      align: "left", // По умолчанию слева
      ...(type === "image" ? {
        media: "",
        widthPercent: 45 // Соответствует md:w-[45%] в рендерере
      } : {}),
    };

    const updated = [...(service.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children = [...(updated[parentIndex].children || []), newBlock];
    } else {
      updated.push(newBlock);
    }
    setService({ ...service, content: updated });
  };

  const handleBlockChange = (index: number, lang: string, value: string, parentIndex?: number) => {
    const updated = [...(service.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children![index].content = { ...updated[parentIndex].children![index].content, [lang]: value };
    } else {
      updated[index].content = { ...updated[index].content, [lang]: value };
    }
    setService({ ...service, content: updated });
  };

  const moveContentBlock = (index: number, direction: "up" | "down", parentIndex?: number) => {
    const swap = (arr: any[], i1: number, i2: number) => { [arr[i1], arr[i2]] = [arr[i2], arr[i1]]; };
    const updated = [...(service.content || [])];
    if (typeof parentIndex === "number") {
      const children = [...(updated[parentIndex].children || [])];
      if (direction === "up" && index > 0) swap(children, index, index - 1);
      if (direction === "down" && index < children.length - 1) swap(children, index, index + 1);
      updated[parentIndex].children = children;
    } else {
      if (direction === "up" && index > 0) swap(updated, index, index - 1);
      if (direction === "down" && index < updated.length - 1) swap(updated, index, index + 1);
    }
    setService({ ...service, content: updated });
  };

  const removeContentBlock = (index: number, parentIndex?: number) => {
    const updated = [...(service.content || [])];
    if (typeof parentIndex === "number") updated[parentIndex].children?.splice(index, 1);
    else updated.splice(index, 1);
    setService({ ...service, content: updated });
  };

  const renderBlockEditor = (block: ContentBlock, index: number, parentIndex?: number) => {
    const blockLabel = parentIndex !== undefined ? `Child ${index + 1}` : `Block ${index + 1}`;
    return (
        <div className="w-full" key={`${parentIndex ?? "root"}-${index}`}>
          <div className="border border-gray-200 rounded-[2rem] p-6 my-4 bg-gray-50/30 w-full shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{blockLabel} — {block.type}</span>
              <div className="flex gap-2">
                <button onClick={() => moveContentBlock(index, "up", parentIndex)} className="p-2 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all text-xs">⬆</button>
                <button onClick={() => moveContentBlock(index, "down", parentIndex)} className="p-2 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all text-xs">⬇</button>
                <button onClick={() => removeContentBlock(index, parentIndex)} className="bg-red-50 text-red-500 px-3 py-1.5 rounded-lg text-[10px] ml-4 font-black uppercase hover:bg-red-500 hover:text-white transition-all">Delete</button>
              </div>
            </div>

            {block.type === "image" ? (
                <div className="space-y-4">
                  <div className="max-w-sm mx-auto">
                    <ImageInputBlock
                        image={block.media || ""}
                        onChange={(url: string) => {
                          const updated = [...(service.content || [])];
                          if (typeof parentIndex === "number") updated[parentIndex].children![index].media = url;
                          else updated[index].media = url;
                          setService({ ...service, content: updated });
                        }}
                    />
                  </div>

                  {/* Переключатель выравнивания */}
                  <div className="flex justify-center items-center gap-2 bg-white p-2 rounded-2xl border border-gray-100 w-fit mx-auto shadow-sm">
                    {(['left', 'center', 'right'] as const).map((pos) => (
                        <button
                            key={pos}
                            onClick={() => {
                              const updated = [...(service.content || [])];
                              if (typeof parentIndex === "number") updated[parentIndex].children![index].align = pos;
                              else updated[index].align = pos;
                              setService({ ...service, content: updated });
                            }}
                            className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                                (block.align || 'left') === pos
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                            }`}
                        >
                          {pos === 'left' ? '← Left' : pos === 'center' ? '↔ Center' : 'Right →'}
                        </button>
                    ))}
                  </div>

                  <p className="text-[9px] text-gray-400 text-center uppercase tracking-tighter">
                    {block.align === 'center' ? 'Image will be full width' : 'Image and text will be side-by-side'}
                  </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["uk", "ru", "en", "de"].map(l => (
                      <div key={l}>
                        <div className="text-[10px] font-black text-gray-300 mb-1 ml-2 uppercase">{l}</div>
                        {block.type === "list" ? (
                            <textarea
                                className="w-full border border-gray-100 rounded-2xl p-3 text-sm h-28 focus:ring-4 focus:ring-blue-50 outline-none transition-all shadow-inner"
                                value={String(block.content?.[l] || "")}
                                onChange={(e) => handleBlockChange(index, l, e.target.value, parentIndex)}
                            />
                        ) : (
                            <input
                                type="text"
                                className="w-full border border-gray-100 rounded-2xl p-3 text-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all shadow-inner font-medium"
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
                <div className="flex gap-4 mt-6 border-t border-gray-100 pt-4">
                  {["heading", "paragraph", "list"].map(t => (
                      <button key={t} onClick={() => addContentBlock(t as any, index)} className="text-blue-500 text-[9px] font-black uppercase tracking-widest hover:text-blue-700 transition">
                        + Add {t} overlay
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
    const hasTitle = Object.values(service.title || {}).some(v => typeof v === 'string' && v.trim());
    if (!hasTitle) newErrors.title = "At least one title is required";

    if (typeof service.slug !== 'string' || !service.slug.trim()) newErrors.slug = "Slug is required";
    if (typeof service.mainImage !== 'string' || !service.mainImage.trim()) newErrors.mainImage = "Main cover is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    let serviceId = id === "new" || !id ? push(ref(db, "services")).key : id;
    if (!serviceId) return;

    const serviceDataToSave: any = { ...service, id: serviceId };
    const newSubserviceIds = service.subservices || [];
    delete serviceDataToSave.subservices;

    await set(ref(db, `services/${serviceId}`), serviceDataToSave);

    // Синхронизация Subservices
    const allServicesSnapshot = await get(ref(db, "services"));
    const allDB: Record<string, Service> = allServicesSnapshot.val() || {};

    for (const [sKey, sVal] of Object.entries(allDB)) {
      const parents = Array.isArray(sVal.parentServiceIds) ? sVal.parentServiceIds : [];
      const isNowSub = newSubserviceIds.includes(sKey);
      const wasSub = parents.includes(serviceId);

      if (isNowSub && !wasSub) {
        await update(ref(db, `services/${sKey}`), { parentServiceIds: [...parents, serviceId] });
      } else if (!isNowSub && wasSub) {
        await update(ref(db, `services/${sKey}`), { parentServiceIds: parents.filter(p => p !== serviceId) || null });
      }
    }

    navigate("/admin/services");
  };

  if (loading) return <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase italic">Loading Infrastructure...</div>;

  return (
      <div className="p-6 max-w-6xl mx-auto bg-white shadow-2xl rounded-[40px] my-10 border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-50 pb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-800 tracking-tighter uppercase">{id && id !== "new" ? "Edit Service" : "New Service"}</h1>
            <p className="text-gray-400 text-sm font-medium mt-1">Configure page layout and service dependencies</p>
          </div>


          <div className="border-t border-gray-50 pt-8 flex justify-end items-center gap-6">
            <button onClick={() => navigate("/admin/services")} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition">
              Discard Changes
            </button>
            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-[2rem] transition-all font-black shadow-xl shadow-blue-100 active:scale-95 uppercase tracking-widest text-xs">
              Publish Service
            </button>
          </div>
        </div>

        {/* Global Localized Fields */}
        <div className="space-y-8 mb-12">
          {(["title", "subtitle", "headerTitle"] as const).map(field => (
              <div key={field} className="p-8 border border-gray-100 rounded-[32px] bg-gray-50/30 shadow-sm">
                <label className="block font-black text-gray-400 mb-6 uppercase text-[10px] tracking-[0.3em] ml-1">{field}</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["uk", "ru", "en", "de"].map(lang => (
                      <div key={lang}>
                        <div className="text-[10px] font-black text-gray-300 mb-2 ml-4 uppercase">{lang}</div>
                        <input
                            className={`w-full border rounded-2xl p-4 shadow-inner outline-none focus:ring-4 focus:ring-blue-50 transition-all font-bold ${errors[field] ? "border-red-200 bg-red-50/30" : "border-gray-50 bg-white hover:border-gray-200"}`}
                            value={String((service[field] as LocalizedText)?.[lang] || "")}
                            onChange={(e) => handleLocalizedChange(field, lang, e.target.value)}
                        />
                      </div>
                  ))}
                </div>
                {errors[field] && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase ml-4 tracking-widest">{errors[field]}</p>}
              </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50/50 p-8 rounded-[32px] border border-gray-100">
              <label className="block font-black text-gray-400 mb-3 uppercase text-[10px] tracking-widest ml-1">Slug (URL identifier)</label>
              <input
                  className={`w-full border rounded-2xl p-4 shadow-sm outline-none focus:ring-4 focus:ring-blue-50 transition-all font-mono font-bold ${errors.slug ? "border-red-300" : "border-gray-100 bg-white"}`}
                  value={service.slug}
                  onChange={(e) => setService({ ...service, slug: e.target.value })}
                  placeholder="laser-hair-removal"
              />
            </div>
            <div className="bg-gray-50/50 p-8 rounded-[32px] border border-gray-100">
              <label className="block font-black text-gray-400 mb-4 uppercase text-[10px] tracking-widest ml-1">Main Cover Image</label>
              <ImageInputBlock
                  image={service.mainImage || ""}
                  onChange={(url: string) => setService({ ...service, mainImage: url })}
              />
              {errors.mainImage && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">{errors.mainImage}</p>}
            </div>
          </div>
        </div>

        {/* Strategic Relations */}
        <div className="bg-blue-50/40 p-10 rounded-[48px] mb-12 border border-blue-100/50 shadow-inner">
          <h2 className="text-[11px] font-black text-blue-900 mb-8 tracking-[0.4em] uppercase flex items-center gap-3">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
            Ecosystem Connectivity
          </h2>
          <div className="space-y-6">
            <SyncedRelationSelect<Service>
                label="Child Subservices"
                multiple
                value={service.subservices || []}
                options={availableSubservices}
                getLabel={(o) => String(o.title?.uk || "Untitled Service")}
                getValue={(o) => o.id!}
                onChange={(v) => setService({ ...service, subservices: v })}
                firebasePath="services"
                parentId={service.id}
                parentFieldName="parentServiceIds"
                syncType="array"
            />
            <SyncedRelationSelect<PriceModel>
                label="Assigned Price Tables"
                multiple
                value={service.prices || []}
                options={(relatedData.prices || []) as PriceModel[]}
                getLabel={(o) => String(o.category?.uk || "Untitled Price")}
                getValue={(o) => o.id!}
                onChange={(v) => setService({ ...service, prices: v })}
                firebasePath="prices"
                parentId={service.id}
                parentFieldName="serviceIds"
                syncType="array"
            />
            <SyncedRelationSelect<Employee>
                label="Specialists for this treatment"
                multiple
                value={service.employees || []}
                options={(relatedData.employees || []) as Employee[]}
                getLabel={(o) => String(o.fullName?.uk || "Unnamed Employee")}
                getValue={(o) => o.id!}
                onChange={(v) => setService({ ...service, employees: v })}
                firebasePath="employees"
                parentId={service.id}
                syncType="none"
            />
            <SyncedRelationSelect<Special>
                label="Promotional Offers"
                multiple
                value={service.specials || []}
                options={(relatedData.specials || []) as Special[]}
                getLabel={(o) => String(o.title?.uk || "Untitled Special")}
                getValue={(o) => o.id!}
                onChange={(v) => setService({ ...service, specials: v })}
                firebasePath="specials"
                parentId={service.id}
                parentFieldName="serviceId"
                syncType="array"
            />
          </div>
        </div>

        {/* Builder Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="bg-gray-50/30 p-8 rounded-[40px] border border-gray-100">
            <h2 className="text-xl font-black text-gray-800 mb-8 border-b border-gray-100 pb-5 uppercase tracking-tighter">Content Blocks Builder</h2>
            <div className="max-h-[800px] overflow-y-auto pr-4 custom-scrollbar space-y-2">
              {service.content?.map((block, i) => renderBlockEditor(block, i))}
            </div>
            <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-gray-100">
              {["heading", "paragraph", "image", "list"].map(type => (
                  <button key={type} onClick={() => addContentBlock(type as any)}
                          className="bg-white border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition-all font-black text-[10px] shadow-lg shadow-gray-200 uppercase tracking-widest active:scale-95">
                    + Insert {type}
                  </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 border border-gray-100 rounded-[40px] sticky top-10 h-[85vh] overflow-y-auto shadow-2xl shadow-gray-100/30">
            <h2 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] mb-12 text-center">Live Preview Mode</h2>
            <div className="prose prose-blue max-w-none">
              {service.mainImage && <img src={service.mainImage} className="w-full h-56 object-cover rounded-[2.5rem] mb-10 shadow-2xl" alt="Hero"/>}
              <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tighter leading-none">{service.title?.uk || "Untitled Service"}</h1>
              <p className="text-blue-500 font-black text-xs mb-6 uppercase tracking-[0.2em] italic">{service.subtitle?.uk}</p>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-transparent w-32 mb-10 rounded-full"></div>

              <div className="space-y-6 text-gray-300 font-medium italic text-center py-20 border-2 border-dashed border-gray-50 rounded-[32px]">
                <p>Page content will be rendered here...</p>
                <div className="flex justify-center gap-2">
                  {[1,2,3].map(i => <div key={i} className="w-2 h-2 bg-gray-100 rounded-full"></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-50 pt-10 flex justify-end items-center gap-8">
          <button onClick={() => navigate("/admin/services")} className="text-gray-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-gray-900 transition">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-gray-900 hover:bg-black text-white px-20 py-5 rounded-[2.5rem] transition-all font-black shadow-2xl active:scale-95 uppercase tracking-[0.2em] text-xs">
            Confirm & Publish
          </button>
        </div>
      </div>
  );
}