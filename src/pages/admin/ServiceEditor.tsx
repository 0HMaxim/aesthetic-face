import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase";
import type { Service } from "../../models/Service";
import type { LocalizedText } from "../../models/LocalizedText";
import type { ContentBlock } from "../../models/ContentBlock";
import ImageInputBlock from "../../components/ImageInputBlock.tsx";

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
    serviceId: [],
    subservicesId: [],
    specials: [],
  };

  const [service, setService] = useState<Service>(emptyService);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 🔹 Загрузка сервиса
  useEffect(() => {
    if (id) {
      get(ref(db, `services/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setService(snapshot.val());
      });
    }
  }, [id]);

  // 🔹 Локализованные поля
  const handleLocalizedChange = (field: keyof Service, lang: string, value: string) => {
    setService((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // 🔹 Обработка массивов
  const addArrayItem = (field: keyof Service) => {
    const arr = Array.isArray(service[field]) ? [...(service[field] as string[])] : [];
    arr.push("");
    setService({ ...service, [field]: arr });
  };

  const handleArrayChange = (field: keyof Service, index: number, value: string) => {
    const arr = Array.isArray(service[field]) ? [...(service[field] as string[])] : [];
    arr[index] = value;
    setService({ ...service, [field]: arr });
  };

  const removeArrayItem = (field: keyof Service, index: number) => {
    const arr = Array.isArray(service[field]) ? [...(service[field] as string[])] : [];
    arr.splice(index, 1);
    setService({ ...service, [field]: arr });
  };

  // 🔹 Контент-блоки (упрощённо, без изменений)
  const addContentBlock = (type: "paragraph" | "image" | "heading" | "list") => {
    const newBlock: ContentBlock = {
      type,
      content: {},
      align: "left",
      ...(type === "image" ? { media: "https://via.placeholder.com/400x200?text=Image" } : {}),
    };
    setService({ ...service, content: [...(service.content || []), newBlock] });
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




  // 🔹 Валидация
  const validate = () => {
    const newErrors: { [key in keyof Service]?: string } = {};
    if (!Object.values(service.title || {}).some((v) => v?.trim())) {
      newErrors.title = "Title хотя бы на одном языке обязателен!";
    }
    if (!service.slug?.trim()) newErrors.slug = "Slug обязателен!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Сохранение
  const handleSave = async () => {
    if (!validate()) return;
    if (id) {
      await update(ref(db, `services/${id}`), service);
    } else {
      const newRef = push(ref(db, "services"));
      await set(newRef, { ...service, id: newRef.key });
    }
    navigate("/admin/services");
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
                      image={typeof block.media === "string" ? block.media : ""}
                      onChange={(value) => {
                        const updated = [...(service.content || [])];
                        if (typeof parentIndex === "number")
                          updated[parentIndex].children![index].media = value;
                        else updated[index].media = value;
                        setService({ ...service, content: updated });
                      }}
                  />

                  {/* опционально: ширина картинки */}
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1">
                      <input
                          type="checkbox"
                          checked={block.customWidth || false}
                          onChange={(e) => {
                            const updated = [...(service.content || [])];
                            if (typeof parentIndex === "number")
                              updated[parentIndex].children![index].customWidth = e.target.checked;
                            else updated[index].customWidth = e.target.checked;
                            setService({ ...service, content: updated });
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
                          setService({ ...blog, content: updated });
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
        <h1 className="text-2xl font-semibold mb-4">
          {id ? "Edit Service" : "Create New Service"}
        </h1>

        {/* 🔹 Title / Subtitle / HeaderTitle */}
        {["title", "subtitle", "headerTitle"].map((field) => (
            <div key={field} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {["uk", "ru", "en", "de"].map((lang) => (
                  <div key={`${field}-${lang}`} className="flex flex-col">
                    <label className="capitalize">
                      {field} ({lang})
                    </label>
                    <input
                        type="text"
                        value={(service[field] as LocalizedText)?.[lang] || ""}
                        onChange={(e) => handleLocalizedChange(field as keyof Service, lang, e.target.value)}
                        className={`border rounded p-2 ${errors[field] ? "border-red-600" : ""}`}
                    />
                  </div>
              ))}
            </div>
        ))}

        {/* 🔹 Slug */}
        <div className="flex flex-col mb-4">
          <label>Slug</label>
          <input
              type="text"
              value={service.slug}
              onChange={(e) => setService({ ...service, slug: e.target.value })}
              className="border rounded p-2"
          />
        </div>

        {/* 🔹 Main Image */}
        <div className="flex flex-col mb-4 gap-2">
          <label className="font-medium">Main Image</label>

          {/* превью картинки */}
          {service.mainImage && (
              <img
                  src={service.mainImage}
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
                  setService((prev) => ({
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
              value={service.mainImage || ""}
              onChange={(e) =>
                  setService((prev) => ({
                    ...prev,
                    mainImage: e.target.value,
                  }))
              }
              className="border rounded-lg p-2"
          />
        </div>



        {/* 🔹 Связи */}
        <ArrayField
            title="Subservice IDs"
            field="subservicesId"
            data={service}
            onAdd={addArrayItem}
            onChange={handleArrayChange}
            onRemove={removeArrayItem}
        />
        <ArrayField
            title="Specials"
            field="specials"
            data={service}
            onAdd={addArrayItem}
            onChange={handleArrayChange}
            onRemove={removeArrayItem}
        />

        {/* 🔹 Employees */}
        <ArrayField
            title="Employees"
            field="employees"
            data={service}
            onAdd={addArrayItem}
            onChange={handleArrayChange}
            onRemove={removeArrayItem}
        />

        <ArrayField
            title="Blogs"
            field="blogs"
            data={service}
            onAdd={addArrayItem}
            onChange={handleArrayChange}
            onRemove={removeArrayItem}
        />

        Services

        {/* 🔹 Content */}
        {/* Content Blocks */}
        <div className="mb-4">
          <div className="w-full flex">
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

// 🔹 Вспомогательный компонент для массивов
function ArrayField({
                      title,
                      field,
                      data,
                      onAdd,
                      onChange,
                      onRemove,
                    }: {
  title: string;
  field: keyof Service;
  data: Service;
  onAdd: (f: keyof Service) => void;
  onChange: (f: keyof Service, i: number, v: string) => void;
  onRemove: (f: keyof Service, i: number) => void;
}) {
  return (
      <div className="mb-4">
        <label className="font-semibold">{title}</label>
        {Array.isArray(data[field]) &&
            (data[field] as string[]).map((item, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                      value={item}
                      onChange={(e) => onChange(field, idx, e.target.value)}
                      className="border rounded p-2 flex-1"
                  />
                  <button
                      onClick={() => onRemove(field, idx)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                </div>
            ))}
        <button onClick={() => onAdd(field)} className="text-blue-600">
          + Add {title}
        </button>
      </div>
  );
}
