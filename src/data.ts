import { Project, BlogPost, Service, Testimonial, FAQItem } from './types';

export const PERSONAL_INFO = {
  name: "Mishon Dahal",
  title: "AI Marketer & Digital Growth Strategist",
  tagline: "Marketing, Reimagined by AI.",
  bio: "Mishon Dahal is a forward-thinking AI Marketer and Digital Marketing Strategist based in Bhaktapur, Nepal. He specializes in bridging advanced artificial intelligence models with performance marketing, complex SEO, automation pipelines, and high-converting funnel architectures. Mishon designs and deploys data-driven, client-acquisition engines that help direct-to-consumer (D2C) brands, SaaS companies, and international agencies automate overhead, multiply conversion rates, and achieve exceptional ROI. By combining engineering precision with creative messaging, he is transforming how modern businesses attract, convert, and retain clients.",
  email: "digimishon@gmail.com",
  phone: "9762673835",
  whatsapp: "+9779762673835",
  location: "Bhaktapur, Nepal",
  socials: {
    portfolio: "https://mishondahal.com.np",
    facebook: "https://www.facebook.com/profile.php?id=61572034164410",
    instagram: "https://www.instagram.com/digital.mishon?igsh=ZnQ5dnl2M29hcHVx&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/mishon-dahal-687a18421/",
    email: "mailto:digimishon@gmail.com",
    phone: "tel:9762673835"
  }
};

export const STATISTICS = [
  { value: "320%", label: "Average Client ROI Increase", suffix: "" },
  { value: "45", label: "AI Automation Workflows Deployed", suffix: "+" },
  { value: "$1.4M", label: "Paid Ads Budget Optimized", suffix: "" },
  { value: "10M", label: "Organic Search Impressions Generated", suffix: "+" }
];

