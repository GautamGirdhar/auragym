import CTASection from "@/Components/lastCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import LocationsSection from "@/Components/Location";
import LocationHeroCTA from "@/Components/CTAs/LocationCTA";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <LocationHeroCTA />
        <LocationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
