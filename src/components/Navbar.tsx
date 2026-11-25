"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, ChevronDown, Menu, X, Leaf } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function Navbar() {
  const { cartCount, setIsCartOpen, currentPage, navigateTo, searchQuery, setSearchQuery, setSelectedCategory } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);

  const categories = [
    { label: "All Products", val: null },
    { label: "Almonds", val: "almonds" },
    { label: "Cashews", val: "cashews" },
    { label: "Pistachios", val: "pistachios" },
    { label: "Walnuts", val: "walnuts" },
    { label: "Dried Fruits", val: "dried-fruits" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#ece6db]/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#173e2d] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <Leaf className="w-5 h-5 text-[#86efac]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#173e2d] font-serif">
                Nut &amp; Berry
              </span>
            </div>
          </button>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-[#2f3e35]">
            <button
              type="button"
              onClick={() => navigateTo("home")}
              className={`relative py-1 cursor-pointer transition-colors ${
                currentPage === "home"
                  ? "text-[#173e2d] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#256047] after:rounded-full"
                  : "hover:text-[#173e2d]"
              }`}
            >
              Home
            </button>

            {/* Shop with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => setShopDropdown(false)}
            >
              <button
                onClick={() => navigateTo("home", "featured-products")}
                className="flex items-center gap-1 hover:text-[#173e2d] transition-colors py-2"
              >
                <span>Shop</span>
                <ChevronDown className="w-4 h-4 text-[#607368]" />
              </button>

              {shopDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl py-2 border border-[#ece6db] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(cat.val);
                        setShopDropdown(false);
                        navigateTo("home", "featured-products");
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-[#2b3a32] hover:bg-[#FAF7F2] hover:text-[#173e2d] transition-colors"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo("home", "about-section")}
              className="hover:text-[#173e2d] transition-colors"
            >
              About
            </button>

            <button
              onClick={() => navigateTo("home", "quality-section")}
              className="hover:text-[#173e2d] transition-colors"
            >
              Quality
            </button>

            <button
              type="button"
              onClick={() => navigateTo("contact")}
              className={`relative py-1 cursor-pointer transition-colors ${
                currentPage === "contact"
                  ? "text-[#173e2d] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#256047] after:rounded-full"
                  : "hover:text-[#173e2d]"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Icons & Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search Toggle */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center bg-white border border-[#d6cfc3] rounded-full px-3 py-1 shadow-sm">
                  <input
                    type="text"
                    placeholder="Search dry fruits..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (currentPage !== "home") {
                        navigateTo("home", "featured-products");
                      }
                    }}
                    autoFocus
                    className="w-36 sm:w-48 text-sm outline-none bg-transparent text-[#1e2d24]"
                  />
                  <button
                    onClick={() => {
                      if (searchQuery) setSearchQuery("");
                      setShowSearchInput(false);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  aria-label="Search"
                  className="p-1.5 text-[#2f3e35] hover:text-[#173e2d] transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Button with Count Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
              className="relative p-1.5 text-[#2f3e35] hover:text-[#173e2d] transition-transform active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#256047] text-white text-[11px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-[#FAF7F2]">
                {cartCount}
              </span>
            </button>

            {/* Contact Us Button */}
            <button
              onClick={() => navigateTo("contact")}
              className="hidden sm:inline-flex items-center justify-center bg-[#173e2d] hover:bg-[#112d20] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow"
            >
              Contact Us
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#2f3e35]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#ece6db] space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-[#173e2d] bg-[#f0ebd9] rounded-lg"
            >
              Home
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setSelectedCategory(null);
                navigateTo("home", "featured-products");
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-[#2f3e35] hover:bg-[#f5f1e6] rounded-lg"
            >
              Shop All Dry Fruits
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo("home", "about-section");
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-[#2f3e35] hover:bg-[#f5f1e6] rounded-lg"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo("home", "quality-section");
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-[#2f3e35] hover:bg-[#f5f1e6] rounded-lg"
            >
              Quality &amp; Sourcing
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo("contact");
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-[#173e2d] hover:bg-[#f5f1e6] rounded-lg"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
      </header>
      <div className="h-20 shrink-0" aria-hidden="true" />
    </>
  );
}
