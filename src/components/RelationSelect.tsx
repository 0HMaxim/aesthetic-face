import React from "react";

interface RelationSelectProps<T> {
  label: string;
  value: string[];                     // выбранные ID
  options: T[];                        // список элементов
  getLabel?: (o: T) => string;         // текст отображения
  getValue?: (o: T) => string;         // ID элемента
  onChange: (v: string[]) => void;     // локальное обновление
  onSyncChange?: (v: string[]) => void; // синхронизация с Firebase
  multiple?: boolean;                  // множественный выбор
}

export default function RelationSelect<T>({
                                            label,
                                            value,
                                            options,
                                            getLabel = (o) => String(o),
                                            getValue = (o) => String(o),
                                            onChange,
                                            onSyncChange,
                                            multiple = true,
                                          }: RelationSelectProps<T>) {

  const handleCheckboxChange = (checkedId: string) => {
    let newSelected: string[];

    if (multiple) {
      // ✅ многократный выбор
      if (value.includes(checkedId)) {
        newSelected = value.filter((id) => id !== checkedId);
      } else {
        newSelected = [...value, checkedId];
      }
    } else {
      // ✅ одиночный выбор — заменяем массив
      newSelected = [checkedId];
    }

    if (onSyncChange) {
      onSyncChange(newSelected);  // Firebase + локальный стейт
    } else {
      onChange(newSelected);      // только локально
    }
  };

  const selectedValue = value || [];

  return (
      <div className="flex flex-col gap-2 my-2">
        <label className="font-medium mb-1">{label}</label>

        <div className="flex flex-col gap-1 border rounded-lg p-3 bg-white dark:bg-gray-800">
          {options.map((opt) => {
            const id = getValue(opt);
            const labelText = getLabel(opt);
            const checked = selectedValue.includes(id); // Используем selectedValue

            return (
                <label key={id} className="flex items-center gap-2 cursor-pointer">
                  <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleCheckboxChange(id)}
                      className="w-4 h-4"
                  />
                  <span>{labelText}</span>
                </label>
            );
          })}

          {options.length === 0 && (
              <p className="text-gray-400 text-sm italic">No items available</p>
          )}
        </div>
      </div>
  );
}
