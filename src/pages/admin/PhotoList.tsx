import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import SolarPowerBold from "~icons/solar/power-bold";
import { db } from "../../firebase.ts";
import type { Photo } from "../../models/Photo.ts";

export default function PhotoList() {
  const [photos, setPhotos] = useState<Record<string, Photo>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const photoRef = ref(db, "photos");
    const unsubscribe = onValue(photoRef, (snapshot) => {
      const data = snapshot.val();
      // ✅ Проверяем тип, чтобы не было undefined/null/array
      if (data && typeof data === "object" && !Array.isArray(data)) {
        setPhotos(data);
      } else {
        setPhotos({});
      }
    });
    return () => unsubscribe();
  }, []);

  const photoEntries = Object.entries(photos || {});

  return (
      <div className="p-6">
        {/* Заголовок + кнопка */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Photos</h1>

          <button
              onClick={() => navigate("/admin/photos/new")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
            <span className="hidden md:block">New Photo</span>
          </button>
        </div>

        {/* Список фото */}
        <div className="space-y-3">
          {photoEntries.length > 0 ? (
              photoEntries.map(([key, photo]) => (
                  <div
                      key={key}
                      className="p-4 border rounded-xl hover:bg-gray-50 cursor-pointer transition"
                      onClick={() => navigate(`/admin/photos/${key}`)}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      {photo.mainImage ? (
                          <img
                              src={photo.mainImage}
                              className="w-32 h-32 object-cover rounded-lg"
                          />
                      ) : (
                          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                            No image
                          </div>
                      )}

                      <div className="flex-1">
                        <h2 className="font-semibold text-lg">
                          {typeof photo.title?.en === "string" ? photo.title.en : "No title"}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {typeof photo.description === "string"
                              ? photo.description
                              : photo.description?.en || "No description"}
                        </p>
                      </div>
                    </div>
                  </div>
              ))
          ) : (
              <p className="text-gray-500 text-center">No photos found.</p>
          )}
        </div>
      </div>
  );
}
