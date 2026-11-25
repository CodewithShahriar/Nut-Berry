"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Leaf, Users, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Leaf,
      title: "10+ PREMIUM VARIETIES",
      desc: "Selected from top global orchards",
    },
    {
      icon: Users,
      title: "5,000+ HAPPY CUSTOMERS",
      desc: "Trusted across Bangladesh",
    },
    {
      icon: ShieldCheck,
      title: "100% QUALITY ASSURED",
      desc: "Zero preservatives, 100% organic",
    },
  ];

  return (
    <section id="about-section" className="py-14 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Bowl Photo on Burlap */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/about-bowl.jpg"
                alt="Nut & Berry Fresh Natural Harvest Bowl"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#256047] uppercase">
                ABOUT NUT &amp; BERRY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173e2d] tracking-tight font-serif mt-1">
                PURE GOODNESS <br className="hidden sm:inline" />
                FROM NATURE
              </h2>
            </div>

            <p className="text-base text-[#4a5c51] leading-relaxed">
              We bring you a carefully curated selection of premium dry fruits, sourced from the best farms and packed with care to retain their natural goodness.
            </p>

            <div>
              <a
                href="#quality-section"
                className="inline-flex items-center gap-2 bg-[#173e2d] hover:bg-[#256047] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow transition-all hover:gap-3"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Metrics List with Green Icons */}
            <div id="quality-section" className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#ede7dc]">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex sm:flex-col items-center sm:items-start gap-3.5 p-3 rounded-2xl bg-white/70 border border-[#ede7dc] transition-all hover:bg-white hover:shadow-sm"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#dcfce7] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#166534]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#173e2d] tracking-wide uppercase">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#63756a] mt-0.5">{item.desc}</p>
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
