"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import toast from "react-hot-toast";
import { usePlan } from "@/context/PlanContext";

export default function WorkoutActions({ workoutId }: { workoutId: number }) {
  const { addToPlan, addToSaved } = usePlan();

  const handleAddToPlan = () => {
    if (addToPlan(workoutId)) {
      toast.success("Added to today's plan");
    } else {
      toast("Already in today's plan");
    }
  };

  const handleSave = () => {
    if (addToSaved(workoutId)) {
      toast.success("Saved for later");
    } else {
      toast("Already in your saved list");
    }
  };

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-black transition hover:brightness-110"
      >
        <CalendarPlus className="h-4 w-4" />
        Add to today&apos;s plan
      </button>
      <button
        type="button"
        onClick={handleSave}
        className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/60"
      >
        <Bookmark className="h-4 w-4" />
        Save for later
      </button>
    </div>
  );
}