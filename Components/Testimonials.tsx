import { Component as BreakableCard } from "@/Components/ui/Sectioncardprops";
import { PT_Sans, Barlow } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const sections = [
  {
    title: "Kartik",
    description:
      "Aura Gym completely changed my fitness journey. The trainers are incredibly supportive and the atmosphere keeps me motivated every single day.",
  },
  {
    title: "Simran Kaur",
    description:
      "The equipment is top-notch and always well maintained. I've gained confidence, strength, and made amazing friends here.",
  },
  {
    title: "Amanpreet Singh",
    description:
      "I've trained at several gyms in Ludhiana, but Aura Gym stands out because of its professional coaches and positive environment.",
  },
  {
    title: "Karan Malhotra",
    description:
      "From day one I felt welcomed. Great community, excellent facilities, and visible results within a few months.",
  },
];

export default function DemoDefault() {
  return (
    <section className="relative w-full bg-black/20 overflow-hidden p-12 px-6 md:px-12 lg:px-20">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className={`${barlow.className} text-primary uppercase tracking-[0.35em] font-semibold text-sm md:text-base`}
          >
            SATISFIED CUSTOMERS
          </p>

          <h2
            className={`${barlow.className} mt-3 text-4xl md:text-6xl font-extrabold uppercase text-foreground`}
          >
            What Our Members Say
          </h2>

          <p
            className={`${ptSans.className} mt-6 max-w-5xl mx-auto text-foreground/90 text-lg leading-relaxed`}
          >
            Thousands of members have trusted Aura Gym to transform their
            fitness journey. Here&apos;s what a few of them have to say about
            their experience with our trainers, community, and facilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="h-64">
              <BreakableCard
                title={section.title}
                description={section.description}
              />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-16 text-center text-foreground/60 uppercase tracking-[0.3em] text-xs">
          Real Transformations • Real Results • Real Community
        </p>
      </div>
    </section>
  );
}
