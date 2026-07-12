import React from "react";
import { motion } from "motion/react";
import { Cpu, Search, Code, Compass, Users, Target, Zap, FileText, BarChart3, HelpCircle, ArrowUpRight } from "lucide-react";

interface AboutServicesProps {
  lang: "EN" | "NP";
}

export default function AboutServices({ lang }: AboutServicesProps) {
  const services = [
    {
      title: lang === "EN" ? "AI Marketing" : "एआई मार्केटिङ",
      icon: Cpu,
      desc: lang === "EN" ? "Deploying advanced model integrations to write high-converting ads, segment customers, and automate workflow logic." : "मोडेल एकीकरण मार्फत सही विज्ञापन लेखन, लक्षित ग्राहक वर्गीकरण र मार्केटिङ वर्कफ्लो स्वचालन।",
    },
    {
      title: lang === "EN" ? "SEO & Authority" : "एसईओ र खोज र्याङ्किङ",
      icon: Search,
      desc: lang === "EN" ? "In-depth keyword maps, semantic structural schemas, and programmatic page building for organic search." : "गहन कीवर्ड अनुसन्धान, सेमान्टिक योजना र प्रोग्राम्याटिक संरचना निर्माण मार्फत जैविक खोज प्रवर्धन।",
    },
    {
      title: lang === "EN" ? "Website Development" : "वेबसाईट निर्माण",
      icon: Code,
      desc: lang === "EN" ? "Developing ultra-fast, modern web applications in React & Next.js styled with customized Tailwind theme components." : "फास्ट लोड हुने रिएक्ट र वर्डप्रेस वेबसाईटहरू जसले उपभोक्तालाई खरिद गर्न प्रेरित गर्दछ।",
    },
    {
      title: lang === "EN" ? "Digital Strategy" : "डिजिटल रणनीति",
      icon: Compass,
      desc: lang === "EN" ? "Comprehensive, multi-channel growth maps covering cost-per-acquisition analysis and competitor brand positioning." : "लागत प्रति ग्राहक (CAC) को विश्लेषण र प्रतिस्पर्धीहरूलाई पछि पार्ने बहु-च्यानल रणनीतिक नक्शा।",
    },
    {
      title: lang === "EN" ? "Social Media Marketing" : "सामाजिक सञ्जाल मार्केटिङ",
      icon: Users,
      desc: lang === "EN" ? "Designing highly interactive viral social loops, community builders, and automated outbound comment funnels." : "सामाजिक सञ्जालहरूमा प्रभावकारी ब्रान्डिङ, उपभोक्ता संलग्नता र सन्देश स्वचालन।",
    },
    {
      title: lang === "EN" ? "Performance Marketing" : "परफर्मेन्स मार्केटिङ (विज्ञापन)",
      icon: Target,
      desc: lang === "EN" ? "Managing Facebook, Instagram, and Google Search campaigns, optimizing daily budgets for predictable lead pipelines." : "फेसबुक, इन्स्टाग्राम र गुगल विज्ञापनहरूको दैनिक बजेट अनुकूलन र अपेक्षित ग्राहक वृद्धि।",
    },
    {
      title: lang === "EN" ? "AI Automation Pipelines" : "एआई स्वचालन पाइपलाइन",
      icon: Zap,
      desc: lang === "EN" ? "Automating lead follow-ups 24/7 with custom Make.com and n8n routes, ensuring no prospect goes cold." : "२४ सै घण्टा स्वचालित रूपमा ग्राहकहरू सुरक्षित गर्ने प्रविधि जस्तै Make र Zapier।",
    },
    {
      title: lang === "EN" ? "Content Marketing" : "सामग्री मार्केटिङ",
      icon: FileText,
      desc: lang === "EN" ? "Drafting high-value authority guides, thought-leadership pillars, and automated distribution checklists." : "व्यवसायिक लेख, उपभोक्ता सहयोगी ब्लग र ब्रान्डको प्रामाणिक पहिचान बढाउने सामग्री।",
    },
    {
      title: lang === "EN" ? "Consulting & Training" : "परामर्श र तालिम",
      icon: BarChart3,
      desc: lang === "EN" ? "Interactive auditing sessions, roadmap validation, and direct consulting on pipeline efficiency for brands." : "कम्पनीको विज्ञापन ढाँचाको अडिट, म्यापिङ कल र प्रत्यक्ष व्यावसायिक परामर्श।",
    }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cream-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "What I Deliver" : "हाम्रा सेवाहरू"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "My Core Services" : "व्यावसायिक सेवाहरू"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            {lang === "EN" 
              ? "We engineer autonomous acquisition systems and data architectures to predictably scale your brand."
              : "तपाईंको व्यवसायमा अनलाइन च्यानलहरू मार्फत ग्राहक बढाउन हामी आधुनिक एआई र विज्ञापन फनेलहरू निर्माण गर्दछौं।"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl bg-[#06060a]/60 border border-white/5 space-y-4 flex flex-col justify-between hover:border-copper-500/30 hover:shadow-xl hover:shadow-copper-500/5 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="p-2.5 w-10 h-10 bg-copper-500/10 rounded-lg text-copper-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-display font-black uppercase text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleScrollTo("contact")}
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors cursor-pointer self-start pt-2 group"
                >
                  <span>{lang === "EN" ? "Enquire Now" : "अहिले बुकिङ गर्नुहोस्"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
