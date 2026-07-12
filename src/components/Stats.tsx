import React, { useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface StatsProps {
  statistics: Array<{ value: string; label: string; suffix: string }>;
}

export default function Stats({ statistics }: StatsProps) {
  return (
    <section id="stats" className="py-16 border-b border-white/5 bg-black/40 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/5 via-transparent to-brand-purple-900/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
        
        {/* Footnote / Attribution */}
        <div className="text-center pt-4 border-t border-white/[0.03]">
          <p className="text-[10px] font-mono text-gray-600 tracking-wide">
            * Based on tracked client campaigns, 2024–2026. All conversion metrics are third-party verified via ad account managers and search console properties.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { key?: any; stat: { value: string; label: string; suffix: string }; index: number }) {
  const containerRef = useRef(null);
  const [count, setCount] = useState(0);

  // Extract numeric digits to run counter animation
  const numericString = stat.value.replace(/[^0-9.]/g, "");
  const hasNumber = numericString.length > 0;
  const targetNumber = hasNumber ? parseFloat(numericString) : 0;

  useEffect(() => {
    if (hasNumber) {
      let start = 0;
      const end = targetNumber;
      const duration = 1200; // ms
      const startTime = performance.now();

      const animateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = start + (end - start) * easeProgress;
        
        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      // Set a tiny timeout to animate smoothly
      const timer = setTimeout(() => {
        requestAnimationFrame(animateCount);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [targetNumber, hasNumber]);

  // Format count output by substituting the numeric part dynamically
  const renderValue = () => {
    if (!hasNumber) return stat.value;
    
    const isFloat = stat.value.includes(".");
    const formattedCount = isFloat ? count.toFixed(1) : Math.floor(count);
    
    return stat.value.replace(numericString, formattedCount.toString());
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="text-left space-y-2 pl-5 border-l border-brand-blue-500/20 group hover:border-brand-purple-500/50 transition-colors duration-300"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue-400 group-hover:to-brand-purple-400 transition-all duration-300">
        {renderValue()}{stat.suffix}
      </div>
      <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-500 font-mono font-bold leading-normal">
        {stat.label}
      </div>
    </motion.div>
  );
}
