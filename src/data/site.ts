import {
  ArrowRight,
  Blocks,
  Braces,
  Cable,
  CircleCheck,
  Handshake,
  LayoutDashboard,
  LifeBuoy,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Websites & Digital Experiences",
    description:
      "Premium marketing sites, landing pages and redesigns for brands that need to look polished, modern and credible.",
    icon: MonitorSmartphone,
  },
  {
    title: "Web Apps & Custom Systems",
    description:
      "Dashboards, portals, booking flows and internal tools built around real workflows.",
    icon: LayoutDashboard,
  },
  {
    title: "CMS & Content Platforms",
    description:
      "Editable content systems using tools like Sanity, WordPress or custom CMS structures so teams can manage content after launch.",
    icon: Blocks,
  },
  {
    title: "Automation & Integrations",
    description:
      "Connected forms, emails, APIs, calendars, payments and workflows that reduce repetitive manual work.",
    icon: Cable,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing technical care, updates, fixes, performance checks and improvements after launch.",
    icon: LifeBuoy,
  },
];

export const heroServiceCards = [
  {
    title: "Premium Websites",
    description:
      "Polished websites, landing pages and brand experiences for businesses, campaigns and organisations that need to look credible fast.",
  },
  {
    title: "CMS & Content Platforms",
    description:
      "Editable systems for pages, news, events, media, teams and content-heavy websites.",
  },
  {
    title: "Custom Web Apps",
    description:
      "Dashboards, portals, booking flows and internal tools built around real workflows.",
  },
  {
    title: "Automation & Integrations",
    description:
      "Forms, emails, APIs, calendars, payments and repetitive tasks connected into smoother systems.",
  },
];

export const projects = [
  {
    name: "Animae Caribe",
    description: "Content-managed ecosystem for a Caribbean animation brand, festival and creative community.",
    built: "Modern CMS platform",
    stack: "Next.js, Sanity, media",
    image: "/images/projects/animae-caribe.webp",
    url: "https://www.animaecaribe.com/",
  },
  {
    name: "Zoltan Hair Zurich",
    description: "Bilingual salon website and CMS structure for a Zurich hair studio.",
    built: "Premium business website",
    stack: "Next.js, CMS, bilingual content",
    image: "/images/projects/zoltan-hair-zurich.webp",
    url: "https://www.zoltanhairzurich.ch/",
  },
  {
    name: "hirning.ch",
    description: "Professional web presence for project management training and consulting.",
    built: "CMS-driven content system",
    stack: "Website, content model, responsive UI",
    image: "/images/projects/hirning.webp",
    url: "https://hirning.ch/",
  },
  {
    name: "Private Sector Organisation TT",
    description: "Organisational website for private sector news, updates, membership and public information.",
    built: "Organisation website",
    stack: "Website, CMS, publishing structure",
    image: "/images/projects/private-sector-organisation-tt.webp",
    url: "https://psott.co/",
  },
  {
    name: "PrideTT",
    description: "Community web presence for events, history, updates and Pride organisation visibility.",
    built: "Responsive website experience",
    stack: "Website, content architecture, events",
    image: "/images/projects/pridett.webp",
    url: "https://pridett.com/",
  },
  {
    name: "Tjshana Rai Skin Care Botanicals",
    description: "Soft brand and shop-oriented website for skincare botanicals and product presentation.",
    built: "E-commerce website",
    stack: "Website, storefront, responsive design",
    image: "/images/projects/tjshanarai.webp",
  },
];

export const startingPoints = [
  {
    title: "Launch Website",
    description:
      "A focused website or landing page for a small business, campaign, event or early-stage idea that needs to look credible fast.",
    price: "From CHF 2’900",
  },
  {
    title: "Signature Website",
    description:
      "A custom branded website with stronger visual direction, responsive design, polished interactions and launch support.",
    price: "From CHF 6’900",
  },
  {
    title: "Content Platform",
    description:
      "A content-managed website for teams that need to update pages, news, events, media, people or resources without relying on a developer for every change.",
    price: "From CHF 9’500",
  },
  {
    title: "Custom System",
    description:
      "Dashboards, portals, booking flows, internal tools and workflow systems designed around how your organisation actually works.",
    price: "Scoped after discovery",
  },
  {
    title: "Care & Support",
    description:
      "Ongoing updates, small fixes, technical checks, content support and improvements after launch. Hosting, domains and third-party services remain client-owned and billed directly.",
    price: "From CHF 290 / month",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "GSAP",
  "Sanity",
  "WordPress",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",
  "React Native",
  "Flutter",
  "GraphQL",
  "Docker",
  "Vercel",
  "GitHub",
];

export const whyTwixalot = [
  { title: "Premium visual execution", icon: Sparkles },
  { title: "Clear communication", icon: Handshake },
  { title: "Custom development", icon: Braces },
  { title: "CMS handover", icon: Blocks },
  { title: "Scalable technical structure", icon: CircleCheck },
  { title: "Ongoing support", icon: LifeBuoy },
];

export const projectTypes = [
  "Launch Website",
  "Signature Website",
  "Content Platform",
  "Custom System",
  "Care and Support",
  "Not sure yet",
];

export const budgetRanges = [
  "Under CHF 2\u2019900",
  "CHF 2\u2019900 to CHF 6\u2019900",
  "CHF 6\u2019900 to CHF 9\u2019500",
  "CHF 9\u2019500 to CHF 15\u2019000",
  "CHF 15\u2019000 to CHF 25\u2019000",
  "CHF 25\u2019000+",
  "Calculator estimate attached",
  "Not sure yet",
];

export const timelineOptions = [
  "Flexible",
  "Standard priority",
  "Rush or urgent",
  "Not sure yet",
];

export const ArrowIcon = ArrowRight;
