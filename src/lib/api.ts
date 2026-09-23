import type { Workout } from "@/types/workout";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch workouts");
  const data = await res.json();
  return Array.isArray(data) ? data : (data.data ?? []);
}

export async function getWorkoutById(
  id: string | number
): Promise<Workout | null> {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch workout");
  const data = await res.json();
  const workout = data?.id ? data : data?.data;
  return workout?.id ? (workout as Workout) : null;
}