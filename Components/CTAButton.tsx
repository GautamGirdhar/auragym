import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export default function CTASection() {
  return (
    <section className="relative w-full min-h-130 flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/cta-gym.jpg" // replace with your actual image
        alt="Train at Aura Gym Ludhiana"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      {/* Full dark tint */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Right-side content panel */}
      <div className="relative z-10 w-full flex justify-end px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-xl bg-black/65 backdrop-blur-sm rounded-2xl p-10 md:p-14 flex flex-col gap-6">
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
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-semibold px-10 py-6 w-fit transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Link href="/free-intro">Book a Free Intro</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
