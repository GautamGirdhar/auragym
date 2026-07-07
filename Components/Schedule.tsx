import { Barlow, PT_Sans } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ScheduleSection() {
  return (
    <section className="w-full bg-background py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div>
          <p
            className={`${barlow.className} text-primary uppercase tracking-[0.35em] text-sm font-bold`}
          >
            Opening Hours
          </p>

          <h2
            className={`${barlow.className} mt-3 text-5xl font-extrabold uppercase text-white leading-tight`}
          >
            Train On
            <br />
            <span className="text-primary">Your Time</span>
          </h2>

          <p
            className={`${ptSans.className} mt-6 text-white/60 text-lg leading-relaxed max-w-lg`}
          >
            Whether you&apos;re an early riser or prefer evening workouts, Aura
            Gym gives you flexible hours throughout the week.
          </p>
        </div>

        {/* RIGHT */}
        <div className="rounded-3xl bg-inherit overflow-hidden">
          {/* Monday - Saturday */}
          <div className="group flex items-center justify-between px-8 py-7 border-b border-white/10 hover:bg-primary/5 transition">
            <div>
              <p className="text-white text-xl font-bold">Monday – Saturday</p>

              <p className="text-white/40 mt-1">Regular Training Hours</p>
            </div>

            <div className="text-right">
              <p className="text-primary text-2xl font-bold">5:30 AM</p>

              <p className="text-white/40 text-sm">to</p>

              <p className="text-white text-xl">10:30 PM</p>
            </div>
          </div>

          {/* Sunday */}

          <div className="group flex items-center justify-between px-8 py-7 hover:bg-primary/5 transition">
            <div>
              <p className="text-white text-xl font-bold">Sunday</p>

              <p className="text-white/40 mt-1">Morning Session</p>
            </div>

            <div className="text-right">
              <p className="text-primary text-2xl font-bold">7:00 AM</p>

              <p className="text-white/40 text-sm">to</p>

              <p className="text-white text-xl">1:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
