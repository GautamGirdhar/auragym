import AboutSection from "@/Components/About";
import GymInfoCTA from "@/Components/CTAs/GymInfoCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import ScheduleSection from "@/Components/Schedule";

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <GymInfoCTA />
        <AboutSection />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
