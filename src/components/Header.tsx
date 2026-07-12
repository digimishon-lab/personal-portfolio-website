import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe2, Calendar, Menu, X, ArrowUpRight, Facebook, Instagram, Linkedin, Globe, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  lang: "EN" | "NP";
  setLang: (lang: "EN" | "NP") => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  translations: any;
}

export default function Header({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  darkMode,
  setDarkMode,
  translations: t,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveTab(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90; // offset for sticky header
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

  const navItems = [
    { id: "hero", label: lang === "EN" ? "Home" : "गृहपृष्ठ" },
    { id: "services", label: lang === "EN" ? "Services" : "सेवाहरू" },
    { id: "about", label: lang === "EN" ? "About" : "हाम्रो बारेमा" },
    { id: "testimonials", label: lang === "EN" ? "Testimonials" : "अनुभवहरू" },
    { id: "blog", label: lang === "EN" ? "Blog" : "ब्लग" },
    { id: "faq", label: lang === "EN" ? "FAQ" : "जिज्ञासाहरू" },
  ];

  const socialLinks = [
    { key: "linkedin", href: PERSONAL_INFO.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { key: "facebook", href: PERSONAL_INFO.socials.facebook, icon: Facebook, label: "Facebook" },
    { key: "instagram", href: PERSONAL_INFO.socials.instagram, icon: Instagram, label: "Instagram" },
    { key: "portfolio", href: PERSONAL_INFO.socials.portfolio, icon: Globe, label: "Portfolio" },
    { key: "email", href: PERSONAL_INFO.socials.email, icon: Mail, label: "Email" },
    { key: "phone", href: PERSONAL_INFO.socials.phone, icon: Phone, label: "Phone" },
  ].filter(link => link.href && link.href.trim() !== "");

  return (
    <>
      {/* Main Glass Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#050508]/90 border-white/5 shadow-2xl shadow-black/40"
            : "bg-transparent border-transparent"
        } backdrop-blur-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col lg:gap-3.5">
          {/* Upper Row: Logo & Actions */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick("hero")}>
              <Logo darkMode={darkMode} />
            </div>

            {/* Controls & CTA buttons */}
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              {/* Desktop Social Links */}
              <div className="hidden md:flex items-center space-x-1.5 mr-1.5">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white/5 bg-white/[0.02] hover:bg-brand-blue-500/10 hover:border-brand-blue-500/35 text-gray-400 hover:text-brand-blue-400 rounded-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
                      title={link.label}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>

              {/* Language Switcher */}
              <button
                onClick={() => setLang(lang === "EN" ? "NP" : "EN")}
                className="flex items-center space-x-1 px-2.5 py-1.5 text-xs font-mono uppercase border border-white/10 bg-black/30 text-gray-300 hover:border-brand-blue-500 rounded-md transition-all cursor-pointer"
                title="Switch Language"
              >
                <Globe2 className="w-3 h-3 text-brand-blue-400 animate-pulse" />
                <span>{lang}</span>
              </button>

              {/* Booking CTA button */}
              <button
                onClick={() => handleNavClick("scheduler")}
                className="hidden sm:inline-flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 text-white rounded text-xs font-mono uppercase tracking-wider hover:from-brand-blue-500 hover:to-brand-purple-500 transition-all shadow-md shadow-brand-blue-500/10 border border-brand-blue-400/20 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === "EN" ? "Book a Consultation" : "परामर्श बुक गर्नुहोस्"}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 border border-white/10 hover:bg-black/40 text-brand-blue-400 rounded-md transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Lower Row: Navigation Links (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-mono uppercase tracking-widest pt-2.5 border-t border-white/5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative hover:text-brand-blue-400 transition-all py-1 px-1.5 font-medium cursor-pointer ${
                    isActive
                      ? "text-brand-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile quick scroll bar */}
        <div className="lg:hidden w-full flex overflow-x-auto whitespace-nowrap py-3 px-4 bg-black/20 border-t border-b border-white/5 scrollbar-none gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-mono uppercase pb-0.5 border-b-2 cursor-pointer ${
                activeTab === item.id
                  ? "text-brand-blue-400 border-brand-blue-500 font-bold"
                  : "text-gray-400 border-transparent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Drawer Slide-out */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-30 lg:hidden p-6 pt-28 bg-[#050508]/98 text-white flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6 text-sm font-mono uppercase tracking-widest">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 border-b border-white/5 cursor-pointer ${
                    activeTab === item.id ? "text-brand-blue-400 font-bold" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("scheduler")}
                className="text-left py-2 border-b border-white/5 text-brand-purple-300 font-bold cursor-pointer"
              >
                {lang === "EN" ? "Book a Consultation" : "परामर्श बुक गर्नुहोस्"}
              </button>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex flex-wrap gap-2 mb-2">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white/5 bg-white/[0.02] hover:bg-brand-blue-500/10 hover:border-brand-blue-500/35 text-gray-400 hover:text-brand-blue-400 rounded-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
                      title={link.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
              <Logo darkMode={true} />
              <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                Marketing, Reimagined by AI. <br />
                Bhaktapur, Nepal
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
