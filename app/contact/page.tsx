import ContactSection from "@/Components/ContactForm";
import ContactCTA from "@/Components/CTAs/ContactCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Aura Gym | Best Gym in Ludhiana, Punjab",

  description:
    "Contact Aura Gym for membership enquiries, personal training, fitness programs, and gym information. Visit our Ansal Plaza, 32 Sector, or BRS Nagar locations in Ludhiana.",

  keywords: [
    "contact aura gym",
    "aura gym ludhiana contact",
    "gym contact number ludhiana",
    "gym membership ludhiana",
    "personal training ludhiana",
    "best gym in ludhiana",
    "gym near me ludhiana",
    "aura gym ansal plaza",
    "aura gym brs nagar",
    "aura gym 32 sector",
  ],

  openGraph: {
    title: "Contact Aura Gym | Best Gym in Ludhiana",
    description:
      "Get in touch with Aura Gym for memberships, personal training and fitness enquiries across our Ludhiana locations.",
    url: "https://auragym.in/contact",
    siteName: "Aura Gym",
    images: [
      {
        url: "/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Aura Gym Ludhiana",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Aura Gym | Best Gym in Ludhiana",
    description:
      "Contact Aura Gym for memberships and fitness enquiries in Ludhiana.",
    images: ["/contact-og.jpg"],
  },

  alternates: {
    canonical: "https://auragym.in/contact",
  },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ContactCTA />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
