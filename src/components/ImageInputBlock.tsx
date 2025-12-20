
interface ImageInputBlockProps {
  image: string;
  onChange: (value: string) => void;
}

export default function ImageInputBlock({ image, onChange }: ImageInputBlockProps) {
  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      onChange(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
      <div className="border rounded-lg p-2 flex flex-col gap-2 bg-gray-50">
        {image && (
            <img
                src={image}
                alt="Uploaded"
                className="max-w-xs rounded-lg border border-gray-300"
            />
        )}

        <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
            className="border rounded-lg p-2"
        />

        <input
            type="text"
            placeholder="URL или CSS фон (например, linear-gradient(...))"
            value={image ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className="border rounded-lg p-2"
        />
      </div>
  );
}
