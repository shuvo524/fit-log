import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";

export default function WorkoutStats({
  workout,
  iconClass = "text-muted",
}: {
  workout: Workout;
  iconClass?: string;
}) {
  return (
    <div className="flex items-center gap-4 text-xs text-white/80">
      <span className="flex items-center gap-1.5">
        <Clock className={`h-3.5 w-3.5 ${iconClass}`} />
        {workout.duration} min
      </span>
      <span className="flex items-center gap-1.5">
        <Flame className={`h-3.5 w-3.5 ${iconClass}`} />
        {workout.caloriesBurned} kcal
      </span>
      <span className="flex items-center gap-1.5">
        <Star className={`h-3.5 w-3.5 ${iconClass}`} />
        {workout.rating}
      </span>
    </div>
  );
}