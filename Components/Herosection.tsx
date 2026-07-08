import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export default function Hero() {
  return (
    <section
      className={`${barlow.className} relative w-full min-h-[90vh] flex items-center overflow-hidden`}
    >
      {/* Background Image via Next.js Image */}
      <Image
        src="/ansal/DSC04423.JPG" // Replace with your actual image path
        alt="Aura Gym – Premium Fitness Centre Ludhiana"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0" />

      {/* <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/30 to-transparent" /> */}

      <div className="relative z-10 w-full pl-4 pr-4 md:pl-16 lg:pl-18 xl:pl-20">
        <div className="max-w-3xl md:min-h-[90vh] flex flex-col gap-6 bg-black/60 rounded-3xl border border-foreground/10 p-10 md:p-20 justify-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Eyebrow */}
          <p
            className={`text-md md:text-lg font-bold tracking-[0.2em] uppercase text-foreground`}
          >
            BUILD YOUR STRONGEST SELF
          </p>

          {/* Gym Name */}
          <h1
            className={`text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none`}
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
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-300"
            >
              {/* Left Red Part */}
              <span
                className="
        flex h-14 items-center justify-center
        bg-primary px-8
        text-lg font-bold uppercase tracking-[0.18em]
        text-white
        transition-all duration-300
        group-hover:px-10
      "
              >
                Join Aura
              </span>

              {/* Right White Part */}
              <span
                className="
        flex h-14 w-14 items-center justify-center
        bg-white
        transition-colors duration-300
        group-hover:bg-zinc-100
      "
              >
                <ArrowUpRight
                  className="
          h-7 w-7 text-black
          transition-transform duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
