import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 150, animated = true }) => {
  const LogoComponent = animated ? motion.svg : 'svg';
  const PathComponent = animated ? motion.path : 'path';

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: 'easeInOut' },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <LogoComponent
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animated ? 'hidden' : undefined}
      animate={animated ? 'visible' : undefined}
    >
      {/* Background Circle with Gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#764ba2" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Outer Circle */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />

      {/* Main X - Abriss (Demolition) Symbol */}
      <PathComponent
        d="M 50 50 L 150 150"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        filter="url(#glow)"
        variants={pathVariants}
      />
      <PathComponent
        d="M 150 50 L 50 150"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        filter="url(#glow)"
        variants={pathVariants}
      />

      {/* Bruchlinien (Crack lines) - Demolition Detail */}
      <PathComponent
        d="M 70 40 L 75 55 L 80 45"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <PathComponent
        d="M 130 155 L 125 165 L 120 160"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />

      {/* Konstruktionslinien (Construction lines) - Precision Elements */}
      <PathComponent
        d="M 40 100 L 60 100"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        strokeLinecap="round"
        variants={pathVariants}
      />
      <PathComponent
        d="M 140 100 L 160 100"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        strokeLinecap="round"
        variants={pathVariants}
      />
      <PathComponent
        d="M 100 40 L 100 60"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        strokeLinecap="round"
        variants={pathVariants}
      />
      <PathComponent
        d="M 100 140 L 100 160"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        strokeLinecap="round"
        variants={pathVariants}
      />

      {/* Zentrale geometrische Form - Trockenbau Element */}
      <rect
        x="90"
        y="90"
        width="20"
        height="20"
        fill="rgba(255,255,255,0.2)"
        stroke="white"
        strokeWidth="2"
        rx="2"
      />
    </LogoComponent>
  );
};

export default Logo;
