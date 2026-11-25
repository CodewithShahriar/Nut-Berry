"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";
import { LeafCluster } from "@/components/BotanicalBackdrop";

export default function Testimonials() {
  return (
    <section className="relative z-10 py-14 md:py-20 bg-transparent border-t border-[#e5decb]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Leaf peeking on Left edge of Testimonials */}
        <LeafCluster className="absolute -left-8 sm:-left-12 lg:-left-14 top-12 sm:top-16 w-24 sm:w-28 lg:w-36 z-30 rotate-12" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#256047] uppercase">
              REVIEWS &amp; LOVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173e2d] tracking-tight font-serif mt-1">
              WHAT OUR <br />
              CUSTOMERS SAY
            </h2>
            <div className="w-12 h-1 bg-[#256047] rounded-full mt-3" />
            <p className="text-sm text-[#55695d] mt-4 leading-relaxed">
              Real feedback from customers across the country who enjoy our nutritious and premium dry fruits every single day.
            </p>
          </div>

          {/* Right 3 Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#ede7dc] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div>
                  <Quote className="w-7 h-7 text-[#256047]/40 mb-3 rotate-180" />
                  <p className="text-sm text-[#3b4d42] leading-relaxed italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#f0ede6]">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-1.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>
                  <h4 className="text-sm font-bold text-[#173e2d]">{item.name}</h4>
                  <span className="text-[11px] text-[#256047] font-medium flex items-center gap-1">
                    ✓ Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
