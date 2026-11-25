"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Explore Categories */}
      <Categories />

      {/* 4. Best Sellers / Featured Products */}
      <FeaturedProducts />

      {/* 5. About Nut & Berry / Pure Goodness From Nature */}
      <AboutSection />

      {/* 6. Testimonials / What Our Customers Say */}
      <Testimonials />

      {/* 7. Newsletter Banner */}
      <Newsletter />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
