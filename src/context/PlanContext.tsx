"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const MAX_PLAN = 5;
const STORAGE_KEY = "fitlog-state";

export type AddPlanResult = "added" | "exists" | "full";

interface PlanContextValue {
  planIds: number[];
  savedIds: number[];
  doneIds: number[];
  hydrated: boolean;
  addToPlan: (id: number) => AddPlanResult;
  addToSaved: (id: number) => boolean;
  markDone: (id: number) => boolean;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

const toIds = (value: unknown): number[] =>
  Array.isArray(value)
    ? value.filter((item): item is number => typeof item === "number")
    : [];

export function PlanProvider({ children }: { children: ReactNode }) {
  const [planIds, setPlanIds] = useState<number[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // পেজ লোড হলে localStorage থেকে আগের ডেটা ফিরিয়ে আনা
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setPlanIds(toIds(parsed.planIds).slice(0, MAX_PLAN));
        setSavedIds(toIds(parsed.savedIds));
        setDoneIds(toIds(parsed.doneIds));
      }
    } catch {
      // ডেটা নষ্ট থাকলে খালি অবস্থা থেকেই শুরু হবে
    }
    setHydrated(true);
  }, []);

  // কিছু বদলালেই localStorage-এ সেভ (পড়া শেষ হওয়ার আগে নয়)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ planIds, savedIds, doneIds })
      );
    } catch {
      // storage বন্ধ থাকলেও অ্যাপ চলবে
    }
  }, [planIds, savedIds, doneIds, hydrated]);

  const addToPlan = (id: number): AddPlanResult => {
    if (planIds.includes(id)) return "exists";
    if (planIds.length >= MAX_PLAN) return "full";
    setPlanIds([...planIds, id]);
    return "added";
  };

  const addToSaved = (id: number) => {
    if (savedIds.includes(id)) return false;
    setSavedIds([...savedIds, id]);
    return true;
  };

  const markDone = (id: number) => {
    if (doneIds.includes(id)) return false;
    setDoneIds([...doneIds, id]);
    return true;
  };

  const removeFromPlan = (id: number) => {
    setPlanIds(planIds.filter((item) => item !== id));
    setDoneIds(doneIds.filter((item) => item !== id));
  };

  const removeFromSaved = (id: number) =>
    setSavedIds(savedIds.filter((item) => item !== id));

  return (
    <PlanContext.Provider
      value={{
        planIds,
        savedIds,
        doneIds,
        hydrated,
        addToPlan,
        addToSaved,
        markDone,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }
  return context;
}