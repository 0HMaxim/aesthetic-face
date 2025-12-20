// components/TopImage.tsx
import React from 'react';

interface TopImageProps {
  source: string;
  type?: 'image' | 'video'; // 'image' по умолчанию
}

export const TopImage: React.FC<TopImageProps> = ({ source, type = 'image' }) => {
  // Базовые стили для контейнера
  const containerClasses = "relative w-full h-[15rem] flex items-center justify-center";

  return (
      <div className={containerClasses}>
        {type === 'video' ? (
            <video
                className="absolute inset-0 w-full h-full object-cover blur-[0.5rem]"
                src={source}
                autoPlay
                loop
                muted
            />
        ) : (
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center blur-[0.5rem]"
                style={{ backgroundImage: `url(${source})` }}
            />
        )}
      </div>
  );
};