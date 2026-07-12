import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Heart, Sparkles, RefreshCw, Award, Smile, Shield } from "lucide-react";

interface ValuesProps {
  lang: "EN" | "NP";
}

export default function Values({ lang }: ValuesProps) {
  const values = [
    {
      title: lang === "EN" ? "Innovation" : "नवीनता (Innovation)",
      desc: lang === "EN" ? "Pioneering new automated architectures rather than applying outdated, boilerplate methods." : "पुरानो र परम्परागत विधिको सट्टा सधैं नयाँ र प्रभावकारी प्रविधिको खोजी र प्रयोग गर्ने।",
      icon: Sparkles,
      color: "text-copper-400 bg-copper-500/10 border-copper-500/20"
    },
    {
      title: lang === "EN" ? "Transparency" : "पारदर्शिता (Transparency)",
      desc: lang === "EN" ? "100% upfront pricing, live tracking sheets, and weekly reports with clean attribution logs." : "विज्ञापन बजेट र योजनामा १००% पारदर्शिता, प्रत्यक्ष डेटा र हप्ताको विस्तृत रिपोर्ट।",
      icon: ShieldCheck,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: lang === "EN" ? "Creativity" : "सिर्जनशीलता (Creativity)",
      desc: lang === "EN" ? "Pairing technical engineering with captivating brand narratives to bypass consumer ad fatigue." : "प्राविधिक पक्षलाई आकर्षक विज्ञापन लेखन र डिजाइनसँग जोडेर उपभोक्तालाई आकर्षित गर्ने।",
      icon: Heart,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    },
    {
      title: lang === "EN" ? "Continuous Learning" : "निरन्तर सिकाई",
      desc: lang === "EN" ? "Adapting on a daily basis to Meta updates, Google AI Studio releases, and search engines." : "मेटा अपडेट, गुगल एआई र खोज इन्जिनका एल्गोरिदमहरू हरेक हप्ता अध्ययन गर्ने।",
      icon: RefreshCw,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: lang === "EN" ? "Results-Driven" : "प्रतिफल केन्द्रित (Results-Driven)",
      desc: lang === "EN" ? "Measuring success by actual pipeline revenue, cost-per-acquisition metrics, and ROI." : "केबल क्लिक र इम्प्रेसन होइन, वास्तविक ग्राहक बुकिङ र प्रतिफल (ROI) को आधारमा काम मापन गर्ने।",
      icon: Award,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: lang === "EN" ? "Integrity" : "इमान्दारिता (Integrity)",
      desc: lang === "EN" ? "Strict ethical frameworks and client data protection across every dynamic pipeline." : "सम्पूर्ण कार्यशैलीमा उच्च नैतिकता र ग्राहकको डाटा सुरक्षा सुनिश्चित गर्ने।",
      icon: Shield,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      title: lang === "EN" ? "Customer Success" : "ग्राहकको सफलता",
      desc: lang === "EN" ? "Treating every client partner as a long-term collaboration, scaling business predictability." : "हरेक व्यावसायिक सहकार्यलाई दीर्घकालीन साझेदारीको रूपमा लिई वृद्धिको बाटो तय गर्ने।",
      icon: Smile,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-copper-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "Our Principles" : "हाम्रा मूल्य र मान्यताहरू"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Core Values" : "मुख्य मूल्य र मान्यताहरू"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            {lang === "EN" 
              ? "Every line of code and marketing funnel we build is guided by strict professional standards."
              : "हामीले निर्माण गर्ने प्रत्येक कन्ट्याक्ट फनेल र प्रविधिमा हाम्रा मुख्य मूल्य र मान्यताहरू झल्कन्छन्।"}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((v, idx) => {
            const IconComponent = v.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl bg-[#06060a]/80 border border-white/5 space-y-4 hover:border-white/10 transition-colors shadow-lg"
              >
                <div className={`p-2.5 w-10 h-10 rounded-lg flex items-center justify-center border ${v.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-display font-black uppercase text-white tracking-wide">
                    {v.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {v.desc}
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
