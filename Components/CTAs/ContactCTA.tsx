import Image from "next/image";
import { Barlow, PT_Sans } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactCTA() {
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
            GET IN TOUCH
          </h1>

          {/* Description */}
          <p
            className={`${ptSans.className} text-foreground/90 text-base md:text-lg leading-relaxed`}
          >
            Have questions about memberships, personal training, or our
            facilities? Our team is here to help you start your fitness journey
            and find the perfect plan for your goals.
          </p>
        </div>
      </div>
    </section>
  );
}
