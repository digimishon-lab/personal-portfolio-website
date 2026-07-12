import React from "react";
import { motion } from "motion/react";
import { Award, Code, CheckCircle, TrendingUp, Cpu, Settings, Target, Eye, Database } from "lucide-react";

interface BiographyProps {
  lang: "EN" | "NP";
}

export default function Biography({ lang }: BiographyProps) {
  const coreCompetencies = [
    {
      title: lang === "EN" ? "AI Marketing & Automation" : "एआई मार्केटिङ र स्वचालन",
      desc: lang === "EN" ? "Setting up custom LLM prompt routes, Make.com triggers, and auto-prospecting web tools." : "अनुकूलित एलएलएम रुटहरू, स्वचालित आउटरिच र च्याट प्रम्प्टहरू जडान गर्ने।",
      icon: Cpu,
    },
    {
      title: lang === "EN" ? "SEO & Topical Authority" : "एसईओ र टपिकल अथोरिटी",
      desc: lang === "EN" ? "Configuring advanced schemas, programmatic content indexers, and local authority setups." : "गुगलमा दीर्घकालीन जैविक खोज र शीर्ष र्याङ्किङ प्राप्त गर्न म्यापिङ गर्ने।",
      icon: TrendingUp,
    },
    {
      title: lang === "EN" ? "Performance Marketing & Ads" : "परफर्मेन्स मार्केटिङ र विज्ञापन",
      desc: lang === "EN" ? "High-ROI Facebook, Instagram, Google Ads, and Performance Max campaign structures." : "फेसबुक, इन्स्टाग्राम र गुगलमा प्रभावकारी विज्ञापन अभियान संचालन गर्ने।",
      icon: Target,
    },
    {
      title: lang === "EN" ? "Custom Tracking & Analytics" : "ट्र्याकिङ र एनालिटिक्स",
      desc: lang === "EN" ? "Implementing server-to-server Conversions API (CAPI), GTM, and Looker Studio tracking." : "सर्भर-साइड कनभर्जन एपीआई (CAPI) र गुगल ट्याग म्यानेजर मार्फत सही डाटा ट्र्याक गर्ने।",
      icon: Database,
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cream-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Expertise" : "व्यावसायिक विवरण"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Professional Bio" : "व्यावसायिक जीवनी"}
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Narrative text */}
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base leading-relaxed text-gray-300 font-light">
            {lang === "EN" ? (
              <>
                <p>
                  Mishon Dahal is a premium digital growth specialist, consultant, and technical acquisition strategist who works at the intersection of <strong className="text-white font-medium">software automation</strong> and <strong className="text-white font-medium">performance marketing</strong>. Based in the ancient heritage city of Bhaktapur, Nepal, he serves local scale-ups and international client partners.
                </p>
                <p>
                  Specializing in complex client-acquisition pipelines, Mishon integrates the latest AI tools and automation logic (Make.com, n8n, Zapier) to reduce corporate manual overhead by up to 70%. His custom lead-qualification workflows act as an autonomous 24/7 business development team, ensuring zero prospect friction.
                </p>
                <p>
                  By continuously learning, experimenting, and adapting to the latest developments across Google AI, OpenAI, and Meta algorithms, Mishon delivers cutting-edge, data-driven frameworks. From local authority SEO mapping to advanced server-side Conversions API (CAPI) attribution, his work is designed to drive compounding growth and maximize ad efficiency.
                </p>
              </>
            ) : (
              <>
                <p>
                  मिशन दाहाल एक प्रिमियम डिजिटल ग्रोथ विशेषज्ञ, परामर्शदाता र प्राविधिक ग्राहक प्राप्ति रणनीतिकार हुनुहुन्छ, जसले <strong className="text-white font-medium">सफ्टवेयर स्वचालन</strong> र <strong className="text-white font-medium">परफर्मेन्स मार्केटिङ</strong>को संगममा काम गर्नुहुन्छ। भक्तपुरको ऐतिहासिक साँस्कृतिक शहरमा रहेर, उहाँले स्थानीय व्यवसाय र अन्तर्राष्ट्रिय ग्राहकहरूलाई गुणस्तरीय सेवा प्रदान गर्नुहुन्छ।
                </p>
                <p>
                  जटिल ग्राहक-प्राप्ति च्यानलहरूमा विशेषज्ञता राख्दै, मिशनले म्यानुअल कामहरू कम गर्न नयाँ एआई प्रविधिहरू (Make.com, n8n, Zapier) को प्रयोग गर्नुहुन्छ। उहाँका अनुकूलित वर्कफ्लोहरूले २४ सै घण्टा स्वचालित रूपमा ग्राहकहरू छनौट र सुरक्षित गर्ने काम गर्छन्, जसले व्यवसायको गति बढाउँछ।
                </p>
                <p>
                  गुगल एआई, ओपनएआई, र मेटाका नवीनतम एल्गोरिदमहरूको गहिरो अध्ययन र अनुसन्धान गर्दै, उहाँले सधैं आधुनिक र डाटा-आधारित रणनीतिहरू कार्यान्वयन गर्नुहुन्छ। स्थानीय एसईओ देखि उन्नत सर्भर-साइड कनभर्जन ट्र्याकिङ सम्म, उहाँको सम्पूर्ण कार्य व्यवसायको डिजिटल क्षमता र प्रतिफल बढाउन केन्द्रित छ।
                </p>
              </>
            )}
          </div>

          {/* Right Block: Core Specialty Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => {
              const IconComponent = comp.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, borderColor: "rgba(200, 107, 46, 0.2)" }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-xl bg-[#0a0a0f]/90 border border-white/5 space-y-3 shadow-lg hover:shadow-copper-500/5 transition-all duration-300"
                >
                  <div className="p-2 w-9 h-9 bg-copper-500/10 rounded-lg text-copper-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-display font-black uppercase text-white tracking-wide">
                    {comp.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    {comp.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
