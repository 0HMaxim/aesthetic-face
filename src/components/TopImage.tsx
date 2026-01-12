// components/TopImage.tsx
import React from 'react';

interface TopImageProps {
  source?: string;
}

export const TopImage: React.FC<TopImageProps> = ({ source }) => {
  if (!source) {
    return <div className="relative w-full h-[30vh] md:h-[50vh] bg-gray-200 animate-pulse" />;
  }

  const isDirectVideo = source?.match(/\.(mp4|webm|ogg|mov)$/i);
  const isYouTube = source?.includes('youtube.com') || source?.includes('youtu.be');

  const containerClasses = "relative w-full h-[30vh] md:h-[20vh] flex items-center justify-center overflow-hidden bg-gray-900";

  return (
      <div className={containerClasses}>
        {isDirectVideo ? (
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={source}
                autoPlay
                loop
                muted
                playsInline
            />
        ) : isYouTube ? (
            <iframe
                className="absolute inset-0 w-full h-[150%] top-[-25%] pointer-events-none"
                src={`https://www.youtube.com/embed/${getYouTubeID(source)}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeID(source)}&controls=0&showinfo=0&rel=0`}
                allow="autoplay; encrypted-media"
                frameBorder="0"
            />
        ) : (
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${source})` }}
            />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>
  );
};

function getYouTubeID(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}