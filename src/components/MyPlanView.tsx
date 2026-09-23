"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import type { Workout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";
import StatsPanel from "./StatsPanel";
import PlanTabs, { type PlanTab } from "./PlanTabs";
import SortDropdown, { type SortKey } from "./SortDropdown";
import PlanItem from "./PlanItem";
import EmptyState from "./EmptyState";
import Spinner from "./Spinner";

export default function MyPlanView({ workouts }: { workouts: Workout[] }) {
  const {
    planIds,
    savedIds,
    doneIds,
    hydrated,
    markDone,
    removeFromPlan,
    removeFromSaved,
  } = usePlan();
  const [tab, setTab] = useState<PlanTab>("plan");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  // localStorage পড়া শেষ না হওয়া পর্যন্ত অপেক্ষা
  if (!hydrated) return <Spinner />;

  const pick = (ids: number[]) =>
    ids
      .map((id) => workouts.find((w) => w.id === id))
      .filter((w): w is Workout => Boolean(w));

  // Duration ও Calories: কম থেকে বেশি, Rating: বেশি থেকে কম
  const sortWorkouts = (items: Workout[]) =>
    [...items].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
      return a.duration - b.duration;
    });

  const planWorkouts = pick(planIds);
  const savedWorkouts = pick(savedIds);
  const list = sortWorkouts(tab === "plan" ? planWorkouts : savedWorkouts);

  // Stats শুধু Today's Plan থেকে হিসাব হয়
  const minutes = planWorkouts.reduce((sum, w) => sum + w.duration, 0);
  const calories = planWorkouts.reduce((sum, w) => sum + w.caloriesBurned, 0);

  const handleDone = (id: number) => {
    if (markDone(id)) toast.success("Marked as done");
  };

  const handleRemove = (id: number) => {
    if (tab === "plan") {
      removeFromPlan(id);
      toast.success("Removed from today's plan");
    } else {
      removeFromSaved(id);
      toast.success("Removed from saved");
    }
  };

  return (
    <>
      <StatsPanel
        exercises={planWorkouts.length}
        minutes={minutes}
        calories={calories}
      />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <PlanTabs active={tab} onChange={setTab} />
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <div className="mt-6 space-y-4">
        {list.length === 0 ? (
          <EmptyState />
        ) : (
          list.map((workout) => (
            <PlanItem
              key={workout.id}
              workout={workout}
              mode={tab}
              isDone={doneIds.includes(workout.id)}
              onDone={() => handleDone(workout.id)}
              onRemove={() => handleRemove(workout.id)}
            />
          ))
        )}
      </div>
    </>
  );
}