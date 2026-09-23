import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutGrid({ workouts }: { workouts: Workout[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}