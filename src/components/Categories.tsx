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
    <section className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      {/* Floating Rounded Master Container */}
      <div className="bg-[#FAF7F2] rounded-3xl sm:rounded-[32px] p-5 sm:p-7 md:p-8 border border-[#e8dfcf] shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
          {/* Left Title: EXPLORE / OUR CATEGORIES */}
          <div className="lg:w-[22%] shrink-0">
            <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#256047] uppercase block">
              EXPLORE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#133527] uppercase tracking-tight leading-[1.05] mt-1 font-sans">
              OUR <br />
              CATEGORIES
            </h2>
            <div className="w-10 h-[3.5px] bg-[#256047] rounded-full mt-2.5" />
          </div>

          {/* Right 5 Category Cards */}
          <div className="lg:w-[78%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-3.5 lg:gap-4">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.slug;

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    isActive
                      ? "ring-3 ring-[#256047] scale-[1.02] shadow-md"
                      : "border border-black/5"
                  }`}
                >
                  {/* Full Bleed Category Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover object-center transform group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Dark Gradient Overlay at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-2.5 sm:p-3" />

                  {/* Bottom Bar: Title & Circle Arrow */}
                  <div className="relative z-10 w-full flex items-center justify-between text-white">
                    <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase drop-shadow-sm truncate pr-1">
                      {cat.name}
                    </span>

                    {/* Circular Arrow Button (thin white border) */}
                    <span
                      className={`w-5 h-5 rounded-full border border-white/90 flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? "bg-[#256047] border-[#256047] text-white"
                          : "bg-black/20 group-hover:bg-white group-hover:text-[#133527]"
                      }`}
                    >
                      <ArrowRight className="w-2.5 h-2.5" />
                    </span>
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
