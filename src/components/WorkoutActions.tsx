import { CalendarPlus, Bookmark } from "lucide-react";

export default function WorkoutActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-black transition hover:brightness-110"
      >
        <CalendarPlus className="h-4 w-4" />
        Add to today&apos;s plan
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/60"
      >
        <Bookmark className="h-4 w-4" />
        Save for later
      </button>
    </div>
  );
}