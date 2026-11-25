"use client";

import React from "react";
import { Leaf, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { LeafCluster } from "@/components/BotanicalBackdrop";

export default function Footer() {
  const { navigateTo } = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0c2619] text-[#d3e0d8] pt-14 pb-7 z-10 overflow-hidden">
      {/* Subtle Botanical Leaf Cluster in Bottom-Right Corner matching reference */}
      <LeafCluster
        flip
        className="absolute -right-8 sm:-right-6 bottom-10 w-28 sm:w-36 lg:w-44 opacity-45 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Brand Info (Col 1) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => navigateTo("home")}
              className="flex items-center gap-2.5 group text-left"
            >
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Leaf className="w-5 h-5 text-[#256047]" />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                Nut &amp; Berry
              </span>
            </button>

            <p className="text-sm text-[#b9cabe] max-w-xs leading-relaxed">
              Premium Dry Fruits for a Healthier You.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all shrink-0"
              >
                <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all shrink-0"
              >
                <svg width="14" height="14" className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all shrink-0"
              >
                <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all shrink-0"
              >
                <svg width="14" height="14" className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-[#c4d3ca]">
              <li>
                <button onClick={() => navigateTo("home")} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("home", "featured-products")} className="hover:text-white transition-colors">
                  Shop
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("home", "about-section")} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("home", "quality-section")} className="hover:text-white transition-colors">
                  Quality
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care (Col 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white">Customer Care</h4>
            <ul className="space-y-2.5 text-sm text-[#c4d3ca]">
              <li>
                <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                  Shipping &amp; Delivery
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                  Returns &amp; Refunds
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                  Track Your Order
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us (Col 4) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-[#c4d3ca]">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>info@nutandberry.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>Sylhet, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b5c7bc]">
          <div>&copy; 2025 Nut &amp; Berry. All rights reserved.</div>

          <div className="flex items-center gap-5 sm:gap-6">
            <div className="flex items-center gap-3">
              <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <span className="text-white/30">|</span>
              <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </button>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-white hover:bg-[#e8f5e9] text-[#0c2619] flex items-center justify-center shadow-md transition-all hover:-translate-y-0.5 shrink-0"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
