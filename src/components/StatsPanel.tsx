interface StatsPanelProps {
  exercises: number;
  minutes: number;
  calories: number;
}

export default function StatsPanel({
  exercises,
  minutes,
  calories,
}: StatsPanelProps) {
  const stats = [
    { label: "Exercises", value: exercises, highlight: true },
    { label: "Minutes", value: minutes, highlight: false },
    { label: "Calories", value: calories, highlight: false },
  ];

  return (
    <div className="grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-surface">
      {stats.map((stat) => (
        <div key={stat.label} className="px-4 py-5 sm:px-6 sm:py-7">
          <p className="text-xs text-muted sm:text-sm">{stat.label}</p>
          <p
            className={`mt-1 font-display text-4xl font-bold sm:text-5xl ${
              stat.highlight ? "text-accent" : "text-white"
            }`}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}