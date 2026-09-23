import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="p-8">
      <h1 className="font-display text-4xl uppercase">
        FitLog ({workouts.length})
      </h1>
      <ul className="mt-4 text-muted">
        {workouts.map((w) => (
          <li key={w.id}>
            {w.id}. {w.name}
          </li>
        ))}
      </ul>
    </main>
  );
}