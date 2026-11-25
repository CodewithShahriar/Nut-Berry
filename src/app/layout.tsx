import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Nut & Berry | Nature's Power Snack - Premium Dry Fruits",
  description:
    "Nut & Berry delivers handpicked, 100% natural, preservative-free premium dry fruits: almonds, cashews, pistachios, walnuts, and dried fruits across Bangladesh.",
  keywords: [
    "Nut & Berry",
    "Dry Fruits",
    "Almonds",
    "Cashews",
    "Pistachios",
    "Walnuts",
    "Healthy Snacks",
    "Organic Nuts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#FAF7F2] text-[#1c2e24]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
