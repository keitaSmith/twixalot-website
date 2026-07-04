import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms / AGB | Twixalot",
  description: "General terms for working with Twixalot.",
};

const sections = [
  {
    title: "Services",
    body: [
      "Twixalot provides websites, content platforms, custom digital systems, CMS setup, integrations, support and maintenance.",
    ],
  },
  {
    title: "Estimates And Proposals",
    body: [
      "Pricing calculator results and website prices are non-binding estimates. A final quote or proposal depends on confirmed scope, timeline, content, integrations and support needs.",
      "A project only begins once the scope and terms are agreed in writing.",
    ],
  },
  {
    title: "Client Responsibilities",
    body: [
      "Clients are responsible for:",
      [
        "providing accurate information",
        "providing content, images, access and feedback on time",
        "ensuring they have rights to supplied materials",
        "reviewing work and giving feedback within agreed timelines",
      ],
    ],
  },
  {
    title: "Third-Party Services And Costs",
    body: [
      "Domains, hosting, paid plugins, licences, premium tools, fonts, payment provider fees and third-party services are normally owned and paid directly by the client unless agreed otherwise.",
    ],
  },
  {
    title: "Payments",
    body: ["Payment terms are agreed in the individual proposal or invoice."],
  },
  {
    title: "Changes And Additional Work",
    body: ["Work outside the agreed scope may require a separate estimate, change request or additional invoice."],
  },
  {
    title: "Launch And Handover",
    body: ["Launch depends on final approval, content readiness, technical access and any required third-party setup."],
  },
  {
    title: "Maintenance And Support",
    body: [
      "Ongoing care plans cover agreed small fixes, updates and support according to the selected plan.",
      "Large new features, major redesigns, complex integrations or custom systems are scoped separately.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "After full payment, the client receives the agreed rights to the final delivered website or project-specific work.",
      "Twixalot may reuse general know-how, techniques, non-client-specific components and development experience.",
      "Third-party assets remain subject to their own licences.",
    ],
  },
  {
    title: "Portfolio Use",
    body: ["Twixalot may reference completed work in its portfolio unless confidentiality is agreed."],
  },
  {
    title: "Liability",
    body: [
      "Twixalot aims to provide careful and reliable work, but cannot guarantee uninterrupted availability of third-party services or platforms.",
    ],
  },
  {
    title: "Governing Law",
    body: ["Swiss law applies. Jurisdiction is Switzerland, unless mandatory law provides otherwise."],
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms / AGB"
      intro="These terms provide general information about working with Twixalot. Specific project details, prices, timelines and deliverables are agreed separately in writing."
      sections={sections}
    />
  );
}
