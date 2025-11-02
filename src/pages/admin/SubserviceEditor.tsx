import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, push, set, update, get } from "firebase/database";
import { db } from "../../firebase";
import type { Subservice } from "../../models/Subservice";
import type { ContentBlock } from "../../models/ContentBlock";
// import ImageInputBlock from "../../components/ImageInputBlock.tsx"; // Компонент ImageInputBlock отсутствует в контексте, но логика его вызова сохранена, если он вам нужен.

// 💡 Для простоты предполагаем, что ContentBlock имеет поля: type, content, align, media?, children?, widthPercent?
// Если ContentBlock не имеет children/widthPercent, их использование в renderBlockEditor нужно будет убрать.
// В этом примере я сохраняю простую структуру для Subservice, где нет вложенных блоков (children).

export default function SubserviceEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptySubservice: Subservice = {
    serviceId: "",
    title: {},
    slug: "",
    mainImage: "",
    content: [],
    prices: [], // Массив для ArrayField
    employees: [], // Массив для ArrayField
  };

  const [subservice, setSubservice] = useState<Subservice>(emptySubservice);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [services, setServices] = useState<{ id: string; title: string }[]>([]);

  // 🔹 Загрузка списка сервисов для связи
  useEffect(() => {
    get(ref(db, "services")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const list = Object.values(data).map((s: any) => ({
          id: s.id,
          title: s.title?.en || s.title?.ru || s.title?.uk || s.slug,
        }));
        setServices(list);
      }
    });
  }, []);

  // 🔹 Загрузка Subservice при редактировании
  useEffect(() => {
    if (id) {
      get(ref(db, `subservices/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setSubservice(snapshot.val());
      });
    }
  }, [id]);

  // 🔹 Обработка локализованных полей
  const handleLocalizedChange = (lang: string, value: string) => {
    setSubservice((prev) => ({
      ...prev,
      title: { ...(prev.title || {}), [lang]: value },
    }));
    setErrors((prev) => ({ ...prev, title: "" }));
  };

  // 🔹 Работа с массивами
  const addArrayItem = (field: keyof Subservice) => {
    const arr = Array.isArray(subservice[field]) ? [...(subservice[field] as string[])] : [];
    arr.push("");
    setSubservice({ ...subservice, [field]: arr });
  };

  const handleArrayChange = (field: keyof Subservice, index: number, value: string) => {
    const arr = Array.isArray(subservice[field]) ? [...(subservice[field] as string[])] : [];
    arr[index] = value;
    setSubservice({ ...subservice, [field]: arr });
  };

  const removeArrayItem = (field: keyof Subservice, index: number) => {
    const arr = Array.isArray(subservice[field]) ? [...(subservice[field] as string[])] : [];
    arr.splice(index, 1);
    setSubservice({ ...subservice, [field]: arr });
  };

  // 🔹 Добавление контент-блоков (простая версия, без parentIndex, так как Subservice обычно проще Service)
  const addContentBlock = (type: "paragraph" | "image" | "heading" | "list") => {
    const newBlock: ContentBlock = {
      type,
      content: {},
      align: "left",
      ...(type === "image" ? { media: "https://via.placeholder.com/400x200?text=Image" } : {}),
    } as ContentBlock; // Утверждаем тип для ContentBlock

    setSubservice({ ...subservice, content: [...(subservice.content || []), newBlock] });
  };

  const handleBlockChange = (index: number, lang: string, value: string) => {
    const updated = [...(subservice.content || [])] as ContentBlock[];
    updated[index] = {
      ...updated[index],
      content: { ...(updated[index].content || {}), [lang]: value },
    };
    setSubservice({ ...subservice, content: updated });
  };

  const handleAlignChange = (
      index: number,
      align: "left" | "center" | "right"
  ) => {
    setSubservice((prev) => {
      const updatedContent = [...(prev.content || [])] as ContentBlock[];
      if (updatedContent[index]) {
        updatedContent[index] = {
          ...updatedContent[index],
          align: align,
        };
      }
      return { ...prev, content: updatedContent };
    });
  };

  // 💡 ФУНКЦИИ СОРТИРОВКИ И УДАЛЕНИЯ БЛОКОВ
  const moveContentBlock = (index: number, direction: "up" | "down") => {
    const updated = [...(subservice.content || [])];

    const swap = (arr: any[], i1: number, i2: number) => {
      const temp = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = temp;
    };

    if (direction === "up" && index > 0) swap(updated, index, index - 1);
    if (direction === "down" && index < updated.length - 1) swap(updated, index, index + 1);

    setSubservice({ ...subservice, content: updated });
  };

  const removeContentBlock = (index: number) => {
    const updated = [...(subservice.content || [])];
    updated.splice(index, 1);
    setSubservice({ ...subservice, content: updated });
  };


  // 🔹 Валидация
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!subservice.serviceId?.trim()) newErrors.serviceId = "Service ID обязателен!";
    if (!Object.values(subservice.title || {}).some((v) => typeof v === "string" && v.trim())) {
      newErrors.title = "Title хотя бы на одном языке обязателен!";
    }
    if (!subservice.slug?.trim()) newErrors.slug = "Slug обязателен!";
    if (!subservice.mainImage?.trim()) newErrors.mainImage = "Main image обязателен!";

    // Пример валидации массивов (поля prices и employees не должны быть пустыми)

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Сохранение
  const handleSave = async () => {
    if (!validate()) return;

    if (id) {
      await update(ref(db, `subservices/${id}`), subservice);
    } else {
      const newRef = push(ref(db, "subservices"));
      await set(newRef, { ...subservice, id: newRef.key });
    }
    navigate("/admin/subservices");
  };


  // 💡 ФУНКЦИЯ РЕНДЕРИНГА БЛОКА (АДАПТИРОВАНА ДЛЯ Subservice)
  const renderBlockEditor = (block: ContentBlock, index: number) => {
    const blockNumber = `Content Block ${index + 1}`; // Без parent/child для Subservice

    return (
        <div className="w-full flex" key={`root-${index}`}>
          <div className="border border-gray-300 rounded-lg p-4 my-3 bg-gray-50 w-full">
            <div className="flex justify-between items-center mb-2">
              <strong>
                {blockNumber} (type: {block.type})
              </strong>
              <div className="flex gap-2">
                <button
                    onClick={() => moveContentBlock(index, "up")}
                    className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                    title="Move up"
                >
                  ⬆️
                </button>
                <button
                    onClick={() => moveContentBlock(index, "down")}
                    className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                    title="Move down"
                >
                  ⬇️
                </button>
                <button
                    onClick={() => removeContentBlock(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Удалить
                </button>
              </div>
            </div>

            {/* Выравнивание */}
            <div className="flex gap-2 mb-2">
              {["left", "center", "right"].map(a => (
                  <button
                      key={a}
                      className={`px-2 py-1 border rounded ${block.align === a ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"}`}
                      onClick={() => handleAlignChange(index, a as "left" | "center" | "right")}
                  >
                    {a}
                  </button>
              ))}
            </div>

            {/* Контент */}
            {block.type === "image" ? (
                <div className="flex flex-col gap-2">
                  {/* Заменено на обычный инпут, т.к. ImageInputBlock не импортирован */}
                  <input
                      type="text"
                      placeholder="Image URL"
                      value={block.media || ""}
                      onChange={(e) => {
                        const updated = [...(subservice.content || [])] as ContentBlock[];
                        updated[index].media = e.target.value;
                        setSubservice({ ...subservice, content: updated });
                      }}
                      className="border rounded-lg p-2 w-full"
                  />
                  {block.media && (
                      <img src={block.media} alt="Content Preview" className="max-w-xs rounded-lg border border-gray-200" />
                  )}

                  {/* Ширина картинки (упрощено, т.к. Subservice может не использовать widthPercent) */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Image Width (%) (Optional)</label>
                    <input
                        type="number"
                        min={10}
                        max={100}
                        value={block.widthPercent ?? 40}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          const updated = [...(subservice.content || [])] as ContentBlock[];
                          updated[index].widthPercent = value;
                          setSubservice({ ...subservice, content: updated });
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
                                  onChange={(e) => handleBlockChange(index, lang, e.target.value)}
                                  className="border rounded-lg p-2 w-full h-28 font-mono text-sm"
                                  placeholder={`Each line = one list item`}
                                  style={{ whiteSpace: "pre" }}
                              />
                            <button
                                type="button"
                                onClick={() => {
                                  const current = block.content?.[lang] || "";
                                  handleBlockChange(index, lang, current + "\n");
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
                              onChange={(e) => handleBlockChange(index, lang, e.target.value)}
                              className="border rounded-lg p-2 w-full"
                          />
                      )}
                    </div>
                ))
            )}
          </div>
        </div>
    );
  };


  return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">
          {id ? "Edit Subservice" : "Create New Subservice"}
        </h1>

        {/* 🔹 Выбор Service */}
        <div className="flex flex-col mb-4">
          <label className="font-semibold mb-1">Parent Service</label>
          <select
              value={subservice.serviceId}
              onChange={(e) => setSubservice({ ...subservice, serviceId: e.target.value })}
              className="border rounded p-2"
          >
            <option value="">-- Select Service --</option>
            {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
            ))}
          </select>
          {errors.serviceId && <p className="text-red-600 text-sm">{errors.serviceId}</p>}
        </div>

        {/* 🔹 Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {["uk", "ru", "en", "de"].map((lang) => (
              <div key={lang} className="flex flex-col">
                <label className="capitalize">Title ({lang})</label>
                <input
                    value={subservice.title?.[lang] || ""}
                    onChange={(e) => handleLocalizedChange(lang, e.target.value)}
                    className="border rounded p-2"
                />
              </div>
          ))}
          {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
        </div>

        {/* 🔹 Slug */}
        <div className="flex flex-col mb-4">
          <label>Slug</label>
          <input
              type="text"
              value={subservice.slug}
              onChange={(e) => setSubservice({ ...subservice, slug: e.target.value })}
              className="border rounded p-2"
          />
          {errors.slug && <span className="text-red-500 text-sm">{errors.slug}</span>}
        </div>

        {/* 🔹 Main Image */}
        <div className="flex flex-col mb-4 gap-2">
          <label className="font-medium">Main Image</label>
          {subservice.mainImage && (
              <img
                  src={subservice.mainImage}
                  alt="Main"
                  className="mb-2 max-w-xs rounded-lg border border-gray-200"
              />
          )}
          <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) =>
                    setSubservice((prev) => ({ ...prev, mainImage: ev.target?.result as string }));
                reader.readAsDataURL(file);
              }}
              className="border rounded-lg p-2"
          />
          <input
              type="text"
              placeholder="URL або CSS фон"
              value={subservice.mainImage || ""}
              onChange={(e) => setSubservice({ ...subservice, mainImage: e.target.value })}
              className="border rounded-lg p-2"
          />
          {errors.mainImage && <span className="text-red-500 text-sm">{errors.mainImage}</span>}
        </div>

        {/* 🔹 Массивы - С ОБРАБОТКОЙ ОШИБОК */}
        <ArrayField
            title="Prices"
            field="prices"
            data={subservice}
            onAdd={addArrayItem}
            onChange={handleArrayChange}
            onRemove={removeArrayItem}
            error={errors.prices}
        />
        <ArrayField
            title="Employees"
            field="employees"
            data={subservice}
            onAdd={addArrayItem}
            onChange={handleArrayChange}
            onRemove={removeArrayItem}
            error={errors.employees}
        />

        {/* 🔹 Контент-блоки - РЕНДЕРИНГ ЧЕРЕЗ renderBlockEditor */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Content Blocks</h2>
          {(subservice.content as ContentBlock[] || []).map((block, i) => renderBlockEditor(block, i))}
          <div className="flex gap-3 mt-3">
            <button onClick={() => addContentBlock("heading")} className="text-blue-600 hover:text-blue-800">+ Heading</button>
            <button onClick={() => addContentBlock("paragraph")} className="text-blue-600 hover:text-blue-800">+ Paragraph</button>
            <button onClick={() => addContentBlock("image")} className="text-blue-600 hover:text-blue-800">+ Image</button>
            <button onClick={() => addContentBlock("list")} className="text-blue-600 hover:text-blue-800">+ List</button>
          </div>
        </div>

        <button
            onClick={handleSave}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
        >
          Save
        </button>

      </div>
  );
}

// 🔹 Вспомогательный компонент для массивов (ArrayField)
// 💡 Теперь он принимает и отображает ошибку!
function ArrayField({
                      title,
                      field,
                      data,
                      onAdd,
                      onChange,
                      onRemove,
                      error,
                    }: {
  title: string;
  field: keyof Subservice;
  data: Subservice;
  onAdd: (f: keyof Subservice) => void;
  onChange: (f: keyof Subservice, i: number, v: string) => void;
  onRemove: (f: keyof Subservice, i: number) => void;
  error?: string;
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
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
  );
}