import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      sections={[
        { h: "Website content", p: "Content on this website is for general information. Case studies are anonymised and results vary by engagement." },
        { h: "Proposals & pricing", p: "Prices shown are indicative starting points. Binding terms, scope and pricing are set out in a signed proposal or master services agreement." },
        { h: "Intellectual property", p: "Unless agreed otherwise in writing, deliverables created for a client, including source code and designs, are owned by that client upon payment." },
        { h: "Confidentiality", p: "We sign mutual NDAs on request and treat all client information as confidential." },
        { h: "Governing law", p: "These terms are governed by the laws of Bangladesh unless a client agreement specifies otherwise." },
      ]}
    />
  );
}
