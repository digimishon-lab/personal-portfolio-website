import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Check, AlertCircle, MessageSquare } from "lucide-react";

interface ContactProps {
  personalInfo: any;
  translations: any;
  lang: "EN" | "NP";
}

export default function Contact({
  personalInfo,
  translations: t,
  lang,
}: ContactProps) {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    objective: "Full AI Outbound Automation",
    budget: "$2k - $5k / Month",
    notes: "",
  });

  const [contactLoading, setContactLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState<{
    success?: boolean;
    error?: string;
    message?: string;
  } | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.phone) {
      setContactStatus({ error: "Please complete all required fields designated with *." });
      return;
    }

    setContactLoading(true);
    setContactStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      if (!response.ok) throw new Error("Backend contact failed.");

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format received from server.");
      }

      const result = await response.json();
      setContactStatus({ success: true, message: result.message });
      setContactForm({
        name: "",
        email: "",
        phone: "",
        objective: "Full AI Outbound Automation",
        budget: "$2k - $5k / Month",
        notes: "",
      });
    } catch (error: any) {
      console.log("Contact backend unavailable, calling direct client-side fallback delivery...", error);
      
      // Fallback delivery to FormSubmit
      try {
        const backupResponse = await fetch("https://formsubmit.co/ajax/digimishon@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: "💼 New Client Onboarding Proposal - Digital Mishon (Fallback)",
            "Client Name": contactForm.name,
            "Client Email": contactForm.email,
            "Contact Phone": contactForm.phone,
            "Campaign Objective": contactForm.objective,
            "Estimated Monthly Budget": contactForm.budget,
            "Details / Scope Notes": contactForm.notes || "None",
            "_honey": ""
          })
        });

        if (backupResponse.ok) {
          setContactStatus({ 
            success: true, 
            message: "Campaign proposal logged successfully on backup delivery pipelines. Mishon has been notified and will reply to you within 12 hours." 
          });
          setContactForm({
            name: "",
            email: "",
            phone: "",
            objective: "Full AI Outbound Automation",
            budget: "$2k - $5k / Month",
            notes: "",
          });
        } else {
          throw new Error("Backup proposal submission failed.");
        }
      } catch (backupErr: any) {
        setContactStatus({ error: "Unable to process submission. Please contact us directly at digimishon@gmail.com or via WhatsApp." });
      }
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-extrabold"
        >
          Proposal Gateway
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-black uppercase text-white leading-tight"
        >
          {t.contactTitle || "Initiate Integration"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl"
        >
          {t.contactSub || "Submit your budget tiers, estimated timelines, and objectives to receive a tailored digital marketing blueprint."}
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Details channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0e0e11] border border-white/10 p-6 sm:p-8 rounded-xl shadow-lg space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-extrabold">
              Direct Channels
            </h3>

            <div className="space-y-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-start p-3 bg-black/40 rounded-lg border border-white/5 hover:border-[#d4af37]/30 transition-all group"
              >
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-md mr-4 group-hover:bg-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Email Inquiry</h5>
                  <p className="text-xs text-white font-mono mt-1 font-semibold group-hover:text-[#d4af37] transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start p-3 bg-black/40 rounded-lg border border-white/5 hover:border-[#d4af37]/30 transition-all group"
              >
                <div className="p-2 bg-green-500/10 text-green-400 rounded-md mr-4 group-hover:bg-green-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">WhatsApp chat</h5>
                  <p className="text-xs text-white font-mono mt-1 font-semibold group-hover:text-[#d4af37] transition-colors">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-start p-3 bg-black/40 rounded-lg border border-white/5">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-md mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Operational Center</h5>
                  <p className="text-xs text-white font-mono mt-1 font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SLA assurance card */}
          <div className="bg-gradient-to-br from-[#d4af37]/5 to-transparent border border-[#d4af37]/15 p-5 rounded-xl space-y-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold">12-Hour SLA Commitment</h5>
            <p className="text-[11px] text-gray-400 leading-relaxed font-light">
              Every qualified proposal request receives a 12-page custom visual blueprint analyzing current search performance and conversion attribution errors.
            </p>
          </div>
        </div>

        {/* Right: Proposal Form */}
        <div className="lg:col-span-7 bg-[#0e0e11] border border-white/10 rounded-xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  Corporate Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="Mishon Dahal"
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 font-light"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="contact@mishondahal.com.np"
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 font-light"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  Campaign Objective
                </label>
                <select
                  value={contactForm.objective}
                  onChange={(e) => setContactForm({ ...contactForm, objective: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-mono"
                >
                  <option value="Full AI Outbound Automation">Full AI Outbound Automation</option>
                  <option value="Server-Side Conversions API (CAPI)">Server-Side Conversions API (CAPI)</option>
                  <option value="SEO Topic Graph Clustering">SEO Topic Graph Clustering</option>
                  <option value="Paid Ads Multi-Channel Funnel">Paid Ads Multi-Channel Funnel</option>
                  <option value="High-Converting UI/UX Remap">High-Converting UI/UX Remap</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  Estimated Monthly Budget
                </label>
                <select
                  value={contactForm.budget}
                  onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-mono"
                >
                  <option value="Less than $1,000 / Month">Less than $1,000 / Month</option>
                  <option value="$1,000 - $2,500 / Month">$1,000 - $2,500 / Month</option>
                  <option value="$2,500 - $5,000 / Month">$2,500 - $5,000 / Month</option>
                  <option value="Over $5,000 / Month">Over $5,000 / Month</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                Contact Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                placeholder="e.g. +977 98XXXXXXXX"
                className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 font-light"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                List Current Systems & Limitations
              </label>
              <textarea
                value={contactForm.notes}
                onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })}
                placeholder="Briefly state your current customer acquisition channels and monthly traffic size if available."
                rows={3}
                className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 font-light"
              />
            </div>

            <button
              type="submit"
              disabled={contactLoading}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-display font-extrabold text-xs uppercase tracking-widest rounded-md transition-all active:scale-95 cursor-pointer shadow-lg shadow-blue-500/10"
            >
              {contactLoading ? "Submitting Blueprint Request..." : "Submit Blueprint Request"}
            </button>

            {contactStatus && (
              <div
                className={`p-4 rounded text-xs font-mono mt-4 border flex items-start gap-2.5 ${
                  contactStatus.success
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                }`}
              >
                {contactStatus.success ? (
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                )}
                <span>
                  {contactStatus.success ? contactStatus.message : contactStatus.error}
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
