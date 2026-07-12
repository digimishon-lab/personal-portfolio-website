import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Cpu, Layers, Landmark, Code, Terminal, CheckCircle } from "lucide-react";

interface HeroProps {
  lang: "EN" | "NP";
  darkMode: boolean;
  translations: any;
  personalInfo: any;
}

export default function Hero({ lang, darkMode, translations: t, personalInfo }: HeroProps) {
  const [audience, setAudience] = useState<"local" | "saas">("local");

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
    <section id="hero" className="relative pt-12 pb-20 lg:py-24 border-b border-white/5 topo-bg">
      {/* Background ambient gradient highlights */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-copper-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-20 -right-40 w-[600px] h-[600px] bg-cream-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hand: Messaging and Toggles */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Subtle Location & Role Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-copper-500/20 bg-copper-500/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-copper-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-copper-300 font-bold">
              {lang === "EN" ? "AI Growth Strategist · Bhaktapur, Nepal" : "एआई ग्रोथ रणनीतिकार · भक्तपुर, नेपाल"}
            </span>
          </div>

          {/* Headline and Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black leading-[0.95] tracking-tighter uppercase text-white">
              Marketing, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-copper-500 to-cream-300 italic">
                Reimagined by AI
              </span>
            </h1>
            
            {/* Humble Authentic Bio */}
            <p className="text-xs sm:text-sm font-mono text-copper-400 uppercase tracking-wider">
              {lang === "EN" 
                ? "Mishon Dahal — Independent Consultant & Client Acquisition Engineer" 
                : "मिशन दाहाल — स्वतन्त्र परामर्शदाता तथा ग्राहक प्राप्ति इन्जिनियर"}
            </p>
          </div>

          {/* Interactive Audience Message Switcher */}
          <div className="space-y-6">
            <div className="flex p-1 bg-[#121217] border border-white/5 rounded-lg max-w-sm">
              <button
                onClick={() => setAudience("local")}
                className={`flex-1 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  audience === "local"
                    ? "bg-copper-600 text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {lang === "EN" ? "For Local Businesses" : "स्थानीय व्यवसायको लागि"}
              </button>
              <button
                onClick={() => setAudience("saas")}
                className={`flex-1 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  audience === "saas"
                    ? "bg-copper-600 text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {lang === "EN" ? "For SaaS & Tech" : "सास र प्रविधिका लागि"}
              </button>
            </div>

            {/* Dynamic Card based on selected audience */}
            <div className="bg-[#0a0a0f]/80 border border-white/5 p-6 rounded-xl space-y-4 max-w-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-copper-500/10 pointer-events-none">
                {audience === "local" ? <Landmark className="w-16 h-16" /> : <Terminal className="w-16 h-16" />}
              </div>

              {audience === "local" ? (
                <>
                  <h3 className="text-xl font-display font-bold text-cream-100">
                    {lang === "EN" 
                      ? "Get more walk-ins, phone bookings, and delivery orders automatically." 
                      : "तपाईंको व्यवसायमा फोन बुकिङ र अर्डरहरू स्वचालित रूपमा बढाउनुहोस्।"}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {lang === "EN"
                      ? "No complicated jargon. I build clear, high-speed customer acquisition systems for exporters, clinics, and consumer brands that turn search queries into immediate profit."
                      : "कुनै जटिल शब्दहरू छैनन्। म निर्यातकर्ताहरू, क्लिनिकहरू, र अन्य ब्रान्डहरूको लागि उच्च गतिको ग्राहक प्राप्ति प्रणालीहरू निर्माण गर्दछु जसले ग्राहकहरू बढाउँछ।"}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-purple-500 shrink-0" />
                      <span>{lang === "EN" ? "24/7 Automatic Customer Response" : "२४/७ स्वचालित जवाफ र बुकिङ"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-purple-500 shrink-0" />
                      <span>{lang === "EN" ? "High-ROI Local Google Search ranking" : "गुगल खोजमा शीर्ष स्थान प्राप्त गर्ने"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-purple-500 shrink-0" />
                      <span>{lang === "EN" ? "Meta ads optimized for direct inquiries" : "फेसबुक र इन्स्टाग्राम विज्ञापनहरू"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-purple-500 shrink-0" />
                      <span>{lang === "EN" ? "Full transparency - track every rupee" : "सजिलो र पूर्ण पारदर्शी रिपोर्टहरू"}</span>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-display font-bold text-cream-100">
                    {lang === "EN"
                      ? "Engineering automated marketing funnels and search authority."
                      : "स्वचालित मार्केटिङ फनेल र खोज प्राधिकरण निर्माण।"}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {lang === "EN"
                      ? "Deploy automated prospecting systems, accurate server-side conversion tracking, and high-converting web applications built with React and Tailwind to drive predictable pipeline growth."
                      : "सुपर-फास्ट लोड टाइम भएका रिएक्ट ल्यान्डिङ पेजहरू, बहु-एजेन्ट स्वचालित आउटरिच र विस्तृत गुगल आर्किटेक्चर।"}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-blue-500 shrink-0" />
                      <span>{lang === "EN" ? "Automated B2B Prospecting & Outbound" : "स्वचालित आउटरिच पाइपलाइन"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-blue-500 shrink-0" />
                      <span>{lang === "EN" ? "Accurate Server-Side Ad Attribution" : "सर्भर-साइड विज्ञापन ट्र्याकिङ"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-blue-500 shrink-0" />
                      <span>{lang === "EN" ? "Topical SEO & Search Authority" : "टपिकल अथोरिटी एस्.ई.ओ."}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-blue-500 shrink-0" />
                      <span>{lang === "EN" ? "Ultra-Fast Custom React Landing Pages" : "सुपर फास्ट रिएक्ट ल्यान्डिङ फनेलहरू"}</span>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Action CTAs (Double CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => handleScrollTo("scheduler")}
              className="px-8 py-4 bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 text-white hover:from-brand-blue-500 hover:to-brand-purple-500 font-display font-extrabold text-xs tracking-widest uppercase rounded-lg flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-xl shadow-brand-blue-500/10 active:scale-95 group cursor-pointer"
            >
              <span>{lang === "EN" ? "Book a Consultation" : "परामर्श बुक गर्नुहोस्"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Trust Avatars & Target Audiences */}
          <div className="flex items-center space-x-4 pt-6 border-t border-white/5 max-w-xl">
            <div className="flex -space-x-2.5">
              <span className="w-9 h-9 rounded-full border-2 border-[#050508] bg-brand-blue-800 text-xs font-mono font-bold flex items-center justify-center text-white">N</span>
              <span className="w-9 h-9 rounded-full border-2 border-[#050508] bg-brand-purple-600 text-xs font-mono font-bold flex items-center justify-center text-white">S</span>
              <span className="w-9 h-9 rounded-full border-2 border-[#050508] bg-brand-blue-500 text-xs font-mono font-bold flex items-center justify-center text-white">U</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-medium font-mono uppercase tracking-wider">
                {lang === "EN" ? "Targeting Local & International Scale" : "नेपाल र अन्तर्राष्ट्रिय बजार लक्षित"}
              </span>
              <span className="text-[10px] text-gray-500 font-mono">
                Kathmandu Valley · Singapore · USA · Germany
              </span>
            </div>
          </div>

        </div>

        {/* Right Hand: Neutrally Labeled High-Fidelity AI System Mockup */}
        <div className="lg:col-span-5 relative space-y-6">
          <div className="absolute inset-0 bg-brand-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Glass Card representing AI-Powered Growth Systems */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]/90 p-6 space-y-6 shadow-2xl">
            {/* Header Block */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-blue-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  AI-Powered Growth Systems
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-brand-blue-500/10 text-brand-blue-400 border border-brand-blue-500/20 uppercase">
                Active System
              </span>
            </div>

            {/* Simulated Data Node Stream / Alpine Grid */}
            <div className="space-y-4">
              <div className="p-3.5 bg-black/40 border border-white/5 rounded-lg space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>SEMANTIC GRAPH ROUTING</span>
                  <span className="text-brand-blue-400">99.8% READY</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-brand-blue-500 rounded-full w-[94%]" />
                </div>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/5 rounded-lg space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>META CONVERSIONS (CAPI) FEED</span>
                  <span className="text-brand-purple-400 font-bold">100% ATTRIBUTION</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-1.5">
                  <div className="h-full bg-gradient-to-r from-brand-blue-500 to-brand-purple-500 rounded-full w-full" />
                </div>
              </div>

              {/* Minimalist Topo-graph line visual */}
              <div className="p-4 bg-black/60 border border-white/5 rounded-lg space-y-3 relative overflow-hidden h-32 flex flex-col justify-end">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563ff_1px,transparent_1px)] [background-size:12px_12px]" />
                {/* Clean Himalayan Peak Lines Vector in SVG */}
                <svg className="absolute bottom-0 left-0 w-full h-24 text-brand-blue-500/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 L20,30 L40,65 L60,20 L80,55 L100,40 L100,100 L0,100 Z" fill="currentColor" />
                  <path d="M0,80 L20,30 L40,65 L60,20 L80,55 L100,40" fill="none" stroke="rgba(37, 99, 255, 0.4)" strokeWidth="1.5" />
                  <circle cx="60" cy="20" r="3" fill="#faf8f5" className="animate-ping" />
                  <circle cx="60" cy="20" r="1.5" fill="#2563FF" />
                </svg>
                <div className="relative z-10">
                  <span className="text-[9px] font-mono uppercase text-brand-blue-400 block tracking-widest font-bold">Himalayan Peak Architecture</span>
                  <span className="text-[11px] text-gray-400 block mt-0.5">Custom regional optimization algorithms engineered in Nepal</span>
                </div>
              </div>
            </div>

            {/* Quick status nodes footer */}
            <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 border-t border-white/5 pt-4">
              <span>LATENCY: 224ms</span>
              <span>VERIFIED: VERBALLY & SCIENTIFICALLY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
