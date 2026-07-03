import { Component as BreakableCard } from "@/Components/ui/Sectioncardprops";

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
    <div className="relative w-full min-h-screen bg-background overflow-hidden font-sans flex items-center justify-center p-8">
      {/* Background elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl z-10">
        {sections.map((section, index) => (
          <div key={index} className="h-64 w-full">
            <BreakableCard
              title={section.title}
              description={section.description}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center text-foreground font-mono text-xs uppercase tracking-widest pointer-events-none">
        Shake cards to break them free
      </div>
    </div>
  );
}
