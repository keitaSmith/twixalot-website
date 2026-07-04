import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Impressum / Legal Notice | Twixalot",
  description: "Legal notice and operator information for Twixalot.",
};

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
      "https://twixalot.com",
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
