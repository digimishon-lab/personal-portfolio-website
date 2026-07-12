import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Check, ShieldCheck, Mail, Clock, AlertCircle } from "lucide-react";

interface ConsultationProps {
  lang: "EN" | "NP";
}

export default function Consultation({ lang }: ConsultationProps) {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<{
    success?: boolean;
    error?: string;
    message?: string;
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setBookingForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Comprehensive client-side validation
    const newErrors: Record<string, string> = {};
    if (!bookingForm.name.trim()) {
      newErrors.name = lang === "EN" ? "Full Name is required" : "पूरा नाम अनिवार्य छ";
    }
    if (!bookingForm.email.trim()) {
      newErrors.email = lang === "EN" ? "Email Address is required" : "इमेल अनिवार्य छ";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingForm.email)) {
      newErrors.email = lang === "EN" ? "Invalid email address format" : "अमान्य इमेल ढाँचा";
    }
    if (!bookingForm.phone.trim()) {
      newErrors.phone = lang === "EN" ? "Phone / WhatsApp number is required" : "फोन नम्बर अनिवार्य छ";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(bookingForm.phone.replace(/\s+/g, ""))) {
      newErrors.phone = lang === "EN" ? "Invalid phone format (7-15 digits expected)" : "अमान्य फोन ढाँचा (७-१५ अङ्क आवश्यक)";
    }
    if (!bookingForm.date) {
      newErrors.date = lang === "EN" ? "Please select a preferred date" : "कृपया मिति रोज्नुहोस्";
    }
    if (!bookingForm.time) {
      newErrors.time = lang === "EN" ? "Please select a time slot" : "कृपया समय रोज्नुहोस्";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setBookingStatus({ 
        error: lang === "EN" ? "Please correct the highlighted errors before submitting." : "कृपया सबमिट गर्नु अघि हाइलाइट गरिएका त्रुटिहरू सच्याउनुहोस्।" 
      });
      return;
    }

    setErrors({});
    setBookingLoading(true);
    setBookingStatus(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingForm),
      });

      if (!response.ok) throw new Error("Backend booking failed.");
      
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format received from server.");
      }

      const result = await response.json();
      setBookingStatus({ success: true, message: result.message });
      setBookingForm({ name: "", email: "", phone: "", company: "", date: "", time: "", notes: "" });
    } catch (error: any) {
      console.log("Booking backend offline, routing via fallback FormSubmit client...", error);
      
      try {
        const backupResponse = await fetch("https://formsubmit.co/ajax/digimishon@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: "📅 New Growth Audit - Mishon Dahal",
            "Client Name": bookingForm.name,
            "Client Email": bookingForm.email,
            "Contact Number": bookingForm.phone,
            "Company": bookingForm.company || "N/A",
            "Preferred Date": bookingForm.date,
            "Preferred Time": bookingForm.time,
            "Growth Blocker": bookingForm.notes || "None",
            "_honey": ""
          })
        });

        if (backupResponse.ok) {
          setBookingStatus({ 
            success: true, 
            message: lang === "EN"
              ? `Growth audit requested for ${bookingForm.date} at ${bookingForm.time}. Mishon has received your query and will reply within 12 hours.`
              : `परामर्श अडिटको विवरण सफलतापूर्वक प्राप्त भयो। मिशनले आगामी १२ घण्टाभित्र सम्पर्क गर्नुहुनेछ।`
          });
          setBookingForm({ name: "", email: "", phone: "", company: "", date: "", time: "", notes: "" });
        } else {
          throw new Error("Unable to complete transaction.");
        }
      } catch (backupErr: any) {
        setBookingStatus({ 
          error: lang === "EN" 
            ? "Unable to process booking. Please try again or email directly to digimishon@gmail.com." 
            : "बुकिङ प्रशोधन गर्न सकिएन। कृपया पुनः प्रयास गर्नुहोस् वा digimishon@gmail.com मा इमेल गर्नुहोस्।" 
        });
      }
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <section id="scheduler" className="py-20 border-b border-white/5 scroll-mt-20" aria-labelledby="booking-heading">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-400 text-[10px] font-mono uppercase tracking-widest font-bold">
          {lang === "EN" ? "Reserve growth audit" : "परामर्श समय बुक गर्नुहोस्"}
        </div>
        <h2 id="booking-heading" className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-white">
          {lang === "EN" ? "Schedule a Growth Audit" : "१:१ निःशुल्क परामर्श अडिट"}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
          {lang === "EN"
            ? "Reserve a 30-minute diagnostic session hosted via secure Google Meet. No sales pitch — just a deep, objective review of your marketing bottlenecks and AI scaling opportunities."
            : "हामी गुगल मीटमार्फत ३० मिनेटको कुराकानी गर्नेछौं जसमा तपाईंको व्यवसायमा विज्ञापन र एआई प्रविधिको कसरी प्रयोग गर्न सकिन्छ भन्ने बारे छलफल हुनेछ।"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left side: What's Covered */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0a0a0f]/90 border border-white/5 p-6 sm:p-8 rounded-xl shadow-2xl space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-copper-400 font-extrabold border-b border-white/5 pb-3">
              {lang === "EN" ? "What is Covered In Your Audit" : "अडिटमा के छलफल गरिन्छ?"}
            </h3>
            
            <ul className="space-y-5 text-xs">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-copper-500/10 border border-copper-500/20 text-copper-400 rounded-md flex items-center justify-center mr-3 flex-shrink-0 font-mono font-bold">
                  1
                </div>
                <div>
                  <h5 className="font-display font-bold text-white text-sm">
                    {lang === "EN" ? "Tracking & Pixel Diagnostic" : "पिक्सेल र डेटा डायग्नोस्टिक"}
                  </h5>
                  <p className="text-[11px] text-gray-500 mt-1 leading-normal font-light">
                    {lang === "EN" 
                      ? "Verify browser match scores and server-to-server Meta CAPI integration to ensure 100% advertising attribution."
                      : "फेसबुक पिक्सेल र सर्भर-टु-सर्भर म्याचको पूर्ण प्रमाणीकरण।"}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-copper-500/10 border border-copper-500/20 text-copper-400 rounded-md flex items-center justify-center mr-3 flex-shrink-0 font-mono font-bold">
                  2
                </div>
                <div>
                  <h5 className="font-display font-bold text-white text-sm">
                    {lang === "EN" ? "Topical Authority Check" : "गुगल सर्च र्याङ्किङ अडिट"}
                  </h5>
                  <p className="text-[11px] text-gray-500 mt-1 leading-normal font-light">
                    {lang === "EN"
                      ? "Analyze indexing gaps, topical cluster structures, and high-intent SEO keyword opportunities."
                      : "गुगलमा पहिलो पेजमा आउन आवश्यक पर्ने सेमान्टिक कीवर्ड विश्लेषण।"}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-copper-500/10 border border-copper-500/20 text-copper-400 rounded-md flex items-center justify-center mr-3 flex-shrink-0 font-mono font-bold">
                  3
                </div>
                <div>
                  <h5 className="font-display font-bold text-white text-sm">
                    {lang === "EN" ? "Cognitive Overhead Mapping" : "अटोमेसन र एआई प्रयोग"}
                  </h5>
                  <p className="text-[11px] text-gray-500 mt-1 leading-normal font-light">
                    {lang === "EN"
                      ? "Identify repetitive qualifying, follow-up, and messaging workflows to automate using trained LLM models."
                      : "तपाईंको व्यवसायमा कामदारको समय बचाउन र म्यानुअल कामहरू स्वचालित गर्न एआईको प्रयोग।"}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Verification Badge */}
          <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-full bg-copper-600 flex items-center justify-center text-white font-mono font-bold text-xs">
              MD
            </div>
            <div>
              <h5 className="text-[11px] font-display font-bold text-white uppercase tracking-wider">
                {lang === "EN" ? "DIRECT HOST: MISHON DAHAL" : "संयोजक: मिशन दाहाल"}
              </h5>
              <p className="text-[10px] text-gray-500 font-mono">
                {lang === "EN" ? "Google Meet · Bhaktapur, Nepal" : "गुगल मीट · भक्तपुर, नेपाल"}
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Interactive Form */}
        <div className="lg:col-span-7 bg-[#0a0a0f]/90 border border-white/5 rounded-xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleBookingSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullname" className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  {lang === "EN" ? "Full Name *" : "पूरा नाम *"}
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  disabled={bookingLoading || !!bookingStatus?.success}
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "fullname-error" : undefined}
                  value={bookingForm.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="e.g. Sabin Nepal"
                  className={`w-full bg-black/40 border rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.name 
                      ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" 
                      : "border-white/10 focus:border-copper-500 focus:ring-copper-500/20"
                  }`}
                />
                {errors.name && (
                  <p id="fullname-error" className="text-rose-400 text-[10px] font-mono mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  {lang === "EN" ? "Email Address *" : "इमेल ठेगाना *"}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={bookingLoading || !!bookingStatus?.success}
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  value={bookingForm.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full bg-black/40 border rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.email 
                      ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" 
                      : "border-white/10 focus:border-copper-500 focus:ring-copper-500/20"
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="text-rose-400 text-[10px] font-mono mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  {lang === "EN" ? "Company / Brand Name" : "कम्पनी / संस्थाको नाम"}
                </label>
                <input
                  id="company"
                  type="text"
                  disabled={bookingLoading || !!bookingStatus?.success}
                  value={bookingForm.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="e.g. Himalayan Crafts"
                  className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500/20 transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  {lang === "EN" ? "Phone Number / WhatsApp *" : "सम्पर्क नम्बर / ह्वाट्सएप *"}
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  disabled={bookingLoading || !!bookingStatus?.success}
                  aria-required="true"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  value={bookingForm.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="e.g. +977 98XXXXXXXX"
                  className={`w-full bg-black/40 border rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.phone 
                      ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" 
                      : "border-white/10 focus:border-copper-500 focus:ring-copper-500/20"
                  }`}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-rose-400 text-[10px] font-mono mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  {lang === "EN" ? "Choose Preferred Date *" : "परामर्श मिति रोज्नुहोस् *"}
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  disabled={bookingLoading || !!bookingStatus?.success}
                  aria-required="true"
                  aria-invalid={errors.date ? "true" : "false"}
                  aria-describedby={errors.date ? "date-error" : undefined}
                  value={bookingForm.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className={`w-full bg-black/40 border rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.date 
                      ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" 
                      : "border-white/10 focus:border-copper-500 focus:ring-copper-500/20"
                  }`}
                />
                {errors.date && (
                  <p id="date-error" className="text-rose-400 text-[10px] font-mono mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.date}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="timeslot" className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                  {lang === "EN" ? "Choose Time Slot (Nepal Time - NPT) *" : "परामर्श समय रोज्नुहोस् (नेपाल समय - NPT) *"}
                </label>
                <select
                  id="timeslot"
                  required
                  disabled={bookingLoading || !!bookingStatus?.success}
                  aria-required="true"
                  aria-invalid={errors.time ? "true" : "false"}
                  aria-describedby={errors.time ? "timeslot-error" : undefined}
                  value={bookingForm.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className={`w-full bg-black/40 border rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.time 
                      ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" 
                      : "border-white/10 focus:border-copper-500 focus:ring-copper-500/20"
                  }`}
                >
                  <option value="">{lang === "EN" ? "Select a time slot" : "समय छान्नुहोस्"}</option>
                  <option value="11:00 AM NPT">11:00 AM NPT (05:15 AM UTC)</option>
                  <option value="01:30 PM NPT">01:30 PM NPT (07:45 AM UTC)</option>
                  <option value="03:00 PM NPT">03:00 PM NPT (09:15 AM UTC)</option>
                  <option value="05:30 PM NPT">05:30 PM NPT (11:45 AM UTC)</option>
                  <option value="07:30 PM NPT (International Clients)">07:30 PM NPT (01:45 PM UTC)</option>
                </select>
                {errors.time && (
                  <p id="timeslot-error" className="text-rose-400 text-[10px] font-mono mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.time}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="bottleneck" className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 font-bold">
                {lang === "EN" ? "Your Core Growth Bottleneck" : "तपाईंको व्यवसायमा प्रमुख मार्केटिङ समस्या"}
              </label>
              <textarea
                id="bottleneck"
                disabled={bookingLoading || !!bookingStatus?.success}
                value={bookingForm.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder={lang === "EN" 
                  ? "e.g. Lead conversion rate is low, or Facebook ads cost too much for our dental clinic/boutique."
                  : "उदा: फेसबुकमा धेरै खर्च भयो तर ग्राहक आएनन् वा वेबसाइटमा भिजिटर बढाउनु पर्यो।"}
                rows={3}
                className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500/20 transition-all placeholder:text-gray-600 font-light disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {bookingStatus?.success ? (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs flex flex-col items-center justify-center text-center gap-4 shadow-xl shadow-emerald-500/5 border-dashed"
              >
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute w-12 h-12 bg-emerald-500/20 rounded-full"
                  />
                  <motion.div
                    initial={{ scale: 0.3, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-[#020204] shadow-lg shadow-emerald-500/20 relative z-10"
                  >
                    <Check className="w-5 h-5 stroke-[3]" />
                  </motion.div>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-black text-white uppercase tracking-widest text-sm">
                    {lang === "EN" ? "DIAGNOSTIC SLOT RESERVED" : "परामर्श समय सुरक्षित गरियो"}
                  </h4>
                  <p className="text-gray-400 max-w-md mx-auto leading-relaxed font-light">
                    {bookingStatus.message}
                  </p>
                </div>
              </motion.div>
            ) : (
              <button
                type="submit"
                disabled={bookingLoading}
                className="w-full py-3.5 bg-gradient-to-r from-copper-600 to-copper-500 hover:from-copper-500 hover:to-copper-400 text-white font-display font-extrabold text-xs uppercase tracking-widest rounded-lg transition-all active:scale-95 cursor-pointer shadow-lg shadow-copper-500/10 border border-copper-400/20 flex items-center justify-center gap-2"
              >
                {bookingLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>{lang === "EN" ? "LOCKING DIAGNOSTIC SLOT..." : "समय सुरक्षित गरिँदैछ..."}</span>
                  </>
                ) : (
                  lang === "EN" ? "LOCK GROWTH DIAGNOSTIC SLOT" : "निःशुल्क परामर्श समय बुक गर्नुहोस्"
                )}
              </button>
            )}

            {bookingStatus && !bookingStatus.success && (
              <div
                className="p-4 rounded-md text-xs font-mono mt-4 border flex items-start gap-2.5 bg-rose-500/10 border-rose-500/20 text-rose-400"
              >
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {bookingStatus.error}
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
