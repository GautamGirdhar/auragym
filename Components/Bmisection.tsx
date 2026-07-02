"use client";

import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

type Unit = "metric" | "imperial";

interface Result {
  bmi: number;
  category: string;
  color: string;
  tip: string;
}

const categories = [
  {
    max: 18.5,
    label: "Underweight",
    color: "#60a5fa",
    tip: "Consider a nutrition plan to build healthy mass. Our coaches can help!",
  },
  {
    max: 25,
    label: "Normal Weight",
    color: "#4ade80",
    tip: "Great work! Keep up your healthy lifestyle with our training programs.",
  },
  {
    max: 30,
    label: "Overweight",
    color: "#facc15",
    tip: "A structured fitness plan can help. Book a free intro session with us!",
  },
  {
    max: Infinity,
    label: "Obese",
    color: "#e11d2f",
    tip: "Our expert coaches are here to guide your transformation journey.",
  },
];

function getCategory(bmi: number) {
  return categories.find((c) => bmi < c.max)!;
}

function needleRotation(bmi: number) {
  // Map BMI 10–40 to degrees -90 to 90
  const clamped = Math.min(Math.max(bmi, 10), 40);
  return ((clamped - 10) / 30) * 180 - 90;
}

export default function BMISection() {
  const [unit, setUnit] = useState<Unit>("metric");

  const [weight, setWeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const calculate = () => {
    const totalInches = parseFloat(heightFt) * 12 + parseFloat(heightIn || "0");
    const w = parseFloat(weight);
    if (!totalInches || !w) return;

    let bmi = 0;
    if (unit === "metric") {
      // kg + ft/in → convert inches to metres
      const heightM = totalInches * 0.0254;
      bmi = w / (heightM * heightM);
    } else {
      // lbs + ft/in
      bmi = (w / (totalInches * totalInches)) * 703;
    }

    bmi = Math.round(bmi * 10) / 10;
    const cat = getCategory(bmi);
    setResult({ bmi, category: cat.label, color: cat.color, tip: cat.tip });
  };

  const reset = () => {
    setWeight("");
    setHeightFt("");
    setHeightIn("");
    setResult(null);
  };

  return (
    <section className="w-full bg-background py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            BMI Calculator
          </h2>
          <p className="text-primary text-sm md:text-2xl font-extrabold uppercase tracking-widest">
            Know Your Body. Own Your Journey.
          </p>
          <p className="text-forground text-sm md:text-xl max-w-xl leading-relaxed">
            Use our quick BMI calculator to understand where you stand and how
            Aura Gym can help you reach your fitness goals.
          </p>
        </div>

        {/* Card */}
        <div className="w-full bg-card border border-border rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left — Inputs */}
          <div className="flex flex-col gap-6">
            {/* Unit Toggle */}
            <div className="flex bg-secondary rounded-full p-1 w-fit">
              {(["metric", "imperial"] as Unit[]).map((u) => (
                <button
                  key={u}
                  onClick={() => {
                    setUnit(u);
                    reset();
                  }}
                  className={`px-5 py-1.5 cursor-pointer rounded-full text-lg font-semibold capitalize transition-all duration-200 ${
                    unit === u
                      ? "bg-primary text-foreground shadow"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>

            {/* Height — always ft + in */}
            <div className="flex flex-col gap-2">
              <Label className="text-foreground/80 text-md uppercase tracking-widest">
                Height
              </Label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Input
                    type="number"
                    placeholder="5"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    className="bg-secondary border-border text-foreground placeholder:text-foreground/60 pr-10 h-12"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 text-md">
                    ft
                  </span>
                </div>
                <div className="relative flex-1">
                  <Input
                    type="number"
                    placeholder="10"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    className="bg-secondary border-border text-foreground placeholder:text-foreground/60 pr-10 h-12"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 text-md">
                    in
                  </span>
                </div>
              </div>
            </div>

            {/* Weight */}
            <div className="flex flex-col gap-2">
              <Label className="text-foreground/80 text-md uppercase tracking-widest">
                Weight
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-secondary border-border text-foreground placeholder:text-foreground/60 pr-12 h-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/60 text-md">
                  {unit === "metric" ? "kg" : "lbs"}
                </span>
              </div>
            </div>

            <Button
              onClick={calculate}
              className="h-12 rounded-full bg-primary hover:bg-primary/90 text-foreground font-bold tracking-wide text-sm uppercase"
            >
              Calculate BMI
            </Button>
          </div>

          {/* Right — Result */}
          <div className="flex flex-col items-center gap-6">
            {result ? (
              <>
                {/* Gauge */}
                <div className="relative w-52 h-28 overflow-hidden">
                  {/* Arc segments */}
                  <svg viewBox="0 0 200 110" className="w-full h-full">
                    {/* Underweight */}
                    <path
                      d="M 20 100 A 80 80 0 0 1 65 31"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    {/* Normal */}
                    <path
                      d="M 65 31 A 80 80 0 0 1 135 31"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    {/* Overweight */}
                    <path
                      d="M 135 31 A 80 80 0 0 1 180 100"
                      fill="none"
                      stroke="#facc15"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    {/* Needle */}
                    <g
                      transform={`rotate(${needleRotation(result.bmi)}, 100, 100)`}
                    >
                      <line
                        x1="100"
                        y1="100"
                        x2="100"
                        y2="30"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="100" cy="100" r="5" fill="white" />
                    </g>
                  </svg>
                </div>

                {/* BMI number */}
                <div className="text-center">
                  <p
                    className="text-6xl font-extrabold"
                    style={{ color: result.color }}
                  >
                    {result.bmi}
                  </p>
                  <p
                    className="text-lg font-bold uppercase tracking-widest mt-1"
                    style={{ color: result.color }}
                  >
                    {result.category}
                  </p>
                </div>

                {/* Category scale */}
                <div className="w-full grid grid-cols-4 gap-1 text-center text-[10px] font-bold uppercase">
                  {categories.map((c) => (
                    <div
                      key={c.label}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-full h-1.5 rounded-full"
                        style={{ backgroundColor: c.color }}
                      />
                      <span style={{ color: c.color }}>
                        {c.label.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tip */}
                <p className="text-white/60 text-sm text-center leading-relaxed border border-border rounded-xl px-4 py-3">
                  {result.tip}
                </p>

                <button
                  onClick={reset}
                  className="text-foreground/60 hover:text-foreground text-sm underline underline-offset-2 transition-colors"
                >
                  Reset
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-28 h-28 rounded-full border-4 border-dashed border-border flex items-center justify-center">
                  <span className="text-white/20 text-4xl font-black">?</span>
                </div>
                <p className="text-white/30 text-sm">
                  Enter your details and hit
                  <br />
                  <span className="text-primary">Calculate BMI</span> to see
                  your result
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
