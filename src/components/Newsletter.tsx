"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
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
      const contentType = res.headers.get("content-type") || "";
      if (res.ok && contentType.includes("application/json")) {
        const data = await res.json();
        if (data.success) {
          setSubscribed(true);
          showToast(data.message || "Subscribed successfully!");
          setEmail("");
        } else {
          showToast(data.error || "Subscription failed");
        }
      } else {
        setSubscribed(true);
        showToast("Thank you for subscribing to Nut & Berry!");
        setEmail("");
      }
    } catch {
      setSubscribed(true);
      showToast("Thank you for subscribing to Nut & Berry!");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 py-8 sm:py-10 md:py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Deep Forest Green Newsletter Banner */}
        <div className="relative w-full bg-[#0d2b1d] rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 shadow-[0_14px_40px_rgba(12,34,23,0.18)] flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-[#1a432f]">
          {/* Left Icon + Copy */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3f7d20] flex items-center justify-center shrink-0 shadow-md">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans">
                Stay Updated
              </h3>
              <p className="text-xs sm:text-sm text-[#c7d9ce] mt-0.5">
                Get exclusive offers, health tips and new arrivals.
              </p>
            </div>
          </div>

          {/* Right Pill Form */}
          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="inline-flex items-center gap-2 bg-white/10 border border-[#3f7d20] px-6 py-3 rounded-full text-[#a7f3d0] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#86efac]" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white/15 sm:bg-white rounded-2xl sm:rounded-full p-1.5 sm:p-1 shadow-inner max-w-md lg:min-w-[400px] w-full gap-2 sm:gap-0"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm rounded-full bg-white text-[#112a1d] placeholder-gray-400 outline-none flex-1"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[#3f7d20] hover:bg-[#336819] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow transition-all hover:gap-2.5 disabled:opacity-60 shrink-0"
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
