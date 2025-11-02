import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, get, push, set, update } from "firebase/database";
import { db } from "../../firebase";
import type { LocalizedText } from "../../models/LocalizedText";
import type {Photo} from "../../models/Photo.ts";

export default function PhotoEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyPhoto: Photo = {
    mainImage: "",
    title: {},
    description: {},
    imgArr: [],
  };

  const [photo, setPhoto] = useState<Photo>(emptyPhoto);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 🔹 Загрузка фото
  useEffect(() => {
    if (id) {
      get(ref(db, `photos/${id}`)).then((snapshot) => {
        if (snapshot.exists()) setPhoto(snapshot.val());
      });
    }
  }, [id]);

  // 🔹 Локализованный ввод
  const handleLocalizedChange = (field: keyof Photo, lang: string, value: string) => {
    setPhoto((prev) => ({
      ...prev,
      [field]: { ...(prev[field] as LocalizedText), [lang]: value },
    }));
  };

  // 🔹 Добавление подфото
  const addImageItem = () => {
    const arr = [...(photo.imgArr || [])];
    arr.push({ src: "", title: {}, description: {} });
    setPhoto({ ...photo, imgArr: arr });
  };

  // 🔹 Удаление подфото
  const removeImageItem = (index: number) => {
    const arr = [...(photo.imgArr || [])];
    arr.splice(index, 1);
    setPhoto({ ...photo, imgArr: arr });
  };

  // 🔹 Изменение подфото
  const handleImageChange = (index: number, value: string) => {
    const arr = [...(photo.imgArr || [])];
    arr[index].src = value;
    setPhoto({ ...photo, imgArr: arr });
  };

  // 🔹 Изменение локализованного текста для подфото
  const handleImageLocalizedChange = (
      index: number,
      field: "title" | "description",
      lang: string,
      value: string
  ) => {
    const arr = [...(photo.imgArr || [])];
    arr[index][field] = { ...(arr[index][field] || {}), [lang]: value };
    setPhoto({ ...photo, imgArr: arr });
  };

  // 🔹 Валидация
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Проверка title
    if (
        !Object.values(photo.title || {}).some((v) => {
          if (typeof v === "string") return v.trim() !== "";
          if (Array.isArray(v)) return v.some((s) => s.trim() !== "");
          return false;
        })
    ) {
      newErrors.title = "Title хотя бы на одном языке обязателен!";
    }

    // Проверка mainImage
    if (!photo.mainImage?.trim()) newErrors.mainImage = "Main image обязательна!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // 🔹 Сохранение
  const handleSave = async () => {
    if (!validate()) return;

    if (id) {
      await update(ref(db, `photos/${id}`), photo);
    } else {
      const newRef = push(ref(db, "photos"));
      await set(newRef, { ...photo, id: newRef.key });
    }
    navigate("/admin/photos");
  };

  return (
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">
          {id ? "Edit Photo" : "Create New Photo"}
        </h1>

        {/* 🔹 Title */}
        <LocalizedField
            title="Title"
            value={photo.title || {}}
            onChange={(lang, val) => handleLocalizedChange("title", lang, val)}
            error={errors.title}
        />

        {/* 🔹 Description */}
        <LocalizedField
            title="Description"
            value={photo.description || {}}
            onChange={(lang, val) => handleLocalizedChange("description", lang, val)}
        />

        {/* 🔹 Main Image */}
        <div className="flex flex-col mb-6 gap-2">
          <label className="font-semibold">Main Image</label>
          {photo.mainImage && (
              <img
                  src={photo.mainImage}
                  alt="Main"
                  className="max-w-xs mb-2 rounded-lg border border-gray-200"
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
                    setPhoto((prev) => ({ ...prev, mainImage: ev.target?.result as string }));
                reader.readAsDataURL(file);
              }}
              className="border rounded-lg p-2"
          />
          <input
              type="text"
              placeholder="URL або CSS фон"
              value={photo.mainImage || ""}
              onChange={(e) => setPhoto({ ...photo, mainImage: e.target.value })}
              className={`border rounded-lg p-2 ${errors.mainImage ? "border-red-600" : ""}`}
          />
        </div>

        {/* 🔹 Подфото */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Sub Photos</h2>
          {photo.imgArr?.map((item, i) => (
              <div key={i} className="border rounded-lg p-4 mb-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <strong>Photo #{i + 1}</strong>
                  <button
                      onClick={() => removeImageItem(i)}
                      className="text-red-600 hover:underline"
                  >
                    Удалить
                  </button>
                </div>

                {/* Изображение */}
                <div className="flex flex-col gap-2 mb-3">
                  {item.src && (
                      <img
                          src={item.src}
                          alt={`sub-${i}`}
                          className="max-w-xs rounded-lg border border-gray-200"
                      />
                  )}
                  <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (ev) => handleImageChange(i, ev.target?.result as string);
                        reader.readAsDataURL(file);
                      }}
                      className="border rounded-lg p-2"
                  />
                  <input
                      type="text"
                      placeholder="URL картинки"
                      value={item.src || ""}
                      onChange={(e) => handleImageChange(i, e.target.value)}
                      className="border rounded-lg p-2"
                  />
                </div>

                {/* Title / Description локализовано */}
                <LocalizedField
                    title="Photo Title"
                    value={item.title || {}}
                    onChange={(lang, val) => handleImageLocalizedChange(i, "title", lang, val)}
                />
                <LocalizedField
                    title="Photo Description"
                    value={item.description || {}}
                    onChange={(lang, val) => handleImageLocalizedChange(i, "description", lang, val)}
                />
              </div>
          ))}
          <button onClick={addImageItem} className="text-blue-600">
            + Add Sub Photo
          </button>
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

// 🔹 Локализованное поле
function LocalizedField({
                          title,
                          value,
                          onChange,
                          error,
                        }: {
  title: string;
  value: LocalizedText;
  onChange: (lang: string, val: string) => void;
  error?: string;
}) {
  return (
      <div className="mb-4">
        <label className="font-semibold">{title}</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {["uk", "ru", "en", "de"].map((lang) => (
              <div key={lang} className="flex flex-col">
                <label className="text-sm mb-1">{lang.toUpperCase()}</label>
                <input
                    type="text"
                    value={value?.[lang] || ""}
                    onChange={(e) => onChange(lang, e.target.value)}
                    className={`border rounded p-2 ${error ? "border-red-600" : ""}`}
                    placeholder={`${title} (${lang})`}
                />
              </div>
          ))}
        </div>
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
  );
}
