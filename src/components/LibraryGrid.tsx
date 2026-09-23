import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";
import WorkoutGrid from "./WorkoutGrid";

export default async function LibraryGrid() {
  let workouts: Workout[] = [];
  let failed = false;

  try {
    workouts = await getWorkouts();
  } catch {
    failed = true;
  }

  if (failed) {
    return (
      <p className="rounded-2xl border border-dashed border-line py-16 text-center text-muted">
        Could not load workouts. Please refresh the page.
      </p>
    );
  }

  return <WorkoutGrid workouts={workouts} />;
}