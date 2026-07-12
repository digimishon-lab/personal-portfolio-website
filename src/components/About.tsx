import React, { useEffect } from "react";
import AboutHero from "./about/AboutHero";
import JourneySection from "./about/JourneySection";
import Biography from "./about/Biography";
import Timeline from "./about/Timeline";
import Skills from "./about/Skills";
import AITools from "./about/AITools";
import AboutServices from "./about/AboutServices";
import Values from "./about/Values";
import FunFacts from "./about/FunFacts";
import Statistics from "./about/Statistics";
import AboutTestimonials from "./about/AboutTestimonials";
import WorkProcess from "./about/WorkProcess";
import Certifications from "./about/Certifications";
import AboutFAQ from "./about/AboutFAQ";
import AboutCTA from "./about/AboutCTA";

interface AboutProps {
  translations: any;
  lang: "EN" | "NP";
}

export default function About({ translations: t, lang }: AboutProps) {
  // Dynamic SEO Head Optimization
  useEffect(() => {
    const originalTitle = document.title;
    
    // Set dynamic SEO Title
    if (lang === "EN") {
      document.title = "About Mishon Dahal | Premium AI Marketing Strategist & Consultant";
    } else {
      document.title = "हाम्रो बारेमा | मिशन दाहाल - एआई मार्केटिङ रणनीतिकार";
    }

    // Helper to set meta content
    const setMetaTag = (selector: string, attrName: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const parts = selector.replace(/[\[\]]/g, "").split("=");
        if (parts.length === 2) {
          element.setAttribute(parts[0], parts[1].replace(/['"]/g, ""));
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attrName, value);
    };

    // Helper to set canonical link
    // Update Canonicals
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://mishondahal.com.np/#about");

    // Dynamic SEO Meta Description, Open Graph, & Twitter tags
    const descText = lang === "EN"
      ? "About Mishon Dahal — Independent AI Marketing Strategist helping businesses grow faster through high-converting funnels, programmatic SEO, and client-acquisition automation."
      : "मिशन दाहालको बारेमा — एआई-सञ्चालित डिजिटल मार्केटिङ, स्वचालित वर्कफ्लो, टपिकल एसईओ, र उच्च प्रतिफल दिने विज्ञापन अभियान मार्फत व्यवसायहरूलाई बढाउने ग्रोथ इन्जिनियर।";

    setMetaTag("meta[name='description']", "content", descText);
    setMetaTag("meta[property='og:title']", "content", "About Mishon Dahal | AI Marketing Strategist");
    setMetaTag("meta[property='og:description']", "content", descText);
    setMetaTag("meta[property='og:url']", "content", "https://mishondahal.com.np/#about");
    setMetaTag("meta[property='og:type']", "content", "profile");
    setMetaTag("meta[name='twitter:card']", "content", "summary_large_image");
    setMetaTag("meta[name='twitter:title']", "content", "About Mishon Dahal | AI Marketing Strategist");
    setMetaTag("meta[name='twitter:description']", "content", descText);

    return () => {
      // Revert title on clean up
      document.title = originalTitle;
    };
  }, [lang]);

  // Structured Data (Schema.org Person Markup)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://mishondahal.com.np/#person",
    "name": "Mishon Dahal",
    "url": "https://mishondahal.com.np",
    "image": "https://mishondahal.com.np/og-image.jpg",
    "jobTitle": "AI Marketing Strategist & Digital Consultant",
    "description": "Mishon Dahal is a forward-thinking AI Marketer and Digital Marketing Strategist based in Bhaktapur, Nepal, who designs automated client acquisition funnels.",
    "worksFor": {
      "@type": "Organization",
      "name": "Digital Mishon",
      "url": "https://mishondahal.com.np"
    },
    "sameAs": [
      "https://mishondahal.com.np",
      "https://www.facebook.com/profile.php?id=61572034164410",
      "https://www.instagram.com/digital.mishon?igsh=ZnQ5dnl2M29hcHVx&utm_source=qr",
      "https://www.linkedin.com/in/mishon-dahal-687a18421/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhaktapur",
      "addressRegion": "Bagmati",
      "addressCountry": "Nepal"
    },
    "knowsAbout": [
      "AI Marketing",
      "Search Engine Optimization",
      "Programmatic SEO",
      "Meta Ads Management",
      "Google Ads (PMax)",
      "Marketing Automation",
      "Server-side Attribution",
      "Conversational AI Bots"
    ]
  };

  return (
    <div className="space-y-4 relative topo-bg">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />

      {/* 1. AboutHero Section */}
      <AboutHero lang={lang} />

      {/* 2. Journey Narrative Section */}
      <JourneySection lang={lang} />

      {/* 3. Biography Specialties Card Grid */}
      <Biography lang={lang} />

      {/* 4. Timeline Milestones Tree */}
      <Timeline lang={lang} />

      {/* 5. Skills Progress Metrics & Circular Indicators */}
      <Skills lang={lang} />

      {/* 6. AI Tools & Ecosystem Grid */}
      <AITools lang={lang} />

      {/* 7. Dedicated Services Block */}
      <AboutServices lang={lang} />

      {/* 8. Core Values Card Grid */}
      <Values lang={lang} />

      {/* 9. Interactive Fun Facts Box */}
      <FunFacts lang={lang} />

      {/* 10. Statistics Grid */}
      <Statistics lang={lang} />

      {/* 11. Testimonials Slider Carousel */}
      <AboutTestimonials lang={lang} />

      {/* 12. Work Process Stepper */}
      <WorkProcess lang={lang} />

      {/* 13. Professional Certifications Grid */}
      <Certifications lang={lang} />

      {/* 14. Detailed 8 FAQ Accordion */}
      <AboutFAQ lang={lang} />

      {/* 15. Closing Large Call To Action Block */}
      <AboutCTA lang={lang} />
    </div>
  );
}
