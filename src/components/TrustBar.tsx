import React from "react";
import { motion } from "motion/react";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  const partners = [
    { name: "Apex Tech Nepal", url: "https://apextech.com.np", desc: "Enterprise IT Systems" },
    { name: "Himalayan D2C Export", url: "https://himalayanexport.com", desc: "Handicrafts & Cashmere" },
    { name: "UrbanGlow Boutique", url: "https://urbanglow.com.np", desc: "E-Commerce Kathmandu" },
    { name: "DentalCare Nepal", url: "https://dentalcarenepal.com", desc: "Lalitpur Healthcare Clinic" },
  ];

  return (
    <section className="py-8 bg-[#07070a] border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="flex items-center gap-2.5 text-center lg:text-left shrink-0">
            <CheckCircle2 className="w-4 h-4 text-brand-blue-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 font-bold">
              VERIFIABLE CAMPAIGN CREDITS
            </span>
          </div>

          {/* Companies Grid */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/5 bg-black/40 hover:border-brand-blue-500/30 hover:bg-brand-blue-500/[0.02] text-gray-400 hover:text-white transition-all cursor-pointer"
              >
                <span className="font-display font-medium text-cream-100">{partner.name}</span>
                <span className="text-[9px] font-mono text-gray-500 group-hover:text-brand-purple-400 transition-colors">
                  ({partner.desc})
                </span>
                <ExternalLink className="w-2.5 h-2.5 text-gray-600 group-hover:text-brand-purple-400 transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
