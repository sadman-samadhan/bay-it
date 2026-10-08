import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { caseStudies, insights } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const pages = ["", "/services", "/industries", "/how-we-work", "/case-studies", "/about", "/careers", "/insights", "/contact", "/get-started", "/faq", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, priority: 0.9 })),
    ...caseStudies.map((c) => ({ url: `${base}/case-studies/${c.slug}`, priority: 0.6 })),
    ...insights.map((i) => ({ url: `${base}/insights/${i.slug}`, lastModified: i.date, priority: 0.6 })),
  ];
}
