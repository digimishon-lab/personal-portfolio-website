import React from "react";
import { motion } from "motion/react";
import { Terminal, Cpu, Database, Eye, MessageSquare, Play, Sparkles, Image, Compass, Globe } from "lucide-react";

interface AIToolsProps {
  lang: "EN" | "NP";
}

export default function AITools({ lang }: AIToolsProps) {
  const tools = [
    {
      name: "ChatGPT & Claude",
      category: "LLM Operations",
      desc: lang === "EN" ? "High-level content copywriting, deep-dive customer profiling, and personalized ad scripts." : "उच्च-स्तरको विज्ञापन लेखन, ग्राहक प्रोफाइल अनुसन्धान र कस्टम विज्ञापन स्क्रिप्ट तयारी।",
      glow: "hover:shadow-emerald-500/10 hover:border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      name: "Google AI Studio & Gemini",
      category: "AI Engineering",
      desc: lang === "EN" ? "Custom model prompt optimization, structural schemas, and semantic local SEO matching." : "मोडेल प्रम्प्ट अनुकूलन, वेबसाइट एसईओ सेमान्टिक्स र प्रोग्राम्याटिक संरचना निर्माण।",
      glow: "hover:shadow-blue-500/10 hover:border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      name: "Make.com, n8n, Zapier",
      category: "Workflows & Automation",
      desc: lang === "EN" ? "Autonomous lead notifications, database synchronization, and auto-prospect routing." : "लीडहरूको द्रुत सूचना, डाटाबेस सिङ्क्रोनाइजेसन र पूर्ण स्वचालित आउटरिच।",
      glow: "hover:shadow-purple-500/10 hover:border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      name: "Midjourney & Canva AI",
      category: "Ad Creatives",
      desc: lang === "EN" ? "High-fidelity advertising graphics, product mockup designs, and social layouts." : "उत्पादनको आकर्षक ग्राफिक डिजाइन, विज्ञापनको मुख्य ब्यानर र सामाजिक सञ्जाल पोष्ट तयारी।",
      glow: "hover:shadow-orange-500/10 hover:border-orange-500/30",
      iconColor: "text-orange-400"
    },
    {
      name: "ElevenLabs & Runway",
      category: "Synthetic Media",
      desc: lang === "EN" ? "Voice cloning, AI avatars, and social video hooks to reduce production time." : "स्वचालित भिडियो विज्ञापन, भ्वाइस ओभर र छिटो लोड हुने भिडियो हुकहरूको उत्पादन।",
      glow: "hover:shadow-pink-500/10 hover:border-pink-500/30",
      iconColor: "text-pink-400"
    },
    {
      name: "Perplexity & Notion AI",
      category: "Research & Strategy",
      desc: lang === "EN" ? "Competitor intelligence, SEO content maps, and structured marketing checklists." : "प्रतिस्पर्धीहरूको विश्लेषण, एसईओ योजना र योजनाबद्ध मार्केटिङ चेकलिस्ट तयारी।",
      glow: "hover:shadow-cyan-500/10 hover:border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      name: "Google Analytics & GTM",
      category: "Attribution",
      desc: lang === "EN" ? "Full conversion funnel mapping, cross-domain link tracking, and server triggers." : "कनभर्जन फनेल म्यापिङ, डोमेन ट्र्याकिङ र सर्भर-साइड ट्रिगरहरूको स्थापना।",
      glow: "hover:shadow-[#d4af37]/10 hover:border-[#d4af37]/30",
      iconColor: "text-[#d4af37]"
    },
    {
      name: "Meta Ads & Google Ads",
      category: "Paid Acquisition",
      desc: lang === "EN" ? "PMax campaigns, Meta conversion engines, and lookalike modeling setups." : "मेटा पिक्सेल र कन्ट्याक्ट डाटा जडान गरी सही विज्ञापन लक्षित गर्ने प्रणाली।",
      glow: "hover:shadow-rose-500/10 hover:border-rose-500/30",
      iconColor: "text-rose-400"
    }
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-copper-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Arsenal" : "एआई र प्राविधिक औजारहरू"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "AI & Automation Stack" : "हामीले प्रयोग गर्ने प्रविधि"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            {lang === "EN" 
              ? "We deploy best-of-breed artificial intelligence systems and attribution engines to automate overhead."
              : "विज्ञापन खर्च सुधार गर्न र कामलाई स्वचालित बनाउन उत्कृष्ट एआई र डाटा विश्लेषण प्रणाली जडान गर्दछौं।"}
          </p>
        </div>

        {/* Tools Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`p-5 rounded-xl bg-[#06060a]/90 border border-white/5 space-y-3 shadow-lg transition-all duration-300 ${tool.glow}`}
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {tool.category}
                </span>
                <Sparkles className={`w-3.5 h-3.5 ${tool.iconColor} opacity-50`} />
              </div>
              <div className="space-y-1 pt-1">
                <h4 className="text-xs sm:text-sm font-display font-black uppercase text-white tracking-wide">
                  {tool.name}
                </h4>
                <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
