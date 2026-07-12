import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, User, Calendar, ExternalLink } from "lucide-react";
import strategistPortrait from "../../assets/images/regenerated_image_1783668108234.png";

interface AboutHeroProps {
  lang: "EN" | "NP";
}

export default function AboutHero({ lang }: AboutHeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background ambient gradients */}
      <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-copper-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-cream-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-copper-500/10 bg-copper-500/5 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-copper-300 font-bold">
                {lang === "EN" ? "Meet The Strategist" : "रणनीतिकारलाई भेट्नुहोस्"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-display font-black leading-[0.95] tracking-tighter uppercase text-white"
            >
              {lang === "EN" ? "About" : "हाम्रो बारेमा"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-copper-500 to-cream-300 italic">
                Mishon Dahal
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl"
            >
              {lang === "EN" ? (
                "AI Marketing Strategist helping businesses grow faster through AI-powered digital marketing, automation, SEO, content strategy, and performance marketing."
              ) : (
                "व्यवसायहरूलाई एआई-सञ्चालित डिजिटल मार्केटिङ, स्वचालित वर्कफ्लो, टपिकल एसईओ, र उच्च प्रतिफल दिने विज्ञापन अभियान मार्फत छिटो वृद्धि गर्न मद्दत गर्ने एआई मार्केटिङ रणनीतिकार।"
              )}
            </motion.p>
          </div>

          {/* Core Info Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-xs font-mono text-gray-400"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0a0a0f] border border-white/5">
              <User className="w-3.5 h-3.5 text-copper-500" />
              <span>{lang === "EN" ? "Role: Lead Growth Engineer" : "भूमिका: लीड ग्रोथ इन्जिनियर"}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0a0a0f] border border-white/5">
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{lang === "EN" ? "Experience: 5+ Years" : "अनुभव: ५+ वर्ष"}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-8 py-4 bg-gradient-to-r from-copper-600 to-copper-500 text-white hover:from-copper-500 hover:to-copper-400 font-display font-extrabold text-xs tracking-widest uppercase rounded-lg flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-xl shadow-copper-500/10 active:scale-95 group cursor-pointer border border-copper-400/20"
            >
              <span>{lang === "EN" ? "Book a Consultation" : "परामर्श बुक गर्नुहोस्"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScrollTo("portfolio")}
              className="px-8 py-4 bg-transparent text-gray-300 hover:text-white border border-white/10 hover:border-copper-500/40 font-display font-bold text-xs tracking-widest uppercase rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-95 cursor-pointer hover:bg-white/[0.01]"
            >
              <span>{lang === "EN" ? "View My Work" : "मेरो काम हेर्नुहोस्"}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Professional Portrait */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Animated floating copper ring in background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute -inset-4 border border-dashed border-copper-500/15 rounded-2xl pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] p-3 shadow-2xl group w-full max-w-sm"
          >
            {/* Top glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />

            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <img
                src={strategistPortrait}
                alt="Mishon Dahal - AI Marketing Strategist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-[1.03]"
              />
              
              {/* Bottom linear overlay for visual integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
            </div>

            {/* Quick stats watermark on image frame */}
            <div className="p-4 flex justify-between items-center bg-[#050508]/90 border border-white/5 rounded-lg mt-3 font-mono text-[10px] text-gray-400">
              <span className="text-copper-400 font-bold uppercase">Mishon Dahal</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE CONSULTANT
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
