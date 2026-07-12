import React from "react";
import { motion } from "motion/react";
import { Sliders, Cpu, Search, Sparkles, Code, Globe } from "lucide-react";

interface SkillsProps {
  lang: "EN" | "NP";
}

export default function Skills({ lang }: SkillsProps) {
  const skillCategories = [
    {
      category: lang === "EN" ? "AI & Marketing Automation" : "एआई र मार्केटिङ स्वचालन",
      icon: Cpu,
      items: [
        { name: "Prompt Engineering", value: 95 },
        { name: "ChatGPT & Claude LLMs", value: 95 },
        { name: "Marketing Automation (Make, Zapier)", value: 92 },
        { name: "CRM Setup & Flows (HubSpot, Lead Tech)", value: 88 },
        { name: "Lead Generation Architectures", value: 94 },
      ],
    },
    {
      category: lang === "EN" ? "Search & Traffic Strategy" : "खोज र ट्राफिक रणनीति",
      icon: Search,
      items: [
        { name: "Topical SEO & Schema Mapping", value: 93 },
        { name: "Google Analytics 4 & GTM Tracking", value: 91 },
        { name: "Programmatic Landing Pages", value: 90 },
        { name: "Content Marketing & Authority Maps", value: 89 },
        { name: "Local Business Search Supremacy", value: 96 },
      ],
    },
    {
      category: lang === "EN" ? "Paid Acquisition & Ads" : "विज्ञापन र ग्राहक प्राप्ति",
      icon: Sliders,
      items: [
        { name: "Meta Ads (Facebook & Instagram)", value: 94 },
        { name: "Google Ads & PMax", value: 90 },
        { name: "Server-Side Tracking (Meta CAPI)", value: 92 },
        { name: "Ad Creative & Copy Testing", value: 88 },
        { name: "Email Marketing & Klaviyo Sequences", value: 87 },
      ],
    },
    {
      category: lang === "EN" ? "Modern Web Development" : "वेब विकास र प्रविधि",
      icon: Code,
      items: [
        { name: "React & Next.js", value: 80 },
        { name: "Tailwind CSS Design System", value: 88 },
        { name: "WordPress Premium Architectures", value: 95 },
        { name: "Adobe Photoshop & Graphic Asset Prep", value: 85 },
        { name: "Brand & Video Strategy Assets", value: 82 },
      ],
    },
  ];

  const topSkillsGauges = [
    { name: "AI Marketing", value: 95, color: "text-copper-500", stroke: "stroke-copper-500" },
    { name: "SEO Strategy", value: 93, color: "text-[#d4af37]", stroke: "stroke-[#d4af37]" },
    { name: "Client Automation", value: 92, color: "text-blue-500", stroke: "stroke-blue-500" },
    { name: "Server-Side Attribution", value: 94, color: "text-emerald-500", stroke: "stroke-emerald-500" },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Sliders className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Metrics" : "सीप र क्षमता मापन"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Skills & Mastery Levels" : "सीप र प्राविधिक क्षमता"}
          </h2>
        </div>

        {/* Circular Gauges for Top Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {topSkillsGauges.map((skill, idx) => {
            const radius = 40;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.value / 100) * circumference;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-[#0a0a0f]/80 border border-white/5 flex flex-col items-center justify-center text-center space-y-4 shadow-lg hover:border-white/10 transition-colors"
              >
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background track */}
                    <circle
                      cx="48"
                      cy="48"
                      r={radius}
                      className="stroke-white/5"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    {/* Progress indicator */}
                    <motion.circle
                      cx="48"
                      cy="48"
                      r={radius}
                      className={skill.stroke}
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Central Text */}
                  <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm text-white">
                    {skill.value}%
                  </div>
                </div>
                <span className="text-xs font-display font-black uppercase tracking-wider text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Skills Categories Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0a0a0f]/40 border border-white/5 space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="p-2 bg-copper-500/10 rounded-lg text-copper-400">
                    <CatIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono text-gray-400">
                        <span>{item.name}</span>
                        <span className="text-white font-bold">{item.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-copper-600 to-copper-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
