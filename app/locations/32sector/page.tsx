import BranchSection from "@/Components/CTAs/BranchSection";
import LocationHeroCTA from "@/Components/CTAs/LocationCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import ScheduleSection from "@/Components/Schedule";

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
