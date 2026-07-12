import React from "react";
import { motion } from "motion/react";
import { Landmark, TrendingUp, Users, Cpu, FileText, Globe } from "lucide-react";

interface StatisticsProps {
  lang: "EN" | "NP";
}

export default function Statistics({ lang }: StatisticsProps) {
  const stats = [
    {
      value: "140+",
      label: lang === "EN" ? "Projects Completed" : "सम्पन्न परियोजनाहरू",
      icon: Cpu,
      desc: lang === "EN" ? "Including programmatic SEO, automated funnels, and ad campaigns." : "एसईओ, स्वचालित फनेल र फेसबुक विज्ञापनहरू समेत गरी।"
    },
    {
      value: "98%",
      label: lang === "EN" ? "Happy Clients" : "सन्तुष्ट ग्राहकहरू",
      icon: Users,
      desc: lang === "EN" ? "Consistent positive feedback and long-term retainer agreements." : "निरन्तर सकारात्मक प्रतिक्रिया र दीर्घकालीन व्यावसायिक सहकार्य।"
    },
    {
      value: "1,200+",
      label: lang === "EN" ? "Hours Learning AI" : "एआई सिकाईको अवधि",
      icon: TrendingUp,
      desc: lang === "EN" ? "Dedicated to studying and implementing machine learning structures." : "मशीन लर्निङ, एलएलएम र स्वचालित प्रणालीको अध्ययन।"
    },
    {
      value: "60+",
      label: lang === "EN" ? "Campaigns Managed" : "परिचालित विज्ञापनहरू",
      icon: Landmark,
      desc: lang === "EN" ? "Meta and Google Ad campaign layouts optimized for high conversion." : "उच्च प्रतिफल (ROI) का लागि अनुकूलित विज्ञापन अभियानहरू।"
    },
    {
      value: "80+",
      label: lang === "EN" ? "Marketing Strategies" : "मार्केटिङ रणनीतिहरू",
      icon: FileText,
      desc: lang === "EN" ? "Custom plans constructed for global and local client partners." : "विश्वभरका र नेपालका व्यवसायहरूका लागि निर्मित योजनाहरू।"
    },
    {
      value: "10M+",
      label: lang === "EN" ? "Website Visitors" : "वेबसाइट भिजिटर्स",
      icon: Globe,
      desc: lang === "EN" ? "Compounding organic traffic drove impressions for client URLs." : "एसईओ मार्फत ग्राहकको वेबसाइटमा ल्याइएको अर्गानिक ट्राफिक।"
    }
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-1/2 w-96 h-96 bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Track Record" : "हाम्रो इतिहास र तथ्याङ्क"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Verified Statistics" : "प्रमाणित तथ्याङ्कहरू"}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-[#06060a]/90 border border-white/5 space-y-4 hover:border-copper-500/20 hover:shadow-xl hover:shadow-copper-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="p-2 bg-copper-500/10 rounded-lg text-copper-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-copper-400">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    {stat.desc}
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
