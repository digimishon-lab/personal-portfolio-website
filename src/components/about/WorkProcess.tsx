import React from "react";
import { motion } from "motion/react";
import { Sliders, Search, Compass, Cpu, Settings, TrendingUp } from "lucide-react";

interface WorkProcessProps {
  lang: "EN" | "NP";
}

export default function WorkProcess({ lang }: WorkProcessProps) {
  const steps = [
    {
      step: "01",
      title: lang === "EN" ? "Discovery" : "पहिचान (Discovery)",
      desc: lang === "EN" ? "We begin with a 30-minute growth diagnostic session, auditing current tracking setups and matching logs." : "३० मिनेटको नि:शुल्क अडिट र समीक्षा कल, जहाँ विज्ञापन खाता र एसईओ अवरोधहरू पहिचान गरिन्छ।",
      icon: Search,
    },
    {
      step: "02",
      title: lang === "EN" ? "Research" : "अनुसन्धान (Research)",
      desc: lang === "EN" ? "In-depth competitor intelligence audits, keyword intent research, and mapping target audiences." : "गहन प्रतिस्पर्धी विश्लेषण, कीवर्डहरूको खोज र लक्षित दर्शकहरूको सूची तयारी।",
      icon: Compass,
    },
    {
      step: "03",
      title: lang === "EN" ? "Strategy" : "रणनीति (Strategy)",
      desc: lang === "EN" ? "Drafting an explicit Statement of Work (SOW) outlining clear milestones and KPIs." : "पाइपलाइन र विज्ञापन खर्च सुधार गर्नका लागि स्पष्ट र पारदर्शी रणनीति र योजनाको तर्जुमा।",
      icon: Sliders,
    },
    {
      step: "04",
      title: lang === "EN" ? "Execution" : "कार्यान्वयन (Execution)",
      desc: lang === "EN" ? "Integrating custom server tracking, configuring Meta Ads, and publishing programmatic SEO schemas." : "रिएक्ट फनेल, सर्भर-साइड ट्र्याकिङ र एआई स्वचालन प्रणालीहरूको पूर्ण जडान र परिचालन।",
      icon: Cpu,
    },
    {
      step: "05",
      title: lang === "EN" ? "Optimization" : "अनुकूलन (Optimization)",
      desc: lang === "EN" ? "Reviewing ad copywriting variations, scaling winning hooks, and improving page speed." : "कपीराइटिङ र विज्ञापन ब्यानरहरूको नियमित अडिट, विजयी हुकहरूको पहिचान र सुधार।",
      icon: Settings,
    },
    {
      step: "06",
      title: lang === "EN" ? "Growth" : "वृद्धि (Growth)",
      desc: lang === "EN" ? "Bypassing ad fatigue, setting up lookalike models, and delivering sustainable, predictable pipelines." : "अपेक्षाकृत र दिगो रूपमा व्यापारमा ग्राहक बढाउने दीर्घकालीन वृद्धि चक्र।",
      icon: TrendingUp,
    }
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Settings className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Methodology" : "हाम्रो कार्यविधि"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Work Process Stepper" : "हामी कसरी काम गर्छौं"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            {lang === "EN" 
              ? "Every campaign is executed with software-engineering rigor, following six transparent phases."
              : "हाम्रो काम गर्ने शैली पूर्ण रूपमा व्यवस्थित र वैज्ञानिक छ, जसमा यी ६ चरणहरू पर्छन्।"}
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-5 rounded-xl bg-[#06060a]/90 border border-white/5 space-y-4 hover:border-copper-500/20 transition-colors shadow-lg relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-mono font-black text-copper-500/60">
                      {item.step}
                    </span>
                    <IconComponent className="w-4 h-4 text-gray-500" />
                  </div>
                  <h3 className="text-xs font-display font-black uppercase text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
