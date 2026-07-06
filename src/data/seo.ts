import type { Metadata, MetadataRoute } from "next";

export const siteUrl = "https://www.twixalot.com";
export const siteName = "Twixalot Software Solutions";
export const defaultTitle = "Twixalot Software Solutions | Websites, Apps & Digital Systems";
export const defaultDescription =
  "Twixalot builds websites, apps, booking systems, e-commerce platforms, and custom digital systems for small businesses, organisations, and growing projects in Zurich, Switzerland, and beyond.";
export const fullLogoImage = "/logos/twixalot-logo.png";
export const iconImage = "/logos/twixalot-logo-icon.png";
export const ogImage = "/og-image.png";

type SeoMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({ title, description, path }: SeoMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Twixalot Software Solutions - websites, apps and digital systems for small businesses, organisations and growing projects",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage],
    },
  };
}

export const publicRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/websites", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/ecommerce", priority: 0.82, changeFrequency: "monthly" },
  { path: "/services/booking-systems", priority: 0.82, changeFrequency: "monthly" },
  { path: "/services/mobile-apps", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/website-maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/seo-optimization", priority: 0.8, changeFrequency: "monthly" },
  { path: "/web-developer-zurich", priority: 0.86, changeFrequency: "monthly" },
  { path: "/work", priority: 0.78, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.78, changeFrequency: "monthly" },
  { path: "/about", priority: 0.72, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.82, changeFrequency: "monthly" },
  { path: "/process", priority: 0.55, changeFrequency: "yearly" },
  { path: "/impressum", priority: 0.35, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.35, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
] satisfies Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}>;

export const mainServices = [
  "Websites and web design",
  "Mobile apps",
  "E-commerce and online shops",
  "Booking systems",
  "Website maintenance",
  "SEO optimisation",
  "Custom digital systems",
];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl(fullLogoImage),
    image: absoluteUrl(ogImage),
    description: defaultDescription,
    founder: {
      "@type": "Person",
      name: "Keita Smith",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Urdorf",
      addressRegion: "Zurich",
      postalCode: "8902",
      addressCountry: "CH",
    },
    areaServed: [
      { "@type": "City", name: "Zurich" },
      { "@type": "AdministrativeArea", name: "Canton Zurich" },
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Place", name: "International" },
    ],
    makesOffer: mainServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en",
  };
}

export function serviceJsonLd(service: {
  title: string;
  description: string;
  path: string;
  audience: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(service.path)}#service`,
    name: service.title,
    description: service.description,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: ["Zurich", "Canton Zurich", "Switzerland", "International"],
    audience: {
      "@type": "Audience",
      audienceType: service.audience,
    },
    url: absoluteUrl(service.path),
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
