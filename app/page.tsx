import AboutSection from "@/Components/About";
import BMISection from "@/Components/Bmisection";
import Header from "@/Components/Header";
import Hero from "@/Components/Herosection";
import LocationsSection from "@/Components/Location";
import DemoDefault from "@/Components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <Hero />
        <AboutSection />
        <LocationsSection />
        <BMISection />
        <DemoDefault />
      </main>
    </div>
  );
}
