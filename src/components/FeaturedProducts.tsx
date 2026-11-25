"use client";

import React from "react";
import Image from "next/image";
import { Heart, ShoppingBag, ArrowRight, Eye, Leaf } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/data/products";

export default function FeaturedProducts() {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
    setQuickViewProduct,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
  } = useStore();

  let filtered = [...PRODUCTS];

  if (selectedCategory) {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }

  // Focus primarily on the 4 featured products from reference when not filtered
  const displayProducts = !selectedCategory && !searchQuery ? filtered.slice(0, 4) : filtered;

  return (
    <section id="featured-products" className="pt-2 sm:pt-4 md:pt-6 pb-12 md:pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          {/* Left Title: — BEST SELLERS / FEATURED PRODUCTS */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-[2px] bg-[#256047]" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#256047] uppercase">
                BEST SELLERS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#133527] uppercase tracking-tight font-sans">
              FEATURED PRODUCTS
            </h2>
          </div>

          {/* Right Brand Badge & View All Products */}
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Brand Logo & Name */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#256047] flex items-center justify-center text-white">
                <Leaf className="w-3.5 h-3.5 text-[#86efac]" />
              </div>
              <span className="text-sm font-extrabold text-[#173e2d] tracking-tight">
                Nut &amp; Berry
              </span>
            </div>

            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-xs font-bold px-3 py-1 rounded-full bg-[#e8dfcf] text-[#133527] hover:bg-[#ded3c1] transition-colors"
              >
                Clear Filter ✕
              </button>
            )}

            <button
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#133527] hover:text-[#256047] transition-colors group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 4 Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayProducts.map((product) => {
            const wish = isWishlisted(product.id);

            return (
              <div
                key={product.id}
                className="product-card group relative bg-white rounded-3xl border border-[#ece4d6] p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Top Wishlist Heart Icon */}
                <div className="flex justify-end mb-1">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to Wishlist"
                    className="p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50/80 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 transition-transform active:scale-125 ${
                        wish ? "fill-red-500 text-red-500" : "stroke-[1.75]"
                      }`}
                    />
                  </button>
                </div>

                {/* Product Packet Image */}
                <div
                  onClick={() => setQuickViewProduct(product)}
                  className="relative w-full aspect-[4/3] bg-[#FAF7F2] rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center p-2 mb-2"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-1 transform group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Quick View Overlay Pill */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#133527] text-xs font-bold px-3 py-1.5 rounded-full shadow">
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="pt-1">
                  <h3
                    onClick={() => setQuickViewProduct(product)}
                    className="text-sm sm:text-base font-bold text-[#133527] hover:text-[#256047] cursor-pointer line-clamp-1 transition-colors"
                  >
                    {product.name}
                  </h3>

                  {/* Price Row & Cart Action */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#f2ede4]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base sm:text-lg font-black text-[#133527]">
                        ৳{product.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ৳{product.originalPrice}
                      </span>
                      {product.discountPercent > 0 && (
                        <span className="text-[10px] sm:text-[11px] font-bold text-[#c2571a] bg-[#fee2cc] px-2 py-0.5 rounded-md">
                          {product.discountPercent}% OFF
                        </span>
                      )}
                    </div>

                    {/* Circular Add-to-cart button matching reference */}
                    <button
                      onClick={() => addToCart(product, 1, product.weight)}
                      aria-label="Add to Cart"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#133527] hover:bg-[#20523b] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {displayProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#dcd6c9]">
            <p className="text-base text-[#55695d] font-medium">No dry fruits match your search or filter.</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-3 px-5 py-2 bg-[#133527] text-white rounded-full text-xs font-bold uppercase hover:bg-[#256047]"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
