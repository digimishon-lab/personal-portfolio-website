import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart3, Clock, Check, TrendingUp, Cpu, Sparkles, Filter, RefreshCw, Layers } from "lucide-react";

interface LogEntry {
  id: string;
  time: string;
  channel: string;
  event: string;
  score: string;
  status: "deduplicated" | "sent";
}

interface CampaignData {
  title: string;
  spend: string;
  leads: string;
  cpl: string;
  cac: string;
  matchScore: string;
  kpis: {
    impressions: string;
    clicks: string;
    ctr: string;
  };
  funnel: {
    stage: string;
    value: number;
    percent: string;
    color: string;
  }[];
}

export default function LiveAnalytics() {
  const [activeCampaign, setActiveCampaign] = useState<"saas" | "ecom" | "local">("saas");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const campaigns: Record<"saas" | "ecom" | "local", CampaignData> = {
    saas: {
      title: "B2B SaaS Lead Flow (International)",
      spend: "$4,250",
      leads: "186",
      cpl: "$22.84",
      cac: "$145.00",
      matchScore: "98.4%",
      kpis: {
        impressions: "124,500",
        clicks: "3,860",
        ctr: "3.10%",
      },
      funnel: [
        { stage: "Impressions", value: 124500, percent: "100%", color: "bg-blue-500" },
        { stage: "Clicks", value: 3860, percent: "3.1%", color: "bg-indigo-500" },
        { stage: "Qualified Leads", value: 186, percent: "4.8%", color: "bg-[#d4af37]" },
        { stage: "Audit Bookings", value: 42, percent: "22.5%", color: "bg-emerald-500" },
        { stage: "Acquisitions", value: 14, percent: "33.3%", color: "bg-green-400" },
      ],
    },
    ecom: {
      title: "D2C Shopify Scale-Up (APAC Region)",
      spend: "$12,400",
      leads: "1,140",
      cpl: "$10.87",
      cac: "$32.40",
      matchScore: "99.1%",
      kpis: {
        impressions: "680,000",
        clicks: "22,400",
        ctr: "3.29%",
      },
      funnel: [
        { stage: "Impressions", value: 680000, percent: "100%", color: "bg-blue-500" },
        { stage: "View Content", value: 22400, percent: "3.3%", color: "bg-indigo-500" },
        { stage: "Add To Cart", value: 3820, percent: "17.0%", color: "bg-[#d4af37]" },
        { stage: "Initiate Checkout", value: 1140, percent: "29.8%", color: "bg-emerald-500" },
        { stage: "Purchases", value: 382, percent: "33.5%", color: "bg-green-400" },
      ],
    },
    local: {
      title: "Kathmandu Valley Real Estate Lead Engine",
      spend: "₨ 85,000",
      leads: "52",
      cpl: "₨ 1,634",
      cac: "₨ 12,500",
      matchScore: "97.2%",
      kpis: {
        impressions: "42,000",
        clicks: "1,840",
        ctr: "4.38%",
      },
      funnel: [
        { stage: "Impressions", value: 42000, percent: "100%", color: "bg-blue-500" },
        { stage: "Clicks", value: 1840, percent: "4.4%", color: "bg-indigo-500" },
        { stage: "Form Leads", value: 52, percent: "2.8%", color: "bg-[#d4af37]" },
        { stage: "Site Inspections", value: 18, percent: "34.6%", color: "bg-emerald-500" },
        { stage: "Sales Confirmed", value: 4, percent: "22.2%", color: "bg-green-400" },
      ],
    },
  };

  const selectedData = campaigns[activeCampaign];

  // Initialize and simulate logs ticking every 4 seconds
  useEffect(() => {
    const locations = [
      "Lalitpur", "Kathmandu", "Bhaktapur", "Singapore", "San Francisco", 
      "London", "Sydney", "Dubai", "New York", "Pokhara"
    ];
    const events = ["Lead Form Submission", "Add To Cart", "Purchase", "Book Audit Call", "Deduplicated ViewContent"];
    const scores = ["99.2%", "98.5%", "97.8%", "99.8%", "96.5%", "98.9%"];
    const statuses: Array<"deduplicated" | "sent"> = ["deduplicated", "sent"];
    const channels = ["Meta CAPI Server Node", "Google Tag Manager SS", "Klaviyo Smart Flow", "CRM Outbound Sync"];

    const initialLogs: LogEntry[] = Array.from({ length: 5 }).map((_, i) => {
      const date = new Date(Date.now() - i * 180000);
      return {
        id: `TX-${Math.floor(100000 + Math.random() * 900000)}`,
        time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        channel: channels[Math.floor(Math.random() * channels.length)],
        event: events[Math.floor(Math.random() * events.length)] + ` (${locations[Math.floor(Math.random() * locations.length)]})`,
        score: scores[Math.floor(Math.random() * scores.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
      };
    });

    setLogs(initialLogs);

    const interval = setInterval(() => {
      const now = new Date();
      const newLog: LogEntry = {
        id: `TX-${Math.floor(100000 + Math.random() * 900000)}`,
        time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        channel: channels[Math.floor(Math.random() * channels.length)],
        event: events[Math.floor(Math.random() * events.length)] + ` (${locations[Math.floor(Math.random() * locations.length)]})`,
        score: scores[Math.floor(Math.random() * scores.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 5)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="space-y-12">
      {/* Header with quick refresh option */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-green-400 font-extrabold">
              Live Production Stream
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-black uppercase text-white leading-tight">
            Campaign Diagnostics
          </h1>
        </div>

        <button
          onClick={triggerRefresh}
          className="flex items-center gap-2 px-3.5 py-1.5 bg-black/40 border border-white/10 hover:border-blue-400 rounded-md text-xs font-mono text-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-blue-400" : ""}`} />
          <span>Refresh metrics</span>
        </button>
      </header>

      {/* Select active client campaign */}
      <div className="flex flex-wrap gap-2.5 border-b border-white/5 pb-6">
        {(Object.keys(campaigns) as Array<"saas" | "ecom" | "local">).map((key) => {
          const isSelected = activeCampaign === key;
          return (
            <button
              key={key}
              onClick={() => setActiveCampaign(key)}
              className={`px-4 py-2.5 text-xs font-mono uppercase border rounded-md transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-blue-500/10 border-blue-400/40 text-blue-300 font-bold"
                  : "bg-[#0e0e11] border-white/5 text-gray-500 hover:text-white hover:border-white/20"
              }`}
            >
              {campaigns[key].title.split(" (")[0]}
            </button>
          );
        })}
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-[#0e0e11] border border-white/10 p-5 rounded-lg">
          <span className="text-[9px] font-mono uppercase text-gray-500 block">Monthly Spend</span>
          <span className="text-xl sm:text-2xl font-display font-black text-white mt-1.5 block">{selectedData.spend}</span>
        </div>
        <div className="bg-[#0e0e11] border border-white/10 p-5 rounded-lg">
          <span className="text-[9px] font-mono uppercase text-gray-500 block">Leads Acquired</span>
          <span className="text-xl sm:text-2xl font-display font-black text-[#d4af37] mt-1.5 block">{selectedData.leads}</span>
        </div>
        <div className="bg-[#0e0e11] border border-white/10 p-5 rounded-lg">
          <span className="text-[9px] font-mono uppercase text-gray-500 block">Average CPL</span>
          <span className="text-xl sm:text-2xl font-display font-black text-white mt-1.5 block">{selectedData.cpl}</span>
        </div>
        <div className="bg-[#0e0e11] border border-white/10 p-5 rounded-lg">
          <span className="text-[9px] font-mono uppercase text-gray-500 block">Estimated CAC</span>
          <span className="text-xl sm:text-2xl font-display font-black text-white mt-1.5 block">{selectedData.cac}</span>
        </div>
        <div className="bg-gradient-to-br from-blue-950/10 to-transparent border border-blue-400/20 p-5 rounded-lg">
          <span className="text-[9px] font-mono uppercase text-blue-400 font-bold block">Event Match Score</span>
          <span className="text-xl sm:text-2xl font-display font-black text-blue-400 mt-1.5 block">{selectedData.matchScore}</span>
        </div>
      </div>

      {/* Funnel Layout Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Animated conversion funnel */}
        <div className="lg:col-span-7 bg-[#0e0e11] border border-white/10 p-6 sm:p-8 rounded-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-extrabold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#d4af37]" />
              <span>Attribution Funnel</span>
            </h3>
            <span className="text-[10px] text-gray-500 font-mono">Deduplication: active</span>
          </div>

          <div className="space-y-4">
            {selectedData.funnel.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-gray-400">{item.stage}</span>
                  <span className="text-white font-semibold">
                    {item.value.toLocaleString()} <b className="text-gray-500 font-normal">({item.percent})</b>
                  </span>
                </div>
                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.percent }}
                    transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Insights summary details */}
        <div className="lg:col-span-5 bg-[#0e0e11] border border-white/10 p-6 sm:p-8 rounded-xl space-y-5">
          <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-extrabold">
            Ad-Tech Performance Logs
          </h3>

          <div className="space-y-4 text-xs font-light leading-relaxed text-gray-400">
            <div className="pb-3 border-b border-white/5">
              <span className="text-[9px] font-mono text-[#d4af37] uppercase block font-bold">TOPICAL AUTHORITY IMPACT</span>
              <p className="mt-1">
                Topical mapping and structural schema setup generated an estimated <strong className="text-white">+24% lift</strong> in organic search impressions over 45 days.
              </p>
            </div>
            
            <div className="pb-3 border-b border-white/5">
              <span className="text-[9px] font-mono text-blue-400 uppercase block font-bold">META PIXEL IMPROVEMENTS</span>
              <p className="mt-1">
                Applying direct server event deduplication on the backend improved the Event Match Quality score from <b className="text-white">4.2 to 8.9</b>.
              </p>
            </div>

            <div>
              <span className="text-[9px] font-mono text-green-400 uppercase block font-bold">AUTOMATION EFFICIENCY</span>
              <p className="mt-1">
                Deploying autonomous outreach qualification scripts handled over <b className="text-white">840 incoming chats</b>, cutting admin manual response hours down by 70%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time server transactions table */}
      <div className="bg-[#0e0e11] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-white/5 bg-black/20 flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-green-400 font-extrabold flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-green-400 animate-pulse" />
            <span>Real-time Attribution Event Stream</span>
          </h3>
          <span className="text-[10px] text-gray-500 font-mono">Simulated direct CAPI feed</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="bg-black/30 border-b border-white/5 text-[10px] text-gray-500 uppercase tracking-wider">
                <th className="p-4">Tx ID</th>
                <th className="p-4">Timestamp</th>
                <th className="p-4">Ingress Channel</th>
                <th className="p-4">Server Event Payload</th>
                <th className="p-4 text-center">EMQ Score</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {logs.map((log) => (
                  <motion.tr
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="border-b border-white/5 hover:bg-white/[0.01] transition-colors"
                  >
                    <td className="p-4 text-gray-400 font-semibold">{log.id}</td>
                    <td className="p-4 text-gray-500">{log.time}</td>
                    <td className="p-4 text-blue-400 font-semibold text-[11px]">{log.channel}</td>
                    <td className="p-4 text-gray-200">{log.event}</td>
                    <td className="p-4 text-center text-[#d4af37] font-bold">{log.score}</td>
                    <td className="p-4 text-right">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-[9px] font-mono uppercase font-bold border ${
                          log.status === "deduplicated"
                            ? "bg-green-500/10 border-green-500/20 text-green-400"
                            : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                        }`}
                      >
                        {log.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
