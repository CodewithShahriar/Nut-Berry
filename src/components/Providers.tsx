"use client";

import React, { useState, useEffect } from "react";
import { StoreProvider } from "@/context/StoreContext";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import ProductDetailModal from "@/components/ProductDetailModal";
import ContactModal from "@/components/ContactModal";
import VideoModal from "@/components/VideoModal";
import Toast from "@/components/Toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <StoreProvider>
      {children}
      {mounted && (
        <>
          <CartDrawer />
          <CheckoutModal />
          <ProductDetailModal />
          <ContactModal />
          <VideoModal />
          <Toast />
        </>
      )}
    </StoreProvider>
  );
}
