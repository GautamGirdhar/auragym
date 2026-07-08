import ScheduleCTA from "@/Components/CTAs/ScheduleCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";
import ScheduleSection from "@/Components/Schedule";

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ScheduleCTA />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
