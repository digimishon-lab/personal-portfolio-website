import React from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Search,
  TrendingUp,
  Layers,
  Mail,
  Briefcase,
  Check,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Service } from "../types";

interface ServicesProps {
  services: Service[];
  lang: "EN" | "NP";
}

// Icon mapper helper using standard Lucide Icons
const ServiceIcon = ({ icon, className = "w-6 h-6" }: { icon: string; className?: string }) => {
  switch (icon) {
    case "Cpu":
      return <Cpu className={className} />;
    case "Facebook":
      return <Briefcase className={className} />;
    case "Search":
      return <Search className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "Mail":
      return <Mail className={className} />;
    default:
      return <Briefcase className={className} />;
  }
};

export default function Services({ services, lang }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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

  // Limit to exactly 6 service cards max
  const limitedServices = services.slice(0, 6);

  return (
    <section id="services" className="py-20 border-b border-white/5 scroll-mt-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/20 text-brand-blue-400 text-[10px] font-mono uppercase tracking-widest font-bold">
          {lang === "EN" ? "Capabilities spectrum" : "सेवा तथा सुविधाहरू"}
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-white">
          {lang === "EN" ? "Custom Growth Infrastructure" : "व्यवसाय वृद्धिका सेवाहरू"}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
          {lang === "EN" 
            ? "Skip generic consultations. I deploy battle-tested client acquisition engines, programmatic local authority blueprints, and automated lead responders designed to drive real profit."
            : "हामी सामान्य सल्लाह मात्र होइन, तपाईंको व्यवसाय बढाउन आवश्यक पर्ने फेसबुक विज्ञापन, गुगल र स्वचालित कस्टूमर च्याट सिस्टमहरू पूर्ण रूपमा सेट अप गरिदिन्छौं।"}
        </p>
      </div>

      {/* Services Grid (6 max) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {limitedServices.map((serv) => (
          <motion.div
            key={serv.id}
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: "rgba(37, 99, 255, 0.3)" }}
            className="bg-[#0a0a0f]/80 border border-white/5 hover:border-brand-blue-500/30 transition-all duration-300 p-8 rounded-xl flex flex-col justify-between group shadow-xl"
          >
            <div>
              {/* Card top */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-brand-blue-400 group-hover:text-cream-100 group-hover:bg-brand-blue-600/10 group-hover:border-brand-blue-500/30 transition-all duration-300">
                  <ServiceIcon icon={serv.icon} className="w-5 h-5" />
                </div>
                {serv.badge && (
                  <span className="text-[9px] font-mono uppercase bg-brand-purple-500/10 border border-brand-purple-500/20 text-brand-purple-300 px-2.5 py-0.5 rounded-full font-bold">
                    {lang === "EN" ? serv.badge : "विशेष"}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-display font-black text-white mb-3 group-hover:text-brand-blue-400 transition-colors duration-300 uppercase tracking-tight">
                {serv.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">
                {serv.description}
              </p>

              {/* Bullet outcomes (1-2 outcomes max) */}
              <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-4">
                {serv.benefits.slice(0, 2).map((b, idx) => (
                  <li key={idx} className="flex items-start text-[11px] text-gray-500">
                    <Check className="w-3.5 h-3.5 text-brand-blue-500 mr-2 flex-shrink-0 mt-0.5 animate-pulse" />
                    <span className="font-light text-gray-300 leading-normal">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scroll Button */}
            <button
              onClick={() => handleScrollTo("scheduler")}
              className="text-xs font-mono uppercase text-brand-purple-400 flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group/btn"
            >
              <span>{lang === "EN" ? "Build This Pipeline" : "यो सेवा बुक गर्नुहोस्"}</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
