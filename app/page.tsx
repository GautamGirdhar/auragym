import AboutSection from "@/Components/About";
import BMISection from "@/Components/Bmisection";
import Header from "@/Components/Header";
import Hero from "@/Components/Herosection";
import LocationsSection from "@/Components/Location";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <LocationsSection />
      <BMISection />
    </div>
  );
}
