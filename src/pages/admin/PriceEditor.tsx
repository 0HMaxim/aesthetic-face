import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase.ts";
import type { PriceModel } from "../../models/Price.ts";
import type { Service } from "../../models/Service.ts";
import type { Subservice } from "../../models/Subservice.ts";
import type { Special } from "../../models/Special.ts";
import RelationSelect from "../../components/RelationSelect.tsx";
import { useFetchData } from "../../hooks/useFetchData.ts";

export default function PriceEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyPrice: PriceModel = {
    category: {},
    columns: { duration: {}, procedure: {}, price: {} },
    sections: [],
  };

  const [price, setPrice] = useState<PriceModel>(emptyPrice);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 🔹 Загружаем все сущности через хук
  const { data, loading } = useFetchData(["services", "subservices", "specials", "prices"]);
  const services: Service[] = data["services"] || [];
  const subservices: Subservice[] = data["subservices"] || [];
  const specials: Special[] = data["specials"] || [];
  const prices: PriceModel[] = data["prices"] || [];

  useEffect(() => {
    if (id) {
      get(ref(db, `prices/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setPrice(snapshot.val());
      });
    }
  }, [id]);

  const langs = ["uk", "ru", "en", "de"];

  const handleLocalizedChange = (
      obj: any,
      setObj: any,
      field: keyof any,
      lang: string,
      value: string
  ) => {
    setObj({
      ...obj,
      [field]: { ...(obj[field] || {}), [lang]: value },
    });
  };

  const handleSave = async () => {
    const newErrors: { [key: string]: string } = {};

    if (!Object.values(price.category).some((v) => typeof v === "string" && v.trim()))
      newErrors.category = "Category required!";

    if (!Object.values(price.columns.duration).some((v) => typeof v === "string" && v.trim()))
      newErrors["columns.duration"] = "Duration column required!";

    if (!Object.values(price.columns.procedure).some((v) => typeof v === "string" && v.trim()))
      newErrors["columns.procedure"] = "Procedure column required!";

    if (!Object.values(price.columns.price).some((v) => typeof v === "string" && v.trim()))
      newErrors["columns.price"] = "Price column required!";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (id) {
      await update(ref(db, `prices/${id}`), price);
    } else {
      const newRef = push(ref(db, "prices"));
      await set(newRef, { ...price, id: newRef.key });
    }

    navigate("/admin/prices");
  };

  return (
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold">{id ? "Edit Price" : "Create Price"}</h1>

        {/* Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {langs.map((lang) => (
              <div key={`category-${lang}`} className="flex flex-col">
                <label>Category ({lang})</label>
                <input
                    type="text"
                    value={price.category?.[lang] || ""}
                    onChange={(e) => handleLocalizedChange(price, setPrice, "category", lang, e.target.value)}
                    className="border rounded-lg p-2"
                />
              </div>
          ))}
          {errors.category && <p className="text-red-600 col-span-2">{errors.category}</p>}
        </div>

        {/* Services */}

        <RelationSelect
            label="Services"
            multiple
            value={price.serviceIds || []}
            options={services}
            getLabel={(o) => o.title?.uk || "Unnamed"} // 👈 показываем нормальный текст
            getValue={(o) => o.id} // 👈 возвращаем ID, чтобы value сравнивался корректно
            onChange={(v) => setPrice({ ...price, serviceIds: v as string[] })}
        />

        <RelationSelect
            label="Subservices"
            multiple
            value={price.subserviceIds || []}
            options={subservices.filter(ss =>
                price.serviceIds
                    ? (Array.isArray(price.serviceIds)
                        ? price.serviceIds.includes(ss.serviceId)
                        : ss.serviceId === price.serviceIds)
                    : true
            )}
            getLabel={(o) => o.title?.uk || "Unnamed"} // 👈 аналогично
            getValue={(o) => o.id}
            onChange={(v) => setPrice({ ...price, subserviceIds: v as string[] })}
        />


        {/* Specials */}
        <RelationSelect
            label="Specials"
            multiple
            value={price.specials || []}
            options={specials.filter(sp => !price.serviceIds || sp.serviceId?.includes(price.serviceIds))}
            onChange={async (v) => {
              setPrice({ ...price, specials: v as string[] });

              // Синхронизируем serviceId для выбранных specials
              const updates: Record<string, any> = {};
              (v as string[]).forEach(spId => {
                updates[`specials/${spId}/serviceId`] = [price.serviceIds];
              });
              if (Object.keys(updates).length > 0) await update(ref(db), updates);
            }}
        />



        {/* Columns */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Columns</h2>
          {["duration", "procedure", "price"].map((col) => (
              <div key={col} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {langs.map((lang) => (
                    <div key={`${col}-${lang}`} className="flex flex-col">
                      <label>{col.charAt(0).toUpperCase() + col.slice(1)} ({lang})</label>
                      <input
                          type="text"
                          value={(price.columns as any)[col]?.[lang] || ""}
                          onChange={(e) =>
                              setPrice({
                                ...price,
                                columns: {
                                  ...price.columns,
                                  [col]: { ...price.columns[col as keyof typeof price.columns], [lang]: e.target.value },
                                },
                              })
                          }
                          className="border rounded-lg p-2"
                      />
                    </div>
                ))}
              </div>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Sections</h2>
          {price.sections.map((section, sIdx) => (
              <div key={sIdx} className="border p-4 rounded-lg space-y-4">
                {/* Subtitle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {langs.map((lang) => (
                      <div key={`subtitle-${sIdx}-${lang}`} className="flex flex-col">
                        <label>Subtitle ({lang})</label>
                        <input
                            type="text"
                            value={section.subtitle?.[lang] || ""}
                            onChange={(e) => {
                              const newSections = [...price.sections];
                              newSections[sIdx].subtitle = { ...newSections[sIdx].subtitle, [lang]: e.target.value };
                              setPrice({ ...price, sections: newSections });
                            }}
                            className="border rounded-lg p-2"
                        />
                      </div>
                  ))}
                </div>

                {/* Items */}
                <div className="space-y-2">
                  <h3 className="font-semibold">Items</h3>
                  {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="border p-2 rounded-lg space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <label>Duration</label>
                            <input
                                type="text"
                                value={item.duration || ""}
                                onChange={(e) => {
                                  const newSections = [...price.sections];
                                  newSections[sIdx].items[iIdx].duration = e.target.value;
                                  setPrice({ ...price, sections: newSections });
                                }}
                                className="border rounded-lg p-2"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label>Price</label>
                            <input
                                type="text"
                                value={item.price || ""}
                                onChange={(e) => {
                                  const newSections = [...price.sections];
                                  newSections[sIdx].items[iIdx].price = e.target.value;
                                  setPrice({ ...price, sections: newSections });
                                }}
                                className="border rounded-lg p-2"
                            />
                          </div>
                        </div>

                        {/* Procedure */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {langs.map((lang) => (
                              <div key={`procedure-${sIdx}-${iIdx}-${lang}`} className="flex flex-col">
                                <label>Procedure ({lang})</label>
                                <input
                                    type="text"
                                    value={item.procedure?.[lang] || ""}
                                    onChange={(e) => {
                                      const newSections = [...price.sections];
                                      newSections[sIdx].items[iIdx].procedure = {
                                        ...newSections[sIdx].items[iIdx].procedure,
                                        [lang]: e.target.value,
                                      };
                                      setPrice({ ...price, sections: newSections });
                                    }}
                                    className="border rounded-lg p-2"
                                />
                              </div>
                          ))}
                        </div>

                        {/* Remove item */}
                        <button
                            onClick={() => {
                              if (confirm("Remove this item?")) {
                                const newSections = [...price.sections];
                                newSections[sIdx].items.splice(iIdx, 1);
                                setPrice({ ...price, sections: newSections });
                              }
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition mt-1"
                        >
                          Remove Item
                        </button>
                      </div>
                  ))}

                  {/* Add item */}
                  <button
                      onClick={() => {
                        const newSections = [...price.sections];
                        newSections[sIdx].items.push({ duration: "", procedure: {}, price: "" });
                        setPrice({ ...price, sections: newSections });
                      }}
                      className="text-blue-600 mt-1"
                  >
                    + Add Item
                  </button>
                </div>

                {/* Remove section */}
                <button
                    onClick={() => {
                      if (confirm("Remove this section?")) {
                        const newSections = [...price.sections];
                        newSections.splice(sIdx, 1);
                        setPrice({ ...price, sections: newSections });
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition mt-2"
                >
                  Remove Section
                </button>
              </div>
          ))}

          {/* Add section */}
          <button
              onClick={() => setPrice({ ...price, sections: [...price.sections, { subtitle: {}, items: [] }] })}
              className="text-blue-600 mt-2"
          >
            + Add Section
          </button>
        </div>

        <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
        >
          Save
        </button>
      </div>
  );
}
