import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) notFound();

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: String(workout.sets) },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: String(workout.rating) },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: image */}
        <div className="relative aspect-[4/5] w-full self-start overflow-hidden rounded-2xl border border-line">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Right: details */}
        <div>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            {workout.name}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <dl className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between border-b border-line px-5 py-4 last:border-b-0"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {spec.label}
                </dt>
                <dd className="text-sm">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 text-base font-bold uppercase tracking-wide">
            Instructions
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-white/85 marker:text-muted">
            {workout.instructions.map((step, index) => (
              <li key={index} className="pl-1">
                {step}
              </li>
            ))}
          </ol>

          <WorkoutActions />
        </div>
      </div>
    </main>
  );
}