import BranchSection from "@/Components/CTAs/BranchSection";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import ScheduleSection from "@/Components/Schedule";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Gym in Ansal Plaza Ludhiana | Aura Gym",
  description:
    "Join Aura Gym Ansal Plaza for personal training, strength training, weight loss programs and premium fitness facilities in Ludhiana.",

  keywords: [
    "best gym in ludhiana",
    "gym in ansal plaza ludhiana",
    "fitness centre ludhiana",
    "personal training ludhiana",
    "strength training ludhiana",
    "aura gym ludhiana",
  ],

  openGraph: {
    title: "Aura Gym Ansal Plaza",
    description:
      "Premium gym in Ludhiana with personal training and modern equipment.",
    images: ["/og-image.jpg"],
  },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <BranchSection
          name="Ansal Plaza – Ludhiana"
          phone="+91 90147 00005"
          email="auragym.ansalplaza@gmail.com"
          address="Ansal Plaza, Ferozpur Road, Ludhiana, Punjab 141001"
          image="/ansal/DSC04439.JPG"
          mapsUrl="https://maps.google.com/?q=Aura+Gym+Ansal+Plaza+Ferozpur+Road+Ludhiana"
          flipLayout={false}
        />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
