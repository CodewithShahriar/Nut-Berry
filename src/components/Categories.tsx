"use client";

import React from "react";
import Image from "next/image";
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
    <section className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      {/* Floating Master Container matching exact Reference */}
      <div className="w-full bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-[#e5decb] shadow-[0_12px_36px_rgba(0,0,0,0.07)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 lg:gap-6">
          {/* Left Title: EXPLORE OUR CATEGORIES */}
          <div className="shrink-0 flex flex-col justify-center select-none text-center md:text-left min-w-[140px] lg:min-w-[160px]">
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#1c2e24] uppercase block">
              EXPLORE
            </span>
            <span className="text-2xl sm:text-3xl lg:text-[34px] font-black uppercase tracking-tight text-[#14261d] block leading-[0.95] mt-1 font-sans">
              OUR
            </span>
            <span className="text-2xl sm:text-3xl lg:text-[34px] font-black uppercase tracking-tight text-[#14261d] block leading-[0.95] mt-0.5 font-sans">
              CATEGORIES
            </span>
            <div className="w-10 sm:w-12 h-1 bg-[#256047] rounded-full mt-2 sm:mt-2.5 mx-auto md:mx-0" />
          </div>

          {/* Right 5 Category Cards */}
          <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-3 lg:gap-3.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.slug;

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.slug)}
                  role="button"
                  tabIndex={0}
                  title={`View ${cat.name}`}
                  className={`group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[136/134] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    isActive
                      ? "ring-4 ring-[#256047] scale-[1.03] shadow-md"
                      : "border border-black/10 hover:border-[#256047]/40"
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
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
