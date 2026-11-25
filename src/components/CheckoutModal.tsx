"use client";

import React, { useState } from "react";
import { X, CheckCircle, Truck, CreditCard, ShieldCheck } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    placeOrder,
  } = useStore();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Dhaka");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bkash" | "nagad">("cod");
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isCheckoutOpen) return null;

  const deliveryFee = cartTotal >= 1500 ? 0 : 60;
  const total = cartTotal + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!customerName || !phone || !address) {
      setErrorMsg("Please complete all required fields.");
      return;
    }

    setLoading(true);
    const result = await placeOrder({
      customerName,
      phone,
      address,
      city,
      paymentMethod,
      items: cart,
      subtotal: cartTotal,
      deliveryFee,
      total,
    });

    setLoading(false);
    if (result.success && result.orderId) {
      setPlacedOrderId(result.orderId);
      setOrderComplete(true);
    } else {
      setErrorMsg(result.error || "Failed to place order.");
    }
  };

  const resetAndClose = () => {
    setIsCheckoutOpen(false);
    setOrderComplete(false);
    setPlacedOrderId("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div onClick={resetAndClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#ece5d8] overflow-hidden z-10">
        {/* Header */}
        <div className="p-5 border-b border-[#ece5d8] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#173e2d]" />
            <h3 className="text-lg font-bold text-[#173e2d] font-serif">
              {orderComplete ? "Order Confirmed!" : "Checkout & Delivery"}
            </h3>
          </div>
          <button onClick={resetAndClose} className="p-1 rounded-full hover:bg-gray-200">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {orderComplete ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#173e2d] font-serif">
              Thank You for Your Order!
            </h4>
            <p className="text-sm text-gray-600">
              Your order ID is{" "}
              <span className="font-mono font-bold text-[#173e2d] bg-gray-100 px-2 py-0.5 rounded">
                {placedOrderId}
              </span>
            </p>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Our packaging team is freshly packing your dry fruits. You will receive a confirmation phone call shortly.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-4 px-6 py-3 rounded-full bg-[#173e2d] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#256047]"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
            {errorMsg && (
              <div className="p-3 text-xs bg-red-50 text-red-600 rounded-lg border border-red-200">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#173e2d] uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Tanvir Ahmed"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cfc2] focus:border-[#256047] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#173e2d] uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="017XXXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cfc2] focus:border-[#256047] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#173e2d] uppercase mb-1">
                  City / District
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d6cfc2] focus:border-[#256047] outline-none bg-white"
                >
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#173e2d] uppercase mb-1">
                Full Delivery Address *
              </label>
              <textarea
                required
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House / Road / Area / Landmark"
                className="w-full px-3.5 py-2 rounded-xl border border-[#d6cfc2] focus:border-[#256047] outline-none text-sm"
              />
            </div>

            {/* Payment method selection */}
            <div>
              <label className="block text-xs font-bold text-[#173e2d] uppercase mb-2">
                Payment Option
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "cod", label: "Cash on Del." },
                  { id: "bkash", label: "bKash" },
                  { id: "nagad", label: "Nagad" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPaymentMethod(item.id as any)}
                    className={`py-2 px-2 text-center text-xs font-semibold rounded-xl border transition-all ${
                      paymentMethod === item.id
                        ? "bg-[#173e2d] text-white border-[#173e2d]"
                        : "bg-[#FAF7F2] text-gray-700 border-[#d6cfc2]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary pill */}
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#ece5d8] flex justify-between items-center text-sm">
              <span className="text-gray-600">Total Payable:</span>
              <span className="text-lg font-bold text-[#173e2d]">৳{total}</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#173e2d] hover:bg-[#256047] text-white font-bold rounded-xl shadow transition-all uppercase tracking-wider text-sm disabled:opacity-60"
            >
              {loading ? "Placing Order..." : `Confirm Order (৳${total})`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
