import React, { useState, useEffect } from "react";

interface ProjectImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  category?: string;
  title: string;
}

export function ProjectImage({
  src,
  alt,
  category,
  title,
  className,
  ...props
}: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true);
      const lowerTitle = title.toLowerCase();
      const lowerCat = category?.toLowerCase() || "";

      if (
        lowerTitle.includes("wealth") ||
        lowerTitle.includes("finance") ||
        lowerCat.includes("finance")
      ) {
        // Finance fallback
        setImgSrc(
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
        );
      } else if (
        lowerTitle.includes("crop") ||
        lowerTitle.includes("farm") ||
        lowerTitle.includes("agri")
      ) {
        // Agriculture fallback
        setImgSrc(
          "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
        );
      } else if (
        lowerTitle.includes("study") ||
        lowerTitle.includes("tutor") ||
        lowerTitle.includes("learn") ||
        lowerTitle.includes("edu") ||
        lowerCat.includes("academic") ||
        lowerCat.includes("education")
      ) {
        // Education fallback
        setImgSrc(
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80",
        );
      } else {
        // Default AI fallback (using neural network/AI dashboard concept)
        setImgSrc(
          "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
        );
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-black/60 overflow-hidden flex items-center justify-center">
      {hasFailed && imgSrc?.startsWith("http") ? (
        <img
          src={imgSrc}
          alt={alt}
          className={className}
          onError={() => {
            // Second level fallback (offline/multiple failures)
            setImgSrc("");
          }}
          {...props}
        />
      ) : imgSrc ? (
        <img src={imgSrc} alt={alt} className={className} onError={handleError} {...props} />
      ) : (
        // Premium CSS gradient fallback card (gold-themed)
        <div className="w-full h-full bg-gradient-to-br from-[rgba(20,20,20,0.95)] to-[rgba(10,10,10,0.95)] border border-[rgba(212,160,23,0.15)] flex flex-col items-center justify-center p-4 select-none">
          <div className="p-3 bg-gold/5 border border-gold/15 rounded-2xl text-gold/70 mb-2">
            <span className="text-xl">✨</span>
          </div>
          <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">
            {category || "Project"}
          </p>
          <p className="text-xs text-muted-foreground font-semibold mt-1.5 text-center line-clamp-1 px-4">
            {title}
          </p>
        </div>
      )}
    </div>
  );
}
