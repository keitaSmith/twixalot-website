import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impressum / Legal Notice",
  description: "Legal notice and operator information for Twixalot.",
  path: "/impressum",
});

const sections = [
  {
    title: "Website Operator",
    body: [
      "Twixalot",
      "Keita Smith",
      "Krummackerstrasse 4",
      "8902 Urdorf, Zurich",
      "Switzerland",
      "Phone: +41 76 324 51 00",
      "keita.smith@twixalot.com",
      "https://www.twixalot.com",
    ],
  },
  {
    title: "Responsible For Content",
    body: [
      "Keita Smith",
      "Krummackerstrasse 4",
      "8902 Urdorf, Zurich",
      "Switzerland",
    ],
  },
];

export default function ImpressumPage() {
  return <LegalPageLayout title="Impressum" sections={sections} />;
}
