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
    <section className="py-10 md:py-14 bg-[#FAF7F2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden border border-[#cfe2ce] shadow-md bg-gradient-to-r from-[#d9edd2] via-[#e8f5df] to-[#d4eccd] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          style={{
            backgroundImage: "url('/images/newsletter-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Content */}
          <div className="relative z-10 space-y-1 max-w-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#173e2d] tracking-tight font-serif uppercase">
              GET HEALTH TIPS, OFFERS &amp; NEW ARRIVALS
            </h3>
            <p className="text-sm sm:text-base text-[#385141] font-medium">
              Subscribe to our newsletter and stay updated.
            </p>
          </div>

          {/* Right Input Form */}
          <div className="relative z-10 w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full text-[#166534] font-semibold shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#166534]" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-2 bg-white/95 p-1.5 sm:p-1 rounded-2xl sm:rounded-full border border-[#b8dab2] shadow-sm max-w-md w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 text-sm outline-none text-[#173e2d] placeholder-gray-500 rounded-full flex-1 bg-transparent"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[#173e2d] hover:bg-[#112d20] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow transition-all hover:gap-3 disabled:opacity-60"
                >
                  <span>{loading ? "Subscribing..." : "Subscribe"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
