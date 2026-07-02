"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/auragym1.png",
    alt: "Strength training session",
    width: 800,
    height: 1000,
  },
  {
    src: "/aura-gym-6.jpg",
    alt: "Olympic lifting class",
    width: 800,
    height: 600,
  },
  { src: "/aura-gym-4.png", alt: "Group training", width: 800, height: 1100 },
  {
    src: "/aura-gym-5.jpg",
    alt: "Personal coaching",
    width: 800,
    height: 700,
  },
  { src: "/aura-gym-2.png", alt: "Cardio workout", width: 800, height: 900 },
];

export default function AboutSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null,
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null,
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      <section className="w-full  bg-black py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 items-start">
          {/* ── Left: Text Content ── */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              YOUR FITNESS GOALS,
              <br />
              OUR COMMITMENT.
            </h2>

            <p className="text-primary text-lg md:text-xl font-extrabold uppercase tracking-wide leading-snug">
              Experience premium fitness, expert coaching, and world-class
              equipment at one of the best gyms in Ludhiana.
            </p>

            <p className="text-foreground text-sm md:text-xl leading-relaxed">
              Welcome to Aura Gym, a premium fitness centre in Ludhiana built
              for individuals who are serious about transforming their health
              and lifestyle. Whether your goal is weight loss, muscle building,
              strength training, functional fitness, or improving overall
              wellness, our experienced trainers create personalized workout
              plans that help you achieve real, long-lasting results. With
              modern equipment, spacious workout zones, and a motivating
              atmosphere, Aura Gym provides everything you need to stay
              consistent and reach your fitness goals.
            </p>
          </div>

          {/* ── Right: Pinterest-style Masonry Gallery ── */}
          <div className="columns-3 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid cursor-pointer rounded-xl overflow-hidden group relative"
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Image — full natural size, constrained to viewport */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={galleryImages[lightboxIndex].width}
              height={galleryImages[lightboxIndex].height}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              quality={95}
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
            {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </>
  );
}
