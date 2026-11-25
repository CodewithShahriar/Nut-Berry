"use client";

import React from "react";
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
    <section className="relative z-20 -mt-22 sm:-mt-26 md:-mt-30 lg:-mt-34 max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-6 mb-6 sm:mb-8 md:mb-10">
      {/* Floating Master Container matching exact Reference */}
      <div className="w-full bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 lg:p-5 border border-[#e5decb] shadow-[0_14px_45px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 lg:gap-5">
          {/* Left Title: EXPLORE OUR CATEGORIES */}
          <div className="shrink-0 flex flex-col justify-center select-none text-left min-w-[130px] sm:min-w-[150px] lg:min-w-[165px] pl-1 pr-1 sm:pr-2">
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

          {/* Right 5 Category Cards */}
          <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-3.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.slug;

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.slug)}
                  role="button"
                  tabIndex={0}
                  title={`View ${cat.name}`}
                  className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full aspect-[1.1/1] ${
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
