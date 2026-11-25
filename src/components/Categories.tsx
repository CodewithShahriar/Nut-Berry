"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { useStore } from "@/context/StoreContext";

export default function Categories() {
  const { selectedCategory, setSelectedCategory } = useStore();

  const handleCategoryClick = (slug: string) => {
    if (selectedCategory === slug) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(slug);
    }
    const section = document.getElementById("featured-products");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-20 w-full -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 mb-6 sm:mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Master Container aligned flush with all other sections (max-w-7xl) */}
        <div className="w-full bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-[#e5decb] shadow-[0_14px_45px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-5 lg:gap-6">
            {/* Left Title: EXPLORE OUR CATEGORIES */}
            <div className="shrink-0 flex flex-col justify-center select-none text-left min-w-[140px] sm:min-w-[160px] lg:min-w-[175px] pr-2">
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.22em] text-[#1c2e24] uppercase block">
                EXPLORE
              </span>
              <span className="text-2xl sm:text-3xl lg:text-[34px] font-black uppercase tracking-tight text-[#14261d] block leading-[0.95] mt-1 font-sans">
                OUR
              </span>
              <span className="text-2xl sm:text-3xl lg:text-[34px] font-black uppercase tracking-tight text-[#14261d] block leading-[0.95] mt-0.5 font-sans">
                CATEGORIES
              </span>
              <div className="w-10 sm:w-12 h-1 bg-[#256047] rounded-full mt-2 sm:mt-2.5" />
            </div>

            {/* Right 5 Category Cards filling full remaining width */}
            <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-4">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.slug;

                return (
                  <div
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.slug)}
                    role="button"
                    tabIndex={0}
                    title={`View ${cat.name}`}
                    className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full aspect-[1.12/1] ${
                      isActive
                        ? "ring-4 ring-[#256047] scale-[1.03] shadow-md"
                        : "hover:ring-2 hover:ring-[#256047]/40"
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="eager"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    {/* Bottom Label & Circular Arrow matching exact Reference */}
                    <div className="absolute bottom-0 inset-x-0 px-3 py-2.5 sm:px-3.5 sm:py-3 flex items-center justify-between gap-1.5">
                      <span className="text-white text-[11px] sm:text-xs lg:text-[13px] font-black tracking-wide uppercase drop-shadow-sm truncate">
                        {cat.name}
                      </span>
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/80 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:bg-white group-hover:text-[#14261d]">
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
