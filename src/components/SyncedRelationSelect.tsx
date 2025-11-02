import { update, ref } from "firebase/database";
import { db } from "../firebase.ts";
import RelationSelect from "./RelationSelect.tsx"; // 🔹 импорт RelationSelect

interface SyncedRelationSelectProps<T> {
  label: string;
  value: string[];
  options: T[];
  getLabel?: (o: T) => string;
  getValue?: (o: T) => string;
  onChange: (v: string[]) => void;
  firebasePath: string; // путь в базе, напр. "subservices" или "specials"
  parentId?: string;    // id родителя для связи, напр. service.id
}

export function SyncedRelationSelect<T>({
                                          label,
                                          value,
                                          options,
                                          getLabel,
                                          getValue,
                                          onChange,
                                          firebasePath,
                                          parentId,
                                        }: SyncedRelationSelectProps<T>) {
  const handleSyncChange = async (selectedIds: string[]) => {
    const prevIds = value || [];
    const added = selectedIds.filter((id) => !prevIds.includes(id));
    const removed = prevIds.filter((id) => !selectedIds.includes(id));

    const updates: Record<string, any> = {};

    added.forEach((id) => {
      updates[`${firebasePath}/${id}/serviceId`] = parentId || "";
    });
    removed.forEach((id) => {
      updates[`${firebasePath}/${id}/serviceId`] = null;
    });

    if (Object.keys(updates).length > 0) {
      await update(ref(db), updates);
    }

    onChange(selectedIds);
  };

  return (
      <RelationSelect
          label={label}
          multiple
          value={value}
          options={options}
          getLabel={getLabel}
          getValue={getValue}
          onChange={onChange} // локальное обновление
          onSyncChange={handleSyncChange} // синхронизация с Firebase
      />
  );
}
