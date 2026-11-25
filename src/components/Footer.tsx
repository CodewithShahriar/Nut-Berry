"use client";

import React, { useState } from "react";
import { Leaf, ArrowUp, ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function Footer() {
  const { navigateTo, showToast } = useStore();
  const [footerEmail, setFooterEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail || !footerEmail.includes("@")) {
      showToast("Please enter a valid email");
      return;
    }
    showToast("Thank you for joining Nut & Berry community!");
    setFooterEmail("");
  };

  return (
    <footer className="bg-[#0f291e] text-[#c9d8ce] pt-16 pb-8 border-t border-[#1d4232] relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1f4736]">
          {/* Brand Info (Col 1) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#256047] flex items-center justify-center text-white shrink-0">
                <Leaf className="w-4 h-4 text-[#86efac]" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">
                Nut &amp; Berry
              </span>
            </div>

            <p className="text-sm text-[#a4b8ac] max-w-sm leading-relaxed">
              Premium Dry Fruits for a Healthier You. Nature&apos;s finest bounty, harvested from trusted sustainable orchards.
            </p>

            {/* Social Icons (Explicit width & height to prevent SVG layout blowout) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1b4332] hover:bg-[#2d7857] text-[#86efac] hover:text-white flex items-center justify-center transition-all shrink-0 overflow-hidden"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current block shrink-0" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1b4332] hover:bg-[#2d7857] text-[#86efac] hover:text-white flex items-center justify-center transition-all shrink-0 overflow-hidden"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current block shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#1b4332] hover:bg-[#2d7857] text-[#86efac] hover:text-white flex items-center justify-center transition-all shrink-0 overflow-hidden"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current block shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#1b4332] hover:bg-[#2d7857] text-[#86efac] hover:text-white flex items-center justify-center transition-all shrink-0 overflow-hidden"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current block shrink-0" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about-section" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#quality-section" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#quality-section" className="hover:text-white transition-colors">
                  Quality &amp; Sourcing
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links (Col 3) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white">
              HELP
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
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
            </ul>
          </div>

          {/* Stay in the Loop (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white">
              STAY IN THE LOOP
            </h4>
            <p className="text-sm text-[#a4b8ac]">
              Get offers, health tips and new arrivals.
            </p>

            <form onSubmit={handleFooterSubscribe} className="relative flex items-center mt-2 max-w-sm">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="w-full bg-[#163829] border border-[#23533c] focus:border-[#52b788] rounded-lg py-2.5 pl-4 pr-12 text-sm text-white placeholder-gray-400 outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 w-8 h-8 rounded-md bg-[#256047] hover:bg-[#348462] text-white flex items-center justify-center transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8da597]">
          <div>
            &copy; 2025 Nut &amp; Berry. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setIsContactOpen(true)} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span className="text-gray-600">|</span>
            <button onClick={() => setIsContactOpen(true)} className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </button>
            <span className="text-gray-600">|</span>
            <button onClick={() => setIsContactOpen(true)} className="hover:text-white transition-colors">
              Contact Us
            </button>
          </div>

          {/* Back to top circular button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-[#1b4332] hover:bg-[#256047] text-white flex items-center justify-center shadow transition-all hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
