/**
 * Single source of truth for brand + contact details.
 * Everything here is PLACEHOLDER content — replace with the client's real details before launch.
 */
export const company = {
  name: "Nexvia Limited",
  shortName: "Nexvia",
  logoWord: ["NEX", "VIA"] as const,
  tagline: "Offshore operations & software, engineered in Bangladesh",
  description:
    "Nexvia is a Dhaka-based ITES, BPO and software company. We run back-office operations for US real estate and property services firms, including preservation, maintenance and rehab desks, accounting and vendor management, and we build the software that makes those operations smarter.",
  siteUrl: "https://www.nexvialimited.com",
  founded: 2023,

  phone: "+880 1700-000000",
  phoneHref: "tel:+8801700000000",
  usPhone: "+1 (302) 555-0142",
  usPhoneHref: "tel:+13025550142",
  whatsappNumber: "8801700000000",
  email: "hello@nexvialimited.com",
  salesEmail: "sales@nexvialimited.com",
  careersEmail: "hr@nexvialimited.com",

  office: {
    label: "Head Office & Delivery Centre",
    address: "Level 9, Plot 27, Road 17, Banani C/A, Dhaka 1213, Bangladesh",
    mapQuery: "Banani Road 17, Dhaka",
  },

  hours: {
    bd: "Sunday – Thursday · 9:00 AM – 6:00 PM (BST)",
    us: "US-shift desks · 8:00 PM – 5:00 AM BST (9 AM – 6 PM ET)",
  },

  stats: {
    states: 15,
    workOrders: 120000,
    professionals: 180,
    clients: 40,
    satisfaction: 98,
    turnaroundHours: 4,
  },

  memberships: ["BASIS Member", "ISO 27001-aligned processes", "NDA & data-privacy ready"],

  socials: {
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },
};

export const techStack: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Python", "Django", "FastAPI", "Laravel", ".NET"] },
  { group: "Mobile", items: ["React Native", "Flutter", "Kotlin", "Swift"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Power BI"] },
  { group: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions"] },
  { group: "Business tools", items: ["QuickBooks", "Xero", "Salesforce", "HubSpot", "Microsoft 365", "Google Workspace", "Odoo", "Jira"] },
];
