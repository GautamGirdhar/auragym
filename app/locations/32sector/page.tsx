import BranchSection from "@/Components/CTAs/BranchSection";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import ScheduleSection from "@/Components/Schedule";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Gym in 32 Sector, Chandigarh Road, Ludhiana | Aura Gym",
  description:
    "Aura Gym 32 Sector offers personal training, bodybuilding, weight loss programs, CrossFit, swimming and premium fitness facilities on Chandigarh Road, Ludhiana.",

  keywords: [
    "best gym in 32 sector ludhiana",
    "gym in sector 32 ludhiana",
    "gym on chandigarh road ludhiana",
    "fitness centre in sector 32 ludhiana",
    "crossfit in ludhiana",
    "personal training ludhiana",
    "bodybuilding gym ludhiana",
    "aura gym sector 32",
  ],

  openGraph: {
    title: "Aura Gym 32 Sector | Best Gym on Chandigarh Road",
    description:
      "Premium fitness center in Sector 32, Chandigarh Road, Ludhiana.",
    images: ["/32sector/IMG_2396.JPG"],
  },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <BranchSection
          name="32 Sector – Ludhiana"
          phone="+91 93367 60005"
          email="jasssekhon@auragyms.in"
          address="32 Sector Main Market, Chandigarh Road, Ludhiana, Punjab"
          image="/32sector/IMG_2396.JPG"
          mapsUrl="https://maps.google.com/?q=Aura+Gym+32+Sector+Chandigarh+Road+Ludhiana"
          flipLayout={true}
        />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
