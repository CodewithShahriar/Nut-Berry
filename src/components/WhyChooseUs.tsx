"use client";

import React from "react";
import { Leaf, ShieldCheck, Award, Truck, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: Leaf,
    line1: "100% Farm",
    line2: "Natural",
  },
  {
    icon: ShieldCheck,
    line1: "Zero Added",
    line2: "Preservatives",
  },
  {
    icon: Award,
    line1: "Export Grade",
    line2: "Quality",
  },
  {
    icon: Truck,
    line1: "Nationwide",
    line2: "Fast Delivery",
  },
];

export default function WhyChooseUs() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-[#e3ecd9] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-11 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10"
          style={{
            backgroundImage: "url('/images/why-choose-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Subtle mobile overlay for legibility on narrow screens */}
          <div className="absolute inset-0 bg-[#f1f8e9]/80 lg:hidden pointer-events-none" />

          {/* Left Copy & CTA */}
          <div className="relative z-10 max-w-xs shrink-0 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#3f7d20] inline-block rounded-full" />
              <span className="text-xs sm:text-sm font-bold text-[#14261d]">
                Why Choose Nut &amp; Berry?
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#112a1d] leading-[1.1] tracking-tight font-sans">
              Pure Taste in
              <br />
              Every Handful
            </h2>

            <p className="text-xs sm:text-sm text-[#385141] font-medium leading-relaxed">
              Farm-fresh harvests, zero additives, and unmatched crunch delivered with care.
            </p>

            <div className="pt-1">
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 bg-[#0c2217] hover:bg-[#143825] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-md transition-all hover:gap-3 transform hover:-translate-y-0.5"
              >
                <span>Discover More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Middle 4 Feature Pillars (kept clear of right-side cashew bowl) */}
          <div className="relative z-10 flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 lg:pr-[240px] xl:pr-[280px]">
            {PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.line1}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-white/85 backdrop-blur-sm border border-[#dce8d2] shadow-sm flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#428b29]" strokeWidth={2} />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#14261d] leading-tight">
                    {item.line1}
                    <br />
                    {item.line2}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
