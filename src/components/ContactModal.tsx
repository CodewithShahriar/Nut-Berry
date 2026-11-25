"use client";

import React, { useState } from "react";
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function ContactModal() {
  const { isContactOpen, setIsContactOpen, showToast } = useStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isContactOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Message sent! We will contact you shortly.");
    setTimeout(() => {
      setIsContactOpen(false);
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div onClick={() => setIsContactOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#ece5d8] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="p-5 border-b border-[#ece5d8] bg-[#FAF7F2] flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#173e2d] font-serif">
            Contact Nut &amp; Berry
          </h3>
          <button onClick={() => setIsContactOpen(false)} className="p-1 rounded-full hover:bg-gray-200">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-bold text-[#173e2d] font-serif">
              Thank You!
            </h4>
            <p className="text-xs text-gray-600">
              Our support team has received your query and will reply within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-3 text-xs text-[#4c5f53] pb-3 border-b border-[#f0ede6]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#256047]" />
                <span>+880 1700-000000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#256047]" />
                <span>hello@nutandberry.com</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#173e2d] uppercase mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cfc2] focus:border-[#256047] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#173e2d] uppercase mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cfc2] focus:border-[#256047] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#173e2d] uppercase mb-1">
                Your Inquiry or Message
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we assist you with Nut & Berry products?"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cfc2] focus:border-[#256047] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#173e2d] hover:bg-[#256047] text-white font-bold rounded-xl shadow uppercase tracking-wider text-xs flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
