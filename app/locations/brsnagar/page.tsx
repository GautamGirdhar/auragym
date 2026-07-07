import BranchSection from "@/Components/CTAs/BranchSection";
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
