export type PlanTab = "plan" | "saved";

interface PlanTabsProps {
  active: PlanTab;
  onChange: (tab: PlanTab) => void;
}

const tabs: { key: PlanTab; label: string }[] = [
  { key: "plan", label: "Today\u2019s Plan" },
  { key: "saved", label: "Saved" },
];

export default function PlanTabs({ active, onChange }: PlanTabsProps) {
  return (
    <div className="inline-flex rounded-xl border border-line bg-surface p-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          className={`rounded-lg px-4 py-2 text-sm transition-colors ${
            active === tab.key
              ? "bg-surface-2 font-semibold text-white"
              : "text-muted hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}