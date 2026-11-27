"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    setIsCheckoutOpen,
  } = useStore();

  const [coupon, setCoupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === "NUTBERRY10") {
      const disc = Math.round(cartTotal * 0.1);
      setDiscountAmount(disc);
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid promo code. Try NUTBERRY10");
    }
  };

  const deliveryFee = cartTotal > 0 ? (cartTotal >= 1500 ? 0 : 60) : 0;
  const grandTotal = Math.max(0, cartTotal - discountAmount + deliveryFee);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#ece5d8] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#173e2d]" />
              <h3 className="text-lg font-bold text-[#173e2d] font-serif">
                Your Shopping Bag ({cart.length})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e8e2d5] text-[#173e2d] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#173e2d]">
                    Your bag is empty
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Discover our freshly packed premium dry fruits.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#173e2d] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#256047]"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedWeight}`}
                  className="flex gap-4 p-3 bg-white rounded-2xl border border-[#ece5d8] shadow-sm items-center"
                >
                  {/* Item Image */}
                  <div className="relative w-16 h-16 bg-[#FAF7F2] rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#1a2d21] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-[#526658]">
                      Pack: {item.selectedWeight}
                    </p>
                    <div className="text-sm font-extrabold text-[#173e2d] mt-1">
                      ৳{item.product.price}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#d6cfc2] rounded-lg bg-[#FAF7F2]">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, -1, item.selectedWeight)
                          }
                          className="px-2 py-0.5 text-xs text-gray-600 hover:text-black"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#173e2d]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, 1, item.selectedWeight)
                          }
                          className="px-2 py-0.5 text-xs text-gray-600 hover:text-black"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.selectedWeight)
                        }
                        className="text-gray-400 hover:text-red-600 text-xs flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#ece5d8] space-y-3">
              {/* Promo code */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code (e.g. NUTBERRY10)"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 border border-[#d6cfc2] rounded-lg outline-none uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#256047] text-white text-xs font-bold rounded-lg hover:bg-[#1a4a35]"
                >
                  Apply
                </button>
              </form>
              {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}
              {couponApplied && (
                <p className="text-[11px] text-emerald-600 font-semibold">
                  ✓ 10% Discount applied!
                </p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#485b50] pt-2 border-t border-[#f0ece3]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">৳{cartTotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount (10%)</span>
                    <span>-৳{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? "FREE" : `৳${deliveryFee}`}</span>
                </div>
                {cartTotal < 1500 && (
                  <p className="text-[11px] text-amber-700">
                    Add ৳{1500 - cartTotal} more for FREE shipping across Bangladesh!
                  </p>
                )}
                <div className="flex justify-between text-base font-extrabold text-[#173e2d] pt-2 border-t border-[#f0ece3]">
                  <span>Total</span>
                  <span>৳{grandTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 bg-[#173e2d] hover:bg-[#256047] text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
