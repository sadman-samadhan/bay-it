export type PillarId = "real-estate-ops" | "business-process" | "software";

export interface Pillar {
  id: PillarId;
  title: string;
  short: string;
  blurb: string;
  iconName: string;
}

export interface Service {
  slug: string;
  title: string;
  pillar: PillarId;
  iconName: string;
  tagline: string;
  summary: string;
  description: string[];
  capabilities: { title: string; text: string }[];
  deliverables: string[];
  outcomes: { value: string; label: string }[];
  tools: string[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
}

export const pillars: Pillar[] = [
  {
    id: "real-estate-ops",
    title: "Real Estate Operations",
    short: "Real Estate Ops",
    blurb: "Offshore desks for US property preservation, maintenance, renovation and rehab companies, running in your time zone.",
    iconName: "Building2",
  },
  {
    id: "business-process",
    title: "Business Process Services",
    short: "Back Office",
    blurb: "Accounting, vendor management, procurement, onboarding and support teams that scale with you.",
    iconName: "Workflow",
  },
  {
    id: "software",
    title: "Software & Digital",
    short: "Software",
    blurb: "Custom software, web and mobile apps, ERP systems and the cloud infrastructure behind them.",
    iconName: "Code2",
  },
];

export const services: Service[] = [
  // ───────────────── REAL ESTATE OPERATIONS ─────────────────
  {
    slug: "property-preservation",
    title: "Property Preservation Support",
    pillar: "real-estate-ops",
    iconName: "ShieldCheck",
    featured: true,
    tagline: "Keep vacant and REO properties secure, compliant and market-ready.",
    summary:
      "End-to-end back-office support for preservation work orders, from intake and vendor dispatch to photo QC, bids and invoicing.",
    description: [
      "Property preservation runs on volume and deadlines. Every vacant or REO property needs to be secured, winterised, maintained and documented to investor and insurer guidelines, often across dozens of counties at once.",
      "Our trained preservation desk works your queue overnight (Bangladesh day, US night) and during your business hours. Orders are processed, vendors are dispatched and photos checked before your team logs in, so nothing ages and nothing gets charged back.",
    ],
    capabilities: [
      { title: "Work order intake & routing", text: "Order entry, due-date tracking and assignment to the right vendor by ZIP and scope." },
      { title: "Photo QC & documentation", text: "Before, during and after photo review against client checklists, with mandatory-photo and timestamp checks." },
      { title: "Bid processing", text: "Scope review, bid write-ups, pricing against allowables and approval follow-up." },
      { title: "Compliance & occupancy", text: "Occupancy status, code-violation tracking and HUD / investor guideline checks." },
      { title: "Invoicing & chargebacks", text: "Invoice preparation, discrepancy resolution and chargeback dispute support." },
      { title: "Vendor coordination", text: "Daily follow-ups, ETA tracking and escalation for late or rejected orders." },
    ],
    deliverables: ["Daily order-aging report", "Photo QC scorecards", "Bid & invoice logs", "Vendor performance dashboard"],
    outcomes: [
      { value: "4 hr", label: "Avg. order turnaround" },
      { value: "−60%", label: "Chargebacks" },
      { value: "24/5", label: "Desk coverage" },
    ],
    tools: ["Client work-order portals", "Excel / Google Sheets", "Microsoft 365", "Power BI"],
    faqs: [
      { q: "What does property preservation involve?", a: "Securing vacant properties, routine maintenance, preventing deterioration, and keeping properties safe and compliant so they're ready for market or use. We provide the back-office side: orders, vendors, photos, bids and invoices." },
      { q: "Can your team work inside our existing work-order system?", a: "Yes. We work inside your portals and platforms with role-based access you control, so there's no migration and no new software for your vendors." },
    ],
  },
  {
    slug: "maintenance-renovation",
    title: "Maintenance & Renovation Coordination",
    pillar: "real-estate-ops",
    iconName: "Wrench",
    featured: true,
    tagline: "Upgrade and maintain properties for marketability, without adding headcount.",
    summary:
      "A remote coordination desk for turns, repairs and renovation projects: vendor sourcing, scopes, scheduling, tenant communication and close-out.",
    description: [
      "Single-family rental and property management firms live and die by turn times. We coordinate maintenance requests and renovation projects end to end, so your field managers can focus on quality.",
      "From a leaking faucet ticket to a full make-ready, our coordinators source vendors, collect quotes, schedule work, update residents and close the job with photos and invoices.",
    ],
    capabilities: [
      { title: "Maintenance ticket handling", text: "Triage, troubleshooting with residents, priority assignment and dispatch." },
      { title: "Make-ready & turn coordination", text: "Move-out inspection review, scope creation and turn scheduling to hit target days-on-market." },
      { title: "Vendor sourcing & quotes", text: "Find, vet and compare local vendors with 2–3 quotes per job." },
      { title: "Resident communication", text: "Calls, SMS and email updates in US English during your business hours." },
      { title: "Scope of work & estimates", text: "Line-item scopes from photos and inspection notes, priced against your rate cards." },
      { title: "Close-out & QA", text: "Completion photos, punch lists, invoice matching and warranty logging." },
    ],
    deliverables: ["Turn-time tracker", "Open-ticket SLA report", "Vendor rate comparison", "Weekly portfolio summary"],
    outcomes: [
      { value: "−35%", label: "Turn time" },
      { value: "2–3", label: "Quotes per job" },
      { value: "<1 hr", label: "First response" },
    ],
    tools: ["Property management platforms", "Twilio / RingCentral", "HubSpot", "Google Workspace"],
    faqs: [
      { q: "Do you do the physical repair work in the US?", a: "No. We're the remote operations team. We coordinate your local vendors and field staff, handle communication and paperwork, and keep every job on schedule." },
    ],
  },
  {
    slug: "rehab-management",
    title: "Rehab Project Management",
    pillar: "real-estate-ops",
    iconName: "Hammer",
    featured: true,
    tagline: "Comprehensive property rehabilitation support for the US market.",
    summary:
      "Scope, budget and track rehab projects from acquisition to listing: contractor bids, draw management, progress audits and schedule control.",
    description: [
      "Rehab projects are where margins are made or lost. Our rehab desk helps investors, flippers and SFR operators control scope, budget and timeline across a growing pipeline of properties.",
      "We prepare scopes from inspection reports and photos, level contractor bids, track milestones and draws, and audit progress photos so every dollar maps to completed work.",
    ],
    capabilities: [
      { title: "Scope of work & budgeting", text: "Detailed rehab scopes with quantities and unit costs, aligned to your finish standards." },
      { title: "Contractor bid levelling", text: "Side-by-side bid comparison, clarifications and recommendations." },
      { title: "Draw management", text: "Draw request review against progress photos and inspection reports." },
      { title: "Schedule tracking", text: "Gantt-style milestone tracking with weekly variance reports." },
      { title: "Change-order control", text: "Change-order logging, justification and approval workflows." },
      { title: "Listing readiness", text: "Final punch-list, photo set and handover to leasing or sales." },
    ],
    deliverables: ["Rehab budget workbook", "Bid levelling sheet", "Draw audit log", "Weekly project status report"],
    outcomes: [
      { value: "±5%", label: "Budget variance" },
      { value: "100%", label: "Draws photo-verified" },
      { value: "−3 wks", label: "Avg. project time" },
    ],
    tools: ["Excel / Smartsheet", "Procore-style trackers", "Google Drive", "Power BI"],
    faqs: [
      { q: "How do you price rehab support?", a: "Most clients start with a dedicated rehab coordinator (monthly FTE). High-volume programmes can move to per-project pricing once volumes are steady." },
    ],
  },
  {
    slug: "inspection-qc",
    title: "Inspection Review & QC Desk",
    pillar: "real-estate-ops",
    iconName: "ScanSearch",
    tagline: "Every photo checked, every report consistent, every client guideline met.",
    summary:
      "High-volume review of inspection reports and field photos for completeness, accuracy and guideline compliance before they reach your client.",
    description: [
      "Inspection and QC are repetitive, detail-heavy and time-critical, which makes them ideal for a trained offshore team. We review reports and photo sets against your client-specific checklists and flag issues back to the field immediately.",
    ],
    capabilities: [
      { title: "Photo completeness checks", text: "Mandatory photo sets, angles, timestamps and geo-tags verified." },
      { title: "Report accuracy review", text: "Condition, occupancy and damage notes cross-checked with photos." },
      { title: "Damage & hazard flagging", text: "Roof, water, mould, vandalism and safety hazards escalated." },
      { title: "Client guideline mapping", text: "Separate checklists per client and investor." },
    ],
    deliverables: ["QC pass/fail log", "Field rejection reasons", "Inspector scorecards"],
    outcomes: [
      { value: "99.2%", label: "QC accuracy" },
      { value: "<2 hr", label: "Review time" },
      { value: "−70%", label: "Client rejections" },
    ],
    tools: ["Client portals", "Excel", "Microsoft 365"],
    faqs: [],
  },

  // ───────────────── BUSINESS PROCESS ─────────────────
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    pillar: "business-process",
    iconName: "Calculator",
    featured: true,
    tagline: "Clean books, on time, every month.",
    summary: "AP/AR, invoicing, bank reconciliation, month-end close and management reporting for US LLCs and growing companies.",
    description: [
      "Our accounting team handles the transactional work that keeps a business running: paying vendors on time, getting invoices out, reconciling accounts and closing the month. You get accurate books and your finance leads get their time back.",
    ],
    capabilities: [
      { title: "Accounts payable", text: "Vendor bill entry, approval routing, payment runs and 1099 prep support." },
      { title: "Accounts receivable", text: "Invoicing, payment posting, collections follow-up and aging reports." },
      { title: "Reconciliation", text: "Bank, credit card and inter-company reconciliations." },
      { title: "Month-end close", text: "Accruals, journal entries, closing checklists and variance analysis." },
      { title: "Reporting", text: "P&L, balance sheet, cash flow and custom KPI dashboards." },
    ],
    deliverables: ["Monthly close package", "AP/AR aging", "Reconciliation workpapers", "KPI dashboard"],
    outcomes: [
      { value: "5 days", label: "Month-end close" },
      { value: "0", label: "Late vendor payments" },
      { value: "−50%", label: "Finance ops cost" },
    ],
    tools: ["QuickBooks Online", "Xero", "Bill.com", "Excel", "Power BI"],
    faqs: [
      { q: "Do you replace our CPA?", a: "No. We handle day-to-day bookkeeping and reporting so your CPA or controller can focus on tax, audit and advisory. We work alongside them." },
    ],
  },
  {
    slug: "vendor-management",
    title: "Vendor Management & Procurement",
    pillar: "business-process",
    iconName: "Handshake",
    tagline: "The right vendors, fully compliant, at the right price.",
    summary: "Vendor onboarding, compliance documents, insurance tracking, rate negotiation support, purchase orders and supply coordination.",
    description: [
      "Managing hundreds of field vendors across many states is a full-time job. We recruit and onboard vendors, chase W-9s and insurance certificates, track expirations and maintain a clean, searchable vendor database.",
    ],
    capabilities: [
      { title: "Vendor recruitment", text: "Sourcing vendors by ZIP, trade and capacity to fill coverage gaps." },
      { title: "Onboarding & compliance", text: "W-9, COI, licences and background-check document collection." },
      { title: "Insurance expiry tracking", text: "Automated reminders and suspension of non-compliant vendors." },
      { title: "Procurement & POs", text: "Purchase orders, supplier quotes and material ordering." },
      { title: "Performance scoring", text: "On-time, quality and chargeback metrics per vendor." },
    ],
    deliverables: ["Vendor master database", "Compliance status report", "Coverage map by ZIP", "Vendor scorecards"],
    outcomes: [
      { value: "100%", label: "COI compliance" },
      { value: "2×", label: "Coverage growth" },
      { value: "48 hr", label: "Vendor onboarding" },
    ],
    tools: ["Salesforce", "HubSpot", "Airtable", "DocuSign"],
    faqs: [],
  },
  {
    slug: "customer-support-onboarding",
    title: "Client Onboarding & Support",
    pillar: "business-process",
    iconName: "Headset",
    tagline: "US-hours support that sounds like your own team.",
    summary: "Phone, email and chat support, client onboarding, scheduling and CRM upkeep, staffed in your time zone.",
    description: [
      "Your clients and residents expect fast, friendly answers. Our support specialists are trained on your products, tone and escalation paths, and work your business hours from Dhaka.",
    ],
    capabilities: [
      { title: "Inbound support", text: "Phone, email and live chat with SLA-tracked response times." },
      { title: "Client onboarding", text: "Welcome calls, document collection, account setup and training." },
      { title: "Scheduling & dispatch", text: "Appointment booking and calendar management." },
      { title: "CRM hygiene", text: "Lead and contact updates, deduplication and pipeline notes." },
    ],
    deliverables: ["SLA dashboard", "CSAT surveys", "Weekly ticket trends"],
    outcomes: [
      { value: "<60s", label: "Avg. answer time" },
      { value: "94%", label: "CSAT" },
      { value: "9–6 ET", label: "Coverage" },
    ],
    tools: ["Zendesk", "Freshdesk", "RingCentral", "HubSpot", "Slack"],
    faqs: [],
  },
  {
    slug: "admin-data-operations",
    title: "Admin & Data Operations",
    pillar: "business-process",
    iconName: "Database",
    tagline: "Accurate data, processed at scale.",
    summary: "Data entry, document processing, research, reporting and admin support, with double-check QA on every batch.",
    description: [
      "Whether it's indexing thousands of documents, cleaning a CRM or building weekly reports, our data operations team delivers accuracy at volume, with a second-person QA step built into every workflow.",
    ],
    capabilities: [
      { title: "Data entry & indexing", text: "Forms, invoices, leases and title documents keyed and indexed." },
      { title: "Document processing", text: "OCR clean-up, classification and file management." },
      { title: "Business research", text: "Market, competitor, county-records and lead research." },
      { title: "Reporting", text: "Recurring Excel and BI reports built and refreshed." },
    ],
    deliverables: ["Batch QA logs", "Recurring reports", "Research briefs"],
    outcomes: [
      { value: "99.5%", label: "Data accuracy" },
      { value: "2-step", label: "QA on every batch" },
      { value: "24 hr", label: "Typical turnaround" },
    ],
    tools: ["Excel", "Google Sheets", "Power BI", "Airtable"],
    faqs: [],
  },
  {
    slug: "digital-marketing",
    title: "Marketing & Lead Generation",
    pillar: "business-process",
    iconName: "Megaphone",
    tagline: "Steady pipeline, measurable results.",
    summary: "SEO, paid ads, social media, content and outbound lead generation for B2B and real estate businesses.",
    description: [
      "We help service businesses grow their pipeline with a mix of search, paid and outbound marketing, all reported against leads and revenue, not vanity metrics.",
    ],
    capabilities: [
      { title: "SEO & content", text: "Technical SEO, local SEO and content calendars." },
      { title: "Paid media", text: "Google Ads and Meta Ads campaigns with conversion tracking." },
      { title: "Social media", text: "Content creation, scheduling and community management." },
      { title: "Outbound lead gen", text: "List building, enrichment and email/LinkedIn outreach." },
    ],
    deliverables: ["Monthly growth report", "Content calendar", "Lead lists"],
    outcomes: [
      { value: "3×", label: "Organic traffic (12 mo)" },
      { value: "−40%", label: "Cost per lead" },
      { value: "Weekly", label: "Reporting" },
    ],
    tools: ["Google Ads", "Meta Ads", "Semrush", "HubSpot", "Canva"],
    faqs: [],
  },

