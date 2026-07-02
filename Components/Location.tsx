import Image from "next/image";
import Link from "next/link";
import { PT_Sans } from "next/font/google";
import { Barlow } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const locations = [
  {
    label: "Branch 01",
    name: "Ansal Plaza",
    address: "Ferozpur Road, Ludhiana",
    href: "/locations/ansalplaza",
    image: "/ansalplaza.png",
  },
  {
    label: "Branch 02",
    name: "32 Sector Main Market",
    address: "Chandigarh Road, Ludhiana",
    href: "/locations/32sector",
    image: "/32sector.png",
  },
  {
    label: "Branch 03",
    name: "BRS Nagar",
    address: "Ludhiana",
    href: "/locations/brsnagar",
    image: "/BRSnagar.png",
  },
];

export default function LocationsSection() {
  return (
    <section className="w-full bg-background py-20 px-6 md:px-12 lg:px-30">
      <div className="max-w-full mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center flex flex-col gap-3">
          <h2
            className={`${barlow.className} text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground`}
          >
            Our Gym Locations
          </h2>
          <p
            className={`${barlow.className} text-primary text-lg md:text-3xl font-extrabold uppercase tracking-widest`}
          >
            3 Great Locations, 1 Gym Family
          </p>
          <p
            className={`${ptSans.className} text-foreground text-sm md:text-xl max-w-7xl mt-1 leading-relaxed`}
          >
            Aura Gym is more than a gym — it&apos;s a fitness family. Join us at
            either location for world-class training, community, and lasting
            results. Discover your new home gym today. Click a location to learn
            more!
          </p>
        </div>

        {/* Location Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.name}
              href={loc.href}
              className="group relative overflow-hidden rounded-xl aspect-4/5 block"
            >
              {/* Background image */}
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 gap-1">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                  {loc.label}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-tight drop-shadow-lg">
                  {loc.name}
                </h3>
                <p className="text-white/60 text-sm font-medium">
                  {loc.address}
                </p>
              </div>

              {/* Red bottom border accent */}
              <div className="absolute bottom-0 left-0 h-0.75 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-b-xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
