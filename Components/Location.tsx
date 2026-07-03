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
    name: "Ansal Plaza",
    address: "Ferozpur Road, Ludhiana",
    href: "/locations/ansalplaza",
    image: "/ansal/DSC04439.JPG",
  },
  {
    name: "32 Sector Main Market",
    address: "Chandigarh Road, Ludhiana",
    href: "/locations/32sector",
    image: "/32sector/IMG_2396.JPG",
  },
  {
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
        <div className="w-full max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {locations.map((loc, index) => (
            <Link
              key={loc.name}
              href={loc.href}
              className={`
        group relative overflow-hidden rounded-xl h-100
        ${
          index === 2
            ? "md:col-span-2 md:w-[48%] md:justify-self-center"
            : "w-full"
        }
      `}
            >
              {/* Background image */}
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60  transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 items-center flex flex-col justify-center p-8">
                <h3 className="mt-2 text-3xl md:text-5xl font-extrabold uppercase text-white">
                  {loc.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
