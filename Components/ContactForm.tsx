"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Barlow, PT_Sans } from "next/font/google";
import { supabase } from "@/lib/supabase";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const location = ["Ansal Plaza", "32 Sector", "BRS Nagar"];

export default function ContactSection() {
  const [form, setForm] = useState({
    location: "",
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("enquiries").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        location: form.location,
      },
    ]);

    if (!error) {
      setSubmitted(true);
    } else {
      console.log(error);
    }
  };

  return (
    <section className="w-full bg-header py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Copy ── */}
        <div className="flex flex-col gap-7">
          <p
            className={`${barlow.className} text-primary text-sm font-bold uppercase tracking-[0.3em]`}
          >
            Aura Gym · Ludhiana
          </p>

          <h2
            className={`${barlow.className} text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none`}
          >
            #1 Gym In
            <br />
            Ludhiana,
            <br />
            Punjab
          </h2>

          <p
            className={`${ptSans.className} text-white/60 text-base md:text-lg leading-relaxed max-w-md`}
          >
            Aura Gym provides world-class Strength Training, Weight Loss,
            Functional Fitness, Personal Training, and Group Classes across
            three premium locations in Ludhiana. There&apos;s fitness for
            everyone here.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center overflow-hidden w-fit shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span
              className={`${barlow.className} bg-primary px-8 h-14 flex items-center text-white uppercase tracking-[0.15em] font-bold text-sm transition-all duration-300 group-hover:px-10`}
            >
              Join Aura Gym
            </span>
            <span className="bg-white w-14 h-14 flex items-center justify-center transition-colors duration-300 group-hover:bg-zinc-100">
              <ArrowUpRight
                className="w-5 h-5 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </span>
          </Link>
        </div>

        {/* ── Right: Form ── */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p
              className={`${barlow.className} text-primary text-sm font-bold uppercase tracking-[0.3em]`}
            >
              Ready to get started?
            </p>
            <h3
              className={`${barlow.className} text-3xl md:text-4xl font-extrabold uppercase text-white`}
            >
              Enquire Now!
            </h3>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 border border-primary/30">
                <span className="text-4xl">🔥</span>
              </div>

              <h3
                className={`${barlow.className} text-3xl font-extrabold uppercase text-white`}
              >
                Welcome To Aura Gym
              </h3>

              <p
                className={`${ptSans.className} mt-4 text-white/70 leading-relaxed`}
              >
                Your enquiry has been received successfully. Our team will
                contact you shortly regarding your selected branch and help you
                get started on your fitness journey.
              </p>

              <div className="mt-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Response within 24 Hours
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Program */}
              <div className="flex flex-col gap-1.5">
                <label
                  className={`${ptSans.className} text-white text-sm font-bold`}
                >
                  Which Location are you interested in?{" "}
                  <span className="text-primary">*</span>
                </label>
                <select
                  name="location"
                  required
                  value={form.location}
                  onChange={handleChange}
                  className={`${ptSans.className} w-full bg-secondary border border-border text-white/80 rounded-lg px-4 h-12 text-sm outline-none focus:border-primary transition-colors appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Select location
                  </option>
                  {location.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className={`${ptSans.className} text-white text-sm font-bold`}
                  >
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Gurpreet Singh"
                    value={form.name}
                    onChange={handleChange}
                    className={`${ptSans.className} w-full bg-secondary border border-border text-white placeholder:text-white/30 rounded-lg px-4 h-12 text-sm outline-none focus:border-primary transition-colors`}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className={`${ptSans.className} text-white text-sm font-bold`}
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`${ptSans.className} w-full bg-secondary border border-border text-white placeholder:text-white/30 rounded-lg px-4 h-12 text-sm outline-none focus:border-primary transition-colors`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label
                  className={`${ptSans.className} text-white text-sm font-bold`}
                >
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className={`${ptSans.className} w-full bg-secondary border border-border text-white placeholder:text-white/30 rounded-lg px-4 h-12 text-sm outline-none focus:border-primary transition-colors`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`${barlow.className} w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg mt-2`}
              >
                Get Started
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
