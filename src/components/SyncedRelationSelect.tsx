import { update, ref, get } from "firebase/database";
import { db } from "../firebase.ts";
import RelationSelect from "./RelationSelect.tsx"; // 🔹 импорт RelationSelect
import type { RelationSelectProps } from "./RelationSelect"; // Если у вас есть интерфейс для RelationSelect

// Обновленный интерфейс SyncedRelationSelectProps
interface SyncedRelationSelectProps<T> {
  label: string;
  value: string[];
  options: T[];
  getLabel: (o: T) => string;
  getValue: (o: T) => string;
  onChange: (v: string[]) => void;
  firebasePath: string;
  parentId?: string;
  parentFieldName?: string; // Например, 'serviceIds'
  syncType: 'array' | 'string' | 'none'; // Как синхронизировать
}

export function SyncedRelationSelect<T>({
                                          // ⭐️ ИСПРАВЛЕНО: Полная деструктуризация всех пропсов
                                          label,
                                          value,
                                          options,
                                          getLabel,
                                          getValue,
                                          onChange,
                                          firebasePath,
                                          parentId,
                                          parentFieldName,
                                          syncType
                                        }: SyncedRelationSelectProps<T>) {

  const handleChange = async (selectedIds: string[]) => {
    // 🔹 1. Локальное обновление состояния немедленно
    onChange(selectedIds);

    // 🔹 2. Проверка, нужна ли синхронизация
    if (syncType === 'none' || !parentId || !firebasePath || !parentFieldName) {
      return;
    }

    // 3. Получаем текущее состояние ВСЕХ связанных объектов
    const snapshot = await get(ref(db, firebasePath));
    const allRelated: Record<string, any> = snapshot.exists() ? snapshot.val() : {};

    const updates: Record<string, any> = {};

    // 4. Обновляем все связанные объекты в коллекции
    Object.keys(allRelated).forEach(relatedId => {
      const isSelected = selectedIds.includes(relatedId);

      if (syncType === 'array') {
        // --- ЛОГИКА ДЛЯ МАССИВА (например, prices -> serviceIds) ---
        const currentParentIds: string[] = allRelated[relatedId][parentFieldName] || [];

        if (isSelected && !currentParentIds.includes(parentId)) {
          // Добавить ID родителя в массив
          updates[`${firebasePath}/${relatedId}/${parentFieldName}`] = [
            ...currentParentIds.filter(id => id !== parentId),
            parentId
          ];
        } else if (!isSelected && currentParentIds.includes(parentId)) {
          // Удалить ID родителя из массива
          updates[`${firebasePath}/${relatedId}/${parentFieldName}`] =
              currentParentIds.filter(id => id !== parentId);
        }

      } else if (syncType === 'string') {
        // --- ЛОГИКА ДЛЯ СТРОКИ (например, subservices -> serviceId) ---
        if (isSelected) {
          // Установить строковое поле на ID родителя
          updates[`${firebasePath}/${relatedId}/${parentFieldName}`] = parentId;
        } else if (allRelated[relatedId][parentFieldName] === parentId) {
          // Если поле равно ID родителя, то удалить его (установить в null)
          updates[`${firebasePath}/${relatedId}/${parentFieldName}`] = null;
        }
      }
    });

    // 5. Выполняем массовое обновление в Firebase
    if (Object.keys(updates).length) {
      await update(ref(db), updates);
    }
  };


  return (
      <RelationSelect
          label={label} // ✅ Теперь определено
          multiple
          value={value} // ✅ Теперь определено
          options={options} // ✅ Теперь определено
          getLabel={getLabel} // ✅ Теперь определено
          getValue={getValue} // ✅ Теперь определено
          onChange={handleChange}
          onSyncChange={undefined}
      />
  );
}