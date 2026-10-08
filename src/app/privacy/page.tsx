import type { Metadata } from "next";
import { company } from "@/data/company";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { h: "Information we collect", p: "Contact details you share with us (name, email, company, phone) and the project information you include in forms or messages." },
        { h: "How we use it", p: "To respond to enquiries, prepare proposals, schedule calls and, if you subscribe, send our newsletter. We never sell personal data." },
        { h: "Client data", p: "Data we process on behalf of clients is handled under the confidentiality and data-processing terms in each client agreement, with role-based access and NDAs for all staff." },
        { h: "Forms on this site", p: "Forms open your email app or WhatsApp with a pre-filled message. Those messages are governed by your email provider's and WhatsApp's own privacy terms." },
        { h: "Your rights", p: `You can ask us to access, correct or delete your data at any time by emailing ${company.email}.` },
      ]}
    />
  );
}
