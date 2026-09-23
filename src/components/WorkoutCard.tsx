import Link from "next/link";
import Image from "next/image";
import type { Workout } from "@/types/workout";
import WorkoutStats from "./WorkoutStats";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide">
          {workout.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{workout.equipment}</p>

        <div className="mt-4 border-t border-line pt-4">
          <WorkoutStats workout={workout} />
        </div>
      </div>
    </Link>
  );
}