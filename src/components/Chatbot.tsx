import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send, User, Sparkles, MessageCircle } from "lucide-react";

interface ChatbotProps {
  translations: any;
  lang: "EN" | "NP";
}

export default function Chatbot({ translations: t, lang }: ChatbotProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>([]);
  const [userInput, setUserInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message based on language
    const welcome = lang === "EN" 
      ? "Greetings! I am Digital Mishon's AI Growth Assistant. How can I help you scale your digital customer acquisition today? (Ask about AI Outbound, Meta CAPI, or how to book a consultation)"
      : "नमस्ते! म डिजिटल मिशनको एआई सहायक हुँ। तपाईको व्यवसायलाई कसरी बढाउन मद्दत गर्न सक्छु? (एआई आउटबाउन्ड, मेटा सीएपीआई, वा परामर्श बुकिङको बारेमा सोध्नुहोस्)";
    
    setChatMessages([{ sender: "bot", text: welcome }]);
  }, [lang]);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, chatLoading]);

  // Client-side rule-based fallback responses in case backend fails
  const getLocalResponse = (input: string): string => {
    const text = input.toLowerCase();
    
    if (text.includes("book") || text.includes("schedule") || text.includes("consult") || text.includes("audit") || text.includes("कल")) {
      return "To book a 1:1 Growth Audit directly with Mishon Dahal, click on the 'Book Consultation' tab in the navigation menu. Select your preferred date, pick an open time slot, list your main business blockers, and we'll secure your appointment. We'll send a custom Google Meet link to your inbox within 12 hours!";
    }
    if (text.includes("capi") || text.includes("conversion") || text.includes("facebook") || text.includes("meta") || text.includes("पिक्सेल")) {
      return "Meta Conversions API (CAPI) connects your website's server directly to Meta's ad tracking centers. This bypasses browser ad-blockers, cookies, and iOS 14+ tracking limitations. Mishon configures server-side deduplication that achieves 98%+ match accuracy scores, lowers your Cost Per Acquisition (CPA), and helps Meta's bidding algorithms find ready buyers efficiently.";
    }
    if (text.includes("automation") || text.includes("make") || text.includes("outbound") || text.includes("agent") || text.includes("स्वचालित")) {
      return "Our outbound AI pipelines crawl live indexes (like Google Maps or company websites) to find hyper-targeted leads. We then use Gemini AI model nodes inside Make.com loops to analyze their actual business, draft highly personalized, professional pitch scripts, and deliver them through automated sender nodes (like Woodpecker or Instantly) completely hands-free.";
    }
    if (text.includes("seo") || text.includes("ranking") || text.includes("search") || text.includes("गुगल")) {
      return "Instead of keyword stuffing, Mishon builds semantic topical graphs. This maps all relevant high-intent concepts your buyers search for, structures search-friendly schemas, and writes highly authoritative, clear technical pages that establish absolute domain authority on search engines.";
    }
    if (text.includes("price") || text.includes("cost") || text.includes("budget") || text.includes("शुल्क")) {
      return "Our engagement models are customized depending on complexity. Outbound AI pipelines and Meta CAPI integration scopes usually start at $1,500. We also offer monthly performance consulting models for ongoing scaling. Feel free to submit a blueprint inquiry under the 'Contact' tab so we can quote a precise scope for you!";
    }
    if (text.includes("who") || text.includes("mishon") || text.includes("dahal") || text.includes("के हो")) {
      return "Mishon Dahal is an expert AI Marketing Consultant based in Bhaktapur, Nepal. He integrates server-side ad configurations, semantic topical SEO, and custom outbound AI automations (Make.com/Zapier/Gemini API) to help startups and agencies secure customers and cut manual admin overheads.";
    }
    if (text.includes("hello") || text.includes("hi") || text.includes("hey") || text.includes("नमस्ते")) {
      return "Hello there! Welcome to Digital Mishon's workspace. What business performance or customer acquisition systems can we analyze for you today?";
    }

    return "That's a great question. Mishon specializes in Meta Conversions API setups, technical SEO graphs, outbound lead scraping, and Make.com CRM automations. To discuss this specific scope, I highly recommend scheduling a 30-minute diagnostic call under our 'Book Consultation' tab, or leaving your contact in our 'Contact' portal!";
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || userInput;
    if (!text.trim()) return;

    // Add user message
    setChatMessages((prev) => [...prev, { sender: "user", text }]);
    if (!textToSend) setUserInput("");
    setChatLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) throw new Error("API Route unreachable.");
      
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format received from AI server.");
      }

      const result = await response.json();
      setChatMessages((prev) => [...prev, { sender: "bot", text: result.response }]);
    } catch (err) {
      console.log("Chat API failed, generating rule-based expert answer locally...", err);
      // Fallback response delay for natural human feel
      setTimeout(() => {
        const fallbackText = getLocalResponse(text);
        setChatMessages((prev) => [...prev, { sender: "bot", text: fallbackText }]);
        setChatLoading(false);
      }, 700);
      return;
    }

    setChatLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-mono">
      {/* Floating Button Bubble */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 border border-blue-400/20 relative group cursor-pointer animate-float"
          title="Consult AI Growth Agent"
        >
          <Bot className="w-6 h-6 transition-transform group-hover:scale-110" />
          <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#d4af37]"></span>
          </span>
        </button>
      )}

      {/* Slide-Up Chat Drawer panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="w-[320px] sm:w-[380px] h-[480px] bg-[#0e0e11] border border-white/15 rounded-xl shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-950 via-slate-950 to-blue-950 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-[#d4af37]/30 bg-black/40 p-1.5 text-amber-400">
                  <Bot className="w-full h-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-white leading-none">MISHON'S AI WIDGET</h4>
                  <span className="text-[8px] font-mono text-green-400 flex items-center gap-1 mt-0.5 uppercase tracking-wider font-extrabold">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span>System Live</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1 hover:bg-white/5 rounded text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message streams */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin bg-black/30">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`p-1.5 rounded-full flex-shrink-0 ${msg.sender === "user" ? "bg-blue-600" : "bg-white/5 border border-white/10"}`}>
                      {msg.sender === "user" ? <User className="w-3 h-3 text-white" /> : <Bot className="w-3 h-3 text-[#d4af37]" />}
                    </div>
                    <div
                      className={`p-3 rounded text-xs leading-relaxed whitespace-pre-wrap ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-white/5 border border-white/5 text-gray-200 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2 text-gray-500 font-mono text-[9px]">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    <span>AI thinking...</span>
                  </div>
                </div>
              )}
              <div ref={chatBottomRef}></div>
            </div>

            {/* Smart Suggestions Chips */}
            <div className="p-2 border-t border-white/5 bg-black/40 flex flex-wrap gap-1 justify-center max-h-24 overflow-y-auto">
              <button
                onClick={() => handleSendMessage("Tell me about your AI Marketing Automation services.")}
                className="px-2 py-1 text-[9px] font-mono bg-white/5 border border-white/10 rounded hover:border-[#d4af37] text-gray-400 hover:text-white cursor-pointer"
              >
                AI Outreach?
              </button>
              <button
                onClick={() => handleSendMessage("How does Meta Conversions API lower CPA?")}
                className="px-2 py-1 text-[9px] font-mono bg-white/5 border border-white/10 rounded hover:border-[#d4af37] text-gray-400 hover:text-white cursor-pointer"
              >
                Meta CAPI Setup?
              </button>
              <button
                onClick={() => handleSendMessage("How can I book a free acquisition audit?")}
                className="px-2 py-1 text-[9px] font-mono bg-white/5 border border-white/10 rounded hover:border-[#d4af37] text-gray-400 hover:text-white cursor-pointer"
              >
                Book Audit Call?
              </button>
            </div>

            {/* Chat Input controls */}
            <div className="p-2.5 bg-black border-t border-white/10 flex gap-2">
              <input
                type="text"
                placeholder="Ask about Meta CAPI or bookings..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-grow bg-[#0e0e11] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
              />
              <button
                onClick={() => handleSendMessage()}
                className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
