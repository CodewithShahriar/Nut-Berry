"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { useStore } from "@/context/StoreContext";

export default function Categories() {
  const { selectedCategory, setSelectedCategory } = useStore();

  const handleCategoryClick = (slug: any) => {
    if (selectedCategory === slug) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(slug);
    }
    const section = document.getElementById("featured-products");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Section Heading Left */}
          <div className="lg:w-1/4 shrink-0">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#5c6e63] uppercase">
              EXPLORE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173e2d] tracking-tight font-serif mt-0.5">
              OUR CATEGORIES
            </h2>
            <div className="w-12 h-1 bg-[#256047] rounded-full mt-2" />
          </div>

          {/* Categories Grid/Carousel Right */}
          <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md ${
                    isActive
                      ? "ring-2 ring-[#256047] border-transparent scale-[1.02]"
                      : "border-[#e8e2d5] hover:border-[#256047]/40"
                  }`}
                >
                  {/* Category Image */}
                  <div className="relative w-full aspect-[4/3] bg-[#f5f0e6] overflow-hidden p-2 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-contain transform group-hover:scale-108 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Category Bottom Label Pill */}
                  <div className="p-2 sm:p-2.5">
                    <div
                      className={`w-full py-1.5 px-2.5 rounded-xl flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? "bg-[#256047] text-white"
                          : "bg-[#18392b] text-white group-hover:bg-[#256047]"
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0 ml-1">
                        <ArrowRight className="w-2.5 h-2.5 text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
