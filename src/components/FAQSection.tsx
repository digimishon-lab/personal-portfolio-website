import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQSectionProps {
  lang: "EN" | "NP";
}

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: { EN: FAQItem[]; NP: FAQItem[] } = {
    EN: [
      {
        q: "How does Mishon integrate AI into digital marketing?",
        a: "Mishon integrates AI into digital marketing by deploying custom workflows that handle automated client qualification, smart lead nurturing, and programmatic SEO maps. By utilizing advanced AI models and APIs, we build efficient client acquisition systems that run 24/7 without manual overhead."
      },
      {
        q: "What is local authority SEO and programmatic SEO?",
        a: "Programmatic and local authority SEO focuses on building structured, high-ranking landing pages optimized for search queries. By establishing clean semantic models, we ensure sustainable rankings across multiple service keywords to consistently bring organic visibility."
      },
      {
        q: "How do you optimize advertising performance under modern privacy/tracking restrictions?",
        a: "We deploy server-side event tracking, such as Meta Conversions API (CAPI) and Google Ads Offline Conversions. This guarantees clean, direct event attribution bypasses browser-side ad-blocking, resulting in higher return on ad spend (ROAS) and more accurate lookalike targeting."
      },
      {
        q: "What is the delivery process for custom AI workflows or advertising funnels?",
        a: "Every project begins with a 30-minute diagnostic session to assess current bottlenecks. Upon engagement, all projects are built and launched following an explicit Statement of Work (SOW), complete with defined milestones, transparent tracking, and strict delivery SLAs."
      }
    ],
    NP: [
      {
        q: "मिसनले डिजिटल मार्केटिङमा एआई (AI) लाई कसरी जोड्नुहुन्छ?",
        a: "मिसनले स्वचालित ग्राहक योग्यता (qualification), स्मार्ट लीड नर्चरिङ र प्रोग्राम्याटिक एसईओ म्यापहरू व्यवस्थापन गर्ने अनुकूलित वर्कफ्लोहरू मार्फत डिजिटल मार्केटिङमा एआई एकीकृत गर्नुहुन्छ। उन्नत एआई मोडल र एपीआईहरूको प्रयोग गरेर, हामी २४/७ बिना कुनै म्यानुअल झन्झट चल्ने प्रभावकारी ग्राहक प्राप्ति प्रणाली निर्माण गर्छौं।"
      },
      {
        q: "स्थानीय अथोरिटी एसईओ र प्रोग्राम्याटिक एसईओ भनेको के हो?",
        a: "प्रोग्राम्याटिक र स्थानीय अथोरिटी एसईओले गुगल वा अन्य खोज इन्जिनका विशिष्ट सोधपुछहरूका लागि अनुकूलित, उच्च-रैंक हुने संरचनात्मक ल्यान्डिङ पृष्ठहरू निर्माण गर्नमा ध्यान केन्द्रित गर्दछ। स्पष्ट सेमान्टिक मोडलहरू स्थापना गरेर, हामी विभिन्न सेवा कीवर्डहरूमा दीर्घकालीन र दिगो र्याङ्किङ सुनिश्चित गर्छौं जसले निरन्तर जैविक ट्राफिक ल्याउँछ।"
      },
      {
        q: "आधुनिक गोपनियता र ट्र्याकिङ प्रतिबन्धहरू बीच तपाईं विज्ञापनको प्रदर्शनलाई कसरी सुधार गर्नुहुन्छ?",
        a: "हामी सर्भर-साइड इभेन्ट ट्र्याकिङ जस्तै मेटा कन्भर्जन एपीआई (CAPI) र गुगल विज्ञापन अफलाइन कन्भर्जनहरू जडान गर्छौं। यसले ब्राउजर-साइड विज्ञापन अवरोधहरू (ad-blocking) लाई बाइपास गरी प्रत्यक्ष इभेन्ट एट्रिब्युसन सुनिश्चित गर्दछ, जसले विज्ञापन खर्चको राम्रो प्रतिफल (ROAS) र सही दर्शक वर्ग (lookalike target) लक्षित गर्न मद्दत गर्दछ।"
      },
      {
        q: "अनुकूलित एआई वर्कफ्लो वा विज्ञापन फनेलहरूको डेलिभरी प्रक्रिया कस्तो हुन्छ?",
        a: "प्रत्येक परियोजनाको सुरुवात ३० मिनेटको नि:शुल्क अडिट सत्रबाट हुन्छ, जहाँ हालका समस्याहरू पहिचान गरिन्छ। त्यसपछि, सबै कामहरू माइलस्टोन र डेलिभरी एसएलए (SLA) स्पष्ट उल्लेख गरिएको 'स्टेटमेन्ट अफ वर्क' (SOW) अनुसार पारदर्शी रूपमा सुरु र सम्पन्न गरिन्छ।"
      }
    ]
  };

  const currentFaqs = faqData[lang];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-24 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "Common Protocols" : "प्रायः सोधिने प्रश्नहरू"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Workflow & AI Strategy FAQ" : "कार्यप्रणाली र एआई रणनीति जिज्ञासाहरू"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            {lang === "EN" 
              ? "Clear, transparent insights regarding programmatic execution, attribution models, and project governance."
              : "प्रोग्राम्याटिक कार्यन्वयन, विज्ञापन एट्रिब्युसन र परियोजना व्यवस्थापन सम्बन्धी पारदर्शी जवाफहरू।"}
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {currentFaqs.map((faq, idx) => {
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
