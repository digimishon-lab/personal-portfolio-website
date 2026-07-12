import React from "react";
import Logo from "./Logo";
import { Facebook, Instagram, Linkedin, Globe, Mail, Phone } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface FooterProps {
  lang: "EN" | "NP";
  onOpenPolicy: (type: "privacy" | "cookie" | "sla") => void;
}

export default function Footer({ lang, onOpenPolicy }: FooterProps) {
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

  const socialLinks = [
    { key: "linkedin", href: PERSONAL_INFO.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { key: "facebook", href: PERSONAL_INFO.socials.facebook, icon: Facebook, label: "Facebook" },
    { key: "instagram", href: PERSONAL_INFO.socials.instagram, icon: Instagram, label: "Instagram" },
    { key: "portfolio", href: PERSONAL_INFO.socials.portfolio, icon: Globe, label: "Portfolio" },
    { key: "email", href: PERSONAL_INFO.socials.email, icon: Mail, label: "Email" },
    { key: "phone", href: PERSONAL_INFO.socials.phone, icon: Phone, label: "Phone" },
  ].filter(link => link.href && link.href.trim() !== "");

  return (
    <footer className="z-10 mt-16 border-t border-white/5 bg-[#050508] py-16 text-xs font-mono text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Brand Credit */}
        <div className="md:col-span-5 space-y-5">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo darkMode={true} />
          </div>
          <p className="text-[11px] leading-relaxed uppercase max-w-sm text-gray-400">
            {lang === "EN"
              ? "Marketing, Reimagined by AI."
              : "मार्केटिङ, एआई प्रविधिद्वारा।"}{" "}
            <br />
            {lang === "EN"
              ? "Deploying high-converting, autonomous systems globally from Bhaktapur, Nepal."
              : "भक्तपुर, नेपालबाट विश्वभर उच्च-रूपान्तरण, स्वचालित प्रणालीहरू प्रयोग गर्दै।"}
          </p>
        </div>

        {/* Directory Map */}
        <div className="md:col-span-3 space-y-4">
          <span className="text-white font-bold block uppercase tracking-widest text-[10px]">Index Map</span>
          <div className="space-y-2 text-[11px] flex flex-col items-start">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-brand-blue-400 uppercase cursor-pointer">
              {lang === "EN" ? "Overview" : "अवलोकन"}
            </button>
            <button onClick={() => handleScrollTo("services")} className="hover:text-brand-blue-400 uppercase cursor-pointer">
              {lang === "EN" ? "Services" : "सेवाहरू"}
            </button>
            <button onClick={() => handleScrollTo("work")} className="hover:text-brand-blue-400 uppercase cursor-pointer">
              {lang === "EN" ? "Case Studies" : "परियोजनाहरू"}
            </button>
            <button onClick={() => handleScrollTo("testimonials")} className="hover:text-brand-blue-400 uppercase cursor-pointer">
              {lang === "EN" ? "Testimonials" : "अनुभवहरू"}
            </button>
            <button onClick={() => handleScrollTo("scheduler")} className="hover:text-brand-blue-400 uppercase cursor-pointer">
              {lang === "EN" ? "Contact" : "सम्पर्क"}
            </button>
          </div>
        </div>

        {/* Contact info channels */}
        <div className="md:col-span-4 space-y-4 text-left">
          <span className="text-white font-bold block uppercase tracking-widest text-[10px]">Social & Inquiries</span>
          <div className="space-y-1.5 text-[11px] text-gray-400">
            <div>Email: <a href="mailto:digimishon@gmail.com" className="text-gray-200 hover:text-brand-blue-400">digimishon@gmail.com</a></div>
            <div>Hours: <span className="text-gray-300">10:00 AM - 08:00 PM NPT</span></div>
            <div>Location: <span className="text-gray-300">Bhaktapur, Nepal</span></div>
          </div>
          
          <div className="flex flex-wrap gap-2.5 pt-3 border-t border-white/5">
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-600 uppercase">
        <div>© 2026 Mishon Dahal. All rights reserved.</div>
        <div className="flex items-center gap-3 flex-wrap">
          <button onClick={() => onOpenPolicy("sla")} className="hover:text-gray-400 cursor-pointer bg-transparent border-none p-0 outline-none uppercase font-mono text-[10px]">SLA Agreement</button>
          <span>·</span>
          <button onClick={() => onOpenPolicy("privacy")} className="hover:text-gray-400 cursor-pointer bg-transparent border-none p-0 outline-none uppercase font-mono text-[10px]">Privacy Protocol</button>
          <span>·</span>
          <button onClick={() => onOpenPolicy("cookie")} className="hover:text-gray-400 cursor-pointer bg-transparent border-none p-0 outline-none uppercase font-mono text-[10px]">Cookie Protocol</button>
        </div>
      </div>
    </footer>
  );
}
