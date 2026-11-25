"use client";

import React from "react";
import { useStore } from "@/context/StoreContext";
import { CheckCircle2 } from "lucide-react";

export default function Toast() {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center gap-2.5 bg-[#173e2d] text-white text-sm font-semibold px-4 py-3 rounded-2xl shadow-xl border border-emerald-400/30">
        <CheckCircle2 className="w-5 h-5 text-[#86efac]" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
