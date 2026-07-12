import React from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, BookOpen, HeartHandshake } from "lucide-react";

interface JourneySectionProps {
  lang: "EN" | "NP";
}

export default function JourneySection({ lang }: JourneySectionProps) {
  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#c86b2e]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Narrative" : "मेरो कथा"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
            {lang === "EN" ? "My Journey" : "मेरो यात्रा"}
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base leading-relaxed text-gray-300 font-light">
            {lang === "EN" ? (
              <>
                <p>
                  My entry into digital marketing began with a fundamental curiosity: <strong className="text-white font-semibold">how do people choose who to trust online?</strong> I realized that traditional sales funnels were becoming noise. Standard strategies were failing because they focused entirely on spamming ads rather than matching the exact intent of active buyers.
                </p>
                <p>
                  As web tech evolved, search and social platforms introduced complex machine learning models. I realized that keeping up manually was no longer enough. I dived deep into Artificial Intelligence, learning how to engineer precise LLM configurations, prompt-optimized automated scrapers, and data attribution systems that run on custom server setups.
                </p>
                <p>
                  Technology changed marketing from a subjective guessing game into an elegant, high-speed engineering pipeline. My commitment is simple: I continuously adapt, study, and train on the absolute bleeding edge of automation tools to give clients a formidable growth advantage that stays far ahead of competitors.
                </p>
              </>
            ) : (
              <>
                <p>
                  डिजिटल मार्केटिङमा मेरो यात्रा एउटा सामान्य जिज्ञासाबाट सुरु भएको थियो: <strong className="text-white font-semibold">मानिसहरूले अनलाइनमा कसलाई विश्वास गर्ने भनेर कसरी निर्णय गर्छन्?</strong> मैले महसुस गरेँ कि परम्परागत विज्ञापन र मार्केटिङ फनेलहरू केवल अनावश्यक हल्ला बन्दै गइरहेका छन्। सामान्य मार्केटिङ असफल भइरहेका थिए किनकि तिनीहरू उपभोक्ताको सही चाहना बुझ्नु भन्दा पनि जथाभावी विज्ञापन देखाउन मात्र केन्द्रित थिए।
                </p>
                <p>
                  जब प्रविधिको विकास भयो, खोज इन्जिन र सामाजिक सञ्जालहरूले जटिल मेसिन लर्निङ मोडेलहरू ल्याए। मैले बुझेँ कि म्यानुअल रूपमा मात्र काम गर्नु अब पर्याप्त छैन। मैले कृत्रिम बुद्धिमत्ता (AI) मा गहिरो अध्ययन सुरु गरेँ—जसमा एलएलएम (LLM) कन्फिगरेसन, प्रम्प्ट इन्जिनियरिङ, स्वचालित आउटरिच पाइपलाइन र सर्भर-साइड विज्ञापन ट्र्याकिङ पर्छन्।
                </p>
                <p>
                  प्रविधिले मार्केटिङलाई एउटा अनुमानको खेलबाट परिवर्तन गरी एक सटीक, उच्च-गतिको इन्जिनियरिङ पाइपलाइनमा रूपान्तरण गरिदिएको छ। मेरो लक्ष्य स्पष्ट छ: म लगातार नयाँ एआई र मार्केटिङ ट्रेन्डहरू सिक्छु ताकी हाम्रा ग्राहकहरूलाई सधैं बजारमा सबैभन्दा बलियो रणनीतिक लाभ मिलोस्।
                </p>
              </>
            )}

            {/* Pull Quote */}
            <blockquote className="border-l-2 border-copper-500 pl-5 py-4 italic text-gray-400 bg-copper-500/5 rounded-r-lg my-8 font-serif text-sm sm:text-base">
              {lang === "EN" 
                ? "\"Modern client acquisition isn't about chasing algorithms. It's about building a robust digital system that automatically answers buyer intent at scale, 24 hours a year.\""
                : "\"आधुनिक ग्राहक प्राप्ति भनेको एल्गोरिदमको पछि लाग्नु होइन। यो त एउटा यस्तो बलियो डिजिटल प्रणाली निर्माण गर्नु हो जसले उपभोक्ताको जिज्ञासा र आवश्यकतालाई २४ सै घण्टा स्वचालित रूपमा सम्बोधन गर्दछ।\""}
            </blockquote>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Highlight Card 1 */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-xl bg-[#0a0a0f]/80 border border-white/5 space-y-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 text-copper-500/10 pointer-events-none">
                <Sparkles className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-copper-500/10 rounded-lg text-copper-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  {lang === "EN" ? "AI Integration Mindset" : "एआई एकीकरण मानसिकता"}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                {lang === "EN"
                  ? "We don't replace humans with AI; we augment human potential. Our systems handle data sorting and communication instantly, freeing up your team to close high-value business deals."
                  : "हामी एआईद्वारा मानिसलाई प्रतिस्थापन गर्दैनौं, बल्कि मानवीय क्षमतालाई गुणात्मक बनाउँछौं। हाम्रा प्रणालीहरूले संचार र विश्लेषणलाई छिटो बनाउँछन्, ताकी तपाईं आफ्नो व्यापार बढाउनमा ध्यान दिन सक्नुहोस्।"}
              </p>
            </motion.div>

            {/* Highlight Card 2 */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-xl bg-[#0a0a0f]/80 border border-white/5 space-y-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 text-[#d4af37]/10 pointer-events-none">
                <BookOpen className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#d4af37]/10 rounded-lg text-[#d4af37]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  {lang === "EN" ? "Continuous Adaptation" : "निरन्तर सिक्ने प्रतिबद्धता"}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                {lang === "EN"
                  ? "Algorithms evolve weekly. We stay on top of daily releases across OpenAI, Anthropic, Google AI Studio, and Meta to maintain highly accurate search schemas and ad flows."
                  : "एल्गोरिदमहरू हरेक हप्ता परिवर्तन हुन्छन्। हामी सधैं नवीनतम एआई मोडेलहरू र गुगल अपडेटहरू ट्र्याक गर्छौं, ताकी विज्ञापन र एसईओमा सधैं अग्रणी स्थान कायम रहोस्।"}
              </p>
            </motion.div>

            {/* Highlight Card 3 */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-xl bg-[#0a0a0f]/80 border border-white/5 space-y-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 text-emerald-500/10 pointer-events-none">
                <HeartHandshake className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  {lang === "EN" ? "Partnering in Growth" : "सफलतामा साझेदारी"}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                {lang === "EN"
                  ? "We don't work like a typical agency that sends a PDF report once a month. We act as a growth partner, setting up live analytics dashboards and connecting in Slack/WhatsApp."
                  : "हामी महिनामा एक पटक साधारण पिडिएफ रिपोर्ट पठाउने एजेन्सी जस्तो काम गर्दैनौं। हामी तपाईको वृद्धि साझेदारको रूपमा काम गर्छौं र प्रत्यक्ष संचार च्यानलहरू मार्फत सहकार्य गर्दछौं।"}
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
