import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface AboutFAQProps {
  lang: "EN" | "NP";
}

export default function AboutFAQ({ lang }: AboutFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: lang === "EN" ? "Why should I hire you?" : "मलाई तपाईंलाई किन काममा राख्नुपर्छ?",
      a: lang === "EN" 
        ? "Unlike typical agency accounts that send bulk automated templates, I operate as an independent Growth Consultant. I write custom-tailored marketing software, implement server-side Conversion APIs to bypass cookie blockers, and build highly structured topical SEO architectures that bring compounding organic revenue."
        : "परम्परागत एजेन्सीहरू जस्तो म केवल तयारी ढाँचाहरू मात्र प्रयोग गर्दिन। म स्वतन्त्र रणनीतिकारको रूपमा तपाईको व्यवसायका लागि अनुकूलित एआई सफ्टवेयर, सर्भर-साइड ट्र्याकिङ र गुणस्तरीय एसईओ संरचना निर्माण गर्दछु, जसले व्यवसायको गति र प्रतिफल बढाउँछ।"
    },
    {
      q: lang === "EN" ? "Do you work internationally?" : "के तपाईं अन्तर्राष्ट्रिय रूपमा काम गर्नुहुन्छ?",
      a: lang === "EN"
        ? "Yes, absolutely. I manage ad spends and SEO architectures for corporate clients in Singapore, Germany, the United States, and local companies in the Kathmandu Valley. Distance is not a bottleneck since all communication is managed via secure Slack channels and WhatsApp pipelines."
        : "हो, अवश्य पनि। म सिंगापुर, जर्मनी, अमेरिका र नेपालका स्थानीय व्यवसायहरूका लागि विज्ञापन अभियान र एसईओ संरचना व्यवस्थापन गर्छु। सम्पूर्ण काम र संचार स्ल्याक (Slack) वा ह्वाट्सएप (WhatsApp) बाट सहजीकरण गरिन्छ।"
    },
    {
      q: lang === "EN" ? "What AI tools do you use?" : "तपाईं कुन कुन एआई उपकरणहरू प्रयोग गर्नुहुन्छ?",
      a: lang === "EN"
        ? "I deploy a custom stack of advanced tools including OpenAI ChatGPT (custom system instructions), Anthropic Claude, Google AI Studio (Gemini APIs), Midjourney for high-converting creatives, and Make.com / n8n for autonomous lead follow-ups and CRM synchronization."
        : "म ओपनएआई च्याटजीपीटी, एन्थ्रोपिक क्लाउड, गुगल एआई स्टुडियो (जेमिनी), मिडजर्नी र मेक (Make.com) / n8n जस्ता अत्याधुनिक स्वचालन प्रणालीहरूको सन्तुलित प्रयोग गर्दछु।"
    },
    {
      q: lang === "EN" ? "Can you improve my website performance?" : "के तपाईं मेरो वेबसाइटको प्रदर्शन सुधार गर्न सक्नुहुन्छ?",
      a: lang === "EN"
        ? "Yes. I analyze layout structures and code fast, highly responsive lead capture funnels in React and WordPress. By optimizing loading speed, layout shifts, and mobile checkout buttons, I help businesses reduce drop-off rates and multiply conversions."
        : "हो। म तपाईको वेबसाइटको बनावट र कोडलाई विश्लेषण गरी छिटो लोड हुने रिएक्ट वा वर्डप्रेस ल्यान्डिङ पेजहरू तयार गर्छु, जसले भिजिटर्सलाई सिधै ग्राहकमा बदल्न सहयोग गर्छ।"
    },
    {
      q: lang === "EN" ? "Do you provide search engine optimization (SEO)?" : "के तपाईं एसईओ (SEO) सेवा प्रदान गर्नुहुन्छ?",
      a: lang === "EN"
        ? "I specialize in 'Topical SEO' and 'Programmatic SEO'. Instead of chasing old keyword spamming hacks, I build comprehensive semantic topical clusters and schema mockups that ensure Google ranks your website as an authoritative industry reference."
        : "म टपिकल एसईओ (Topical SEO) र प्रोग्राम्याटिक एसईओ (Programmatic SEO) मा विशेषज्ञता राख्छु। म तपाईको वेबसाइटलाई सम्बन्धित विषयको मुख्य स्रोतको रूपमा गुगलमा स्थापित गराउँछु, जसले दीर्घकालीन नि:शुल्क जैविक ट्राफिक ल्याउँछ।"
    },
    {
      q: lang === "EN" ? "Can you manage my Meta or Google ad accounts?" : "के तपाईं मेरो विज्ञापन खाताहरू व्यवस्थापन गर्न सक्नुहुन्छ?",
      a: lang === "EN"
        ? "Yes, I run full-scale campaign management on Facebook, Instagram, and Google Search Ads. Every ad campaign I build includes precise server-side Conversion API tracking to bypass cookie restrictions and guarantee correct buyer data is reported back to the ad manager."
        : "हो, म फेसबुक, इन्स्टाग्राम र गुगलमा विज्ञापन खाता व्यवस्थापन गर्छु। प्रत्येक विज्ञापनमा म सर्भर-साइड डेटा ट्र्याकिङ जडान गर्छु, ताकी तपाईको लगानी खेर नजाओस् र सही दर्शकहरू लक्षित होउन्।"
    },
    {
      q: lang === "EN" ? "How do consultations work?" : "परामर्श सेवा कसरी काम गर्छ?",
      a: lang === "EN"
        ? "Every project starts with a 30-minute diagnostic session. We audit your existing conversion tracking, look for search leaks, and layout a customized roadmap outlining our suggested automation workflows. No sales pitches, just clear actionable insights."
        : "हाम्रो सहकार्य ३० मिनेटको नि:शुल्क अडिट सत्रबाट सुरु हुन्छ। हामी तपाईको हालको प्रविधि, विज्ञापन खर्च र सम्भावनाहरूको समीक्षा गर्छौं र एक व्यवहारिक रणनीतिक योजना तयार गर्दछौं।"
    },
    {
      q: lang === "EN" ? "How can I contact you?" : "म तपाईंलाई कसरी सम्पर्क गर्न सक्नुहुन्छ?",
      a: lang === "EN"
        ? "You can book directly using our calendar scheduler on the website, or drop an email at digimishon@gmail.com. You can also connect via WhatsApp at +9779762673835 for urgent growth inquiries."
        : "तपाईं यो वेबसाइटको क्यालेन्डरबाट सिधै कल बुकिङ गर्न सक्नुहुन्छ, digimishon@gmail.com मा इमेल पठाउन सक्नुहुन्छ वा +९७७९७६२६७३८३५ नम्बरको ह्वाट्सएपमा सन्देश पठाउन सक्नुहुन्छ।"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-copper-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "Got Questions?" : "प्रायः सोधिने प्रश्नहरू"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Frequently Asked Questions" : "जिज्ञासा र जवाफहरू"}
          </h2>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#06060a]/60 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-wide hover:text-[#d4af37] transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="p-1 bg-white/5 rounded-md border border-white/5 text-gray-400"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 border-t border-white/5 text-xs text-gray-400 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
