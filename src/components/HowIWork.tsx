import React from "react";
import { motion } from "motion/react";
import { PhoneCall, Target, Cpu, TrendingUp } from "lucide-react";

interface HowIWorkProps {
  lang: "EN" | "NP";
}

export default function HowIWork({ lang }: HowIWorkProps) {
  const steps = [
    {
      step: "01",
      icon: PhoneCall,
      title: lang === "EN" ? "Discovery Call" : "प्रारम्भिक कुराकानी",
      desc: lang === "EN" 
        ? "A 30-minute deep dive into your business growth bottlenecks, audience, and goals." 
        : "तपाईंको व्यवसायको समस्या, लक्षित वर्ग र लक्ष्यहरू बुझ्न ३० मिनेटको गहन छलफल।",
    },
    {
      step: "02",
      icon: Target,
      title: lang === "EN" ? "Audit & Strategy" : "अडिट र रणनीति",
      desc: lang === "EN" 
        ? "I conduct a granular tracking and search audit to design a custom growth blueprint." 
        : "म ट्र्याकिङ र एस्.ई.ओ को विस्तृत अडिट गरी अनुकूल रणनीति तयार गर्दछु।",
    },
    {
      step: "03",
      icon: Cpu,
      title: lang === "EN" ? "Build & Deploy" : "निर्माण र कार्यान्वयन",
      desc: lang === "EN" 
        ? "Developing lightning-fast landing pages, ad tracking integrations, and AI automations." 
        : "ल्यान्डिङ पेज, ट्र्याकिङ कोड र एआई स्वचालन प्रणालीको डिजाइन र एकीकरण।",
    },
    {
      step: "04",
      icon: TrendingUp,
      title: lang === "EN" ? "Optimize & Report" : "अनुकूलन र रिपोर्टिङ",
      desc: lang === "EN" 
        ? "Rigorous weekly creative testing, keyword tracking, and direct ROI attribution dashboards." 
        : "कीवर्ड ट्र्याकिङ, साप्ताहिक विज्ञापन अनुकूलन र प्रत्यक्ष पारदर्शी रिपोर्टहरू।",
    }
  ];

  return (
    <section id="process" className="py-20 border-b border-white/5 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/20 text-brand-blue-400 text-[10px] font-mono uppercase tracking-widest font-bold">
          {lang === "EN" ? "The Workflow" : "कार्य प्रक्रिया"}
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-white">
          {lang === "EN" ? "How I Work" : "हाम्रो काम गर्ने तरिका"}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto font-light">
          {lang === "EN"
            ? "A systematic, engineering-first approach to client acquisition. No guesswork, just clear execution phases focused on compounding your marketing ROI."
            : "हामी हचुवाको भरमा होइन, चरणबद्ध इन्जिनियरिङ ढाँचामा काम गर्छौं। ठोस योजना र पारदर्शी मापन नै हाम्रो विशेषता हो।"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-blue-500/20 via-white/5 to-brand-purple-500/20 -translate-y-12 z-0" />

        {steps.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0a0a0f]/80 border border-white/5 hover:border-brand-blue-500/20 rounded-xl p-6 relative z-10 group transition-all duration-300"
            >
              {/* Step indicator */}
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-brand-purple-500/40 group-hover:text-brand-purple-400 transition-colors">
                {item.step}
              </div>

              <div className="space-y-4">
                {/* Icon block */}
                <div className="w-10 h-10 rounded-lg bg-brand-blue-500/10 border border-brand-blue-500/20 flex items-center justify-center text-brand-blue-400 group-hover:bg-brand-blue-500/20 group-hover:text-brand-blue-300 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-display font-bold text-white uppercase tracking-tight group-hover:text-brand-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
