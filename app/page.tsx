import AboutSection from "@/Components/About";
import BMISection from "@/Components/Bmisection";
import CTASection from "@/Components/CTAButton";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Herosection";
import LocationsSection from "@/Components/Location";
import ScheduleSection from "@/Components/Schedule";
import DemoDefault from "@/Components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <Hero />
        <AboutSection />
        <LocationsSection />
        {/* <BMISection /> */}
        <DemoDefault />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
