"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import toast from "react-hot-toast";
import { MAX_PLAN, usePlan } from "@/context/PlanContext";

export default function WorkoutActions({ workoutId }: { workoutId: number }) {
  const { planIds, addToPlan, addToSaved } = usePlan();

  const inPlan = planIds.includes(workoutId);
  const planFull = planIds.length >= MAX_PLAN && !inPlan;

  const handleAddToPlan = () => {
    const result = addToPlan(workoutId);
    if (result === "added") {
      toast.success("Added to today's plan");
    } else if (result === "exists") {
      toast("Already in today's plan");
    } else {
      toast.error(`Today's plan is full (${MAX_PLAN} lifts max)`);
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
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleAddToPlan}
          disabled={planFull}
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:brightness-100"
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

      {planFull && (
        <p className="mt-3 text-xs text-muted">
          Today&apos;s plan is full ({MAX_PLAN}/{MAX_PLAN}). Remove a lift from
          My Plan to add this one.
        </p>
      )}
    </div>
  );
}