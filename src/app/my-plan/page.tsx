import { Suspense } from "react";
import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";
import MyPlanView from "@/components/MyPlanView";
import Spinner from "@/components/Spinner";

async function PlanData() {
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

  return <MyPlanView workouts={workouts} />;
}

export default function MyPlanPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <h1 className="font-display text-4xl font-bold uppercase">My Plan</h1>
      <p className="mt-1 text-sm text-muted">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8">
        <Suspense fallback={<Spinner />}>
          <PlanData />
        </Suspense>
      </div>
    </main>
  );
}