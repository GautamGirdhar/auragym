"use client";

import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { PT_Sans, Barlow } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

type Unit = "metric" | "imperial";
type Gender = "male" | "female";

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
    label: "Normal",
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
  const clamped = Math.min(Math.max(bmi, 10), 40);
  return ((clamped - 10) / 30) * 180 - 90;
}

export default function BMISection() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
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
      const heightM = totalInches * 0.0254;
      bmi = w / (heightM * heightM);
    } else {
      bmi = (w / (totalInches * totalInches)) * 703;
    }

    bmi = Math.round(bmi * 10) / 10;
    const cat = getCategory(bmi);
    setResult({ bmi, category: cat.label, color: cat.color, tip: cat.tip });
  };

  const reset = () => {
    setAge("");
    setWeight("");
    setHeightFt("");
    setHeightIn("");
    setResult(null);
  };

  const needle = result ? needleRotation(result.bmi) : -90;

  return (
    <section className="w-full bg-black/20 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center flex flex-col gap-3">
          <h2
            className={`${barlow.className} text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground`}
          >
            BMI Calculator
          </h2>
          <p
            className={`${barlow.className} text-primary text-sm md:text-2xl font-extrabold uppercase tracking-widest`}
          >
            Know Your Body. Own Your Journey.
          </p>
          <p
            className={`${ptSans.className} text-foreground/70 text-sm md:text-lg max-w-5xl leading-relaxed`}
          >
            Enter your details below to calculate your Body Mass Index and get
            personalised advice from our Aura Gym coaches.
          </p>
        </div>

        {/* Main Card */}
        <div
          className={`${ptSans.className} w-full grid grid-cols-1 lg:grid-cols-2 gap-6`}
        >
          {/* ── Left: Inputs ── */}
          <div
            className={`${ptSans.className} bg-inherit rounded-2xl p-8 flex flex-col gap-6`}
          >
            {/* Unit Toggle */}
            <div className="flex bg-secondary rounded-full p-1 w-fit">
              {(["metric", "imperial"] as Unit[]).map((u) => (
                <button
                  key={u}
                  onClick={() => {
                    setUnit(u);
                    reset();
                  }}
                  className={`px-5 py-1.5 cursor-pointer rounded-full text-base font-semibold capitalize transition-all duration-200 ${
                    unit === u
                      ? "bg-primary text-foreground shadow"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <Label className="text-foreground/90 text-sm uppercase tracking-widest">
                Gender
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {(["male", "female"] as Gender[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-base font-semibold capitalize transition-all duration-200 ${
                      gender === g
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-secondary border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    <span>{g === "male" ? "♂" : "♀"}</span>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Age */}
            <div className="flex flex-col gap-2">
              <Label className="text-foreground/90 text-sm uppercase tracking-widest">
                Age
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="e.g. 25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-secondary border-0 text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus:outline-none placeholder:text-foreground/70 pr-16 h-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/70 text-sm">
                  years
                </span>
              </div>
            </div>

            {/* Height */}
            <div className="flex flex-col gap-2">
              <Label className="text-foreground/90 text-sm uppercase tracking-widest">
                Height
              </Label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Input
                    type="number"
                    placeholder="5"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    className="bg-secondary border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus:outline-none text-foreground placeholder:text-foreground/70 pr-10 h-12"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/70 text-sm">
                    ft
                  </span>
                </div>
                <div className="relative flex-1">
                  <Input
                    type="number"
                    placeholder="10"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    className="bg-secondary border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus:outline-none text-foreground placeholder:text-foreground/70 pr-10 h-12"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/70 text-sm">
                    in
                  </span>
                </div>
              </div>
            </div>

            {/* Weight */}
            <div className="flex flex-col gap-2">
              <Label className="text-foreground/90 text-sm uppercase tracking-widest">
                Weight
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-secondary border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus:outline-none text-foreground placeholder:text-foreground/70 pr-12 h-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/70 text-sm">
                  {unit === "metric" ? "kg" : "lbs"}
                </span>
              </div>
            </div>

            <Button
              onClick={calculate}
              className="h-12 rounded-full bg-primary hover:bg-primary/90 text-foreground font-bold tracking-widest text-sm uppercase"
            >
              Calculate BMI
            </Button>
          </div>

          {/* ── Right: Result (always visible) ── */}
          <div className="bg-inherit rounded-2xl p-8 flex flex-col items-center justify-between gap-6">
            {/* Summary pills — always shown */}
            <div className="w-full grid grid-cols-3 gap-3">
              {[
                { label: "Age", value: age ? `${age} yrs` : "—" },
                {
                  label: "Gender",
                  value: gender === "male" ? "♂ Male" : "♀ Female",
                },
                {
                  label: "Weight",
                  value: weight
                    ? `${weight} ${unit === "metric" ? "kg" : "lbs"}`
                    : "—",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1 bg-secondary rounded-xl py-3 px-2"
                >
                  <span className="text-foreground/70 text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span className="text-foreground font-bold text-base">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Gauge — always shown */}
            <div className="relative w-56 h-32 overflow-hidden">
              <svg viewBox="0 0 200 110" className="w-full h-full">
                {/* Arcs */}
                <path
                  d="M 20 100 A 80 80 0 0 1 65 31"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M 65 31 A 80 80 0 0 1 135 31"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M 135 31 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Obese arc — drawn as a filled segment hint */}
                <path
                  d="M 20 100 A 80 80 0 0 0 20 100"
                  fill="none"
                  stroke="#e11d2f"
                  strokeWidth="0"
                />
                {/* Needle */}
                <g
                  transform={`rotate(${needle}, 100, 100)`}
                  style={{ transition: "transform 0.6s ease" }}
                >
                  <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="28"
                    stroke={result ? result.color : "white"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity={result ? 1 : 0.3}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="5"
                    fill={result ? result.color : "white"}
                    opacity={result ? 1 : 0.3}
                  />
                </g>
                {/* Center label */}
                {!result && (
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fill="white"
                    fillOpacity="0.2"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    BMI
                  </text>
                )}
              </svg>
            </div>

            {/* BMI Score */}
            <div className="text-center">
              {result ? (
                <>
                  <p
                    className="text-7xl font-extrabold leading-none"
                    style={{ color: result.color }}
                  >
                    {result.bmi}
                  </p>
                  <p
                    className="text-sm font-bold uppercase tracking-widest mt-2"
                    style={{ color: result.color }}
                  >
                    {result.category}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-7xl font-extrabold leading-none text-foreground/10">
                    --
                  </p>
                  <p className="text-lg font-bold uppercase tracking-widest mt-2 text-foreground/70">
                    Your Result
                  </p>
                </>
              )}
            </div>

            {/* Category scale — always shown */}
            <div className="w-full grid grid-cols-4 gap-1 text-center text-[10px] font-bold uppercase">
              {categories.map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-1">
                  <div
                    className="w-full h-1.5 rounded-full transition-opacity duration-300"
                    style={{
                      backgroundColor: c.color,
                      opacity: result
                        ? result.category === c.label
                          ? 1
                          : 0.3
                        : 0.4,
                    }}
                  />
                  <span
                    style={{
                      color: c.color,
                      opacity: result
                        ? result.category === c.label
                          ? 1
                          : 0.4
                        : 0.5,
                    }}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tip / placeholder */}
            <div className="w-full rounded-xl px-4 py-3 min-h-15 flex items-center justify-center">
              {result ? (
                <p className="text-foreground/60 text-sm text-center leading-relaxed">
                  {result.tip}
                </p>
              ) : (
                <p className="text-foreground/70 text-lg text-center">
                  Fill in your details and hit{" "}
                  <span className="text-primary/60">Calculate BMI</span> to see
                  your personalised result.
                </p>
              )}
            </div>

            {result && (
              <button
                onClick={reset}
                className="text-foreground/70 cursor-pointer hover:text-foreground text-xs underline underline-offset-2 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
