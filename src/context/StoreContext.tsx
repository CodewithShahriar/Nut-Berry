"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem, OrderPayload } from "@/types/product";
import { PRODUCTS } from "@/data/products";

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  searchQuery: string;
  selectedCategory: string | null;
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isContactOpen: boolean;
  isVideoOpen: boolean;
  currentPage: "home" | "contact";
  quickViewProduct: Product | null;
  toastMessage: string | null;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (cat: string | null) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setIsContactOpen: (open: boolean) => void;
  setIsVideoOpen: (open: boolean) => void;
  navigateTo: (page: "home" | "contact", sectionId?: string) => void;
  setQuickViewProduct: (product: Product | null) => void;
  addToCart: (product: Product, quantity?: number, weight?: string) => void;
  removeFromCart: (productId: string, weight?: string) => void;
  updateQuantity: (productId: string, delta: number, weight?: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  showToast: (msg: string) => void;
  placeOrder: (payload: OrderPayload) => Promise<{ success: boolean; orderId?: string; error?: string }>;
  cartCount: number;
  cartTotal: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "contact">(() => {
    if (typeof window !== "undefined" && window.location.pathname.toLowerCase().startsWith("/contact")) {
      return "contact";
    }
    return "home";
  });
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("nut_berry_cart");
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem("nut_berry_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch {
      // ignore SSR or storage errors
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem("nut_berry_cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("nut_berry_wishlist", JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    const syncFromPath = () => {
      const isContact = window.location.pathname.toLowerCase().startsWith("/contact");
      setCurrentPage(isContact ? "contact" : "home");
    };
    syncFromPath();
    window.addEventListener("popstate", syncFromPath);
    return () => window.removeEventListener("popstate", syncFromPath);
  }, []);

  const navigateTo = (page: "home" | "contact", sectionId?: string) => {
    if (typeof window !== "undefined") {
      // If running inside Next.js multi-page route (/contact), do a clean route navigation back to /
      if (page === "home" && !document.getElementById("hero-section") && window.location.pathname.toLowerCase().startsWith("/contact")) {
        window.location.href = sectionId ? `/#${sectionId}` : "/";
        return;
      }
      const targetUrl = page === "contact" ? "/contact" : "/";
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({}, "", targetUrl);
      }
    }
    setCurrentPage(page);
    if (page === "contact") {
      window.scrollTo(0, 0);
      return;
    }
    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  const addToCart = (product: Product, quantity: number = 1, weight: string = "500g") => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedWeight: weight }];
    });
    showToast(`Added ${product.name} to cart!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, weight: string = "500g") => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.selectedWeight === weight)));
  };

  const updateQuantity = (productId: string, delta: number, weight: string = "500g") => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedWeight === weight) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast("Removed from wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Added to wishlist ❤️");
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const placeOrder = async (payload: OrderPayload) => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        clearCart();
        return { success: true, orderId: data.orderId };
      }
      return { success: false, error: data.error || "Order failed" };
    } catch (err: any) {
      return { success: false, error: err.message || "Network error" };
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        searchQuery,
        selectedCategory,
        isCartOpen,
        isCheckoutOpen,
        isContactOpen,
        isVideoOpen,
        currentPage,
        quickViewProduct,
        toastMessage,
        setSearchQuery,
        setSelectedCategory,
        setIsCartOpen,
        setIsCheckoutOpen,
        setIsContactOpen,
        setIsVideoOpen,
        navigateTo,
        setQuickViewProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isWishlisted,
        showToast,
        placeOrder,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
