import React, { useState } from "react";
import { motion } from "motion/react";
import { Coffee, Code, Brain, Cpu, Lightbulb } from "lucide-react";

interface FunFactsProps {
  lang: "EN" | "NP";
}

export default function FunFacts({ lang }: FunFactsProps) {
  const [clickedIdx, setClickedIdx] = useState<number | null>(null);

  const facts = [
    {
      title: lang === "EN" ? "Always Learning" : "सधैं नयाँ सिक्ने बानी",
      desc: lang === "EN" ? "Testing at least 3 new AI model frameworks or prompt methodologies every single week." : "हरेक हप्ता कम्तिमा ३ वटा नयाँ एआई मोडेल वा प्रम्प्ट विधिको परीक्षण गर्ने।",
      icon: Brain,
      actionText: lang === "EN" ? "Weekly habit" : "साप्ताहिक बानी",
      factDetail: lang === "EN" ? "I maintain local scrapers to parse OpenAI, Anthropic, and Google research blogs." : "म गुगल र ओपनएआईका रिसर्च ब्लगहरू स्वचालित रूपमा पढ्ने प्रम्प्ट राख्छु।"
    },
    {
      title: lang === "EN" ? "Automation Addict" : "स्वचालनको सौख",
      desc: lang === "EN" ? "I hate manual repetition. If a task takes more than 5 minutes twice, it gets custom-coded." : "दोहोरिने कामलाई म घृणा गर्छु। यदि कुनै काम दुई पटक भन्दा बढी दोहोरिएमा, म त्यसलाई स्वचालित बनाउँछु।",
      icon: Cpu,
      actionText: lang === "EN" ? "Workflow focus" : "कार्यप्रणाली",
      factDetail: lang === "EN" ? "My home triggers and emails are managed by a custom-built private n8n node." : "मेरो व्यक्तिगत इमेल र कार्यतालिका मेरो आफ्नै म्यानुअल सर्भरले व्यवस्थापन गर्छ।"
    },
    {
      title: lang === "EN" ? "Fueling Brainpower" : "इन्धन (Coffee + AI)",
      desc: lang === "EN" ? "Coffee + AI = High Productivity. Fresh Nepalese beans paired with cutting-edge LLMs." : "कफी + एआई = उच्च उत्पादकत्व। म सधैं नेपाली अर्गानिक कफी पिउँदै नयाँ एआई को कोडिङ गर्छु।",
      icon: Coffee,
      actionText: lang === "EN" ? "My setup" : "मेरो सेटअप",
      factDetail: lang === "EN" ? "Single-origin beans from Mount Everest region + Claude 3.5 Sonnet is the ultimate workspace." : "नेपालको उत्कृष्ट अर्गानिक कफी र अत्याधुनिक एआई मोडेलको संयोजन नै मेरो मुख्य बल हो।"
    },
    {
      title: lang === "EN" ? "Tech Enthusiast" : "प्रविधि प्रेमी",
      desc: lang === "EN" ? "Passionate about full-stack web architectures, server configurations, and database query tuning." : "वेब डेभलपमेन्ट, सर्भर कन्फिगरेसन र डेटाबेस ट्युनिङमा विशेष रुची।",
      icon: Code,
      actionText: lang === "EN" ? "Web stack" : "वेब स्ट्याक",
      factDetail: lang === "EN" ? "I build fast React interfaces and bind them with Drizzle ORM and PostgreSQL databases." : "म तीव्र गतिको रिएक्ट इन्टरफेस र डेटाबेस रुटहरू जोड्न मन पराउँछु।"
    },
    {
      title: lang === "EN" ? "Problem Solver" : "समस्या समाधान",
      desc: lang === "EN" ? "Solving marketing bottleneck problems is my favorite type of puzzle. I thrive on data challenges." : "जटिल विज्ञापन र एसईओ अवरोधहरूको समाधान खोज्न मलाई विशेष मन पर्छ।",
      icon: Lightbulb,
      actionText: lang === "EN" ? "Goal focus" : "उद्देश्य",
      factDetail: lang === "EN" ? "I trace attribution data back to server event logs to find why ad spend drops." : "म विज्ञापन खर्च घट्नुको मुख्य कारण खोज्न सर्भर लगहरू सम्मको डाटा विश्लेषण गर्छु।"
    }
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-copper-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Coffee className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "Behind the Scenes" : "केही रमाइला तथ्यहरू"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Interactive Fun Facts" : "रमाइला तथ्यहरू"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            {lang === "EN" 
              ? "Click on any card to reveal extra insights about my lifestyle, setup, and work philosophy."
              : "मेरो कार्यशैली, सेटअप र कार्य दर्शनका बारेमा थप विवरण हेर्न कुनै पनि कार्डमा क्लिक गर्नुहोस्।"}
          </p>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {facts.map((fact, idx) => {
            const IconComp = fact.icon;
            const isSelected = clickedIdx === idx;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                onClick={() => setClickedIdx(isSelected ? null : idx)}
                className="p-5 rounded-xl bg-[#06060a]/90 border border-white/5 space-y-4 shadow-lg cursor-pointer hover:border-copper-500/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2 w-9 h-9 bg-copper-500/10 rounded-lg text-copper-400 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-display font-black uppercase text-white tracking-wide">
                    {fact.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    {isSelected ? fact.factDetail : fact.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-copper-500">
                  <span className="uppercase tracking-widest font-bold">{fact.actionText}</span>
                  <span>{isSelected ? "CLOSE" : "READ DETAIL"}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
