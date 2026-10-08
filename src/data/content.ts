/** Industries, engagement models, process, case studies, testimonials, FAQs, jobs and insights. All placeholder copy. */

export const industries = [
  { iconName: "Building2", title: "US Real Estate & REO", text: "Property preservation, asset management and mortgage field-services firms." },
  { iconName: "KeyRound", title: "Single-Family Rental", text: "SFR operators and build-to-rent portfolios managing turns at scale." },
  { iconName: "House", title: "Property Management", text: "Residential and commercial managers who need 24/5 coordination." },
  { iconName: "Hammer", title: "Investors & Rehab", text: "Fix-and-flip and value-add investors running multiple rehabs." },
  { iconName: "Landmark", title: "Fintech & Lending", text: "Loan servicing back-office, document processing and portals." },
  { iconName: "ShoppingCart", title: "E-commerce & Retail", text: "Stores, inventory, order processing and customer support." },
  { iconName: "HeartPulse", title: "Healthcare", text: "Clinic portals, scheduling and medical billing support." },
  { iconName: "Truck", title: "Logistics", text: "Dispatch tools, tracking dashboards and vendor networks." },
];

export const engagementModels = [
  {
    id: "dedicated",
    title: "Dedicated Team",
    iconName: "Users",
    badge: "Most popular",
    priceFrom: 1450,
    unit: "per full-time specialist / month",
    text: "Full-time specialists who work only for you, in your tools and your time zone. Hosted, managed and supported by us.",
    points: ["Hand-picked, trained specialists", "Your processes, your hours", "Team lead & QA included", "Scale up or down monthly"],
  },
  {
    id: "managed",
    title: "Managed Service",
    iconName: "Gauge",
    priceFrom: null,
    unit: "per order / per transaction",
    text: "We own the outcome. Pay per work order, invoice or ticket processed, with SLAs on turnaround and accuracy.",
    points: ["Outcome-based pricing", "Guaranteed SLAs", "Volume flexibility", "Monthly performance reviews"],
  },
  {
    id: "project",
    title: "Fixed-Scope Project",
    iconName: "Rocket",
    priceFrom: 8000,
    unit: "typical project start",
    text: "For software builds with a clear scope: fixed price, fixed timeline and milestone-based payments.",
    points: ["Discovery & estimate first", "Milestone payments", "Sprint demos every 2 weeks", "Warranty period after launch"],
  },
];

export const processSteps = [
  { title: "Discover", text: "A 30-minute call to understand your workflows, volumes, tools and goals.", duration: "Week 0" },
  { title: "Design & pilot", text: "We document SOPs and run a 2-week paid pilot on real work with clear KPIs.", duration: "Weeks 1–2" },
  { title: "Transition", text: "Knowledge transfer, access setup, shadowing and reverse-shadowing with your team.", duration: "Weeks 3–4" },
  { title: "Run & scale", text: "Daily reporting, weekly reviews and headcount that grows with your volume.", duration: "Ongoing" },
  { title: "Optimise", text: "Automation and software that remove repetitive work and lift accuracy over time.", duration: "Quarterly" },
];

