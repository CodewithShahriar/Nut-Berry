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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1b4332] via-[#24523e] to-[#173e2d] text-white pt-8 pb-14 md:py-20 lg:py-24">
      {/* Background organic leaf accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#52b788] blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#74c69d] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 z-10 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#86efac]"></span>
              <span className="text-[#86efac] text-xs sm:text-sm font-bold tracking-widest uppercase">
                PREMIUM &amp; NATURAL
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-serif leading-[1.08]">
                DRY FRUITS
              </h1>
              <p className="text-lg sm:text-2xl font-bold tracking-wider text-[#b7e4c7] uppercase">
                NATURE&apos;S POWER SNACK
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#e0eade] max-w-lg leading-relaxed font-normal">
              Handpicked with care, our dry fruits are packed with essential nutrients for a healthier and happier you.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              {/* Primary CTA */}
              <button
                onClick={scrollToShop}
                className="group inline-flex items-center gap-2.5 bg-white text-[#173e2d] hover:bg-[#eef5f0] text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Shop Dry Fruits</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Story Video Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-3 text-white hover:text-[#b7e4c7] font-semibold text-sm sm:text-base transition-colors group"
              >
                <span className="w-11 h-11 rounded-full border-2 border-white/80 group-hover:border-[#b7e4c7] flex items-center justify-center transition-all bg-white/10 backdrop-blur-sm group-hover:scale-105">
                  <Play className="w-4 h-4 fill-white group-hover:fill-[#b7e4c7] ml-0.5" />
                </span>
                <span>Our Story</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image Composition */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[15/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/images/hero-bowl.jpg"
                alt="Nut & Berry Premium Dry Fruits Bowl"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient edge overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#143e2c]/90 backdrop-blur-md text-white p-3 sm:p-4 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3 max-w-[250px]">
                <div className="w-10 h-10 rounded-xl bg-[#2d7857] flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-[#a7f3d0]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-[#86efac]">
                    FRESH HARVEST
                  </div>
                  <div className="text-[11px] text-gray-200 font-medium">
                    100% Natural • No Preservatives
                  </div>
                  <div className="text-[10px] text-gray-300">Increased Selection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
