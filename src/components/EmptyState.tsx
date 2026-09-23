import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line px-6 py-20 text-center sm:py-28">
      <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
        Nothing here yet
      </h3>
      <p className="mt-2 text-sm text-muted">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-black transition hover:brightness-110"
      >
        Go to workouts
      </Link>
    </div>
  );
}