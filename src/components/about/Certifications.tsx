import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, CheckCircle2, Bookmark } from "lucide-react";

interface CertificationsProps {
  lang: "EN" | "NP";
}

export default function Certifications({ lang }: CertificationsProps) {
  const credentials = [
    {
      title: "Google Analytics 4 Certification",
      issuer: "Google Skillshop",
      id: "GA4-98124",
      status: "Verified",
      desc: lang === "EN" ? "Advanced web tracking, cross-domain user flow analysis, and custom event configuration." : "वेबसाइट ट्र्याकिङ, गुगल एनालिटिक्स र कस्टम इभेन्ट ट्रिगरहरूको विन्यास।"
    },
    {
      title: "Meta Certified Digital Marketing Associate",
      issuer: "Meta Blueprint",
      id: "META-20938",
      status: "Verified",
      desc: lang === "EN" ? "Managing Facebook pixel configurations, Conversions API schemas, and ad campaign optimizations." : "फेसबुक पिक्सेल, विज्ञापन संरचना र कनभर्जन एट्रिब्युसनको अनुकूलन।"
    },
    {
      title: "Inbound Marketing Certification",
      issuer: "HubSpot Academy",
      id: "HUB-83214",
      status: "Verified",
      desc: lang === "EN" ? "In-depth training on content creation, organic client nurturing, and email workflow triggers." : "सामग्री निर्माण, लीड नर्चरिङ र इमेल वर्कफ्लो स्वचालन।"
    },
    {
      title: "AI & Machine Learning Essentials",
      issuer: "Coursera / DeepLearning.AI",
      id: "COUR-39214",
      status: "Verified",
      desc: lang === "EN" ? "Foundations of large language models, prompt engineering structures, and database pipelines." : "एलएलएम मोडेल, प्रम्प्ट इन्जिनियरिङ र स्वचालित वर्कफ्लोको आधारभूत सिद्धान्त।"
    },
    {
      title: "Advanced Growth Marketing",
      issuer: "LinkedIn Learning",
      id: "LNK-77492",
      status: "Verified",
      desc: lang === "EN" ? "Paid social scaling, Cost-Per-Acquisition reduction structures, and A/B creative testing models." : "विज्ञापन बजेट म्यापिङ, एबी टेस्टिङ र बजेट स्केलिङ रणनीति।"
    },
    {
      title: "Google AI Studio Prompt Engineering",
      issuer: "Google Developer Academy (Ongoing)",
      id: "PENDING",
      status: "In Progress",
      desc: lang === "EN" ? "Advanced model parameters, system instructions, and dynamic programmatic SEO schemas." : "एआई मोडेल अनुकूलन, सेमान्टिक म्यापिङ र स्वचालित आउटरिच कोडिङ।"
    }
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Credentials" : "प्रमाणपत्र र योग्यता"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Professional Certifications" : "प्रमाणित योग्यताहरू"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            {lang === "EN" 
              ? "We back up our strategy with real, verified credentials from the world's leading advertising authorities."
              : "हाम्रा डिजिटल रणनीतिहरू विश्वका प्रमुख प्रविधि र विज्ञापन संस्थाहरूबाट प्रमाणित छन्।"}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {credentials.map((cred, idx) => {
            const isOngoing = cred.status === "In Progress";
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl bg-[#06060a]/90 border border-white/5 space-y-4 hover:border-white/10 transition-colors shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {cred.issuer}
                    </span>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase flex items-center gap-1.5 ${
                      isOngoing 
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/20" 
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    }`}>
                      <CheckCircle2 className="w-3 h-3" />
                      {cred.status}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-display font-black uppercase text-white tracking-wide pt-1">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {cred.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-gray-500">
                  <span>ID: {cred.id}</span>
                  <span>VERIFIED ONLINE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
