import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy / Datenschutzerklärung | Twixalot",
  description: "Privacy information for the Twixalot website and contact form.",
};

const sections = [
  {
    title: "Responsible Party",
    body: [
      "Keita Smith",
      "Twixalot",
      "Krummackerstrasse 4",
      "8902 Urdorf, Zurich",
      "Switzerland",
      "keita.smith@twixalot.com",
      "Phone: +41 76 324 51 00",
    ],
  },
  {
    title: "Personal Data Processed",
    body: [
      "Depending on how you use this website, personal data may include:",
      [
        "name",
        "email address",
        "phone number if provided",
        "company or organisation if provided",
        "project information submitted through the contact form",
        "technical data such as IP address, browser, device information, pages visited and timestamps",
      ],
    ],
  },
  {
    title: "Contact Enquiries",
    body: [
      "When you contact Twixalot by email or through the contact form, the information you provide is processed to respond to the enquiry, prepare project communication and handle possible follow-up.",
      "Contact form emails are sent using Resend. Enquiries are currently sent by email and are not intentionally stored in a separate website database.",
    ],
  },
  {
    title: "Pricing Calculator Enquiries",
    body: [
      "If you use the pricing calculator and choose to discuss the estimate, your selected answers and estimated range may be included in the contact form submission so Twixalot can understand the enquiry.",
    ],
  },
  {
    title: "Hosting And Server Logs",
    body: [
      "This website is hosted on Vercel. When the website is accessed, technical data may be processed by Vercel to deliver the website securely and reliably.",
    ],
  },
  {
    title: "Analytics",
    body: [
      "Twixalot uses Vercel Web Analytics to understand general website usage and performance. Vercel Web Analytics works without third-party cookies and provides anonymized usage data.",
    ],
  },
  {
    title: "Cookies And Similar Technologies",
    body: [
      "This website currently does not intentionally use marketing cookies or advertising tracking pixels. Vercel Web Analytics is used without third-party cookies. If additional tools that require cookies are added later, this policy and any consent options will be updated.",
    ],
  },
  {
    title: "Fonts And External Resources",
    body: [
      "This website uses framework-managed fonts through Next.js. The font files are served by the website rather than loaded from Google Fonts in the visitor's browser at runtime.",
    ],
  },
  {
    title: "No Newsletter",
    body: ["Twixalot currently does not operate a newsletter through this website."],
  },
  {
    title: "No Direct Website Payments",
    body: ["Twixalot currently does not process payments directly through this website."],
  },
  {
    title: "Data Sharing And Processors",
    body: [
      "Current processors used for this website are Vercel for hosting and analytics, and Resend for contact form email delivery.",
    ],
  },
  {
    title: "International Data Transfers",
    body: [
      "Some service providers may process data outside Switzerland, for example in the EU or the United States. Where required, appropriate safeguards are used.",
    ],
  },
  {
    title: "Retention",
    body: [
      "Contact enquiry data is kept as long as needed to respond to the enquiry, handle project communication, meet legal obligations or protect legitimate interests.",
    ],
  },
  {
    title: "Rights",
    body: [
      "You may request information, correction, deletion or restriction of personal data where legally applicable.",
    ],
  },
  {
    title: "Contact",
    body: ["keita.smith@twixalot.com"],
  },
  {
    title: "Changes",
    body: ["This Privacy Policy may be updated when services, tools or legal requirements change."],
  },
];

// TODO: Update the Privacy Policy if Mux or another video provider is added later.

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy / Datenschutzerklärung"
      intro="This Privacy Policy explains how personal data is processed when you visit this website or contact Twixalot."
      sections={sections}
    />
  );
}
