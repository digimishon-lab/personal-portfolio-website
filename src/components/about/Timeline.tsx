import React from "react";
import { motion } from "motion/react";
import { CalendarDays, Star, TrendingUp, Laptop, Users, Cpu, ShieldAlert, Sparkles } from "lucide-react";

interface TimelineProps {
  lang: "EN" | "NP";
}

export default function Timeline({ lang }: TimelineProps) {
  const milestones = [
    {
      year: "2020",
      title: lang === "EN" ? "Started Learning Digital Marketing" : "डिजिटल मार्केटिङको सुरुवात",
      desc: lang === "EN" 
        ? "Began with copy/writing fundamentals, analyzing successful web funnels, and managing local social handles." 
        : "विज्ञापन लेखन, सफल अनलाइन फनेलहरूको विश्लेषण र स्थानीय सामाजिक सञ्जालहरूको व्यवस्थापनबाट यात्रा सुरु।",
      icon: Laptop,
      color: "border-copper-500/30 text-copper-400"
    },
    {
      year: "2021",
      title: lang === "EN" ? "Built First Website" : "पहिलो वेबसाइट निर्माण",
      desc: lang === "EN" 
        ? "Mastered WordPress and front-end essentials to build customized, lightning-fast lead-capture pages." 
        : "ल्यान्डिङ पेज र ग्राहकलाई आकर्षित गर्ने वेबसाइट निर्माण गर्न वर्डप्रेस र फ्रन्ट-इन्ड वेब सिकाइ।",
      icon: Laptop,
      color: "border-amber-500/30 text-amber-400"
    },
    {
      year: "2022",
      title: lang === "EN" ? "Started Freelancing" : "स्वतन्त्र फ्रीलान्सिङ यात्रा",
      desc: lang === "EN" 
        ? "Offered advanced local SEO services and ad setups, achieving ranking breakthroughs for competitive terms." 
        : "स्थानीय एसईओ र फेसबुक विज्ञापन मार्फत प्रतिस्पर्धी कीवर्डहरूमा गुगलको शीर्ष स्थान प्राप्त गराउन योगदान।",
      icon: Star,
      color: "border-yellow-500/30 text-yellow-400"
    },
    {
      year: "2023",
      title: lang === "EN" ? "Partnering with Local & Int'l Businesses" : "व्यवसायहरूसँग व्यावसायिक सहकार्य",
      desc: lang === "EN" 
        ? "Optimized combined advertising spends, integrating server-to-server Conversions API (CAPI) for clean attribution." 
        : "विज्ञापन खर्च सुधार गर्दै, सही ट्र्याकिङको लागि सर्भर-साइड कन्भर्जन एपीआई जडान सुरु।",
      icon: Users,
      color: "border-blue-500/30 text-blue-400"
    },
    {
      year: "2024",
      title: lang === "EN" ? "Deep AI Marketing & Automation Mastery" : "एआई मार्केटिङ र स्वचालन निपुणता",
      desc: lang === "EN" 
        ? "Integrated LLM logic with Make.com pipelines, enabling dynamic prospecting and fully automated outreach." 
        : "नवीनतम एआई मोडेलहरू र Make.com जस्ता स्वचालन उपकरणहरू जडान गरी पूर्ण रूपमा स्वचालित संचार स्थापना।",
      icon: Cpu,
      color: "border-emerald-500/30 text-emerald-400"
    },
    {
      year: "2025",
      title: lang === "EN" ? "Launched Digital Mishon Agency brand" : "डिजिटल मिसन ब्रान्डको स्थापना",
      desc: lang === "EN" 
        ? "Consolidated services into a modern consulting agency, optimizing client acquisition pipelines globally." 
        : "डिजिटल मिसन ब्रान्ड स्थापना गरी विश्वभरका ग्राहकहरूका लागि व्यवस्थित ग्राहक प्राप्ति संयन्त्र निर्माण।",
      icon: TrendingUp,
      color: "border-purple-500/30 text-purple-400"
    },
    {
      year: "2026",
      title: lang === "EN" ? "Building AI-Powered Systems" : "एआई-सञ्चालित प्रणालीहरूको विकास",
      desc: lang === "EN" 
        ? "Deploying specialized programmatic frameworks and autonomous multi-agent systems for high-scale clients." 
        : "ठूला व्यवसायका लागि स्वायत्त मल्टि-एजेन्ट वर्कफ्लोहरू र प्रोग्राम्याटिक संरचनाहरू निर्माण।",
      icon: Sparkles,
      color: "border-pink-500/30 text-pink-400"
    }
  ];

  const futureVision = {
    title: lang === "EN" ? "Future Vision" : "भविष्यको परिकल्पना",
    desc: lang === "EN" 
      ? "Establishing Nepal as a world-class hub for automated acquisition engineering, building proprietary programmatic tools, and helping 1,000+ businesses globally achieve predictable scaling through verified intelligence."
      : "नेपाललाई स्वचालित ग्राहक प्राप्ति प्रविधिको एक विश्वस्तरीय हबको रूपमा स्थापित गर्ने, आफ्नै प्रोग्राम्याटिक सफ्टवेयरहरू विकास गर्ने र विश्वभरका १,००० भन्दा बढी व्यवसायहरूलाई दिगो र अनुमानित वृद्धि हासिल गर्न मद्दत गर्ने।"
  };

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Roadmap" : "समयरेखा र माइलस्टोनहरू"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Milestones & Timeline" : "मेरो सफलताको यात्रा"}
          </h2>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative pl-6 sm:pl-0 sm:grid sm:grid-cols-12 gap-4">
          
          {/* Central Vertical Line for Desktop */}
          <div className="hidden sm:block absolute left-1/2 top-2 bottom-2 w-px bg-white/10 -translate-x-1/2" />
          {/* Left Vertical Line for Mobile */}
          <div className="sm:hidden absolute left-[15px] top-2 bottom-2 w-px bg-white/10" />

          {milestones.map((evt, idx) => {
            const IconComponent = evt.icon;
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className="relative sm:col-span-12 mb-12 sm:mb-16">
                
                {/* Timeline node circle - absolute positioned */}
                <div className={`absolute left-[-15px] sm:left-1/2 top-1.5 w-8 h-8 rounded-full bg-[#050508] border-2 ${evt.color} flex items-center justify-center -translate-x-1/2 z-20 shadow-lg`}>
                  <IconComponent className="w-3.5 h-3.5" />
                </div>

                <div className={`sm:grid sm:grid-cols-12 items-start relative`}>
                  
                  {/* Event content box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`col-span-5 ${isEven ? "sm:text-right sm:col-start-1" : "sm:col-start-8"} space-y-2`}
                  >
                    <span className="inline-block px-2.5 py-1 rounded bg-copper-500/10 border border-copper-500/20 text-copper-400 font-mono text-[10px] font-bold">
                      {evt.year}
                    </span>
                    <h3 className="text-sm sm:text-base font-display font-black uppercase text-white tracking-tight">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {evt.desc}
                    </p>
                  </motion.div>

                  {/* Empty spacer for the other side on desktop */}
                  <div className={`hidden sm:block col-span-5 ${isEven ? "col-start-8" : "col-start-1"}`} />

                </div>
              </div>
            );
          })}

        </div>

        {/* Future Vision Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl bg-gradient-to-br from-copper-500/10 via-transparent to-transparent border border-copper-500/20 max-w-2xl mx-auto space-y-4 relative overflow-hidden shadow-xl shadow-copper-500/5 text-center"
        >
          <div className="absolute top-0 right-0 p-4 text-[#d4af37]/10 pointer-events-none">
            <Sparkles className="w-20 h-20" />
          </div>
          <div className="inline-flex p-3 bg-copper-500/10 rounded-full text-[#d4af37] mx-auto">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-lg sm:text-xl font-display font-black uppercase text-white tracking-wider">
            {futureVision.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light max-w-lg mx-auto">
            {futureVision.desc}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
