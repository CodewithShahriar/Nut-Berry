"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, Leaf } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function Hero() {
  const { setIsVideoOpen } = useStore();

  const scrollToShop = () => {
    const el = document.getElementById("featured-products");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0c2217] text-white">
      {/* Background Image: Panoramic Hero Bowl with Rustic Table & Foliage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bowl.jpg"
          alt="Premium Dry Fruits Assortment"
          fill
          priority
          quality={100}
          className="object-cover object-right lg:object-center select-none"
        />
        {/* Seamless dark green gradient on the left for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2217] via-[#0c2217]/95 via-35% to-transparent to-70% hidden sm:block pointer-events-none" />
        {/* Mobile full overlay so text is readable */}
        <div className="absolute inset-0 bg-[#0c2217]/85 sm:hidden pointer-events-none" />
      </div>

      {/* Floating Decorative Leaf Accent */}
      <div className="absolute top-6 left-[41%] w-6 h-6 opacity-75 pointer-events-none hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#74c69d]/80 rotate-12">
          <path
            d="M20.5 3.5C14.5 3.5 9 8 7 13.5C5.5 17.5 7 21 7 21C7 21 10.5 22.5 14.5 21C20 19 24.5 13.5 24.5 7.5C24.5 5 22.5 3.5 20.5 3.5Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-28 min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl space-y-3 sm:space-y-3.5">
          {/* Top Tag: PREMIUM & NATURAL — */}
          <div className="flex items-center gap-2">
            <span className="text-[#a7f3d0] text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
              PREMIUM &amp; NATURAL
            </span>
            <span className="w-9 h-[2px] bg-[#a7f3d0]/80 inline-block rounded-full"></span>
          </div>

          {/* Heading: DRY FRUITS (Ultra Bold Sans-serif) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] drop-shadow-sm font-sans">
            DRY FRUITS
          </h1>

          {/* Subheading: NATURE'S POWER SNACK */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-[0.14em] text-white uppercase pt-0.5">
            NATURE&apos;S POWER SNACK
          </h2>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-gray-200/90 leading-relaxed font-normal max-w-md pt-0.5">
            Handpicked with care, our dry fruits are packed with essential nutrients for a healthier and happier you.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 sm:pt-4">
            {/* Shop Dry Fruits -> */}
            <button
              onClick={scrollToShop}
              className="group inline-flex items-center gap-2 bg-[#FAF7F2] text-[#0f2a1d] hover:bg-white text-xs sm:text-sm font-extrabold px-6 sm:px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Shop Dry Fruits</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* (▶) Our Story */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2.5 text-white hover:text-[#a7f3d0] font-bold text-xs sm:text-sm transition-colors group"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-white/80 group-hover:border-[#a7f3d0] flex items-center justify-center transition-all bg-black/20 backdrop-blur-sm group-hover:scale-105">
                <Play className="w-3.5 h-3.5 fill-white group-hover:fill-[#a7f3d0] ml-0.5" />
              </span>
              <span>Our Story</span>
            </button>
          </div>
        </div>

        {/* Floating Badge (FRESH HARVEST) positioned bottom right over rustic table */}
        <div className="mt-8 sm:mt-0 sm:absolute sm:bottom-8 sm:right-6 lg:bottom-12 lg:right-10 z-20">
          <div className="relative bg-[#0e3321]/90 backdrop-blur-md text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-[#2b6a48]/70 shadow-2xl flex items-center gap-3 max-w-[260px] sm:max-w-[280px]">
            {/* Leaf Accent Icon */}
            <div className="w-9 h-9 rounded-full bg-[#1b4e33] flex items-center justify-center shrink-0 border border-[#40916c]/40">
              <Leaf className="w-4 h-4 text-[#86efac]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#86efac]">
                FRESH HARVEST
              </div>
              <div className="text-[10px] sm:text-[11px] text-gray-200 font-semibold leading-tight mt-0.5">
                100% Natural • No Preservatives
              </div>
              <div className="text-[9px] sm:text-[10px] text-gray-300 font-normal">
                Increased Selection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
