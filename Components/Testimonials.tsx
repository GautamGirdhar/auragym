import { Component as BreakableCard } from "@/Components/ui/Sectioncardprops";

const sections = [
  {
    title: "About Me",
    description:
      "Creative developer with a passion for interactive UI and physics-based web experiences.",
  },
  {
    title: "Projects",
    description:
      "A collection of experiments, prototypes, and production-ready applications.",
  },
  {
    title: "Experience",
    description:
      "Over 5 years of working with React, TypeScript, and modern frontend ecosystems.",
  },
  {
    title: "Contact",
    description:
      "Get in touch for collaborations, freelance work, or just to say hello.",
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
