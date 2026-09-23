import { Suspense } from "react";
import Hero from "@/components/Hero";
import LibraryGrid from "@/components/LibraryGrid";
import Spinner from "@/components/Spinner";

export default function Home() {
  return (
    <main>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl scroll-mt-6 px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 className="font-display text-3xl font-bold uppercase">
          The Library
        </h2>
        <p className="mt-1 text-sm text-muted">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mt-8">
          <Suspense fallback={<Spinner />}>
            <LibraryGrid />
          </Suspense>
        </div>
      </section>
    </main>
  );
}