export const SERVICES: Service[] = [
  {
    id: "ai-automation",
    title: "AI Marketing Automation (Smart Lead Follow-ups)",
    icon: "Cpu",
    badge: "Most Demanded",
    description: "Automate manual tasks and follow up with leads 24/7. We set up smart AI assistants and automation tools that instantly chat with leads, answer their questions, and book them into your calendar.",
    benefits: [
      "Save up to 70% of manual follow-up time",
      "Instant 24/7 client booking and qualification",
      "Increase sales by never letting a lead go cold"
    ],
    deliverables: [
      "Automatic lead follow-up setups",
      "AI Chatbots trained to speak like your brand",
      "Smart email and WhatsApp notifications",
      "Custom software and API connections"
    ]
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram Advertising)",
    icon: "Facebook",
    description: "Profitable Facebook and Instagram ad campaigns configured to find active buyers. We use high-performing visual hook testing, clear copywriting, and advanced server-side tracking (Meta CAPI) to make sure you get more sales for every dollar spent.",
    benefits: [
      "Lower your Cost-Per-Acquisition by 35% to 50%",
      "Profitable creative ad templates that prevent ad fatigue",
      "Advanced targeting to reach people ready to purchase"
    ],
    deliverables: [
      "Facebook Pixel and Conversions API (CAPI) configuration",
      "Profitable copy variations and ad hooks testing",
      "Weekly performance reports",
      "Complete custom campaign management"
    ]
  },
  {
    id: "google-ads",
    title: "Google Ads (Search Ads & Performance Max)",
    icon: "Search",
    description: "Get in front of customers at the exact moment they are searching for your service. We design high-intent Google Search, Google Shopping, and YouTube campaigns to maximize your profit.",
    benefits: [
      "Show up at the absolute top of Google search results",
      "Avoid wasting budget on negative keywords and bad searches",
      "Direct attribution tracking to see exactly where sales come from"
    ],
    deliverables: [
      "Comprehensive keyword research and bidding strategy",
      "Google Tag Manager (GTM) conversion tracking",
      "High-converting search ad copywriting",
      "Competitor target analysis and optimization plans"
    ]
  },
  {
    id: "seo",
    title: "Content Marketing & SEO (Google Ranking)",
    icon: "TrendingUp",
    badge: "Long-term Value",
    description: "Drive compounding organic traffic to your website. We design a solid content marketing strategy to rank your business for hundreds of keywords on Google, securing leads without any paid advertising.",
    benefits: [
      "Acquire long-term free traffic from Google search",
      "Show up in AI Overviews and Google featured answers",
      "Establish deep authority in your industry"
    ],
    deliverables: [
      "Complete keyword map and content planner",
      "Technical website speed audits and fixes",
      "High-fidelity SEO article writing and optimization",
      "Backlink strategy and internal links structuring"
    ]
  },
  {
    id: "marketing-funnels",
    title: "Increase Your Sales with High-Converting Funnels",
    icon: "Layers",
    description: "Turn casual website visitors into paying customers. We build super-fast, clean, and modern custom landing pages and sales funnels designed specifically to maximize conversion rates.",
    benefits: [
      "Double your website lead sign-up rates",
      "Reduce bounce rates with ultra-fast page loads",
      "Seamlessly connect landing pages with your email/SMS system"
    ],
    deliverables: [
      "Custom UI design, wireframing, and persuasive copywriting",
      "A/B split testing of headlines and CTA buttons",
      "Mobile-optimized high-speed landing page development",
      "Behavioral tracking and conversion funnel maps"
    ]
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Customer Newsletters",
    icon: "Mail",
    description: "Nurture leads and increase repeat purchases. We configure personalized automated email sequences and beautiful newsletters that keep your brand top-of-mind and drive recurring revenue.",
    benefits: [
      "Generate 30%+ of your revenue from automated emails",
      "Maintain high email delivery scores (avoiding spam folders)",
      "Segment customers to send the right message at the right time"
    ],
    deliverables: [
      "Automated Welcome flows and Lead Nurture sequences",
      "Professional newsletter designs and campaign schedules",
      "Abandoned shopping cart recovery flows",
      "Email list clean-up and delivery optimization"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Autonomous AI Lead Generation Funnel",
    category: "Automation",
    description: "Developed a custom AI-powered qualification funnel that scores inbound enterprise IT leads, drafts hyper-personalized responses, and instantly routes high-value opportunities to local sales teams.",
    challenge: "Our client, Apex Tech Nepal, struggled with manually qualifying inbound IT system requests, leading to slow response times and high-value contract drop-offs.",
    strategy: "Instead of standard contact form merges, we engineered an automated workflow that uses Gemini API models to analyze the prospect's company website, assess system requirements, and compose a personalized introductory solution pitch.",
    execution: "Constructed the system with Make.com, Node.js script blocks, Clay.run for enrichment, and Woodpecker.co. The AI system scores lead quality and prepares custom email drafts directly inside the CRM for the sales team.",
    tools: ["Make.com", "Node.js", "Gemini API", "Clay.run", "Woodpecker.co"],
    results: "Delivered a completely hands-off outbound qualification machine that operates 24/7, securing high-value contracts without manual overhead.",
    metrics: [
      { label: "Outbound Reply Rate", value: "8.4%", change: "Up from 1.2% baseline" },
      { label: "Qualified Leads", value: "4.0×", change: "4-fold volume growth" },
      { label: "Email Deliverability", value: "99.0%", change: "Flawless sender score" }
    ],
    beforeAfter: {
      before: "Templates like: 'Hi {{firstName}}, I noticed you work at {{company}}. We offer SaaS development services...'",
      after: "Hyper-personalized: 'Hi Sarah, loved your recent article on optimizing cold starts in Docker. I noticed your team in Denver is expanding node scaling. We built a middleware that handles...'"
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    slug: "autonomous-cold-outreach"
  },
  {
    id: "2",
    title: "Scaling E-Commerce with Meta Performance Ads",
    category: "Paid Ads",
    description: "Scaled a premium retail e-commerce brand's monthly spend while driving down acquisition costs (CAC) using broad interest targeting and server-side tracking.",
    challenge: "Our client, UrbanGlow Boutique (Kathmandu), was stuck at limited monthly ad spend. Scaling further resulted in immediate ad fatigue, soaring acquisition costs, and poor tracking.",
    strategy: "Implemented a dynamic creative testing framework. We used Gemini API to script compelling visual hooks based on customer feedback and configured Meta Conversions API (CAPI) to recover browser-side data losses.",
    execution: "Configured broad interest targeting coupled with an aggressive dynamic creative framework. AI monitored sentiment to immediately flag high-performing hooks, which were then scaled using Campaign Budget Optimization (CBO).",
    tools: ["Meta Ads Manager", "Shopify", "Klaviyo", "Gemini API", "Triple Whale"],
    results: "Successfully scaled ad spend in Kathmandu while maintaining and actually improving the overall return on ad spend (ROAS) and doubling delivery orders.",
    metrics: [
      { label: "Delivery Sales", value: "2.0×", change: "Doubled order volume" },
      { label: "Return on Ad Spend", value: "4.15×", change: "Up from 2.1× baseline" },
      { label: "Cost Per Acquisition", value: "$22.50", change: "38% overhead reduction" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    slug: "scaling-d2c-meta-ads"
  },
  {
    id: "3",
    title: "Topical Authority & SEO Campaign",
    category: "SEO",
    description: "Architected a custom semantic content map consisting of 120 interconnected, highly detailed topical cluster articles to rank local handicrafts globally on Google Search.",
    challenge: "Our client, Himalayan D2C Export, struggled with organic search visibility and paid conversion costs, competing against global luxury publications.",
    strategy: "Instead of fighting for high-difficulty generic terms, we targeted search clusters with massive commercial intent. We mapped semantic topical clusters using Gemini API and structured schema data.",
    execution: "Built a custom semantic engine that produces comprehensive content briefs based on search intent and LSI keywords. Deployed articles in high-density semantic structures with optimized internal link structures.",
    tools: ["Ahrefs", "SurferSEO", "Shopify", "Gemini API", "Screaming Frog"],
    results: "Achieved page 1 ranking for over 85 strategic commercial keywords, generating steady organic inquiries and exponential global export sales.",
    metrics: [
      { label: "Organic Visits", value: "85K/mo", change: "1,200% traffic surge" },
      { label: "Search Value Saved", value: "$42,000", change: "Equivalent PPC savings" },
      { label: "Topical Keywords", value: "1,400+", change: "Ranked in top 3 positions" }
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    slug: "topical-authority-seo"
  },
  {
    id: "4",
    title: "High-Intent Google Ads & Funnel Optimization",
    category: "Websites",
    description: "Rebuilt landing page UX and optimized high-intent Google Search campaigns for patient lead generation, resulting in frictionless booking and clear offline conversion mapping.",
    challenge: "Our client, DentalCare Nepal (Lalitpur), had a 65% bounce rate on their old appointment pages, and qualified consultation leads were dropping out because of slow speeds.",
    strategy: "We redesigned the clinic's landing page UX focusing on speed and visual trust. Built a micro-funnel with integrated automated booking and tracked offline conversion completions via Google Ads.",
    execution: "Utilized Vite React and Tailwind CSS to guarantee sub-second load times. Integrated a custom responsive scheduling calendar and configured Google Tag Manager conversion events.",
    tools: ["Google Ads", "Google Tag Manager", "Vite", "React", "Tailwind CSS"],
    results: "Vastly enhanced appointment bookings and lead qualification metrics for the dental clinic.",
    metrics: [
      { label: "Patient Inquiries", value: "+150%", change: "Total clinic growth" },
      { label: "Page Bounce Rate", value: "22.0%", change: "66% reduction in bounces" },
      { label: "Appointment Show-up", value: "92.0%", change: "Highly qualified intent" }
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    slug: "saas-funnel-overhaul"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "How to Build an AI Content Pipeline That Avoids Google's Spam Filter",
    category: "AI Marketing",
    excerpt: "Discover the exact methodology to scale your content marketing using LLMs without triggering programmatic spam detection. Learn why pure outputs fail and how to inject human expertise.",
    content: `Historically, scaling content meant hiring massive writing agencies or accepting a slow drip of production. With the explosion of Generative AI, businesses rushed to publish thousands of raw, AI-generated blog posts. The result? Google's March 2024 Core Update decimated websites that relied on low-quality, programmatic AI slop.

So how do you scale with AI safely?

### 1. The 'AI + Human-in-the-Loop' (HITL) Framework
The main error in AI content production is using a single prompt to generate an entire article. These articles lack original opinions, real data, and unique insights. They feel repetitive and trigger semantic patterns easily detectable by algorithms.
Our optimized pipeline follows three separate stages:
* **The Outline Stage (AI + Human):** We compile Ahrefs keyword maps, Google's 'People Also Ask', and structural headers. A human reviews and organizes these to ensure logical progression.
* **The Segment Generation (AI):** Instead of writing the post in one go, we prompt the AI to write individual sections, passing it highly specific references, proprietary data, and style guidelines for each piece.
* **The Subject Matter Edit (Human):** A professional editor refines the text, injects real case-study metrics, structures tables, and adds expert quotes.

### 2. Injecting E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
Google's ranking system prioritizes content showing real-world experience. AI cannot buy a product, run a test, or feel an emotion. You must manually feed the AI:
* Internal screenshots and test logs.
* Custom, proprietary calculations.
* Anecdotes about actual client interactions.

### 3. Technical Semantic Enrichment
Use structured JSON-LD schemas. This tells search crawlers exactly what the page represents, who wrote it, and what entities are linked. This guarantees your site is ready for AI Overviews (SGE) indexing.`,
    readTime: "5 min read",
    date: "June 28, 2026",
    author: "Mishon Dahal",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    slug: "ai-content-pipeline-seo"
  },
  {
    id: "blog-2",
    title: "Meta Ads CAPI vs. Pixel: Securing 100% Attribution Accuracy in 2026",
    category: "Paid Ads",
    excerpt: "With cookie depreciation and ad blockers blocking browser-side events, setting up Meta Conversions API (CAPI) is no longer optional. Here is a step-by-step optimization checklist.",
    content: `If you are only relying on the traditional browser-side Meta Pixel, you are likely losing 30% to 40% of your conversion data. Ad blockers, VPNs, Safari's Intelligent Tracking Prevention (ITP), and network dropouts prevent browser pixels from firing.

This direct data loss triggers two critical problems:
1. **Ad sets under-report sales**, causing you to prematurely turn off winning campaigns.
2. **Meta's bidding algorithms lack sufficient feedback loop**, leading to higher acquisition costs.

### What is Meta Conversions API (CAPI)?
CAPI is a server-to-server connection. Instead of your client's web browser sending purchase events directly to Meta, your backend server records the purchase and securely transmits the data to Meta via an API call.

### The Hybrid Setup Strategy
For maximum performance, we recommend running a deduplicated, hybrid structure:
* **Browser Pixel:** Still useful for tracking fast, client-side actions (scrolling, page views) and capturing browser identifiers.
* **Server CAPI:** Tracks critical conversion events (adds to cart, checkouts, lead forms, purchases).
* **Event Deduplication:** Because both channels might report the same 'Purchase' event, you must send an identical \`event_id\` from both sources. Meta's system automatically resolves duplicates, maintaining flawless metrics.

### Key Customer Information Parameters
To achieve a high Event Quality Match score, encrypt and send as many user parameters as possible:
* SHA-256 Hashed Email Address (\`em\`)
* Hashed Phone Number (\`ph\`)
* IP Address & User Agent (\`client_ip_address\`, \`client_user_agent\`)
* Browser Cookie IDs (\`_fbp\`, \`_fbc\`)`,
    readTime: "6 min read",
    date: "June 20, 2026",
    author: "Mishon Dahal",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    slug: "meta-capi-attribution"
  },
  {
    id: "blog-3",
    title: "AI Agent Outbound: The New Paradigm of B2B Lead Acquisition",
    category: "Automation",
    excerpt: "Traditional generic cold email is dead. Discover how autonomously running multi-agent systems conduct custom client research and draft ultra-personalized offers that win meetings.",
    content: `B2B Decision Makers receive dozens of cold emails daily. Standard templates like 'Hey, we are an agency offering website development...' are immediately deleted. 

The secret to B2B prospecting isn't volume; it is hyper-relevance. But doing manual research on 500 companies takes weeks. AI agents solve this.

### The Anatomy of an AI Prospecting Agent
We build outbound systems composed of three collaborative AI agents:
1. **The Researcher Agent:** Takes a list of domains, visits their company websites, scrapes their career pages (to see what technologies they are hiring for), and reads their recent press releases.
2. **The Analyst Agent:** Cross-references company profiles against common pain points (e.g., slow page load speeds, lack of conversion pixels, outdated content) and selects the single most valuable asset we can offer.
3. **The Copywriter Agent:** Merges the analysis with natural, conversational copywriting guidelines. It drafts an email that looks like it took 45 minutes of individual research to write.

### Operational Domain Architecture
To protect your main corporate domain from spam flags:
* Register 3 to 5 'lookalike' domains (e.g., \`get-brand.com\`, \`brand-growth.com\`).
* Setup pristine SPF, DKIM, and DMARC records.
* Warm up domains for 21 days before sending any outbound.
* Limit sending volume to 30 emails per inbox per day.`,
    readTime: "7 min read",
    date: "May 15, 2026",
    author: "Mishon Dahal",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    slug: "ai-agent-outbound-lead-gen"
  },
  {
    id: "blog-4",
    title: "Unlocking Compounds: The Core Principles of Growth Funnel Auditing",
    category: "Growth Marketing",
    excerpt: "A 10% improvement in five separate points of your conversion funnel does not add up to 50%—it compounds. Learn how to locate and repair leaking points in your digital pipelines.",
    content: `Many marketers obsess over getting more traffic. They spend money on ads or publish blog posts, but drive traffic to a leaking bucket. 

Growth marketing isn't about finding a single magic channel; it is about systematic, compounding optimization of your funnel.

### The Compounding Funnel Formula
Imagine your current metrics are:
* Ads CTR: 1%
* Landing Page Conversion: 5%
* Email Nurture Show-Up: 10%
* Sales Call Close: 20%

If you improve each metric by just **15%** through rigorous A/B testing and copywriting improvements:
* Ads CTR: 1.15% (+15%)
* Landing Page Conversion: 5.75% (+15%)
* Email Nurture Show-Up: 11.5% (+15%)
* Sales Call Close: 23.0% (+15%)

Your overall client acquisition capacity does not grow by 15%—it increases by **75%** due to compounding multipliers!

### Top 3 Conversion Leaks to Fix First
1. **Mobile Load Speed:** Sub-3 second load speeds are mandatory. Use modern React SPA architectures, compress images aggressively, and defer non-critical Javascript.
2. **Above-the-Fold Messaging clarity:** Within 4 seconds, a user must understand: What do you offer? How does it benefit them? What is the next step?
3. **Frictionless Lead Forms:** Remove all unnecessary inputs. For initial lead capture, only ask for Name and Email. Collect deeper company insights on the post-submission confirmation step.`,
    readTime: "4 min read",
    date: "May 02, 2026",
    author: "Mishon Dahal",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
    slug: "growth-funnel-audit"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Arjun Shrestha",
    role: "Founder & CEO",
    company: "Apex Tech Nepal",
    feedback: "Mishon completely overhauled our digital marketing approach. Within 3 months of deploying his AI automated lead qualifying funnel, our local sales team received 4x more inbound requests without us having to increase our monthly budget. His deep understanding of AI automation and local search intent is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    name: "Eleanor Vance",
    role: "Chief Marketing Officer",
    company: "ScribeSaaS Inc. (US)",
    feedback: "Working with Mishon was an absolute game changer. He restructured our technical meta-attribution using server-side API configurations and built high-converting programmatic landing pages. Our acquisition costs dropped by 42% in a matter of weeks, and our analytics finally show accurate data.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    name: "Dhiraj Bajracharya",
    role: "Managing Director",
    company: "Himalayan D2C Export",
    feedback: "We exported local handicrafts globally but struggled with organic search and paid conversions. Mishon implemented a powerful SEO topical cluster model combined with high-intent Search campaigns. Our organic sales grew exponentially. Highly professional, responsive, and data-driven.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t4",
    name: "Sabin Nepal",
    role: "Founder & CEO",
    company: "UrbanGlow Boutique (Kathmandu)",
    feedback: "Mishon's Meta Ads strategy paired with server-to-server Conversions API literally doubled our Kathmandu delivery orders in just 45 days. We finally have 100% accurate attribution tracking and profitable campaigns that we can scale confidently.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t5",
    name: "Dr. Aarav Koirala",
    role: "Co-Founder",
    company: "DentalCare Nepal (Lalitpur)",
    feedback: "Our patient consultation bookings grew by over 150% after Mishon optimized our Google Ads and rebuilt our custom landing pages. He communicates with absolute clarity and understands local search behavior deeply.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t6",
    name: "Sophia Patel",
    role: "VP of Growth",
    company: "SaasFlow Hub",
    feedback: "The AI-driven Content Marketing and topical SEO map that Mishon set up ranked our fintech tool for multiple highly competitive enterprise terms in under 60 days. Our organic inbound leads have been compounding ever since.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What exactly is AI Marketing and how is it different from traditional marketing?",
    answer: "Traditional digital marketing relies heavily on manual work (manually writing 100 blog posts, manually qualifying every lead, setting up standard templates). AI Marketing uses advanced machine learning (like LLMs and custom agent loops) to automate the cognitive legwork. This includes automated deep market research, hyper-personalized email prospecting at scale, automated customer attribution tracking, and dynamic programmatic SEO. It acts as an ultra-fast multiplier to human strategy."
  },
  {
    id: "faq-2",
    question: "Do we need to replace our entire marketing team with AI?",
    answer: "Absolutely not. AI is a superpower, not a replacement. It frees your creative marketers from tedious copy-pasting, data cleansing, and manual outreach, allowing them to focus entirely on high-level strategy, product positioning, and authentic client relationships. The marketers who leverage AI will quickly outperform those who do not."
  },
  {
    id: "faq-3",
    question: "How long does it take to see tangible results from SEO and Automation setups?",
    answer: "AI Marketing automation systems (like lead routers, CRM synchronizers, automated outbound) start delivering value within 7-14 days of launch. Paid advertising optimizations (Meta/Google Ads setups) usually show a reduction in CAC within 2-3 weeks. High-intent SEO campaigns using topical authority clusters take around 60-90 days to see dramatic organic compounding, though some high-intent keywords can rank page 1 in under 30 days."
  },
  {
    id: "faq-4",
    question: "We are a local business in Nepal. Is AI marketing relevant for us?",
    answer: "Yes, immensely. Businesses in Nepal are scaling rapidly, but resource efficiency is critical. Deployed local search optimization, automated customer response chatbots on WhatsApp or Messenger, and cost-effective targeted Meta campaigns can capture local demand at a fraction of the cost of traditional billboards or broad flyer distribution."
  },
  {
    id: "faq-5",
    question: "How do we get started and what is the typical onboarding process?",
    answer: "We begin with a 30-minute discovery call where we analyze your current conversion metrics, digital overhead, and bottlenecks. Next, I design a custom Growth Blueprint outlining the exact SEO roadmap, automation structures, or ad campaigns needed. Once approved, onboarding takes under 5 days, during which my team integrates with your existing channels."
  }
];
