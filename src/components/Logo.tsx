import React from "react";

interface LogoProps {
  darkMode?: boolean;
  className?: string;
  // If you want to use a custom image logo (e.g., logo.png or logo.svg placed in the /public folder),
  // you can pass useImage={true} or change the default below!
  useImage?: boolean;
  imageSrc?: string;
}

export default function Logo({ 
  darkMode = true, 
  className = "",
  useImage = false, // Set this to true to use an image file instead of the inline SVG monogram
  imageSrc = "/logo.png" // Path to your logo in the public directory (e.g., public/logo.png)
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {useImage ? (
        /* =========================================================================
           OPTION A: CUSTOM IMAGE LOGO
           To use this:
           1. Place your logo image file (logo.png, logo.svg, etc.) inside the "/public" folder.
           2. Set useImage={true} when calling this component or change the default above.
           ========================================================================= */
        <img
          src={imageSrc}
          alt="Digital Mishon Logo"
          className="w-10 h-10 object-contain flex-shrink-0 transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if image fails to load
            console.warn("Logo image not found at " + imageSrc + ", falling back to inline SVG monogram.");
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        /* =========================================================================
           OPTION B: HIGH-FIDELITY INLINE SVG MONOGRAM
           If you have a custom vector SVG, you can replace the <svg> block below
           with your own custom SVG code!
           ========================================================================= */
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 transition-transform duration-500 hover:rotate-6 hover:scale-110 cursor-pointer"
        >
          <defs>
            <linearGradient id="dmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563FF" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Background glow node for digital depth */}
          <path
            d="M 18,22 L 28,22 L 28,52 L 18,62 Z"
            fill="url(#dmGradient)"
            opacity="0.15"
            filter="url(#neonGlow)"
          />
          
          {/* Monogram Monoliths */}
          {/* Left vertical-ish pillar with diagonal cut */}
          <path
            d="M 16,22 L 28,22 L 28,55 L 16,67 Z"
            fill="url(#dmGradient)"
          />
          
          {/* Rightwards sweeping loop of D */}
          <path
            d="M 32,22 C 50,22 62,32 62,50 C 62,68 50,78 32,78 L 32,64 C 44,64 48,58 48,50 C 48,42 44,36 32,36 Z"
            fill="url(#dmGradient)"
          />
          
          {/* Left and Right legs of the M merging */}
          <path
            d="M 54,50 L 66,22 L 82,22 L 82,78 L 70,78 L 70,45 L 61,65 L 54,50 Z"
            fill="url(#dmGradient)"
          />
        </svg>
      )}

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`font-display font-black text-sm sm:text-base tracking-tighter leading-none uppercase ${darkMode ? "text-white" : "text-slate-900"}`}>
            DIGITAL
          </span>
          <span className="font-display font-black text-sm sm:text-base tracking-tighter leading-none uppercase ml-1.5 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-500 to-brand-purple-500">
            MISHON
          </span>
        </div>
        <span className={`text-[7px] font-mono font-extrabold tracking-[0.25em] uppercase leading-none mt-1.5 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          DESIGN • AUTOMATE • GROW
        </span>
      </div>
    </div>
  );
}
