import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Sparkles, AlertCircle, X, Clock, Calendar as CalendarIcon, User, ChevronRight } from "lucide-react";

import { STATISTICS, SERVICES, PROJECTS, TESTIMONIALS, BLOG_POSTS } from "./data";

// Sub-components
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Stats from "./components/Stats";
import ServicesComponent from "./components/Services";
import HowIWork from "./components/HowIWork";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import PolicyModal from "./components/PolicyModal";
import FAQSection from "./components/FAQSection";

export default function App() {
  const [lang, setLang] = useState<"EN" | "NP">("EN");
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);
  const [activePolicyModal, setActivePolicyModal] = useState<"privacy" | "cookie" | "sla" | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("digital_mishon_cookie_consent");
    if (consent === "true") setCookieConsent(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Dynamic section tracker for navigation highlighting
      const sections = ["hero", "services", "about", "testimonials", "blog", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("digital_mishon_cookie_consent", "true");
    setCookieConsent(true);
  };

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
    <div className="min-h-screen bg-[#050508] text-[#F9FAFB] font-sans selection:bg-copper-500/30 selection:text-white overflow-x-hidden relative">
      {/* 1. Header with announcement bar & complete navigation links */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        translations={null}
      />

      {/* Main Single Page Stage */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. Hero Visual Entry */}
        <Hero
          lang={lang}
          darkMode={true}
          translations={null}
          personalInfo={null}
        />

        {/* 3. Verifiable Campaign Credits Trust Bar */}
        <TrustBar />

        {/* 4. Real-time Count Ticker Stats Band */}
        <Stats statistics={STATISTICS} />

        {/* 5. Custom Growth Infrastructure / Services Grid */}
        <ServicesComponent
          services={SERVICES}
          lang={lang}
        />

        {/* 5b. How I Work Process Section */}
        <HowIWork lang={lang} />

        {/* 6b. About Section - Newly Mounted and Styled */}
        <section id="about" className="py-20 border-b border-white/5 scroll-mt-20">
          <About translations={null} lang={lang} />
        </section>

        {/* 7. Client Validation Logs Testimonials */}
        <Testimonials
          testimonials={TESTIMONIALS}
          lang={lang}
        />

        {/* 7b. Blog Section - Newly Mounted and Styled */}
        <section id="blog" className="py-20 border-b border-white/5 scroll-mt-20">
          <Blog
            posts={BLOG_POSTS}
            setSelectedBlog={setSelectedBlog}
            translations={null}
          />
        </section>

        {/* 8. Final CTA Action block */}
        <section className="my-16 bg-[#0a0a0f] border border-white/5 p-8 sm:p-14 rounded-2xl text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-copper-500/5 rounded-full blur-[80px]" />
          <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-white leading-tight">
            {lang === "EN" 
              ? "Accelerate Your Customer Inbound." 
              : "आजै तपाईंको व्यवसायको डिजिटल क्षमता बुझ्नुहोस्"}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === "EN"
              ? "Get your completely free 30-minute growth diagnostic session where we audit your Conversions API matching, search topical index, and outline key workflow automation steps."
              : "कुनै शुल्क बिना ३० मिनेटको लागि म्यापिङ कल बुक गर्नुहोस्। हामी तपाईंको व्यवसायको विज्ञापन ढाँचा र एआई प्रविधि जडान गर्ने रणनीतिको समीक्षा गर्नेछौं।"}
          </p>
          <button
            onClick={() => handleScrollTo("scheduler")}
            className="px-8 py-4 bg-gradient-to-r from-copper-600 to-copper-500 hover:from-copper-500 hover:to-copper-400 text-white font-display font-black text-xs uppercase tracking-widest rounded-lg transition-all cursor-pointer shadow-lg shadow-copper-500/10 border border-copper-400/20 active:scale-95"
          >
            {lang === "EN" ? "Launch Free Diagnostic Audit" : "निःशुल्क परामर्श सत्र सुरु गर्नुहोस्"}
          </button>

          {/* Soft pricing signal */}
          <p className="text-[10px] sm:text-[11px] font-mono text-gray-500 pt-2 block">
            {lang === "EN"
              ? "* Engagements typically start as a monthly retainer — book a free consultation to discuss scope and investment."
              : "* हाम्रा सेवाहरू सामान्यतया मासिक रिटेनर ढाँचामा सुरु हुन्छन् — बजेट र रणनीतिको बारेमा छलफल गर्न परामर्श सत्र बुक गर्नुहोस्।"}
          </p>
        </section>

        {/* 8b. Workflow & AI Strategy FAQ Section */}
        <FAQSection lang={lang} />

        {/* 9. Interactive Booking Scheduler Form */}
        <section id="contact" className="scroll-mt-20">
          <Consultation
            lang={lang}
          />
        </section>

      </main>

      {/* 10. Clear contact footer */}
      <Footer
        lang={lang}
        onOpenPolicy={setActivePolicyModal}
      />

      {/* Dynamic Policy Overlay Modals */}
      <PolicyModal
        isOpen={!!activePolicyModal}
        type={activePolicyModal}
        onClose={() => setActivePolicyModal(null)}
        lang={lang}
      />

      {/* Interactive Editorial Blog Modal Reader with AnimatePresence */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
            className="fixed inset-0 z-50 bg-[#050508]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0f] border border-white/10 rounded-2xl w-full max-w-4xl p-6 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto font-sans text-gray-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                title="Close Article"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tag / Category */}
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-copper-400 uppercase font-bold bg-copper-500/10 border border-copper-500/15 px-2.5 py-1 rounded-md mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedBlog.category}</span>
              </div>

              {/* Article Header */}
              <div className="space-y-4 mb-8">
                <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white leading-tight">
                  {selectedBlog.title}
                </h2>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-gray-500 border-b border-white/5 pb-6">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-copper-500" />
                    <span>{selectedBlog.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-copper-500" />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-copper-500" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Feature Image */}
              <div className="w-full h-64 sm:h-96 rounded-xl overflow-hidden bg-slate-950 border border-white/5 mb-8">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Body with customized premium editorial layout */}
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-6 font-light">
                {selectedBlog.content.split("\n\n").map((paragraph: string, idx: number) => {
                  if (paragraph.startsWith("###")) {
                    return (
                      <h3 key={idx} className="text-lg sm:text-xl font-display font-bold text-white pt-4 pb-1 uppercase tracking-tight text-gradient-copper">
                        {paragraph.replace("###", "").trim()}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("*")) {
                    return (
                      <ul key={idx} className="space-y-3.5 pl-5 my-4">
                        {paragraph.split("\n").map((item: string, iIndex: number) => (
                          <li key={iIndex} className="flex items-start">
                            <span className="text-copper-500 mr-2.5 font-bold mt-0.5">•</span>
                            <span>{item.replace("*", "").trim()}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* CTA footer inside article */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left space-y-1">
                  <h4 className="text-sm font-display font-bold text-white uppercase tracking-tight">Need to implement this blueprint?</h4>
                  <p className="text-xs text-gray-500">Book Mishon for a diagnostic mapping call.</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedBlog(null);
                    handleScrollTo("scheduler");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-copper-600 to-copper-500 hover:from-copper-500 hover:to-copper-400 text-white rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer font-bold shrink-0"
                >
                  Schedule Diagnostic Call
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Scroll Top Helper Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-[#0a0a0f] border border-white/10 hover:border-copper-500 rounded-full text-gray-400 hover:text-white shadow-xl transition-all cursor-pointer active:scale-90 group"
          title="Scroll to Top"
        >
          <ArrowUpRight className="w-4 h-4 transform -rotate-45 group-hover:text-copper-400 transition-colors" />
        </button>
      )}

      {/* Standard Cookie drawer banner */}
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0f]/95 border-t border-t-white/15 z-50 p-4 shadow-2xl backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
            <p className="text-[10px] sm:text-[11px] text-gray-400 text-center md:text-left leading-relaxed">
              {lang === "EN"
                ? "This secure portal uses lightweight technical cookies to measure campaign match speeds. No personal tracking files are retained."
                : "यस वेबसाइटले उत्कृष्ट प्रयोगकर्ता अनुभवका लागि हल्का प्राविधिक कुकीहरू प्रयोग गर्दछ। कुनै व्यक्तिगत डेटा संकलन गरिँदैन।"}
            </p>
            <button
              onClick={acceptCookies}
              className="px-5 py-2.5 bg-copper-600 hover:bg-copper-500 text-white font-bold text-xs uppercase rounded transition-colors cursor-pointer"
            >
              {lang === "EN" ? "Acknowledge" : "स्वीकार गर्नुहोस्"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

