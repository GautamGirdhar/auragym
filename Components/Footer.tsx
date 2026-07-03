import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Barlow } from "next/font/google";
import { PT_Sans } from "next/font/google";
import Image from "next/image";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const locations = [
  {
    name: "Ansal Plaza",
    address: "Ansal Plaza, Ferozpur Road, Ludhiana, Punjab",
    phone: "+91 98765 43210",
  },
  {
    name: "32 Sector",
    address: "32 Sector Main Market, Chandigarh Road, Ludhiana, Punjab",
    phone: "+91 98765 43211",
  },
  {
    name: "BRS Nagar",
    address: "BRS Nagar, Ludhiana, Punjab",
    phone: "+91 98765 43212",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Free Intro", href: "/free-intro" },
  { label: "Locations", href: "/locations" },
  { label: "Membership Plans", href: "/gym-info/membership" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/gym-info/faqs" },
];

const gymHours = [
  { day: "Mon – Fri", hours: "5:00 am – 10:00 pm" },
  { day: "Saturday", hours: "6:00 am – 8:00 pm" },
  { day: "Sunday", hours: "7:00 am – 2:00 pm" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      {/* Main Footer Grid */}
      <div className="max-w-full mx-auto px-8 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        <Link href="/" className="w-fit">
          <Image
            src="/auralogo.png"
            alt="Aura Gym Logo"
            width={240}
            height={85}
            priority
            className="object-contain"
          />
        </Link>

        {/* ── Col 2: Locations ── */}
        <div className="flex flex-col gap-5">
          <h3
            className={`${barlow.className} text-foreground text-3xl font-extrabold uppercase tracking-widest`}
          >
            Locations
          </h3>
          <div className="flex flex-col gap-5">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className={`${ptSans.className} flex flex-col gap-1`}
              >
                <p className="text-foreground font-semibold text-xl">
                  {loc.name}
                </p>
                <div className="flex gap-2 items-start">
                  <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground/90 text-md leading-relaxed">
                    {loc.address}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  <p className="text-foreground/90 text-md">{loc.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Col 3: Quick Links ── */}
        <div className="flex flex-col gap-5">
          <h3
            className={`${barlow.className} text-foreground font-bold uppercase tracking-widest text-3xl`}
          >
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`${ptSans.className} text-foreground text-xl hover:text-primary transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 4: Gym Hours ── */}
        <div className="flex flex-col gap-5">
          <h3
            className={`${barlow.className} text-foreground font-bold uppercase tracking-widest text-3xl`}
          >
            Gym Hours
          </h3>
          <ul className="flex flex-col gap-3">
            {gymHours.map(({ day, hours }) => (
              <li key={day} className="flex items-center justify-between gap-4">
                <span
                  className={`${ptSans.className} text-foreground text-md font-medium`}
                >
                  {day}
                </span>
                <span
                  className={`${ptSans.className} text-foreground/90 text-md`}
                >
                  {hours}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
