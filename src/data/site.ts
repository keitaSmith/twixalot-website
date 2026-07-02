import {
  ArrowRight,
  Blocks,
  Braces,
  Cable,
  CircleCheck,
  DraftingCompass,
  Handshake,
  LayoutDashboard,
  LifeBuoy,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
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
    description: "Responsive website experience for a Caribbean animation and creative community platform.",
    built: "Modernised content workflow",
    stack: "Next.js, responsive UI, content structure",
    url: "https://www.animaecaribe.com/",
  },
  {
    name: "Zoltan Hair Zurich",
    description: "Premium salon website for a Zurich-based hairstylist and colour specialist.",
    built: "Responsive website experience",
    stack: "Website, booking path, local SEO",
    url: "https://www.zoltanhairzurich.ch/",
  },
  {
    name: "hirning.ch",
    description: "Professional web presence for project management training and consulting.",
    built: "CMS-driven content system",
    stack: "Website, content model, responsive UI",
    url: "https://hirning.ch/",
  },
  {
    name: "psott.co",
    description: "Digital platform for private sector representation, updates and member communication.",
    built: "CMS-driven content system",
    stack: "Website, CMS, publishing structure",
    url: "https://psott.co/",
  },
  {
    name: "PrideTT",
    description: "Community website for Trinidad and Tobago's annual LGBTQI+ Pride celebrations.",
    built: "Responsive website experience",
    stack: "Website, content architecture, events",
    url: "https://pridett.com/",
  },
  {
    name: "QueerTT",
    description: "Community-focused web presence for queer visibility, information and support.",
    built: "Responsive website experience",
    stack: "Website, content structure, community UX",
    url: "https://queertt.com/",
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

export const processSteps = [
  {
    title: "Discover",
    description: "Goals, audience, requirements",
    icon: Search,
  },
  {
    title: "Structure",
    description: "Sitemap, user flows, content model",
    icon: DraftingCompass,
  },
  {
    title: "Design",
    description: "Visual direction and interface planning",
    icon: PenTool,
  },
  {
    title: "Build",
    description: "Development, CMS and integrations",
    icon: Braces,
  },
  {
    title: "Launch",
    description: "Testing, deployment and handover",
    icon: Rocket,
  },
  {
    title: "Support",
    description: "Fixes, improvements and maintenance",
    icon: Settings2,
  },
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
  "Website / redesign",
  "Web app / platform",
  "CMS / content system",
  "Automation / integration",
  "Maintenance / support",
  "Not sure yet",
];

export const budgetRanges = [
  "Under CHF 3k",
  "CHF 3k-8k",
  "CHF 8k-15k",
  "CHF 15k+",
  "Need guidance",
];

export const timelineOptions = [
  "As soon as possible",
  "1-2 months",
  "3-6 months",
  "Flexible",
];

export const ArrowIcon = ArrowRight;
