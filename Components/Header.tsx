"use client";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
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

  return (
    <header className="w-full bg-header fixed top-0 left-0 z-50">
      <div className="mx-auto flex max-w-full items-center justify-between px-8 py-8 md:px-24 md:py-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/auralogo.png" // public folder me rakha hua logo
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
                    className={`flex items-center gap-1 text-xl font-medium transition-colors ${
                      pathname.startsWith(link.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute left-0 top-full 0 w-50 rounded-xl border border-border bg-card p-2 shadow-2xl">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block rounded-lg px-4 py-3 text-xl text-foreground transition-all hover:bg-primary/10 hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`text-xl font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
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
            <span className="bg-white w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-100">
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

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-lg font-medium ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="mt-2 ml-3 flex flex-col gap-2 border-l border-border pl-3">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-xl text-muted-foreground hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="mt-2 rounded-full bg-primary text-sm font-semibold text-foreground hover:bg-primary/90">
              Visiting? Drop In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
