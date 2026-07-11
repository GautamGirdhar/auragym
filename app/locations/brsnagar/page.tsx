import BranchSection from "@/Components/CTAs/BranchSection";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import ScheduleSection from "@/Components/Schedule";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Gym in BRS Nagar, Ludhiana | Aura Gym",
  description:
    "Join Aura Gym BRS Nagar for strength training, personal training, swimming, yoga, weight loss programs and premium fitness facilities in Ludhiana.",

  keywords: [
    "best gym in brs nagar ludhiana",
    "gym in brs nagar",
    "fitness centre in brs nagar",
    "swimming gym in ludhiana",
    "personal training in brs nagar",
    "weight loss gym in brs nagar",
    "aura gym brs nagar",
    "premium gym in ludhiana",
  ],

  openGraph: {
    title: "Aura Gym BRS Nagar | Best Gym in Ludhiana",
    description:
      "Premium fitness center in BRS Nagar with swimming pool, expert trainers and modern equipment.",
    images: ["/BRSnagar.png"],
  },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <BranchSection
          name="BRS Nagar – Ludhiana"
          phone="+91 90147 00005"
          email="jasssekhon@auragyms.in"
          address="BRS Nagar, Ludhiana, Punjab"
          image="/BRSnagar.png"
          mapsUrl="https://maps.google.com/?q=Aura+Gym+BRS+Nagar+Ludhiana"
          flipLayout={false}
        />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
