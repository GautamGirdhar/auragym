import AboutSection from "@/Components/About";
import AboutCTA from "@/Components/CTAs/AboutCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aura Gym | Best Gym in Ludhiana, Punjab",

  description:
    "Learn more about Aura Gym, Ludhiana's premium fitness destination offering strength training, personal training, CrossFit, yoga, weight loss programs and expert coaching across multiple locations.",

  keywords: [
    "about aura gym",
    "aura gym ludhiana",
    "best gym in ludhiana",
    "gym in ludhiana",
    "fitness centre in ludhiana",
    "personal training ludhiana",
    "crossfit ludhiana",
    "weight loss gym ludhiana",
    "gym in ansal plaza",
    "gym in brs nagar",
    "gym in sector 32 ludhiana",
    "premium gym in punjab",
  ],

  openGraph: {
    title: "About Aura Gym | Best Gym in Ludhiana",
    description:
      "Discover the story behind Aura Gym and our mission to help people build strength, confidence and healthier lifestyles in Ludhiana.",
    url: "https://auragym.in/about",
    siteName: "Aura Gym",
    images: [
      {
        url: "/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Aura Gym Ludhiana",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Aura Gym | Best Gym in Ludhiana",
    description:
      "Learn more about Aura Gym and our mission to transform fitness in Ludhiana.",
    images: ["/about-og.jpg"],
  },

  alternates: {
    canonical: "https://auragym.in/about",
  },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <AboutCTA />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
