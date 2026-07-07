"use client";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight, Plus, Minus } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PT_Sans } from "next/font/google";
import { Barlow } from "next/font/google";
import Image from "next/image";

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

interface NavLink {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Free Intro", href: "/free-intro" },
  {
    label: "Locations",
    href: "/locations",
    dropdown: [
      { label: "Ansal Plaza", href: "/locations/ansalplaza" },
      { label: "32 Sector", href: "/locations/32sector" },
      { label: "BRS Nagar", href: "/locations/brsnagar" },
    ],
  },
  {
    label: "Gym Info",
    href: "/gym-info",
    dropdown: [
      { label: "Membership Plans", href: "/gym-info/membership" },
      { label: "About", href: "/gym-info/faqs" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="w-full bg-header fixed top-0 left-0 z-50">
      <div className="mx-auto flex max-w-full items-center justify-between px-8 py-5 md:px-24 md:py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/auralogo2.jpg" // public folder me rakha hua logo
            alt="Aura Gym Logo"
            width={170}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`${ptSans.className} hidden lg:flex items-center gap-12 tracking-wide`}
        >
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.dropdown ? (
                <>
                  <button
                    className={`group relative flex items-center gap-2 pb-2 text-xl font-extrabold transition-all duration-300 ${
                      pathname.startsWith(link.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 font-extrabold text-primary transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />

                    <span
                      className={`
    absolute
    bottom-0
    left-0
    h-0.75
    w-0
    bg-primary
    transition-all
    duration-300
    ${pathname.startsWith(link.href) ? "w-full" : "group-hover:w-full"}
  `}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div
                      className="
      absolute left-0 top-full mt-5
      w-64
      bg-[#171717]/95
      backdrop-blur-xl
      border border-white/10
      shadow-[0_20px_50px_rgba(0,0,0,0.45)]
      overflow-hidden
      z-50
    "
                    >
                      {/* Red Top Border */}
                      <div className="h-1 w-full bg-primary" />

                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="
          group
          relative
          flex
          items-center
          px-6
          py-5
          text-lg
          font-semibold
          uppercase
          tracking-[0.15em]
          text-white/90
          border-b
          border-white/5
          transition-all
          duration-300
          hover:text-white
        "
                        >
                          {item.label}

                          {/* Hover Underline */}
                          <span
                            className="
            absolute
            bottom-0
            left-0
            h-0.75
            w-0
            bg-primary
            transition-all
            duration-300
            group-hover:w-full
          "
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`
    group
    relative
    pb-2
    text-xl
    font-extrabold
    transition-all
    duration-300
    ${
      pathname === link.href
        ? "text-primary"
        : "text-foreground hover:text-primary"
    }
  `}
                >
                  {link.label}

                  <span
                    className={`
      absolute
      bottom-0
      left-0
      h-0.75
      bg-primary
      transition-all
      duration-300
      ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}
    `}
                  />
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/free-intro"
            className="group inline-flex items-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Left Part */}
            <span
              className={`${barlow.className} bg-primary px-8 h-14 flex items-center justify-center text-white uppercase tracking-[0.15em] font-bold text-sm transition-all duration-300 group-hover:px-10`}
            >
              Join Aura
            </span>

            {/* Right Part */}
            <span className="bg-foreground w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-100">
              <ArrowUpRight
                className="w-6 h-6 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={2.5}
              />
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-175 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-foreground/10 bg-background/60 backdrop-blur-3xl px-6 py-6">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="border-b border-white/10 last:border-none"
              >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.label ? null : link.label,
                        )
                      }
                      className={`w-full flex items-center justify-between py-5 transition-colors ${
                        pathname.startsWith(link.href)
                          ? "text-primary"
                          : "text-white"
                      }`}
                    >
                      <span className="text-lg font-semibold">
                        {link.label}
                      </span>

                      {mobileDropdown === link.label ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-white/60" />
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        mobileDropdown === link.label
                          ? "max-h-60 pb-4"
                          : "max-h-0"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileDropdown(null);
                          }}
                          className="block ml-4 border-l border-primary/40 pl-4 py-3 text-base text-white/70 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-5 text-lg font-semibold transition-colors ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA */}

            <div className="mt-8">
              <Link
                href="/free-intro"
                onClick={() => setMobileOpen(false)}
                className="group flex items-center overflow-hidden rounded-xl shadow-lg"
              >
                <span
                  className={`${barlow.className} flex-1 bg-primary py-4 text-center text-white uppercase tracking-[0.18em] font-bold`}
                >
                  Join Aura
                </span>

                <span className="bg-white h-14 w-14 flex items-center justify-center">
                  <ArrowUpRight
                    className="text-black transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
