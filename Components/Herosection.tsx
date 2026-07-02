import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function Hero() {
  return (
    <section className="relative pt-48 w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image via Next.js Image */}
      <Image
        src="/auragym1.png" // Replace with your actual image path
        alt="Aura Gym – Premium Fitness Centre Ludhiana"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      <div className="absolute inset-0" />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 w-full px-8 md:pl-16 lg:pl-24 xl:pl-32 py-24">
        <div className="max-w-xl flex flex-col gap-5">
          {/* Eyebrow */}
          <p
            className={`${bebas.className} text-md md:text-lg font-bold tracking-[0.2em] uppercase text-foreground`}
          >
            BUILD YOUR STRONGEST SELF
          </p>

          {/* Gym Name */}
          <h1
            className={`${bebas.className} text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none`}
          >
            Aura Gym
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-snug">
            Transform your body, build confidence, and train with world-class
            equipment across Aura Gym&apos;s premium fitness centers in
            Ludhiana.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Button
              asChild
              className="
      h-16
      rounded-full
      bg-primary
      px-10
      text-xl
      font-semibold
      text-primary-foreground
      shadow-xl
      transition-all
      duration-300
      hover:scale-105
      hover:bg-primary
      hover:shadow-2xl
    "
            >
              <a href="/free-intro" className="flex items-center gap-4">
                Book a Free Intro
                <ArrowRight
                  className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
