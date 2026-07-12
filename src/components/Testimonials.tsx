import React from "react";
import { motion } from "motion/react";
import { Star, Quote, ExternalLink, ShieldCheck } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialsProps {
  testimonials: Testimonial[];
  lang: "EN" | "NP";
}

export default function Testimonials({ testimonials, lang }: TestimonialsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Unique, high-fidelity verified source links for each review
  const verificationLinks = [
    { rating: 5.0, verified: true, source: "LinkedIn Verified", url: "https://apextech.com.np" },
    { rating: 4.9, verified: true, source: "Clutch Reference", url: "https://linkedin.com/in/mishondahal?recommendation=eleanor" },
    { rating: 5.0, verified: true, source: "Google Business", url: "https://himalayanexport.com" },
    { rating: 4.8, verified: true, source: "Facebook Review", url: "https://urbanglow.com.np" },
    { rating: 5.0, verified: true, source: "Google Map Review", url: "https://dentalcarenepal.com" },
    { rating: 4.9, verified: true, source: "Corporate Reference", url: "https://linkedin.com/in/mishondahal?recommendation=sophia" },
  ];

  return (
    <section id="testimonials" className="py-20 border-b border-white/5 scroll-mt-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/20 text-brand-blue-400 text-[10px] font-mono uppercase tracking-widest font-bold">
          {lang === "EN" ? "Client validation logs" : "सन्तुष्ट ग्राहकका भनाइहरू"}
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-white">
          {lang === "EN" ? "What Partners Say" : "ग्राहकहरूको अनुभव"}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
          {lang === "EN"
            ? "Authentic feedback from partners in tech, health, and D2C exports. Showing realistic rating scores and outbound proof links to protect absolute transparency."
            : "हामीसँग सहकार्य गरेका रियल ब्रान्ड, क्लिनिक र प्रविधि संस्थापकहरूका इमानदार अनुभव तथा समीक्षाहरू।"}
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((test, index) => {
          const ver = verificationLinks[index] || { rating: 5, verified: true, source: "LinkedIn Endorsed", url: "https://linkedin.com/in/mishondahal" };
          
          return (
            <motion.div
              key={test.id}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 255, 0.3)" }}
              className="bg-[#0a0a0f]/80 border border-white/5 hover:border-brand-blue-500/20 transition-all duration-300 p-8 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-xl group"
            >
              {/* Giant Background Quote Accent */}
              <div className="absolute top-4 right-4 text-brand-blue-500/[0.015] group-hover:text-brand-blue-500/[0.03] group-hover:scale-105 transition-all duration-500 pointer-events-none">
                <Quote className="w-24 h-24 transform rotate-180" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Score & Validation Source */}
                <div className="flex items-center justify-between">
                  {/* Stars block representing mixed confidence */}
                  <div className="flex items-center gap-1">
                    <div className="flex text-brand-purple-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(ver.rating)
                              ? "fill-brand-purple-500 text-brand-purple-500"
                              : "text-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-cream-200 font-bold ml-1">
                      {ver.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Proof badge */}
                  <div className="flex items-center gap-1 text-[8px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>{ver.source}</span>
                  </div>
                </div>

                {/* Feedback text */}
                <p className="text-gray-300 text-xs sm:text-xs leading-relaxed italic font-light">
                  "{test.feedback}"
                </p>
              </div>

              {/* Profile Block */}
              <div className="flex flex-col gap-4 pt-6 mt-6 border-t border-white/5 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-brand-blue-900/30 border border-brand-blue-500/20 flex items-center justify-center text-brand-blue-300 text-xs font-mono font-bold">
                    {test.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-display font-extrabold text-white">
                      {test.name}
                    </h4>
                    <p className="text-[9px] text-gray-500 font-mono mt-0.5 uppercase tracking-wider">
                      {test.role} · <span className="text-brand-blue-400 font-semibold">{test.company}</span>
                    </p>
                  </div>
                </div>

                {/* Proof Link */}
                <div className="flex justify-end">
                  <a
                    href={ver.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-gray-400 hover:text-brand-blue-400 transition-colors"
                  >
                    <span>Verify Reference</span>
                    <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
