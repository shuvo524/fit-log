import Image from "next/image";
import { ArrowDown } from "lucide-react";
import banner from "@/assets/banner.png";

const ctaClass =
  "mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-110";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      <div className="grid items-center gap-8 rounded-3xl border border-line bg-surface px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:px-14 lg:py-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Workout Library
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1] sm:text-5xl xl:text-[64px]">
            Train with intent. Log every set.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a href="#library" className={ctaClass}>
            Browse Workouts
            <ArrowDown className="h-4 w-4" strokeWidth={3} />
          </a>
        </div>

        <div className="flex justify-center lg:justify-end lg:pr-16">
          <Image
            src={banner}
            alt="Muscle figure on a training machine"
            priority
            className="h-auto max-h-72 w-auto object-contain sm:max-h-80 lg:max-h-96"
          />
        </div>
      </div>
    </section>
  );
}