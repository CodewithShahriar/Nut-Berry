import React from "react";
import { StoreProvider } from "./context/StoreContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { BotanicalBackground } from "./components/BotanicalBackdrop";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import ProductDetailModal from "./components/ProductDetailModal";
import ContactModal from "./components/ContactModal";
import VideoModal from "./components/VideoModal";
import Toast from "./components/Toast";

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-[#ECE8D9] text-[#1c2e24] overflow-x-hidden">
        <Navbar />
        <main className="flex-1 relative">
          <BotanicalBackground />
          <Hero />
          <Categories />
          <FeaturedProducts />
          <WhyChooseUs />
          <AboutSection />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
        <CartDrawer />
        <CheckoutModal />
        <ProductDetailModal />
        <ContactModal />
        <VideoModal />
        <Toast />
      </div>
    </StoreProvider>
  );
}
