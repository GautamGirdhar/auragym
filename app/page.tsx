import AboutSection from "@/Components/About";
import BMISection from "@/Components/Bmisection";
import CTASection from "@/Components/lastCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Herosection";
import LocationsSection from "@/Components/Location";
import ScheduleSection from "@/Components/Schedule";
import DemoDefault from "@/Components/Testimonials";
import ContactSection from "@/Components/ContactForm";

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
        <ContactSection />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
