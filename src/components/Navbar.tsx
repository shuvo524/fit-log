"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { usePlan } from "@/context/PlanContext";

const links = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { planIds, savedIds } = usePlan();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <div className="justify-self-start">
          <Logo hideTextOnMobile />
        </div>

        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors sm:px-4 sm:text-sm ${
                isActive(link.href)
                  ? "bg-accent-dark text-accent"
                  : "text-muted hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end text-[13px] sm:gap-4 sm:text-sm">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span>Plan</span>
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1.5 text-xs font-bold text-black">
              {planIds.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 text-muted">
            <span>Saved</span>
            <span className="grid h-5 min-w-5 place-items-center rounded-full border border-line px-1.5 text-xs font-semibold text-white">
              {savedIds.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}