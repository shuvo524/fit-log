"use client";

import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { PlanProvider } from "@/context/PlanContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <PlanProvider>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1b1e27",
            color: "#ffffff",
            border: "1px solid #262a33",
            fontSize: "14px",
          },
          success: {
            iconTheme: { primary: "#ccff00", secondary: "#000000" },
          },
        }}
      />
    </PlanProvider>
  );
}