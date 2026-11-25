"use client";

import React from "react";
import { X, Play, CheckCircle } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function VideoModal() {
  const { isVideoOpen, setIsVideoOpen } = useStore();

  if (!isVideoOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={() => setIsVideoOpen(false)} className="fixed inset-0 bg-black/75 backdrop-blur-md" />

      <div className="relative w-full max-w-3xl bg-[#0f281c] text-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Nut &amp; Berry: Our Sustainable Harvest Story
          </h3>
          <button onClick={() => setIsVideoOpen(false)} className="p-1 rounded-full hover:bg-white/10 text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="aspect-video w-full rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Visual presentation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1b4332] via-[#2d6a4f] to-[#143e2c] opacity-80" />
            <div className="relative z-10 text-center space-y-3 px-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto border-2 border-white/60">
                <Play className="w-7 h-7 fill-white ml-1 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
                From Pristine Orchards to Your Home
              </h4>
              <p className="text-xs sm:text-sm text-gray-200 max-w-md mx-auto">
                Discover how each almond, cashew, pistachio and walnut kernel is picked at peak ripeness and vacuum packed to lock in freshness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-200">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-emerald-400 font-bold block mb-1">🌱 Sustainable Sourcing</span>
              Direct relationships with verified organic farm cooperatives.
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-emerald-400 font-bold block mb-1">✨ Pure &amp; Unadulterated</span>
              No mineral oils, no artificial preservatives, and no added colors.
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-emerald-400 font-bold block mb-1">📦 Fresh Nitrogen Flush</span>
              Guarantees the signature crisp snap in every single bite.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
