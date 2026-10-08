import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { company } from "@/data/company";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | Real Estate BPO, Back-Office & Software Development from Bangladesh`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "property preservation outsourcing",
    "real estate BPO Bangladesh",
    "offshore back office",
    "ITES company Dhaka",
    "software development Bangladesh",
    "dedicated development team",
    "ERP development",
    "accounting outsourcing",
  ],
  openGraph: { title: company.name, description: company.description, type: "website", siteName: company.name },
};

export const viewport: Viewport = { themeColor: "#090b18" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
