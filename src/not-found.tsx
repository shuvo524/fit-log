import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:py-32">
      <p className="font-display text-8xl font-bold text-accent sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        This page skipped leg day and disappeared. Head back to the library and
        pick a lift.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-black transition hover:brightness-110"
      >
        Back to workouts
      </Link>
    </main>
  );
}