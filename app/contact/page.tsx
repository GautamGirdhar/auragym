import AboutSection from "@/Components/About";
import ContactSection from "@/Components/ContactForm";
import ContactCTA from "@/Components/CTAs/ContactCTA";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import CTASection from "@/Components/lastCTA";

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ContactCTA />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