export const whyUs = [
  { iconName: "Clock", title: "Your time zone, our night shift", text: "Desks run 9–6 Eastern, so work moves while you sleep and you have answers while you're online." },
  { iconName: "Building2", title: "Real estate domain experts", text: "Our teams come from preservation, maintenance and rehab operations, so there's no learning curve on the basics." },
  { iconName: "Lock", title: "Security & confidentiality", text: "NDAs, role-based access, secured office, clean-desk policy and monitored devices." },
  { iconName: "LineChart", title: "Measured, transparent results", text: "Daily KPI reports, weekly reviews and a dashboard you can check any time." },
  { iconName: "Wallet", title: "60–70% lower costs", text: "Experienced, English-fluent professionals at a fraction of US hiring costs." },
  { iconName: "Code2", title: "Operations + software, one partner", text: "We automate what we operate. Your back office gets smarter every quarter." },
];

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  pillar: "real-estate-ops" | "business-process" | "software";
  title: string;
  summary: string;
  challenge: string;
  solution: string[];
  results: { value: string; label: string }[];
  stack: string[];
  quote?: { text: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "preservation-desk-15-states",
    client: "National preservation company",
    industry: "US Real Estate & REO",
    pillar: "real-estate-ops",
    title: "A 24/5 preservation desk covering 15 states",
    summary: "Order aging dropped by 72% after we took over overnight work-order processing and photo QC.",
    challenge: "The client's in-house team couldn't keep up with overnight order intake. Orders aged past due dates and photo rejections were driving chargebacks.",
    solution: ["Stood up a 22-person desk across two shifts", "Built client-specific photo QC checklists", "Introduced a daily aging report and vendor escalation matrix", "Automated order assignment by ZIP code"],
    results: [{ value: "−72%", label: "Order aging" }, { value: "−60%", label: "Chargebacks" }, { value: "22", label: "Specialists" }],
    stack: ["Client WO portal", "Power BI", "Microsoft 365"],
    quote: { text: "By the time our managers log in, yesterday's orders are processed and checked. It changed how we run the business.", author: "VP Operations", role: "National preservation company" },
  },
  {
    slug: "sfr-turn-coordination",
    client: "SFR operator · 3,000+ homes",
    industry: "Single-Family Rental",
    pillar: "real-estate-ops",
    title: "Cutting make-ready turn time by 35%",
    summary: "A remote turn-coordination team that scopes, schedules and closes every move-out.",
    challenge: "Turns averaged 21 days and field managers spent most of their day on phone calls and spreadsheets.",
    solution: ["Scopes created from move-out photos within 24 hours", "Vendor quotes and scheduling handled centrally", "Residents and leasing kept updated automatically", "Weekly turn-time variance reviews"],
    results: [{ value: "−35%", label: "Turn time" }, { value: "13.6 days", label: "Avg. turn" }, { value: "4×", label: "Units per manager" }],
    stack: ["Property management platform", "Smartsheet", "Twilio"],
  },
  {
    slug: "accounting-close-llc-group",
    client: "Real estate LLC group",
    industry: "Property Management",
    pillar: "business-process",
    title: "Month-end close from 18 days to 5",
    summary: "Bookkeeping and AP/AR for 26 LLCs, consolidated and reported on time.",
    challenge: "26 property LLCs, three accounting files and a close that took nearly three weeks.",
    solution: ["Standardised chart of accounts across entities", "Daily AP processing and weekly AR follow-up", "Reconciliation checklist per entity", "Consolidated management dashboard"],
    results: [{ value: "5 days", label: "Month-end close" }, { value: "26", label: "LLCs managed" }, { value: "−48%", label: "Finance cost" }],
    stack: ["QuickBooks Online", "Bill.com", "Power BI"],
  },
  {
    slug: "vendor-portal-platform",
    client: "Field-services company",
    industry: "US Real Estate & REO",
    pillar: "software",
    title: "A vendor portal that replaced 40 spreadsheets",
    summary: "Custom web platform for vendor onboarding, compliance tracking and work-order updates.",
    challenge: "Vendor documents, insurance expiries and job updates lived in email threads and dozens of spreadsheets.",
    solution: ["Vendor self-onboarding with document upload & e-sign", "Automatic COI expiry reminders and suspension", "Mobile-friendly job updates with photo upload", "Admin dashboard with coverage map"],
    results: [{ value: "100%", label: "COI compliance" }, { value: "−70%", label: "Admin hours" }, { value: "12 wk", label: "To launch" }],
    stack: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
    quote: { text: "They understood the operations problem because they run operations themselves. The portal just made sense to our vendors.", author: "Director of Vendor Management", role: "Field-services company" },
  },
  {
    slug: "field-inspection-app",
    client: "Inspection company",
    industry: "US Real Estate & REO",
    pillar: "software",
    title: "Offline-first inspection app for field inspectors",
    summary: "React Native app with guided photo checklists that cut QC rejections by 70%.",
    challenge: "Inspectors missed mandatory photos and re-visits were costing thousands each month.",
    solution: ["Guided photo checklists per client", "Offline capture with background sync", "Automatic timestamp & geo-tag validation", "QC review console for the offshore desk"],
    results: [{ value: "−70%", label: "QC rejections" }, { value: "−45%", label: "Re-visits" }, { value: "4.8★", label: "Inspector rating" }],
    stack: ["React Native", "Firebase", "Node.js"],
  },
  {
    slug: "erp-distribution-bd",
    client: "Distribution company, Dhaka",
    industry: "E-commerce & Retail",
    pillar: "software",
    title: "Odoo ERP rollout for a 6-warehouse distributor",
    summary: "Inventory, purchase, sales and accounting unified in a phased 4-month rollout.",
    challenge: "Stock data was always out of date, and finance reconciled sales manually every week.",
    solution: ["Process mapping across 6 warehouses", "Odoo inventory, purchase, sales and accounting", "Custom delivery-route module", "Staff training in Bangla and English"],
    results: [{ value: "Real-time", label: "Stock visibility" }, { value: "−80%", label: "Manual reconciliation" }, { value: "4 mo", label: "Full rollout" }],
    stack: ["Odoo", "Python", "PostgreSQL"],
  },
];

