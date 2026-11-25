import React from "react";

function LeafCluster({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none drop-shadow-[0_12px_20px_rgba(20,50,25,0.16)] ${
        flip ? "-scale-x-100" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="leafMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6eb93a" />
          <stop offset="55%" stopColor="#3c8622" />
          <stop offset="100%" stopColor="#1e5312" />
        </linearGradient>
        <linearGradient id="leafLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8fd150" />
          <stop offset="60%" stopColor="#4c9a2a" />
          <stop offset="100%" stopColor="#286417" />
        </linearGradient>
        <linearGradient id="leafDeep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a9527" />
          <stop offset="100%" stopColor="#16410c" />
        </linearGradient>
      </defs>

      {/* Main Stem */}
      <path
        d="M-8 145 C 22 132, 52 115, 76 92"
        stroke="#2c6318"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Top Upright Leaf */}
      <g transform="translate(22, 12) rotate(-14 40 50)">
        <path
          d="M20 112 C -4 72, 10 22, 62 4 C 82 42, 68 92, 20 112 Z"
          fill="url(#leafLight)"
        />
        <path
          d="M20 112 C 32 76, 46 42, 62 4"
          stroke="#b8e986"
          strokeWidth="1.6"
          strokeOpacity="0.65"
          strokeLinecap="round"
        />
      </g>

      {/* Center Prominent Leaf */}
      <g transform="translate(36, 48) rotate(22 50 50)">
        <path
          d="M10 92 C 18 42, 58 10, 118 14 C 102 68, 62 96, 10 92 Z"
          fill="url(#leafMain)"
        />
        <path
          d="M10 92 C 46 66, 82 40, 118 14"
          stroke="#c5f095"
          strokeWidth="1.8"
          strokeOpacity="0.6"
          strokeLinecap="round"
        />
      </g>

      {/* Lower Drooping Leaf */}
      <g transform="translate(12, 110) rotate(48 45 45)">
        <path
          d="M12 80 C 20 38, 56 14, 104 20 C 90 62, 54 84, 12 80 Z"
          fill="url(#leafDeep)"
        />
        <path
          d="M12 80 C 44 58, 74 38, 104 20"
          stroke="#97d463"
          strokeWidth="1.4"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default function BotanicalBackdrop() {
  return (
    <div
      className="pointer-events-none select-none absolute inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Rich Warm Organic Base & Ambient Washes (eliminates plain flat white feel) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 28% at 6% 18%, rgba(166, 209, 137, 0.22), transparent 70%), " +
            "radial-gradient(ellipse 50% 25% at 94% 34%, rgba(212, 163, 115, 0.16), transparent 70%), " +
            "radial-gradient(ellipse 55% 28% at 8% 58%, rgba(154, 201, 128, 0.2), transparent 70%), " +
            "radial-gradient(ellipse 50% 25% at 92% 78%, rgba(166, 209, 137, 0.22), transparent 70%), " +
            "radial-gradient(ellipse 60% 22% at 15% 94%, rgba(212, 163, 115, 0.14), transparent 70%)",
        }}
      />

      {/* Subtle Organic Dot Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37, 96, 71, 0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 1. Top-Left Leaf Cluster peeking near Categories */}
      <LeafCluster className="absolute -left-5 sm:-left-3 top-[540px] sm:top-[580px] lg:top-[610px] w-24 sm:w-32 lg:w-36 opacity-90 rotate-6" />

      {/* 2. Mid-Right Leaf Cluster between About & Testimonials */}
      <LeafCluster
        flip
        className="absolute -right-6 sm:-right-3 top-[52%] w-28 sm:w-36 lg:w-44 opacity-90 -rotate-12"
      />

      {/* 3. Lower-Left Leaf Cluster beside Testimonials */}
      <LeafCluster className="absolute -left-5 sm:-left-2 top-[67%] w-24 sm:w-32 lg:w-36 opacity-85 rotate-12" />

      {/* 4. Bottom-Left Leaf Cluster beside Newsletter */}
      <LeafCluster className="absolute -left-5 sm:-left-3 bottom-16 sm:bottom-12 w-24 sm:w-32 lg:w-36 opacity-90 -rotate-6" />
    </div>
  );
}
