"use client";

import React, { useId } from "react";

export function LeafCluster({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const mainId = `leafMain-${uid}`;
  const lightId = `leafLight-${uid}`;
  const deepId = `leafDeep-${uid}`;

  return (
    <svg
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none drop-shadow-[0_14px_22px_rgba(20,50,25,0.22)] ${
        flip ? "-scale-x-100" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={mainId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#72be3c" />
          <stop offset="55%" stopColor="#3c8622" />
          <stop offset="100%" stopColor="#1b4d10" />
        </linearGradient>
        <linearGradient id={lightId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94d555" />
          <stop offset="60%" stopColor="#4c9a2a" />
          <stop offset="100%" stopColor="#266016" />
        </linearGradient>
        <linearGradient id={deepId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a9527" />
          <stop offset="100%" stopColor="#143c0a" />
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
          fill={`url(#${lightId})`}
        />
        <path
          d="M20 112 C 32 76, 46 42, 62 4"
          stroke="#c3ef94"
          strokeWidth="1.6"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
      </g>

      {/* Center Prominent Leaf */}
      <g transform="translate(36, 48) rotate(22 50 50)">
        <path
          d="M10 92 C 18 42, 58 10, 118 14 C 102 68, 62 96, 10 92 Z"
          fill={`url(#${mainId})`}
        />
        <path
          d="M10 92 C 46 66, 82 40, 118 14"
          stroke="#ccf29f"
          strokeWidth="1.8"
          strokeOpacity="0.65"
          strokeLinecap="round"
        />
      </g>

      {/* Lower Drooping Leaf */}
      <g transform="translate(12, 110) rotate(48 45 45)">
        <path
          d="M12 80 C 20 38, 56 14, 104 20 C 90 62, 54 84, 12 80 Z"
          fill={`url(#${deepId})`}
        />
        <path
          d="M12 80 C 44 58, 74 38, 104 20"
          stroke="#97d463"
          strokeWidth="1.4"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function BotanicalBackground() {
  return (
    <div
      className="pointer-events-none select-none absolute inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Rich Warm Sage & Organic Almond-Cream Backdrop (visible behind all cards) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#ECE8D9",
          backgroundImage:
            "radial-gradient(ellipse 75% 30% at 18% 20%, rgba(145, 200, 118, 0.36), transparent 70%), " +
            "radial-gradient(ellipse 70% 28% at 82% 38%, rgba(212, 163, 115, 0.32), transparent 70%), " +
            "radial-gradient(ellipse 75% 30% at 22% 62%, rgba(132, 190, 106, 0.34), transparent 70%), " +
            "radial-gradient(ellipse 70% 28% at 80% 80%, rgba(145, 200, 118, 0.32), transparent 70%), " +
            "radial-gradient(ellipse 75% 24% at 30% 95%, rgba(212, 163, 115, 0.28), transparent 70%)",
        }}
      />

      {/* Subtle Organic Botanical Dot Texture */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37, 96, 71, 0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
