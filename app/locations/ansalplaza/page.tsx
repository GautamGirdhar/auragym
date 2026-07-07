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
