import Link from "next/link";
import Image from "next/image";
import { Check, X } from "lucide-react";
import type { Workout } from "@/types/workout";
import WorkoutStats from "./WorkoutStats";

interface PlanItemProps {
  workout: Workout;
  mode: "plan" | "saved";
  isDone?: boolean;
  onDone?: () => void;
  onRemove: () => void;
}

export default function PlanItem({
  workout,
  mode,
  isDone = false,
  onDone,
  onRemove,
}: PlanItemProps) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border border-line bg-surface p-4 transition-opacity sm:flex-row sm:items-center ${
        isDone ? "opacity-60" : ""
      }`}
    >
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
        <h3
          className={`font-display text-lg font-bold uppercase tracking-wide ${
            isDone ? "line-through" : ""
          }`}
        >
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

        {mode === "plan" && (
          <button
            type="button"
            onClick={onDone}
            disabled={isDone}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              isDone
                ? "cursor-default border border-accent/40 bg-accent-dark text-accent"
                : "bg-accent text-black hover:brightness-110"
            }`}
          >
            <Check className="h-4 w-4" strokeWidth={3} />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${workout.name}`}
          className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}