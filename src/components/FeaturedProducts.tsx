"use client";

import React from "react";
import Image from "next/image";
import { Heart, ShoppingBag, ArrowRight, Eye, Check } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types/product";

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

  return (
    <section id="featured-products" className="py-12 md:py-20 bg-[#FAF7F2] border-t border-[#ede7dc]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-[2px] bg-[#256047]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#256047] uppercase">
                BEST SELLERS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#173e2d] tracking-tight font-serif uppercase">
              FEATURED PRODUCTS
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-[#e8e2d5] text-[#256047] hover:bg-[#d9d0c1] transition-colors"
              >
                Clear Filter ✕
              </button>
            )}
            <button
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#173e2d] hover:text-[#256047] transition-colors group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 4 Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const wish = isWishlisted(product.id);

            return (
              <div
                key={product.id}
                className="product-card group relative bg-white rounded-2xl border border-[#ede7dc] p-4 flex flex-col justify-between shadow-sm transition-all hover:border-[#256047]/30"
              >
                {/* Top Wishlist Heart */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {product.category}
                  </span>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to Wishlist"
                    className="p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 transition-transform active:scale-125 ${
                        wish ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Product Packet Image with Quick View Hover */}
                <div
                  onClick={() => setQuickViewProduct(product)}
                  className="relative w-full aspect-square bg-[#FAF7F2] rounded-xl overflow-hidden cursor-pointer flex items-center justify-center p-3 my-2"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Quick View Overlay Pill */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#173e2d] text-xs font-bold px-3 py-1.5 rounded-full shadow">
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="pt-2">
                  <h3
                    onClick={() => setQuickViewProduct(product)}
                    className="text-base font-bold text-[#1a2e22] hover:text-[#256047] cursor-pointer line-clamp-1 transition-colors"
                  >
                    {product.name}
                  </h3>

                  {/* Price Row & Action */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#f0ede6]">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-lg font-extrabold text-[#173e2d]">
                        ৳{product.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ৳{product.originalPrice}
                      </span>
                      {product.discountPercent > 0 && (
                        <span className="text-[11px] font-bold text-[#b45309] bg-[#fef3c7] px-1.5 py-0.5 rounded">
                          {product.discountPercent}% OFF
                        </span>
                      )}
                    </div>

                    {/* Circular Add-to-cart button */}
                    <button
                      onClick={() => addToCart(product, 1, product.weight)}
                      aria-label="Add to Cart"
                      className="w-10 h-10 rounded-full bg-[#183d2c] hover:bg-[#256047] text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#dcd6c9]">
            <p className="text-lg text-[#55695d] font-medium">No dry fruits match your search or filter.</p>
            <button
              onClick={() => {
                setSelectedCategory(null);
              }}
              className="mt-3 px-5 py-2 bg-[#173e2d] text-white rounded-full text-sm font-semibold hover:bg-[#256047]"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
