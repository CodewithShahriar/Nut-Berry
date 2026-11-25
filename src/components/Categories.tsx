"use client";

import React from "react";
import Image from "next/image";
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
    <section className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      {/* Floating Master Container matching exact Reference */}
      <div className="w-full bg-[#FAF7F2] rounded-3xl sm:rounded-[32px] p-5 sm:p-6 lg:p-7 border border-[#e8dfcf] shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-8">
          {/* Left Title: EXPLORE / OUR CATEGORIES matching exact Bebas Neue / condensed font */}
          <div className="shrink-0 md:min-w-[170px] lg:min-w-[190px] flex flex-col justify-center">
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.18em] text-[#1e3d2a] uppercase block mb-1">
              EXPLORE
            </span>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-condensed tracking-tight text-[#143d2c] uppercase leading-[0.92]">
              OUR <br />
              CATEGORIES
            </h2>
            <span className="w-11 h-[3.5px] bg-[#256047] rounded-full mt-2 inline-block" />
          </div>

          {/* Right 5 Category Cards */}
          <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-3.5 lg:gap-4">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.slug;

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`group relative rounded-2xl overflow-hidden aspect-[138/136] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    isActive
                      ? "ring-4 ring-[#256047] scale-[1.03] shadow-md"
                      : "border border-black/10 hover:border-[#256047]/40"
                  }`}
                >
                  {/* Category Card Image directly from reference */}
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
