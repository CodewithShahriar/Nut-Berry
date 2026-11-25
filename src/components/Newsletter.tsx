"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useStore();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please provide a valid email");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubscribed(true);
        showToast(data.message || "Subscribed successfully!");
        setEmail("");
      } else {
        showToast(data.error || "Subscription failed");
      }
    } catch {
      showToast("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 py-6 sm:py-8 md:py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Seamless Banner with user's uploaded background asset (bottom dark stripe clipped cleanly) */}
        <div
          className="relative w-full py-6 sm:py-7 lg:py-8 px-6 sm:px-14 lg:px-24 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 overflow-hidden rounded-[28px]"
          style={{
            backgroundImage: "url('/images/newsletter-banner.png')",
            backgroundSize: "100% 118%",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Left Content - clear of left leaf */}
          <div className="relative z-10 max-w-xl pl-4 sm:pl-6 lg:pl-8">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[22px] font-black text-[#112a1d] tracking-tight uppercase font-sans leading-tight">
              GET HEALTH TIPS, OFFERS &amp; NEW ARRIVALS
            </h3>
            <p className="text-xs sm:text-sm text-[#2b4b35] font-semibold mt-1">
              Subscribe to our newsletter and stay updated.
            </p>
          </div>

          {/* Right Input Form - clear of right leaf */}
          <div className="relative z-10 w-full lg:w-auto pr-4 sm:pr-6 lg:pr-8">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-white/95 px-6 py-3 rounded-full text-[#14532d] font-bold shadow-sm text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full bg-white text-[#112a1d] placeholder-gray-400 outline-none shadow-sm min-w-[220px] sm:min-w-[260px] md:min-w-[300px] border border-transparent focus:border-[#256047]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[#0c2217] hover:bg-[#143825] text-white text-xs sm:text-sm font-extrabold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 shrink-0"
                >
                  <span>{loading ? "..." : "Subscribe"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
