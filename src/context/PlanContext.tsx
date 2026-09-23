"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface PlanContextValue {
  planIds: number[];
  savedIds: number[];
  doneIds: number[];
  addToPlan: (id: number) => boolean;
  addToSaved: (id: number) => boolean;
  markDone: (id: number) => boolean;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [planIds, setPlanIds] = useState<number[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);

  // true = নতুন যোগ হলো, false = আগে থেকেই ছিল
  const addToPlan = (id: number) => {
    if (planIds.includes(id)) return false;
    setPlanIds([...planIds, id]);
    return true;
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