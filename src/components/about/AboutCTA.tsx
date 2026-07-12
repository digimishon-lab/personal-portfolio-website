import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, PhoneCall } from "lucide-react";

interface AboutCTAProps {
  lang: "EN" | "NP";
}

export default function AboutCTA({ lang }: AboutCTAProps) {
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
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-copper-500/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#0a0a0f] border border-white/5 p-8 sm:p-16 rounded-2xl text-center space-y-8 relative overflow-hidden shadow-2xl glass-panel-copper"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-copper-500/5 rounded-full blur-[80px]" />
        
        {/* Sparkle Badge */}
        <div className="inline-flex items-center space-x-1.5 bg-copper-500/10 border border-copper-500/20 text-copper-400 px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold mx-auto">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{lang === "EN" ? "Available for Q3/Q4 2026" : "हामी परामर्शको लागि तयार छौं"}</span>
        </div>

        {/* Headline */}
        <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-white leading-none tracking-tight">
          {lang === "EN" 
            ? "Let's Build Something Amazing Together" 
            : "आउनुहोस्, मिलेर केही उत्कृष्ट निर्माण गरौं"}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          {lang === "EN"
            ? "Ready to scale your business? Discuss your growth, automated lead workflows, search authority goals, and traffic monetization strategy during a free diagnostic session."
            : "के तपाईं आफ्नो व्यवसायलाई अर्को तहमा पुर्याउन तयार हुनुहुन्छ? हाम्रो नि:शुल्क रणनीतिक परामर्श सत्रमा तपाईंको व्यवसायको एआई वर्कफ्लो, गुगल एसईओ र विज्ञापन फनेलहरूका बारेमा खुलेर कुरा गरौं।"}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <button
            onClick={() => handleScrollTo("contact")}
            className="px-8 py-4 bg-gradient-to-r from-copper-600 to-copper-500 text-white hover:from-copper-500 hover:to-copper-400 font-display font-extrabold text-xs tracking-widest uppercase rounded-lg flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-xl shadow-copper-500/10 active:scale-95 group cursor-pointer border border-copper-400/20"
          >
            <span>{lang === "EN" ? "Book Consultation" : "परामर्श बुक गर्नुहोस्"}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => handleScrollTo("contact")}
            className="px-8 py-4 bg-transparent text-gray-300 hover:text-white border border-white/10 hover:border-copper-500/40 font-display font-bold text-xs tracking-widest uppercase rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-95 cursor-pointer hover:bg-white/[0.01]"
          >
            <PhoneCall className="w-3.5 h-3.5 mr-1" />
            <span>{lang === "EN" ? "Contact Me" : "मलाई सम्पर्क गर्नुहोस्"}</span>
          </button>
        </div>

      </motion.div>
    </section>
  );
}
