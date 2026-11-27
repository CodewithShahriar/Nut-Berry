"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ShoppingBag, Heart, Star, Check, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function ProductDetailModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useStore();

  const [selectedWeight, setSelectedWeight] = useState("500g");
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const wish = isWishlisted(quickViewProduct.id);

  // Price multiplier according to weight
  const getAdjustedPrice = () => {
    if (selectedWeight === "250g") return Math.round(quickViewProduct.price * 0.55);
    if (selectedWeight === "1kg") return Math.round(quickViewProduct.price * 1.9);
    return quickViewProduct.price;
  };

  const currentPrice = getAdjustedPrice();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-[#ece5d8] z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-gray-100 flex items-center justify-center text-gray-600 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-[4/3] md:aspect-auto bg-[#F0F1EC] p-6 sm:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#ece5d8]">
            <div className="relative w-full h-full min-h-[190px] sm:min-h-[260px]">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                fill
                className="object-contain mix-blend-multiply brightness-[1.08] contrast-[1.03]"
              />
            </div>
            {quickViewProduct.discountPercent > 0 && (
              <span className="absolute top-4 left-4 bg-[#fef3c7] text-[#b45309] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                {quickViewProduct.discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
                <span className="text-xs text-gray-500 font-medium ml-1">
                  ({quickViewProduct.reviewCount} reviews)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#173e2d] font-serif">
                {quickViewProduct.name}
              </h3>

              <div className="flex items-baseline gap-2.5 mt-2">
                <span className="text-2xl font-extrabold text-[#173e2d]">
                  ৳{currentPrice}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ৳{Math.round(currentPrice * 1.15)}
                </span>
              </div>

              <p className="text-xs text-[#526658] mt-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Weight Selector */}
              <div className="mt-4">
                <label className="block text-[11px] font-bold text-[#173e2d] uppercase tracking-wider mb-1.5">
                  Package Size:
                </label>
                <div className="flex gap-2">
                  {["250g", "500g", "1kg"].map((w) => (
                    <button
                      key={w}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        selectedWeight === w
                          ? "bg-[#173e2d] text-white border-[#173e2d]"
                          : "bg-[#FAF7F2] text-gray-700 border-[#d6cfc2] hover:border-[#173e2d]"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-4 space-y-1.5">
                {quickViewProduct.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#2a4032]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#f0ede6] flex items-center gap-3">
              <button
                onClick={() => {
                  addToCart(quickViewProduct, quantity, selectedWeight);
                  setQuickViewProduct(null);
                }}
                className="flex-1 py-3 bg-[#173e2d] hover:bg-[#256047] text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart • ৳{currentPrice * quantity}</span>
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className="p-3 border border-[#d6cfc2] hover:bg-gray-50 rounded-xl text-gray-500 hover:text-red-500 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${wish ? "fill-red-500 text-red-500" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