  // ───────────────── SOFTWARE & DIGITAL ─────────────────
  {
    slug: "custom-software",
    title: "Enterprise Software Development",
    pillar: "software",
    iconName: "Boxes",
    featured: true,
    tagline: "Business software built around how you actually operate.",
    summary: "Custom platforms, internal tools, portals and integrations that automate operations and remove spreadsheet chaos.",
    description: [
      "We build the software we wish our own operations teams had: work-order systems, vendor portals, approval workflows and reporting dashboards. Because we run operations ourselves, we design for the people who use these tools every day.",
      "We work in two-week sprints with a demo at the end of each one, so you see progress continuously and can change direction without waste.",
    ],
    capabilities: [
      { title: "Workflow automation", text: "Approvals, notifications and hand-offs that replace email chains." },
      { title: "Portals & dashboards", text: "Client, vendor and employee portals with role-based access." },
      { title: "Integrations & APIs", text: "Connect CRMs, accounting, payment and third-party platforms." },
      { title: "Legacy modernisation", text: "Move from spreadsheets and old desktop apps to secure web platforms." },
    ],
    deliverables: ["Product roadmap", "Clickable prototype", "Production-ready code & docs", "Post-launch support"],
    outcomes: [
      { value: "2-wk", label: "Sprint demos" },
      { value: "−70%", label: "Manual work (typical)" },
      { value: "100%", label: "Code ownership yours" },
    ],
    tools: ["Next.js", "NestJS", "Python", "PostgreSQL", "AWS", "Docker"],
    faqs: [
      { q: "Who owns the code?", a: "You do. All source code, designs and documentation are transferred to you, and repositories can live in your own GitHub or GitLab account from day one." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    pillar: "software",
    iconName: "Globe",
    tagline: "Fast, secure websites and web apps that convert.",
    summary: "Corporate websites, web applications, e-commerce and SaaS products, built with modern frameworks and SEO in mind.",
    description: [
      "From marketing sites to multi-tenant SaaS platforms, we build web products that load fast, rank well and are easy for your team to update.",
    ],
    capabilities: [
      { title: "Corporate & marketing sites", text: "CMS-powered sites with strong SEO foundations." },
      { title: "Web applications", text: "Dashboards, booking systems, marketplaces and portals." },
      { title: "E-commerce", text: "Shopify, WooCommerce and custom stores with local and global payment gateways." },
      { title: "SaaS platforms", text: "Multi-tenant architecture, subscriptions and billing." },
    ],
    deliverables: ["Design system", "Responsive build", "CMS training", "Analytics setup"],
    outcomes: [
      { value: "90+", label: "Lighthouse score" },
      { value: "6–10 wk", label: "Typical launch" },
      { value: "SEO", label: "Ready on day one" },
    ],
    tools: ["Next.js", "React", "Laravel", "WordPress", "Shopify", "Vercel"],
    faqs: [],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    pillar: "software",
    iconName: "Smartphone",
    tagline: "Native-quality iOS and Android apps from one codebase.",
    summary: "Cross-platform and native apps for field teams, customers and internal operations, from MVP to app-store launch.",
    description: [
      "We build mobile apps for field technicians, customers and managers, with offline mode, camera and GPS workflows, push notifications and secure sign-in.",
    ],
    capabilities: [
      { title: "Cross-platform apps", text: "React Native and Flutter for iOS and Android together." },
      { title: "Field-service apps", text: "Offline checklists, photo capture, geo-stamps and signatures." },
      { title: "Customer apps", text: "Booking, payments, loyalty and notifications." },
      { title: "App-store launch", text: "Store listings, review guidelines and release management." },
    ],
    deliverables: ["UX flows & prototype", "iOS & Android builds", "Admin panel", "Store submission"],
    outcomes: [
      { value: "1", label: "Codebase, 2 platforms" },
      { value: "Offline", label: "Field-ready" },
      { value: "12 wk", label: "Typical MVP" },
    ],
    tools: ["React Native", "Flutter", "Firebase", "Expo"],
    faqs: [],
  },
  {
    slug: "erp-systems",
    title: "ERP System Design",
    pillar: "software",
    iconName: "Network",
    tagline: "One system for finance, inventory, HR and operations.",
    summary: "ERP design, customisation and implementation, using Odoo or a custom build, tailored to your processes.",
    description: [
      "We map your processes first, then configure or build an ERP that fits them, whether that's an Odoo implementation with custom modules or a purpose-built system for unique workflows.",
    ],
    capabilities: [
      { title: "Process mapping", text: "Current-state and future-state workflows documented with your team." },
      { title: "Module configuration", text: "Accounting, inventory, purchase, sales, HR and payroll." },
      { title: "Custom modules", text: "Industry-specific workflows and reports." },
      { title: "Data migration & training", text: "Clean migration from legacy systems with role-based training." },
    ],
    deliverables: ["Process blueprint", "Configured ERP", "Migration report", "User training"],
    outcomes: [
      { value: "1", label: "Source of truth" },
      { value: "Real-time", label: "Reporting" },
      { value: "Phased", label: "Low-risk rollout" },
    ],
    tools: ["Odoo", "Python", "PostgreSQL", "Power BI"],
    faqs: [],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    pillar: "software",
    iconName: "PenTool",
    tagline: "Interfaces people understand at first glance.",
    summary: "User research, wireframes, prototypes and design systems for web and mobile products.",
    description: [
      "Good design reduces training time and support tickets. We research how your users work, prototype quickly and hand over production-ready design systems.",
    ],
    capabilities: [
      { title: "Research & discovery", text: "Stakeholder interviews, user journeys and usability audits." },
      { title: "Wireframes & prototypes", text: "Clickable Figma prototypes tested with real users." },
      { title: "Design systems", text: "Reusable components, tokens and documentation." },
    ],
    deliverables: ["Journey maps", "Figma prototype", "Design system"],
    outcomes: [
      { value: "Figma", label: "Source files yours" },
      { value: "1–2 wk", label: "First prototype" },
      { value: "WCAG", label: "Accessibility-minded" },
    ],
    tools: ["Figma", "FigJam", "Maze"],
    faqs: [],
  },
  {
    slug: "qa-testing",
    title: "QA & Software Testing",
    pillar: "software",
    iconName: "BugOff",
    tagline: "Ship with confidence.",
    summary: "Manual and automated testing, regression suites, performance and security checks across web and mobile.",
    description: [
      "Our QA engineers test as part of every sprint and can also run as an independent testing team for your in-house developers.",
    ],
    capabilities: [
      { title: "Manual & exploratory testing", text: "Structured test plans and real-device testing." },
      { title: "Test automation", text: "Playwright, Cypress and Appium regression suites in CI." },
      { title: "Performance & security", text: "Load testing and OWASP-based security checks." },
    ],
    deliverables: ["Test plan", "Automated suite", "Release QA report"],
    outcomes: [
      { value: "80%+", label: "Regression automated" },
      { value: "CI", label: "Integrated" },
      { value: "−60%", label: "Escaped defects" },
    ],
    tools: ["Playwright", "Cypress", "Appium", "k6", "Jira"],
    faqs: [],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    pillar: "software",
    iconName: "Cloud",
    tagline: "Reliable, secure, cost-efficient infrastructure.",
    summary: "Cloud architecture, migration, CI/CD, monitoring and managed hosting on AWS, Azure and Google Cloud.",
    description: [
      "We design and run the infrastructure behind your applications, with automated deployments, backups, monitoring and cost controls so your systems stay fast and available.",
    ],
    capabilities: [
      { title: "Cloud architecture & migration", text: "Lift-and-shift or re-platform with minimal downtime." },
      { title: "CI/CD pipelines", text: "Automated build, test and deploy on every change." },
      { title: "Monitoring & on-call", text: "Uptime, error and performance alerting with runbooks." },
      { title: "Cost optimisation", text: "Right-sizing and reserved capacity planning." },
    ],
    deliverables: ["Architecture diagram", "Infrastructure as code", "Runbooks", "Monthly cost report"],
    outcomes: [
      { value: "99.9%", label: "Uptime target" },
      { value: "−30%", label: "Cloud spend (typical)" },
      { value: "Minutes", label: "Deploy time" },
    ],
    tools: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes"],
    faqs: [],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getPillar = (id: PillarId) => pillars.find((p) => p.id === id)!;
