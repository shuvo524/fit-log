"use client";

import { useState } from "react";
import type { Workout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";
import StatsPanel from "./StatsPanel";
import PlanTabs, { type PlanTab } from "./PlanTabs";
import PlanItem from "./PlanItem";
import EmptyState from "./EmptyState";

export default function MyPlanView({ workouts }: { workouts: Workout[] }) {
  const { planIds, savedIds } = usePlan();
  const [tab, setTab] = useState<PlanTab>("plan");

  const pick = (ids: number[]) =>
    ids
      .map((id) => workouts.find((w) => w.id === id))
      .filter((w): w is Workout => Boolean(w));

  const planWorkouts = pick(planIds);
  const savedWorkouts = pick(savedIds);
  const list = tab === "plan" ? planWorkouts : savedWorkouts;

  // Stats শুধু Today's Plan থেকে হিসাব হয়
  const minutes = planWorkouts.reduce((sum, w) => sum + w.duration, 0);
  const calories = planWorkouts.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <>
      <StatsPanel
        exercises={planWorkouts.length}
        minutes={minutes}
        calories={calories}
      />

      <div className="mt-8 flex items-center justify-between gap-4">
        <PlanTabs active={tab} onChange={setTab} />
      </div>

      <div className="mt-6 space-y-4">
        {list.length === 0 ? (
          <EmptyState />
        ) : (
          list.map((workout) => <PlanItem key={workout.id} workout={workout} />)
        )}
      </div>
    </>
  );
}