import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { Barlow } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export default function CTASection() {
  return (
    <section className="relative w-full min-h-130 md:h-130 flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/ansal/DSC04449.JPG" // replace with your actual image
        alt="Train at Aura Gym Ludhiana"
        fill
        priority
        quality={90}
        className="object-cover md:block hidden object-center"
      />

      {/* Right-side content panel */}
      <div className="relative z-10 w-full flex justify-end p-6 md:p-12 lg:p-20">
        <div className="w-full max-w-3xl bg-black/65 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col gap-4">
          {/* Heading */}
          <h2
            className={`${barlow.className} text-4xl md:text-5xl font-extrabold uppercase leading-tight text-white`}
          >
            Take a Step Towards <span className="text-primary">A</span>
            <br />
            <span className="text-primary">Better You</span>
          </h2>

          {/* Body */}
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            No matter whether you&apos;re an experienced athlete or total
            beginner, we have scalable options built to meet you where you are
            and make it easy to start working towards your goals{" "}
            <span className="text-white font-semibold">TODAY!</span> Click below
            to get started.
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
        flex h-16 items-center justify-center
        bg-primary px-10
        text-lg font-bold uppercase tracking-[0.18em]
        text-white
        transition-all duration-300
        group-hover:px-12
      "
              >
                Join Aura
              </span>

              {/* Right White Part */}
              <span
                className="
        flex h-16 w-16 items-center justify-center
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
