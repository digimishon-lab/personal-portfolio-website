import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface AboutTestimonialsProps {
  lang: "EN" | "NP";
}

export default function AboutTestimonials({ lang }: AboutTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Saurav Dhakal",
      role: "Founder & CEO",
      company: "Everest Craft Exporters",
      rating: 5,
      feedback: lang === "EN" 
        ? "Mishon completely automated our foreign lead acquisition pipeline. By building our programmatic SEO system, we went from zero organic traffic to ranking on page-1 for ten high-volume commercial keywords in less than four months. His AI strategy works flawlessly." 
        : "मिसनले हाम्रो हस्तकला निर्यात व्यवसायको लागि विदेशी ग्राहक खोज्ने प्रक्रिया पूर्ण रूपमा स्वचालित बनाइदिनुभयो। उहाँले तयार पारिदिनुभएको एसईओ र एआई म्यापिङका कारण हामी केवल चार महिनामै प्रमुख कीवर्डहरूमा गुगलको शीर्ष स्थानमा पुग्यौँ।",
      avatar: "S"
    },
    {
      name: "Dr. Nischal Sharma",
      role: "Lead Orthodontist & Director",
      company: "Dental Care Nepal",
      rating: 5,
      feedback: lang === "EN" 
        ? "We struggled to convert website visits into direct clinic bookings. Mishon designed an automated lead follow-up system that replies to new leads within 60 seconds. Our cost-per-booking dropped by 42% and clinic visits skyrocketed." 
        : "हाम्रो क्लिनिकको नयाँ ग्राहक सुरक्षित गर्न धेरै गाह्रो भइरहेको थियो। मिसनले ६० सेकेन्डमै स्वचालित जवाफ र बुकिङ गर्ने एआई प्रणाली जडान गरिदिनुभयो, जसका कारण हाम्रो बुकिङ लागत ४२% ले घट्यो र क्लिनिकमा बिरामीहरूको संख्या उल्लेख्य बढ्यो।",
      avatar: "N"
    },
    {
      name: "Sabina Gurung",
      role: "Marketing Lead",
      company: "Himalayan Herbs & Organic",
      rating: 5,
      feedback: lang === "EN" 
        ? "Working with Mishon is like having a premium growth engineering department in-house. His Meta Ads setup paired with server-side Conversions API integration solved our tracking issues and gave us our most profitable quarter yet." 
        : "मिसनको टीमसँगको सहकार्य उत्कृष्ट रह्यो। उहाँको सर्भर-साइड कन्भर्जन एपीआई जडान र मेटा विज्ञापनहरूले हाम्रो डाटा ट्र्याकिङको समस्या समाधान मात्र गरेन, हाम्रो इतिहासकै सबैभन्दा धेरै नाफा कमाउन मद्दत गर्यो।",
      avatar: "S"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 px-4">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-copper-500/10 border border-copper-500/20 text-[#d4af37] px-3.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>{lang === "EN" ? "The Validation" : "ग्राहक प्रतिक्रियाहरू"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight leading-none">
            {lang === "EN" ? "Client Testimonials" : "विश्वसनीय साझेदारहरूको विचार"}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#06060a]/80 p-8 sm:p-12 shadow-2xl glass-panel-copper">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-copper-500/10 pointer-events-none" />

            <div className="space-y-6">
              
              {/* Star rating */}
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>

              {/* Text feedback */}
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-light italic">
                "{testimonials[currentIndex].feedback}"
              </p>

              {/* User details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-copper-500/20 border border-copper-500/30 text-copper-400 font-mono font-bold text-sm flex items-center justify-center">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-display font-black uppercase text-white tracking-wide">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mt-0.5">
                    {testimonials[currentIndex].role} · {testimonials[currentIndex].company}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Slider Arrows */}
          <div className="flex justify-end items-center gap-2.5 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-[#06060a] border border-white/5 hover:border-copper-500/30 hover:text-[#d4af37] text-gray-400 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono text-gray-500">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-[#06060a] border border-white/5 hover:border-copper-500/30 hover:text-[#d4af37] text-gray-400 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
