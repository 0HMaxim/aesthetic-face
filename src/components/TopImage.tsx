// components/TopImage.tsx
import React from 'react';

interface TopImageProps {
  source?: string;
  height?: string;
}

export const TopImage: React.FC<TopImageProps> = ({ source, height = "h-[15rem]" }) => {
  const hasSource = source && source.trim() !== "";

  const containerClasses = `relative w-full ${height} flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900`;

  const isDirectVideo = hasSource && source?.match(/\.(mp4|webm|ogg|mov)$/i);
  const isYouTube = hasSource && (source?.includes('youtube.com') || source?.includes('youtu.be'));

  return (
      <div className={containerClasses}>
        {hasSource ? (
            <>
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
                      title="Background Video"
                  />
              ) : (
                  <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${source})` }}
                  />
              )}
              {/* Затемнение для читаемости текста поверх картинки */}
              <div className="absolute inset-0 bg-black/20" />
            </>
        ) : (
            /* Контент-заглушка, когда картинки нет */
            <div className="flex flex-col items-center opacity-20">
              <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest">No Header Image</span>
            </div>
        )}
      </div>
  );
};

function getYouTubeID(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}