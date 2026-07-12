import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ChevronRight, Mail, Check, AlertCircle } from "lucide-react";
import { BlogPost } from "../types";

interface BlogProps {
  posts: BlogPost[];
  setSelectedBlog: (post: BlogPost | null) => void;
  translations: any;
}

export default function Blog({
  posts,
  setSelectedBlog,
  translations: t,
}: BlogProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<{
    success?: boolean;
    error?: string;
    message?: string;
  } | null>(null);

  const categories = ["All", "AI Marketing", "SEO", "Paid Ads", "Growth Marketing", "Automation"];

  const filtered = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.includes("@")) {
      setNewsletterStatus({ error: "Please enter a valid corporate email address." });
      return;
    }

    setNewsletterLoading(true);
    setNewsletterStatus(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (!response.ok) throw new Error("Backend subscription failed.");

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format received from server.");
      }

      const result = await response.json();
      setNewsletterStatus({ success: true, message: result.message });
      setNewsletterEmail("");
    } catch (error: any) {
      console.log("Newsletter backend unavailable, calling direct client-side fallback delivery...", error);
      
      // Fallback delivery to FormSubmit
      try {
        const backupResponse = await fetch("https://formsubmit.co/ajax/digimishon@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: "📧 New Newsletter Subscriber - Digital Mishon (Fallback)",
            "Subscriber Email": newsletterEmail,
            "_honey": ""
          })
        });

        if (backupResponse.ok) {
          setNewsletterStatus({ success: true, message: "Thank you for subscribing to Mishon's AI Growth insights!" });
          setNewsletterEmail("");
        } else {
          throw new Error("Backup newsletter subscription failed.");
        }
      } catch (backupErr: any) {
        setNewsletterStatus({ error: "Failed to connect to subscription system. Please contact us directly at digimishon@gmail.com." });
      }
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="space-y-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-extrabold"
        >
          Intelligence Feed
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-black uppercase text-white leading-tight"
        >
          Technical Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl"
        >
          Highly diagnostic checklists and outlines explaining how we bypass ad cookie filters using Conversions API, construct semantic search graphs, and configure outbound multi-agent pipelines.
        </motion.p>
      </header>

      {/* Filters bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-white/5 bg-black/10 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = category === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 text-[11px] font-mono uppercase rounded transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-500/10 border border-blue-400/40 text-blue-300 font-bold"
                    : "bg-black/40 border border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/50 border border-white/10 rounded-md pl-10 pr-10 py-2 text-xs font-mono text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16 bg-[#0e0e11] border border-white/5 rounded-xl text-gray-500 font-mono text-xs uppercase"
          >
            No technical logs matching the filter were found.
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.25)" }}
                onClick={() => setSelectedBlog(post)}
                className="bg-[#0e0e11] border border-white/5 hover:border-blue-500/20 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-950 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-3 left-3 bg-slate-950/90 border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-blue-400 uppercase font-bold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-mono text-gray-500 block">
                      {post.date} · {post.readTime}
                    </span>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-amber-300 transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <span className="text-[10px] font-mono uppercase text-[#d4af37] group-hover:text-white transition-all flex items-center gap-1.5 font-bold">
                    <span>Access Checklist Outline</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Subscription Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0b1120] border border-[#d4af37]/10 p-8 sm:p-10 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="lg:col-span-7 space-y-3 relative z-10">
          <h3 className="text-lg sm:text-xl font-display font-black text-white uppercase tracking-tight">
            Get Weekly Campaign Breakthroughs
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl font-light leading-relaxed">
            Strictly high-fidelity technical workflows. No marketing hype or basic summaries. Receive exact outlines on bypassing ad trackers and scaling scraping pipelines.
          </p>
        </div>
        <div className="lg:col-span-5 relative z-10">
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2.5">
            <input
              type="email"
              required
              placeholder="Enter professional email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-grow bg-slate-950 border border-white/10 rounded-md px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all placeholder:text-gray-600 font-light"
            />
            <button
              type="submit"
              disabled={newsletterLoading}
              className="px-5 py-2.5 bg-[#d4af37] text-slate-950 font-mono text-xs uppercase tracking-wider font-extrabold rounded-md hover:bg-amber-300 transition-colors cursor-pointer"
            >
              {newsletterLoading ? "Joining..." : "Subscribe"}
            </button>
          </form>
          {newsletterStatus && (
            <div
              className={`mt-2.5 text-[10px] font-mono flex items-center gap-1.5 ${
                newsletterStatus.success ? "text-green-400" : "text-rose-400"
              }`}
            >
              {newsletterStatus.success ? (
                <Check className="w-3.5 h-3.5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              )}
              <span>
                {newsletterStatus.success ? newsletterStatus.message : newsletterStatus.error}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
