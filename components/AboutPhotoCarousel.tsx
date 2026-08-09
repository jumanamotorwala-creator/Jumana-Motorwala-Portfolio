"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

interface AboutPhotoCarouselProps {
  photos: Photo[];
  intervalMs?: number;
}

export default function AboutPhotoCarousel({
  photos,
  intervalMs = 3500,
}: AboutPhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [photos.length, intervalMs]);

  return (
    // Outer wrapper: NOT overflow-hidden, so the caption chip below can
    // legitimately hang half outside the photo frame.
    <div className="relative">
      {/* Inner box: this is what clips the photos to rounded corners. */}
      <div className="relative h-64 w-full overflow-hidden rounded-card bg-lavender/20 md:h-72">
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            unoptimized
            className={`object-cover transition-opacity duration-700 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {photos.length > 1 && (
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-4 rounded-full bg-navy/70 px-2.5 py-1 text-xs font-semibold text-paper"
          >
            {activeIndex + 1} / {photos.length}
          </div>
        )}
      </div>

      {/* Caption chip lives OUTSIDE the overflow-hidden box now, in the
          exact spot + tilt the old static "Product Designer" tag used. */}
      <div
        aria-live="polite"
        className="absolute -bottom-4 -right-4 -rotate-3 rounded bg-lime px-4 py-2 shadow-md md:-bottom-5 md:-right-5"
      >
        <span className="text-sm font-bold text-navy">
          {photos[activeIndex]?.caption}
        </span>
      </div>
    </div>
  );
}