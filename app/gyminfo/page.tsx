import AboutSection from "@/Components/About";
import GymInfoCTA from "@/Components/CTAs/GymInfoCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import ScheduleSection from "@/Components/Schedule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Facilities & Services | Aura Gym Ludhiana",

  description:
    "Explore Aura Gym's premium facilities in Ludhiana including modern equipment, personal training, CrossFit, yoga, weight training, group classes and expert coaching across all locations.",

  keywords: [
    "gym facilities ludhiana",
    "gym equipment ludhiana",
    "personal training ludhiana",
    "crossfit ludhiana",
    "yoga classes ludhiana",
    "strength training ludhiana",
    "weight loss programs ludhiana",
    "group fitness classes ludhiana",
    "best gym facilities in ludhiana",
    "aura gym services",
    "aura gym ludhiana",
    "premium gym in ludhiana",
  ],

  openGraph: {
    title: "Aura Gym Facilities & Services | Ludhiana",
    description:
      "Discover premium equipment, expert trainers, group classes and world-class fitness facilities at Aura Gym Ludhiana.",
    url: "https://auragym.in/gym-info",
    siteName: "Aura Gym",
    images: [
      {
        url: "/gym-info-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aura Gym Facilities and Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aura Gym Facilities & Services",
    description:
      "Explore premium fitness facilities and services at Aura Gym Ludhiana.",
    images: ["/gym-info-og.jpg"],
  },

  alternates: {
    canonical: "https://auragym.in/gym-info",
  },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <GymInfoCTA />
        <AboutSection />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
