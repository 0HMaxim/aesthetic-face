import { update, ref, get } from "firebase/database";
import { db } from "../firebase";
import RelationSelect from "./RelationSelect";

export interface SyncedRelationSelectProps<T> {
  label: string;
  value: string[];
  options: T[];
  getLabel: (o: T) => string;
  getValue: (o: T) => string;

  multiple?: boolean;

  // локальное обновление
  onChange: (v: string[]) => void;

  // firebase sync
  firebasePath?: string;
  parentId?: string;
  parentFieldName?: string;
  syncType?: "array" | "string" | "none";

  // ручная синхронизация (допускается)
  onSyncChange?: (v: string[]) => void;
}

export function SyncedRelationSelect<T>({
                                          label,
                                          value,
                                          options,
                                          getLabel,
                                          getValue,
                                          onChange,
                                          multiple = true,
                                          firebasePath,
                                          parentId,
                                          parentFieldName,
                                          syncType = "none",

                                          onSyncChange
                                        }: SyncedRelationSelectProps<T>) {

  const handleChange = async (selectedIds: string[]) => {
    onChange(selectedIds);

    // Если пользователь сам передал onSyncChange — вызываем
    if (onSyncChange) {
      onSyncChange(selectedIds);
      return;
    }

    // firebase sync отключена
    if (
        syncType === "none" ||
        !firebasePath ||
        !parentId ||
        !parentFieldName
    )
      return;

    const snapshot = await get(ref(db, firebasePath));
    const allRelated = snapshot.exists() ? snapshot.val() : {};

    const updates: Record<string, any> = {};

    Object.keys(allRelated).forEach((relatedId) => {
      const isSelected = selectedIds.includes(relatedId);

      if (syncType === "array") {
        const arr: string[] = allRelated[relatedId][parentFieldName] || [];

        if (isSelected && !arr.includes(parentId)) {
          updates[`${firebasePath}/${relatedId}/${parentFieldName}`] = [
            ...arr,
            parentId
          ];
        }

        if (!isSelected && arr.includes(parentId)) {
          updates[`${firebasePath}/${relatedId}/${parentFieldName}`] =
              arr.filter((id) => id !== parentId);
        }
      }

      if (syncType === "string") {
        if (isSelected) {
          updates[`${firebasePath}/${relatedId}/${parentFieldName}`] = parentId;
        } else {
          if (allRelated[relatedId][parentFieldName] === parentId) {
            updates[`${firebasePath}/${relatedId}/${parentFieldName}`] = null;
          }
        }
      }
    });

    if (Object.keys(updates).length) {
      await update(ref(db), updates);
    }
  };

  return (
      <RelationSelect
          label={label}
          multiple={multiple}
          value={value}
          options={options}
          getLabel={getLabel}
          getValue={getValue}
          onChange={handleChange}
      />
  );
}
