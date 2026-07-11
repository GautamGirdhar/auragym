import ScheduleCTA from "@/Components/CTAs/ScheduleCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import ScheduleSection from "@/Components/Schedule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Timings & Schedule | Aura Gym Ludhiana",

  description:
    "Check Aura Gym opening hours and weekly schedule for all locations in Ludhiana. Open Monday to Saturday from 5:30 AM to 10:30 PM and Sunday from 7:00 AM to 1:00 PM.",

  keywords: [
    "aura gym timings",
    "gym timings in ludhiana",
    "gym schedule ludhiana",
    "aura gym opening hours",
    "best gym in ludhiana",
    "gym open early morning ludhiana",
    "gym open late night ludhiana",
    "aura gym ansal plaza timings",
    "aura gym brs nagar timings",
    "aura gym 32 sector timings",
  ],

  openGraph: {
    title: "Aura Gym Timings & Schedule | Ludhiana",
    description:
      "View Aura Gym's weekly schedule and opening hours for all Ludhiana locations.",
    url: "https://auragym.in/schedule",
    siteName: "Aura Gym",
    images: [
      {
        url: "/schedule-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aura Gym Schedule and Opening Hours",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aura Gym Timings & Schedule",
    description:
      "Check weekly gym timings and opening hours for Aura Gym Ludhiana.",
    images: ["/schedule-og.jpg"],
  },

  alternates: {
    canonical: "https://auragym.in/schedule",
  },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ScheduleCTA />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