export const testimonials = [
  { text: "By the time our managers log in, yesterday's orders are processed and checked. It changed how we run the business.", author: "VP Operations", company: "National preservation company", rating: 5 },
  { text: "Our month-end close went from three weeks to five days. The team is meticulous and genuinely proactive.", author: "Controller", company: "Real estate LLC group", rating: 5 },
  { text: "They understood the operations problem because they run operations themselves. The portal just made sense to our vendors.", author: "Director of Vendor Management", company: "Field-services company", rating: 5 },
  { text: "Clear communication, overlapping hours and zero surprises. It feels like an extension of our own office.", author: "Founder", company: "SFR investment firm", rating: 5 },
];

export const faqs = [
  { q: "What kind of services do you offer?", a: "Three things: real estate operations support for US property preservation, maintenance and rehab companies; business process services such as accounting, vendor management, support and data operations; and software development including custom platforms, web, mobile and ERP." },
  { q: "What does property preservation involve?", a: "Securing vacant properties, routine maintenance, preventing deterioration, and keeping properties safe and compliant so they're ready for market or use. We provide the back-office side: work orders, vendor dispatch, photo QC, bids and invoicing." },
  { q: "Do you work in US time zones?", a: "Yes. Our operations desks work 9 AM – 6 PM Eastern (our night shift in Dhaka), with optional overnight coverage so work is ready before your day starts." },
  { q: "How much do your services cost?", a: "Dedicated specialists start from about $1,450 per month. Managed services are priced per order or transaction, and software projects are quoted after a short discovery, typically from $8,000. Use the savings calculator for a quick estimate." },
  { q: "How long does it take to get started?", a: "Most teams go live within 2–4 weeks: a short discovery, a 2-week pilot on real work, then a structured transition. Small maintenance or development tasks can start within days." },
  { q: "How do you keep our data secure?", a: "Every team member signs an NDA. Access is role-based and revocable, devices are company-managed and monitored, our office is access-controlled, and we follow ISO 27001-aligned practices. We're happy to sign your DPA." },
  { q: "Can we try before committing?", a: "Yes. We recommend a 2-week paid pilot with agreed KPIs. If it doesn't meet them, you walk away with no long-term commitment." },
  { q: "Who owns the software you build?", a: "You do: source code, designs and documentation. Repositories can live in your own account from day one." },
  { q: "Do you provide post-launch support?", a: "Every software project includes a warranty period, followed by optional monthly support and maintenance plans with response-time SLAs." },
  { q: "Which US states do you cover?", a: "Our desks currently support work orders in 15+ states. Because the work is remote, we can support any state your vendors operate in." },
];

export const jobs = [
  { id: "ba-pp", title: "Business Analyst — Property Preservation", team: "Real Estate Ops", type: "Full-time · Night shift", location: "Dhaka (On-site)", summary: "Process work orders, bids and photo QC for US clients. 1.5+ years in property preservation and maintenance preferred." },
  { id: "sba-rehab", title: "Senior Business Analyst — Rehab", team: "Real Estate Ops", type: "Full-time · Night shift", location: "Dhaka (On-site)", summary: "Own rehab scopes, bid levelling and draw audits for a portfolio of US properties." },
  { id: "ap-exec", title: "Accounts Payable Executive (US)", team: "Business Process", type: "Full-time · Night shift", location: "Dhaka (On-site)", summary: "QuickBooks/Xero bill entry, vendor payments and reconciliations." },
  { id: "csr", title: "Customer Support Specialist (US Accent)", team: "Business Process", type: "Full-time · Night shift", location: "Dhaka (On-site)", summary: "Inbound calls, email and chat for US residents and clients." },
  { id: "fs-dev", title: "Full-Stack Developer (Next.js / Node)", team: "Software", type: "Full-time · Day shift", location: "Dhaka (Hybrid)", summary: "Build portals and workflow platforms for operations-heavy businesses. 3+ years experience." },
  { id: "rn-dev", title: "React Native Developer", team: "Software", type: "Full-time · Day shift", location: "Dhaka (Hybrid)", summary: "Offline-first field apps with camera, GPS and background sync." },
  { id: "qa-eng", title: "QA Engineer (Automation)", team: "Software", type: "Full-time · Day shift", location: "Dhaka (Hybrid)", summary: "Playwright/Cypress suites, CI integration and release QA." },
];

