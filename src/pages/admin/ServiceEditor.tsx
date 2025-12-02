import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase";
import type { Service } from "../../models/Service";
import type { LocalizedText } from "../../models/LocalizedText";
import type { ContentBlock } from "../../models/ContentBlock";
import ImageInputBlock from "../../components/ImageInputBlock.tsx";
import { useFetchData } from "../../hooks/useFetchData.ts";
import { SyncedRelationSelect } from "../../components/SyncedRelationSelect.tsx";
import type { PriceModel } from "../../models/Price.ts";
import type { Employee } from "../../models/Employee.ts";
import type { Blog } from "../../models/Blog.ts";
import type {Special} from "../../models/Special.ts";

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

  const availableSubservices = (allServices || []).filter(s => {
    if (s.id === id) return false;

    return true;
  });

  // 🔹 Загрузка сервиса
  useEffect(() => {
    if (id) {
      get(ref(db, `services/${id}`)).then(async (snapshot) => {
        if (snapshot.exists()) {
          const data: Service = snapshot.val();

          const pricesSnapshot = await get(ref(db, "prices"));
          const allPrices: Record<string, PriceModel> = pricesSnapshot.exists()
              ? pricesSnapshot.val()
              : {};

          const selectedPriceIds = Object.entries(allPrices)
          .filter(([_, price]) => price.serviceIds?.includes(id!))
          .map(([priceId]) => priceId);

          const allServicesSnapshot = await get(ref(db, "services"));
          const allServicesFromDB: Record<string, Service> = allServicesSnapshot.exists()
              ? allServicesSnapshot.val()
              : {};

          const selectedSubserviceIds = Object.entries(allServicesFromDB)
          .filter(([_, serviceItem]) => {
            const parentIds = serviceItem.parentServiceIds;
            return Array.isArray(parentIds) && parentIds.includes(id!);
          })
          .map(([serviceId]) => serviceId);

          setService({
            ...data,
            id: id,
            prices: selectedPriceIds,
            subservices: selectedSubserviceIds,
          });
        }
      });
    }
  }, [id]);

  const handleLocalizedChange = (field: keyof Service, lang: string, value: string) => {
    setService((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };


  const addContentBlock = (
      type: "paragraph" | "image" | "heading" | "list",
      parentIndex?: number
  ) => {
    const newBlock: ContentBlock = {
      type,
      content: {},
      align: "left",
      ...(type === "image" ? { media: "https://via.placeholder.com/400x200?text=Image" } : {}),
    };

    if (typeof parentIndex === "number") {
      const updated = [...(service.content || [])];
      const parent = updated[parentIndex];
      parent.children = [...(parent.children || []), newBlock];
      updated[parentIndex] = parent;
      setService({ ...service, content: updated });
    } else {
      setService({ ...service, content: [...(service.content || []), newBlock] });
    }
  };

  const handleBlockChange = (index: number, lang: string, value: string, parentIndex?: number) => {
    const updated = [...(service.content || [])];
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
    setService({ ...service, content: updated });
  };

  const handleAlignChange = (
      index: number,
      align: "left" | "center" | "right",
      parentIndex?: number
  ) => {
    const updated = [...(service.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children![index].align = align;
    } else {
      updated[index].align = align;
    }
    setService({ ...service, content: updated });
  };

  const moveContentBlock = (index: number, direction: "up" | "down", parentIndex?: number) => {
    const updated = [...(service.content || [])];
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

    setService({ ...service, content: updated });
  };

  const removeContentBlock = (index: number, parentIndex?: number) => {
    const updated = [...(service.content || [])];
    if (typeof parentIndex === "number") {
      updated[parentIndex].children?.splice(index, 1);
    } else {
      updated.splice(index, 1);
    }
    setService({ ...service, content: updated });
  };

  const renderBlockEditor = (block: ContentBlock, index: number, parentIndex?: number) => {
    const blockNumber = parentIndex !== undefined
        ? `Content Block ${parentIndex + 1} Child ${index + 1}`
        : `Content Block ${index + 1}`;

    return (
        <div className="w-100 flex" key={`${parentIndex ?? "root"}-${index}`}>
          <div className="border border-gray-300 rounded-lg p-4 my-3 bg-gray-50 w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <strong>{blockNumber} (type: {block.type})</strong>
              <div className="flex gap-2">
                <button onClick={() => moveContentBlock(index, "up", parentIndex)} className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded">⬆️</button>
                <button onClick={() => moveContentBlock(index, "down", parentIndex)} className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded">⬇️</button>
                <button onClick={() => removeContentBlock(index, parentIndex)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Удалить</button>
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
                      image={typeof block.media === "string" ? block.media : ""}
                      onChange={(value) => {
                        const updated = [...(service.content || [])];
                        if (typeof parentIndex === "number") updated[parentIndex].children![index].media = value;
                        else updated[index].media = value;
                        setService({ ...service, content: updated });
                      }}
                  />
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Image Width (%)</label>
                    <input
                        type="number"
                        min={10}
                        max={100}
                        value={block.widthPercent ?? 40}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          const updated = [...(service.content || [])];
                          if (typeof parentIndex === "number") updated[parentIndex].children![index].widthPercent = value;
                          else updated[index].widthPercent = value;
                          setService({ ...service, content: updated });
                        }}
                        className="border rounded-lg p-2 w-20"
                    />
                    <span>%</span>
                  </div>
                </div>
            ) : (
                ["uk", "ru", "en", "de"].map(lang => (
                    <div key={lang} className="mb-3">
                      <label className="block text-sm font-medium mb-1">Content ({lang})</label>
                      {block.type === "list" ? (
                          <textarea
                              value={block.content?.[lang] || ""}
                              onChange={(e) => handleBlockChange(index, lang, e.target.value, parentIndex)}
                              className="border rounded-lg p-2 w-full h-28 font-mono text-sm"
                              placeholder="Each line = one list item"
                          />
                      ) : (
                          <input
                              type="text"
                              value={block.content?.[lang] || ""}
                              onChange={(e) => handleBlockChange(index, lang, e.target.value, parentIndex)}
                              className="border rounded p-2 w-full"
                          />
                      )}
                    </div>
                ))
            )}


            {block.children && block.children.length > 0 && (
                <div className="ml-6 mt-3 border-l-2 border-gray-200 pl-3">
                  {block.children.map((child, i) => renderBlockEditor(child, i, index))}
                </div>
            )}

            {block.type === "image" && (
                <div className="flex gap-2 mt-2">
                  <button onClick={() => addContentBlock("heading", index)} className="text-blue-600">+ Heading Child</button>
                  <button onClick={() => addContentBlock("paragraph", index)} className="text-blue-600">+ Paragraph Child</button>
                  <button onClick={() => addContentBlock("image", index)} className="text-blue-600">+ Image Child</button>
                  <button onClick={() => addContentBlock("list", index)} className="text-blue-600">+ List Child</button>
                </div>
            )}
          </div>
        </div>
    );
  };


  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!Object.values(service.title || {}).some((v) => typeof v === "string" && v.trim())) newErrors.title = "Title хотя бы на одном языке обязателен!";
    if (!service.slug?.trim()) newErrors.slug = "Slug обязателен!";
    if (!service.mainImage?.trim()) newErrors.mainImage = "Main image обязателен!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSave = async () => {
    if (!validate()) return;

    let serviceId = id;
    const serviceDataToSave: Partial<Service> = { ...service };

    const newSubserviceIds = service.subservices || [];

    const oldSubserviceIds: string[] = [];
    const PARENT_FIELD = "parentServiceIds";

    if (id) {
      const servicesSnapshot = await get(ref(db, "services"));
      const allServicesFromDB: Record<string, Service> = servicesSnapshot.val() || {};

      Object.entries(allServicesFromDB).forEach(([key, serviceItem]) => {
        const parentIds = (serviceItem as any)[PARENT_FIELD];
        if (Array.isArray(parentIds) && parentIds.includes(id)) {
          oldSubserviceIds.push(key);
        }
      });
    }

    delete serviceDataToSave.subservices;

    if (!id) {
      const newRef = push(ref(db, "services"));
      serviceId = newRef.key!;
      serviceDataToSave.id = serviceId;
      await set(ref(db, `services/${serviceId}`), serviceDataToSave);
      setService(prev => ({ ...prev, id: serviceId }));

    } else {
      await update(ref(db, `services/${serviceId}`), serviceDataToSave);
    }

    const allIdsToUpdate = new Set([...oldSubserviceIds, ...newSubserviceIds]);

    await Promise.all(
        Array.from(allIdsToUpdate).map(async (subserviceId) => {
          const isLinking = newSubserviceIds.includes(subserviceId);
          const subRef = ref(db, `services/${subserviceId}`);
          const subSnapshot = await get(subRef);
          const subData = subSnapshot.val() || {};

          let currentParents: string[] = Array.isArray(subData[PARENT_FIELD])
              ? subData[PARENT_FIELD].filter(Boolean)
              : [];

          let updatedParents;

          if (isLinking) {
            updatedParents = Array.from(new Set([...currentParents, serviceId!])).filter(Boolean);
          } else {
            updatedParents = currentParents.filter((parentId: string) => parentId !== serviceId);
          }

          await update(subRef, {
            [PARENT_FIELD]: updatedParents.length > 0 ? updatedParents : null
          });
        })
    );

    navigate("/admin/services");
  };


  if (loading) return <p className="text-center py-10">Loading . . .</p>;


  return (
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">{id ? "Edit Service" : "Create New Service"}</h1>

        {(["title", "subtitle", "headerTitle"] as (keyof Service)[]).map(field => (
            <div key={field} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {["uk", "ru", "en", "de"].map(lang => (
                  <div key={`${field}-${lang}`} className="flex flex-col">
                    <label className="capitalize">{field} ({lang})</label>
                    <input
                        value={(service[field] as LocalizedText)?.[lang] || ""}
                        onChange={(e) => handleLocalizedChange(field, lang, e.target.value)}
                        className="border rounded p-2"
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
              value={service.slug}
              onChange={(e) => setService({ ...service, slug: e.target.value })}
              className="border rounded p-2"
          />
          {errors.slug && <span className="text-red-500 text-sm">{errors.slug}</span>}
        </div>


        {/* 🔹 Prices, Employees, Blogs, Specials */}
        <div className="mt-6 space-y-4">

          <SyncedRelationSelect<Service>
              label="Subservices"
              multiple
              value={service.subservices || []}
              options={availableSubservices}
              getLabel={(o) => String(o.title?.uk) || "Untitled Service"}
              getValue={(o) => o.id || ""}
              onChange={(v) =>
                  setService({ ...service, subservices: v })
              }
              firebasePath="services"
              parentId={service.id}
              parentFieldName="parentServiceIds"
              syncType="array"
          />

          <SyncedRelationSelect<PriceModel>
              label="Prices"
              multiple
              value={service.prices || []}
              options={relatedData.prices as PriceModel[] || []}
              getLabel={(o) => String(o.category?.uk) || "Untitled Price"}
              getValue={(o) => o.id || ""} // ID PriceModel
              onChange={(selected) => setService(prev => ({ ...prev, prices: selected }))}
              firebasePath="prices"
              parentId={service.id}
              parentFieldName="serviceIds"
              syncType="array"
          />

          <SyncedRelationSelect<Employee>
              label="Employees"
              multiple
              value={service.employees || []}
              options={relatedData.employees as Employee[] || []}
              getLabel={(o) => String(o.fullName?.uk) || "Unnamed Employee"}
              getValue={(o) => o.id || ""}
              onChange={(selected) => setService(prev => ({ ...prev, employees: selected }))}
              firebasePath="employees"
              parentId={service.id}
              syncType="none"
          />

          <SyncedRelationSelect<Blog>
              label="Blogs"
              multiple
              value={service.blogs || []}
              options={relatedData.blogs as Blog[] || []}
              getLabel={(o) => String(o.title?.uk) || "Untitled Blog"}
              getValue={(o) => o.id || ""}
              onChange={(selected) => setService(prev => ({ ...prev, blogs: selected }))}
              firebasePath="blogs"
              parentId={service.id}
              syncType="none"
          />

          <SyncedRelationSelect<Special>
              label="Specials"
              multiple
              value={service.specials || []}
              options={relatedData.specials as Special[] || []}
              getLabel={(o) => String(o.title?.uk) || "Untitled Special"}
              getValue={(o) => o.id || ""}
              onChange={(selected) => setService(prev => ({ ...prev, specials: selected }))}
              firebasePath="specials"
              parentId={service.id}
              parentFieldName="serviceId"
              syncType="array"
          />
        </div>

        {/* Main Image */}
        <div className="flex flex-col mb-4 gap-2">
          <label className="font-medium">Main Image</label>
          {service.mainImage && <img src={service.mainImage} alt="Main" className="mb-2 max-w-xs rounded-lg border border-gray-200" />}
          <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => setService((prev) => ({ ...prev, mainImage: ev.target?.result as string }));
                reader.readAsDataURL(file);
              }}
              className="border rounded-lg p-2"
          />
          <input
              type="text"
              placeholder="URL або CSS фон"
              value={service.mainImage || ""}
              onChange={(e) => setService((prev) => ({ ...prev, mainImage: e.target.value }))}
              className="border rounded-lg p-2"
          />
          {errors.mainImage && <span className="text-red-500 text-sm">{errors.mainImage}</span>}
        </div>

        {/* Content Blocks */}
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-2">Content Blocks</h2>
            {service.content?.map((block, i) => renderBlockEditor(block, i))}
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
              {service.mainImage && <img src={service.mainImage} alt="Main" className="max-w-full rounded-lg" />}
              {["uk", "ru", "en", "de"].map(lang => (
                  <div key={lang}>
                    <h1 className="text-2xl font-bold">{service.title?.[lang] || ""}</h1>
                    <h2 className="text-xl">{service.subtitle?.[lang] || ""}</h2>
                    <h3 className="text-lg">{service.headerTitle?.[lang] || ""}</h3>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
        >
          Save
        </button>
      </div>
  );
}