"use client";

import { useState, useEffect, useCallback } from "react";
import { Barlow } from "next/font/google";
import { PT_Sans } from "next/font/google";
import ImageCarousel from "./ui/ImageCarousal";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const galleryImages = [
  {
    src: "/ansal/DSC04440.JPG",
    alt: "Strength training session",
    width: 800,
    height: 1000,
  },
  {
    src: "/ansal/DSC04420.JPG",
    alt: "Olympic lifting class",
    width: 800,
    height: 600,
  },
  {
    src: "/ansal/DSC04389.JPG",
    alt: "Personal coaching",
    width: 800,
    height: 700,
  },
  {
    src: "/ansal/DSC04425.JPG",
    alt: "Group training",
    width: 800,
    height: 1100,
  },
  {
    src: "/ansal/DSC04405.JPG",
    alt: "Cardio workout",
    width: 800,
    height: 900,
  },
  {
    src: "/ansal/DSC04385.JPG",
    alt: "Cardio workout",
    width: 800,
    height: 900,
  },
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
      <section className="w-full  bg-black/20 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 items-start">
          {/* ── Left: Text Content ── */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            <h2
              className={`${barlow.className} text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight`}
            >
              YOUR FITNESS GOALS,
              <br />
              OUR COMMITMENT.
            </h2>

            <h3
              className={`${barlow.className} text-primary text-lg md:text-xl font-extrabold uppercase tracking-wide leading-snug`}
            >
              Experience premium fitness, expert coaching, and world-class
              equipment at one of the best gyms in Ludhiana.
            </h3>

            <p
              className={`${ptSans.className} text-foreground text-sm md:text-xl leading-relaxed`}
            >
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
          <ImageCarousel images={galleryImages} />
        </div>
      </section>
    </>
  );
}
