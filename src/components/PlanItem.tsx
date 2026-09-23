import Link from "next/link";
import Image from "next/image";
import type { Workout } from "@/types/workout";
import WorkoutStats from "./WorkoutStats";

export default function PlanItem({ workout }: { workout: Workout }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-4 sm:flex-row sm:items-center">
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-36">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 640px) 144px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-bold uppercase tracking-wide">
          {workout.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-muted">
          {workout.equipment}
        </p>
        <div className="mt-2">
          <WorkoutStats workout={workout} iconClass="text-accent" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-line px-4 py-2 text-sm text-white transition hover:border-accent/60"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}