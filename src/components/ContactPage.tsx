"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Leaf,
  PackageCheck,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { BotanicalBackground, LeafCluster } from "@/components/BotanicalBackdrop";

export default function ContactPage() {
  const { showToast, navigateTo } = useStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Order Inquiry");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast("Message sent! Our team will reach out shortly.");
    }, 450);
  };

  return (
    <div className="relative min-h-screen bg-[#ECE8D9]">
      <BotanicalBackground />

      {/* Deep Forest Green Header Banner */}
      <section className="relative z-10 bg-[#0c2217] text-white py-14 sm:py-18 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/images/hero-bowl.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo("home")}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#a7f3d0] hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Store</span>
          </button>

          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[#a7f3d0] text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
                GET IN TOUCH
              </span>
              <span className="w-9 h-[2px] bg-[#a7f3d0]/80 inline-block rounded-full" />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none font-sans">
              CONTACT NUT &amp; BERRY
            </h1>
            <p className="text-sm sm:text-base text-gray-200/90 leading-relaxed max-w-xl">
              Have a question about your order, wholesale pricing, or custom gift hampers? Send us a message and our support team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <LeafCluster className="hidden sm:block absolute -left-14 lg:-left-16 top-10 w-28 lg:w-32 z-30 rotate-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Direct Info & Store Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#e5decb] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#256047] uppercase">
                    DIRECT CHANNELS
                  </span>
                  <h2 className="text-2xl font-black text-[#133527] mt-1 font-sans">
                    We&apos;d Love to Hear From You
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F0F1EC] border border-[#e0e1d8]">
                    <div className="w-10 h-10 rounded-full bg-[#173e2d] text-[#86efac] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#55695d]">
                        Phone &amp; WhatsApp
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#133527] mt-0.5">
                        +880 123 456 789
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F0F1EC] border border-[#e0e1d8]">
                    <div className="w-10 h-10 rounded-full bg-[#173e2d] text-[#86efac] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#55695d]">
                        Email Support
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#133527] mt-0.5">
                        hello@nutandberry.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F0F1EC] border border-[#e0e1d8]">
                    <div className="w-10 h-10 rounded-full bg-[#173e2d] text-[#86efac] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#55695d]">
                        Flagship Store
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#133527] mt-0.5">
                        Zindabazar, Sylhet, Bangladesh
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F0F1EC] border border-[#e0e1d8]">
                    <div className="w-10 h-10 rounded-full bg-[#173e2d] text-[#86efac] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#55695d]">
                        Support Hours
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#133527] mt-0.5">
                        Sat – Thu: 9:00 AM – 9:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wholesale & Gifting Card */}
              <div className="bg-[#0c2217] text-white rounded-3xl p-6 sm:p-7 border border-[#2b6a48]/60 shadow-lg flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#1b4e33] flex items-center justify-center shrink-0 border border-[#40916c]/40">
                  <PackageCheck className="w-5 h-5 text-[#86efac]" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#a7f3d0] uppercase tracking-wide">
                    Corporate &amp; Festive Gift Hampers
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                    Planning bulk dry fruit boxes for Eid, weddings, or corporate events? Select &ldquo;Bulk &amp; Corporate Gifting&rdquo; in the form for custom pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#e5decb] shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#dcf0e2] text-[#256047] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-black text-[#133527] font-sans">
                      Thank You, {name}!
                    </h3>
                    <p className="text-sm sm:text-base text-[#55695d] max-w-md mx-auto leading-relaxed">
                      Your message has been received by the Nut &amp; Berry team. We will get back to you at <span className="font-bold text-[#133527]">{email}</span> shortly.
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setEmail("");
                          setPhone("");
                          setMessage("");
                        }}
                        className="px-6 py-2.5 rounded-full border border-[#256047] text-[#256047] text-sm font-bold hover:bg-[#256047]/10 transition-colors"
                      >
                        Send Another Message
                      </button>
                      <button
                        onClick={() => navigateTo("home")}
                        className="px-6 py-2.5 rounded-full bg-[#173e2d] hover:bg-[#112d20] text-white text-sm font-bold transition-colors"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between border-b border-[#e5decb] pb-4">
                      <div>
                        <span className="text-xs font-extrabold tracking-widest text-[#256047] uppercase">
                          SEND A MESSAGE
                        </span>
                        <h2 className="text-2xl font-black text-[#133527] mt-0.5 font-sans">
                          Drop Us a Line
                        </h2>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#dcf0e2] flex items-center justify-center text-[#256047]">
                        <Leaf className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#385141] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Abid Hasan"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#dcd4c4] text-sm text-[#133527] outline-none focus:border-[#256047] focus:ring-2 focus:ring-[#256047]/15 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#385141] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#dcd4c4] text-sm text-[#133527] outline-none focus:border-[#256047] focus:ring-2 focus:ring-[#256047]/15 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#385141] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+880 1XXX-XXXXXX"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#dcd4c4] text-sm text-[#133527] outline-none focus:border-[#256047] focus:ring-2 focus:ring-[#256047]/15 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#385141] mb-1.5">
                          Subject
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#dcd4c4] text-sm text-[#133527] outline-none focus:border-[#256047] focus:ring-2 focus:ring-[#256047]/15 transition-all"
                        >
                          <option value="Order Inquiry">Order Inquiry</option>
                          <option value="Bulk & Corporate Gifting">Bulk &amp; Corporate Gifting</option>
                          <option value="Product Quality & Sourcing">Product Quality &amp; Sourcing</option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#385141] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#dcd4c4] text-sm text-[#133527] outline-none focus:border-[#256047] focus:ring-2 focus:ring-[#256047]/15 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#173e2d] hover:bg-[#112d20] text-white text-sm font-extrabold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
