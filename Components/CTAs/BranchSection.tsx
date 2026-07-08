import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
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

interface BranchSectionProps {
  name: string;
  phone: string;
  email: string;
  address: string;
  image: string;
  imageAlt?: string;
  mapsUrl?: string;
  flipLayout?: boolean; // flips image to left, text to right for alternating layout
}

export default function BranchSection({
  name,
  phone,
  email,
  address,
  image,
  imageAlt,
  mapsUrl = "https://maps.google.com",
  flipLayout = false,
}: BranchSectionProps) {
  const details = [
    { icon: Phone, text: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { icon: Mail, text: email, href: `mailto:${email}` },
    { icon: MapPin, text: address, href: mapsUrl },
  ];

  const TextPanel = (
    <div className="flex flex-col justify-center gap-8 px-8 md:px-16 lg:px-20 py-16">
      <h2
        className={`${barlow.className} text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight`}
      >
        {name}
      </h2>

      <ul className="flex flex-col gap-5">
        {details.map(({ icon: Icon, text, href }) => (
          <li key={text}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-start gap-5 group w-fit"
            >
              <span className="mt-0.5 w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </span>
              <span
                className={`${ptSans.className} text-foreground text-base md:text-lg group-hover:text-white transition-colors leading-snug`}
              >
                {text}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-5">
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
  );

  const ImagePanel = (
    <div className="relative min-h-80 lg:min-h-0">
      <Image
        src={image}
        alt={imageAlt ?? name}
        fill
        quality={90}
        className="object-cover object-center"
      />
      {/* Gradient fade toward the text panel */}
      <div
        className={`absolute inset-0 lg:block hidden bg-gradient-to-${flipLayout ? "l" : "r"} from-header via-transparent to-transparent`}
      />
    </div>
  );

  return (
    <section className="w-full bg-header border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-120">
        {flipLayout ? (
          <>
            {ImagePanel}
            {TextPanel}
          </>
        ) : (
          <>
            {TextPanel}
            {ImagePanel}
          </>
        )}
      </div>
    </section>
  );
}
