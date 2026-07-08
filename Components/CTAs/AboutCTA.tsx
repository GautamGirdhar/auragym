import Image from "next/image";
import Link from "next/link";
import { Barlow, PT_Sans } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AboutCTA() {
  return (
    <section className="relative w-full min-h-130 flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/ansal/DSC04490.JPG"
        alt="Aura Gym Locations"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-2xl flex flex-col gap-6">
          {/* Heading */}
          <h1
            className={`${barlow.className} text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none`}
          >
            About Us
          </h1>

          {/* Description */}
          <p
            className={`${ptSans.className} text-foreground/90 text-base md:text-lg leading-relaxed`}
          >
            Aura Gym combines expert coaching, modern equipment, and a
            motivating atmosphere to help you build strength, improve fitness,
            and achieve lasting results.
          </p>

          {/* CTA Button */}
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
