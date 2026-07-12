import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, Lock, FileText, Scale } from "lucide-react";

interface PolicyModalProps {
  isOpen: boolean;
  type: "privacy" | "cookie" | "sla" | null;
  onClose: () => void;
  lang: "EN" | "NP";
}

export default function PolicyModal({ isOpen, type, onClose, lang }: PolicyModalProps) {
  if (!isOpen || !type) return null;

  const getContent = () => {
    switch (type) {
      case "privacy":
        return {
          title: lang === "EN" ? "Privacy Protocol & GDPR Policy" : "गोपनीयता नीति र डाटा सुरक्षा प्रोटोकल",
          icon: <Lock className="w-5 h-5 text-brand-blue-400" />,
          sections: lang === "EN" ? [
            {
              heading: "1. Data We Collect",
              text: "We collect information you explicitly provide when reserving a consultation slot: your Full Name, Email Address, Phone/WhatsApp Number, Company Name, and details of your growth bottlenecks. We do not automatically track precise location data other than approximate country-level analytics derived from IP addresses."
            },
            {
              heading: "2. How We Use Your Data",
              text: "All collected customer information is used strictly to host the 1:1 Growth Audit via Google Meet, verify business authenticity, and customize marketing strategy recommendations. We never sell, rent, or distribute your email or contact numbers to third-party list brokers."
            },
            {
              heading: "3. Direct Integration & Storage",
              text: "Form submissions are routed securely over TLS/SSL to our backend server and processed via safe transactional handlers. If our primary servers are offline, metadata is temporarily routed to digimishon@gmail.com. We store records securely and purge inactive consultation data after 12 months."
            },
            {
              heading: "4. Your Rights",
              text: "Under GDPR and international standards, you have the right to request a complete export of your personal consultation history or ask for immediate permanent deletion. To execute this, please email directly to digimishon@gmail.com with your deletion request."
            }
          ] : [
            {
              heading: "१. हामीले संकलन गर्ने डेटा",
              text: "तपाईंले परामर्श समय बुकिङ गर्दा उपलब्ध गराउनुभएको विवरणहरू जस्तै: पूरा नाम, इमेल ठेगाना, फोन नम्बर, कम्पनीको नाम र व्यवसायको समस्या मात्र हामीले संकलन गर्छौं।"
            },
            {
              heading: "२. डेटाको प्रयोग",
              text: "संकलित सम्पूर्ण विवरणहरू १:१ गुगल मीट मिटिङ आयोजना गर्न र तपाईंको व्यवसायका लागि मार्केटिङ रणनीति तयार पार्न मात्र प्रयोग गरिन्छ। हामी तपाईंको जानकारी कसैलाई बिक्री वा वितरण गर्दैनौं।"
            },
            {
              heading: "३. डेटा भण्डारण र सुरक्षा",
              text: "तपाईंको विवरणहरू सुरक्षित TLS/SSL सर्भरमार्फत प्रक्रिया गरिन्छ। परामर्श सम्पन्न भएको १२ महिनापछि निष्क्रिय डेटाहरू स्वतः मेटाइन्छ।"
            },
            {
              heading: "४. तपाईंको अधिकार",
              text: "तपाईंले कुनै पनि समयमा आफ्नो व्यक्तिगत विवरणहरू सच्याउन वा स्थायी रूपमा हटाउन अनुरोध गर्न सक्नुहुन्छ। यसका लागि digimishon@gmail.com मा इमेल गर्नुहोस्।"
            }
          ]
        };

      case "cookie":
        return {
          title: lang === "EN" ? "Cookie & Local Storage Protocol" : "कुकी र स्थानीय भण्डारण प्रोटोकल",
          icon: <ShieldCheck className="w-5 h-5 text-brand-blue-400" />,
          sections: lang === "EN" ? [
            {
              heading: "1. Core Functionality Cookies",
              text: "We utilize localized browser states (localStorage) to store and respect your aesthetic and localization preferences—specifically preserving whether you selected English (EN) or Nepali (NP) language formats."
            },
            {
              heading: "2. Consent Persistence",
              text: "When you accept the cookie banner, we set a clean state parameter named 'digital_mishon_cookie_consent' with a value of 'true' in your local storage. This ensures you are not repeatedly prompted with the consent banner during future visits."
            },
            {
              heading: "3. No Invasive Third-Party Tracking",
              text: "This portfolio is built to be clean, fast, and privacy-respecting. We do not use invasive third-party analytics pixels, behavioral tracking, or advertising cookie networks. Your interactions here remain private."
            }
          ] : [
            {
              heading: "१. आधारभूत कुकीज",
              text: "हामी तपाईंको भाषा प्राथमिकता (नेपाली वा अंग्रेजी) र स्क्रिन सेटिङहरू सुरक्षित राख्न स्थानीय ब्राउजर स्टोरेज (localStorage) प्रयोग गर्छौं।"
            },
            {
              heading: "२. कुकी सहमति",
              text: "तपाईंले कुकी ब्यानर स्वीकार गरेपछि, हामी तपाईंको ब्राउजरमा 'digital_mishon_cookie_consent' नामक सुरक्षित कुकी सेट गर्छौं ताकि अर्को पटक आउँदा ब्यानर फेरि नदेखियोस्।"
            },
            {
              heading: "३. तेस्रो-पक्ष ट्र्याकिङ निषेध",
              text: "हामी प्रयोगकर्ताको गोपनियताको सम्मान गर्छौं। यस वेबसाइटमा कुनै पनि अनावश्यक तेस्रो-पक्ष विज्ञापन वा ट्र्याकिङ कुकीजहरूको प्रयोग गरिएको छैन।"
            }
          ]
        };

      case "sla":
        return {
          title: lang === "EN" ? "Consultation SLA & Commitments" : "परामर्श सेवा सम्झौता र प्रतिवद्धता",
          icon: <Scale className="w-5 h-5 text-brand-blue-400" />,
          sections: lang === "EN" ? [
            {
              heading: "1. No-Pitch Consultation Guarantee",
              text: "Every 30-minute diagnostic session is dedicated entirely to objective strategic review. Mishon guarantees there will be no high-pressure sales pitches or artificial urgency. You will receive real, actionable feedback."
            },
            {
              heading: "2. Schedule Commitment & Show-up Protocol",
              text: "We value professional time. By booking a slot, you agree to attend on time via the Google Meet link. If you need to reschedule or cancel, you must provide at least 24 hours advance notice via email."
            },
            {
              heading: "3. Delivery Standards",
              text: "If you engage Mishon for active growth strategies, project deliverables (funnel builds, Meta CAPI setups, programmatic SEO indexing map) will be guided by an explicit Statement of Work (SOW) with milestones and timeline SLA."
            },
            {
              heading: "4. Direct Accountability",
              text: "Consultations are led directly by Mishon Dahal. No juniors, external contractors, or AI chatbots handle your diagnosis. You deal directly with the lead strategist."
            }
          ] : [
            {
              heading: "१. नि:शुल्क र निष्पक्ष अडिट",
              text: "३० मिनेटको परामर्श सत्र पूर्ण रूपमा तपाईंको व्यवसायको समस्या पहिचान र समाधानमा केन्द्रित हुनेछ। कुनै पनि जबर्जस्ती बिक्री वा अनावश्यक दबाव दिइने छैन।"
            },
            {
              heading: "२. समय पालना र प्रोटोकल",
              text: "हामी समयको कदर गर्छौं। बुकिङ गरिएको समयमा गुगल मीटमा उपस्थित हुन नसकेमा, कम्तीमा २४ घण्टा अगावै इमेलमार्फत जानकारी गराउनु पर्नेछ।"
            },
            {
              heading: "३. सेवाको गुणस्तर र मापदण्ड",
              text: "हाम्रा सबै सेवाहरू (विज्ञापन व्यवस्थापन, एआई प्रणाली जडान, एसईओ) पूर्व-निर्धारित माइलस्टोन र समयतालिका अनुसार पारदर्शी रूपमा डेलिभर गरिन्छ।"
            },
            {
              heading: "४. प्रत्यक्ष जवाफदेहिता",
              text: "सम्पूर्ण परामर्श सत्र मिशन दाहाल आफैंले सञ्चालन गर्नुहुनेछ। कुनै तेस्रो पक्ष वा जूनियर कर्मचारी परामर्शमा संलग्न हुने छैनन्।"
            }
          ]
        };
      default:
        return null;
    }
  };

  const data = getContent();
  if (!data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020204]/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal content wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="bg-[#0a0a0f] border border-white/10 rounded-xl max-w-2xl w-full p-6 sm:p-8 relative z-10 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto font-sans"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-blue-500/10 border border-brand-blue-500/20 rounded-md">
                {data.icon}
              </div>
              <h3 id="modal-title" className="text-sm sm:text-base font-display font-extrabold text-white uppercase tracking-tight">
                {data.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white rounded-md transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Core content sections */}
          <div className="space-y-6 text-xs sm:text-xs">
            {data.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-display font-bold text-white text-sm">
                  {section.heading}
                </h4>
                <p className="text-gray-400 leading-relaxed font-light">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer controls */}
          <div className="flex justify-end pt-4 border-t border-white/5">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-mono text-[10px] uppercase tracking-widest rounded-md border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
            >
              {lang === "EN" ? "Acknowledge" : "स्वीकार गर्नुहोस्"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