export const benefits = [
  "Monthly performance bonus",
  "Two festival bonuses",
  "Gratuity & leave encashment",
  "Annual increment",
  "Night-shift transport & safe drop-off for female staff",
  "Medical support",
  "US federal holidays for US-shift teams",
  "Learning budget & certifications",
];

export const culture = [
  { iconName: "Lightbulb", title: "Innovation", text: "Creative thinking and bold ideas, from process tweaks to new products." },
  { iconName: "TrendingUp", title: "Growth", text: "Clear career paths from analyst to team lead to manager." },
  { iconName: "Users", title: "Collaboration", text: "Flat hierarchy, open communication and real ownership." },
  { iconName: "Flame", title: "Passion", text: "We care about our clients' results as if they were our own." },
];

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  body: ({ type: "p" | "h2"; text: string } | { type: "list"; items: string[] })[];
}

export const insights: Insight[] = [
  {
    slug: "offshore-property-preservation-guide",
    title: "Offshoring property preservation back-office: a practical guide",
    excerpt: "What to move offshore first, how to run a pilot, and the KPIs that prove it's working.",
    category: "Real Estate Ops",
    date: "2026-09-12",
    readMinutes: 7,
    body: [
      { type: "p", text: "Preservation companies are under constant pressure: more orders, tighter due dates and stricter photo requirements. The back office is where most of that pressure lands, and it's also the part that can move offshore most successfully." },
      { type: "h2", text: "Start with high-volume, rules-based work" },
      { type: "list", items: ["Work order intake and data entry", "Photo QC against checklists", "Vendor follow-ups and ETA tracking", "Invoice preparation and discrepancy checks"] },
      { type: "h2", text: "Run a two-week pilot" },
      { type: "p", text: "Pick one client, one workflow and three KPIs, for example order aging, QC accuracy and turnaround time. Measure a baseline, run the pilot, and compare. If the numbers move, scale up." },
      { type: "h2", text: "KPIs that matter" },
      { type: "list", items: ["Orders past due (aging)", "Photo rejection rate", "Chargebacks per 100 orders", "Average processing time"] },
    ],
  },
  {
    slug: "dedicated-team-vs-freelancers",
    title: "Dedicated team vs. freelancers: what actually saves money?",
    excerpt: "Hourly rates are only part of the picture. Here's the full cost comparison.",
    category: "Outsourcing",
    date: "2026-08-03",
    readMinutes: 5,
    body: [
      { type: "p", text: "Freelancers look cheaper on paper. But turnover, onboarding, supervision and quality control add hidden costs that a managed, dedicated team absorbs for you." },
      { type: "h2", text: "Hidden costs of freelancers" },
      { type: "list", items: ["Re-training every time someone leaves", "No QA layer or backup cover", "Data security and access risks", "Management time spent supervising"] },
      { type: "h2", text: "When a dedicated team wins" },
      { type: "p", text: "If the work is ongoing, process-driven and touches client data, a dedicated team almost always delivers lower total cost and better quality within three months." },
    ],
  },
  {
    slug: "automating-work-orders",
    title: "5 work-order tasks you should automate this year",
    excerpt: "Small automations that free your team for work that needs human judgement.",
    category: "Software",
    date: "2026-06-21",
    readMinutes: 4,
    body: [
      { type: "p", text: "After processing thousands of work orders a month, we've found the same repetitive steps everywhere. Each one is a candidate for automation." },
      { type: "list", items: ["Assigning orders to vendors by ZIP and trade", "Due-date reminders and escalations", "Photo count and timestamp validation", "Insurance certificate expiry alerts", "Daily aging and SLA reports"] },
      { type: "p", text: "None of these need a big platform. A small integration or a lightweight portal usually pays for itself within a quarter." },
    ],
  },
];
