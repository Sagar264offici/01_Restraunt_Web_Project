import React from 'react';

export default function LeafLogo({ className = '', width = 48, height = 48 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      alt="Rishikesh Greens Cafe Logo - Leaf Icon"
    >
      {/* Outer Leaf Shape - Premium Design */}
      <defs>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="leafShadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Main Leaf */}
      <path
        d="M 50 10 Q 70 25 75 50 Q 70 75 50 85 Q 30 75 25 50 Q 30 25 50 10 Z"
        fill="url(#leafGradient)"
        filter="url(#leafShadow)"
        strokeWidth="1.5"
        stroke="#0c7850"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Leaf Vein - Center */}
      <path
        d="M 50 15 Q 50 50 50 85"
        stroke="#0c5a3d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Left Veins */}
      <path
        d="M 45 30 Q 35 40 30 50"
        stroke="#0c5a3d"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 42 50 Q 32 60 28 72"
        stroke="#0c5a3d"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Right Veins */}
      <path
        d="M 55 30 Q 65 40 70 50"
        stroke="#0c5a3d"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 58 50 Q 68 60 72 72"
        stroke="#0c5a3d"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Subtle Inner Highlight for Premium Look */}
      <ellipse cx="45" cy="40" rx="8" ry="12" fill="#10b981" opacity="0.3" />

      {/* Premium Circle Border */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="url(#leafGradient)"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
}
