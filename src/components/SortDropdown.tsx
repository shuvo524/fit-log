import { ChevronDown } from "lucide-react";

export type SortKey = "duration" | "calories" | "rating";

const options: { value: SortKey; label: string }[] = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
];

interface SortDropdownProps {
  value: SortKey;
  onChange: (value: SortKey) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="sort-by" className="text-sm text-muted">
        Sort By
      </label>
      <div className="relative">
        <select
          id="sort-by"
          value={value}
          onChange={(e) => onChange(e.target.value as SortKey)}
          className="appearance-none rounded-lg border border-line bg-surface py-2 pl-3 pr-9 text-sm text-white outline-none transition hover:border-accent/60 focus:border-accent [color-scheme:dark]"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      </div>
    </div>
  );
}