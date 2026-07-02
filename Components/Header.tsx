"use client";
import { useState } from "react";
import { ChevronDown, Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
      { label: "Hours", href: "/gym-info/hours" },
      { label: "FAQs", href: "/gym-info/faqs" },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-11 w-11 font-bold items-center justify-center rounded-full border border-primary text-primary">
            <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <p className="font-serif text-2xl font-semibold tracking-wide text-foreground">
              Aura<span className="text-primary font-bold"> Gym</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Ludhiana
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
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
                    className={`flex items-center gap-1 text-xl font-bold transition-colors ${
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
                  className={`text-xl font-bold transition-colors ${
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
          <Button className="rounded-full bg-primary px-6 py-5 text-xl font-normal tracking-wide text-foreground hover:bg-primary">
            Visiting? Drop In
          </Button>
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
