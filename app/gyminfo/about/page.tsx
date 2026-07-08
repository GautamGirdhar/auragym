import AboutSection from "@/Components/About";
import AboutCTA from "@/Components/CTAs/AboutCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <AboutCTA />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
