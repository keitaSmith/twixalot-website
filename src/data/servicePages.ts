export type ServicePageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  audience: string;
  whoFor: string[];
  included: string[];
  useCases: string[];
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
  germanTerms?: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "websites",
    title: "Website Design & Development",
    metaTitle: "Website Design & Web Development Zurich",
    metaDescription:
      "Custom website design and web development for small businesses, SMEs, organisations and growing projects in Zurich and Switzerland.",
    h1: "Custom Websites For Small Businesses And Swiss SMEs",
    eyebrow: "Website Design",
    intro:
      "Twixalot designs and builds fast, responsive websites that make your offer clear, feel credible on mobile and desktop, and give your business a stronger digital foundation.",
    audience: "Small businesses, SMEs, organisations, NGOs, startups and creators",
    whoFor: [
      "Small businesses that need a professional website instead of a generic template.",
      "Zurich and Swiss SMEs that want clear web design, strong structure and reliable implementation.",
      "Organisations, NGOs and creators that need content, events, services or campaigns presented clearly.",
    ],
    included: [
      "Responsive web design and development",
      "Homepage and service/page structure",
      "Contact forms and clear calls to action",
      "Basic technical SEO, metadata and accessibility checks",
      "Launch support, analytics setup and handover guidance",
    ],
    useCases: [
      "A new small business website",
      "A redesign for an outdated website",
      "A bilingual website for a Zurich service business",
      "A campaign, event or organisation website",
    ],
    process: [
      "Clarify goals, audience, content and required pages.",
      "Plan the sitemap, page structure and visual direction.",
      "Build the responsive website with SEO and performance foundations.",
      "Review, polish, launch and hand over the site.",
    ],
    faqs: [
      {
        question: "Can Twixalot redesign an existing website?",
        answer:
          "Yes. Twixalot can improve an existing website's design, mobile experience, content structure, technical foundation, speed and SEO setup.",
      },
      {
        question: "Do you build websites for Zurich businesses?",
        answer:
          "Yes. Twixalot works with businesses in Zurich and across Switzerland, as well as international clients who need a professional digital presence.",
      },
      {
        question: "Can the website be editable?",
        answer:
          "Yes. If you need to update pages, news, services, media or events yourself, Twixalot can include a CMS structure.",
      },
    ],
    related: [
      { label: "SEO optimisation", href: "/services/seo-optimization" },
      { label: "Website maintenance", href: "/services/website-maintenance" },
      { label: "Estimate your website", href: "/pricing#estimate-calculator" },
    ],
    germanTerms: ["Website erstellen lassen in Zürich", "Webdesign für KMU", "Webentwickler in Zürich"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Websites",
    metaTitle: "E-Commerce Website Switzerland",
    metaDescription:
      "E-commerce websites and online shop foundations for Swiss small businesses that need product catalogues, payments and a polished buying experience.",
    h1: "E-Commerce Websites And Online Shops For Swiss Businesses",
    eyebrow: "E-Commerce",
    intro:
      "Twixalot builds e-commerce websites and product-focused web experiences that help small businesses present products clearly, support payments or enquiries, and create a smoother buying path.",
    audience: "Small shops, product businesses, creators and Swiss SMEs",
    whoFor: [
      "Small businesses that want to sell products or services online.",
      "Creators and brands that need a polished product catalogue.",
      "Swiss SMEs that need a clearer online-shop foundation before adding more integrations.",
    ],
    included: [
      "Product catalogue or storefront structure",
      "Responsive product and category pages",
      "Payment or enquiry flow planning",
      "Basic SEO for product and category pages",
      "Analytics, handover and launch support",
    ],
    useCases: [
      "Online shop erstellen lassen for a small Swiss brand",
      "Product catalogue with enquiry forms",
      "Digital product or service checkout",
      "E-commerce redesign for mobile conversion",
    ],
    process: [
      "Map the product range, payment needs and fulfilment flow.",
      "Plan catalogue structure, filters, content and customer journey.",
      "Build the storefront and connect required tools.",
      "Test mobile checkout, forms, metadata and launch readiness.",
    ],
    faqs: [
      {
        question: "Can Twixalot build a full online shop?",
        answer:
          "Yes. Twixalot can build e-commerce websites with product catalogues, product pages, payments, enquiry flows and content management depending on the project.",
      },
      {
        question: "Do you work with small product businesses?",
        answer:
          "Yes. The e-commerce work is a good fit for small businesses, creators and SMEs that need a professional shop without unnecessary complexity.",
      },
      {
        question: "Can SEO be included for products?",
        answer:
          "Yes. Product and category pages can include titles, descriptions, structured content and technical SEO foundations.",
      },
    ],
    related: [
      { label: "Website design", href: "/services/websites" },
      { label: "SEO optimisation", href: "/services/seo-optimization" },
      { label: "Estimate your online shop", href: "/pricing#estimate-calculator" },
    ],
    germanTerms: ["Online-Shop erstellen lassen", "Webdesign für kleine Unternehmen Schweiz"],
  },
  {
    slug: "booking-systems",
    title: "Booking System Websites",
    metaTitle: "Booking System Website Switzerland",
    metaDescription:
      "Booking system websites for service businesses, events and organisations in Switzerland that need forms, scheduling flows and custom digital workflows.",
    h1: "Booking System Websites For Services, Events And Organisations",
    eyebrow: "Booking Systems",
    intro:
      "Twixalot builds booking flows and website systems that help people request appointments, register for events, send structured enquiries or move through a custom service process.",
    audience: "Service businesses, event teams, organisations and SMEs",
    whoFor: [
      "Service businesses that need appointment or consultation requests.",
      "Organisations that manage events, registrations or application flows.",
      "Teams that have outgrown a simple contact form and need better structure.",
    ],
    included: [
      "Booking, registration or enquiry flow planning",
      "Custom forms and confirmation flows",
      "Calendar, email or payment integrations where needed",
      "Admin-friendly data structure or CMS editing",
      "Testing for mobile, accessibility and edge cases",
    ],
    useCases: [
      "Buchungssystem für Website",
      "Consultation request flow",
      "Event registration website",
      "Service quote or intake questionnaire",
    ],
    process: [
      "Understand the booking rules, required fields and follow-up process.",
      "Design a clear user flow and admin workflow.",
      "Build the website and connect the right integrations.",
      "Test confirmations, notifications, data handling and launch flow.",
    ],
    faqs: [
      {
        question: "Can the booking system take payments?",
        answer:
          "Yes. Online payments can be included when the project requires them, depending on the payment provider and workflow.",
      },
      {
        question: "Can it connect to calendars or email tools?",
        answer:
          "Yes. Twixalot can connect booking flows to calendars, email notifications or other tools where the integration is appropriate.",
      },
      {
        question: "Is this only for appointments?",
        answer:
          "No. Booking systems can also support event registration, intake forms, quote requests, applications and custom workflows.",
      },
    ],
    related: [
      { label: "Custom website systems", href: "/services" },
      { label: "Website maintenance", href: "/services/website-maintenance" },
      { label: "Estimate a booking system", href: "/pricing#estimate-calculator" },
    ],
    germanTerms: ["Buchungssystem für Website", "Website erstellen lassen in Zürich"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    metaTitle: "Mobile App Developer Zurich & Switzerland",
    metaDescription:
      "Mobile app and cross-platform app development support for startups, organisations and growing projects in Zurich, Switzerland and beyond.",
    h1: "Mobile Apps And App-Like Digital Tools",
    eyebrow: "Mobile Apps",
    intro:
      "Twixalot helps plan and build mobile apps, app-like portals and responsive digital tools for projects that need more than a standard website.",
    audience: "Startups, organisations, creators and growing projects",
    whoFor: [
      "Startups validating a digital product idea.",
      "Organisations that need a member, community or internal app.",
      "Projects that need a mobile-first tool, dashboard or workflow.",
    ],
    included: [
      "Feature planning and product scope",
      "Mobile-first UX and interface design",
      "Cross-platform app or app-like web build planning",
      "API, database or CMS integration where needed",
      "Testing, handover and launch guidance",
    ],
    useCases: [
      "Member or community app",
      "Internal team tool",
      "Mobile dashboard",
      "Prototype for a startup idea",
    ],
    process: [
      "Define the core app workflow and minimum useful feature set.",
      "Plan screens, data, user roles and integrations.",
      "Build the app foundation or mobile-first system.",
      "Test the experience across devices and prepare next steps.",
    ],
    faqs: [
      {
        question: "Do I need a mobile app or a responsive website?",
        answer:
          "It depends on the workflow. Many projects work well as responsive web apps first. Twixalot can help choose the simpler and more useful path.",
      },
      {
        question: "Can you build an MVP?",
        answer:
          "Yes. Twixalot can help shape an MVP around the features needed to test the idea without overbuilding too early.",
      },
      {
        question: "Can the app connect to a website or CMS?",
        answer:
          "Yes. Apps and web tools can connect to APIs, databases or CMS structures depending on the project.",
      },
    ],
    related: [
      { label: "Custom systems", href: "/services" },
      { label: "Booking systems", href: "/services/booking-systems" },
      { label: "Start a project", href: "/contact" },
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    metaTitle: "Website Maintenance Switzerland",
    metaDescription:
      "Website maintenance, support, updates, performance improvements and technical care for small businesses and organisations in Switzerland.",
    h1: "Website Maintenance And Ongoing Support",
    eyebrow: "Maintenance",
    intro:
      "Twixalot provides ongoing website maintenance, updates and technical support so your website stays useful, secure, clear and easier to improve after launch.",
    audience: "Small businesses, SMEs, organisations and website owners",
    whoFor: [
      "Businesses that need small updates handled reliably.",
      "CMS websites that publish content regularly.",
      "Organisations that want technical checks and improvement support after launch.",
    ],
    included: [
      "Content and layout updates",
      "Technical checks and bug fixes",
      "Performance and mobile experience improvements",
      "CMS support and small feature improvements",
      "Security, plugin or dependency guidance where applicable",
    ],
    useCases: [
      "Monthly website care",
      "Post-launch support",
      "Website Wartung for a Swiss SME",
      "Performance and mobile cleanup",
    ],
    process: [
      "Review the current website and maintenance needs.",
      "Agree the right care level and update process.",
      "Handle updates, fixes and improvements in a clear rhythm.",
      "Review larger changes separately when needed.",
    ],
    faqs: [
      {
        question: "Can Twixalot maintain a website it did not build?",
        answer:
          "Often yes. The first step is a technical review to understand the stack, access, risks and whether ongoing support is practical.",
      },
      {
        question: "Are hosting and third-party tools included?",
        answer:
          "Hosting, domains, paid plugins, licences and third-party tools usually remain client-owned and are billed directly to the client.",
      },
      {
        question: "Can maintenance include SEO improvements?",
        answer:
          "Yes. Maintenance can include technical SEO cleanup, content structure improvements, metadata updates and performance fixes.",
      },
    ],
    related: [
      { label: "SEO optimisation", href: "/services/seo-optimization" },
      { label: "Website design", href: "/services/websites" },
      { label: "View care pricing", href: "/pricing#estimate-calculator" },
    ],
    germanTerms: ["Website Wartung", "Website Wartung Schweiz"],
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimisation",
    metaTitle: "SEO Optimisation Zurich & Switzerland",
    metaDescription:
      "Technical SEO, metadata, content structure and performance improvements for websites targeting Zurich, Switzerland and international search visibility.",
    h1: "SEO Optimisation For Clearer, Faster, More Findable Websites",
    eyebrow: "SEO Optimisation",
    intro:
      "Twixalot improves technical SEO, metadata, page structure, internal links, performance foundations and content clarity so your website is easier for people and search engines to understand.",
    audience: "Small businesses, SMEs, organisations and growing websites",
    whoFor: [
      "Businesses whose website does not clearly explain services or location.",
      "Sites missing titles, descriptions, sitemap, robots, canonical URLs or structured data.",
      "Teams that need better local SEO foundations for Zurich or Switzerland.",
    ],
    included: [
      "SEO metadata and canonical review",
      "Sitemap, robots and crawlability checks",
      "Heading, internal-link and content-structure improvements",
      "Image alt text and accessibility checks",
      "Performance and mobile experience recommendations",
    ],
    useCases: [
      "Local SEO cleanup for Zurich service pages",
      "Technical SEO audit and implementation",
      "Content structure for service pages",
      "Metadata and Open Graph cleanup",
    ],
    process: [
      "Audit the current crawlability, metadata, content and page structure.",
      "Prioritise technical and content improvements.",
      "Implement metadata, structured data, internal links and page updates.",
      "Review build output and prepare for Search Console submission.",
    ],
    faqs: [
      {
        question: "Can SEO improvements guarantee rankings?",
        answer:
          "No. SEO cannot guarantee rankings, but strong technical foundations, clear content and useful service pages improve the site's ability to compete.",
      },
      {
        question: "Do you support local SEO for Zurich?",
        answer:
          "Yes. Twixalot can add natural Zurich and Switzerland context, local service pages, metadata and internal links without keyword stuffing.",
      },
      {
        question: "Can SEO be part of a website redesign?",
        answer:
          "Yes. SEO works best when page structure, content, performance and technical implementation are considered during the redesign.",
      },
    ],
    related: [
      { label: "Website design", href: "/services/websites" },
      { label: "Zurich web developer page", href: "/web-developer-zurich" },
      { label: "Discuss SEO improvements", href: "/contact" },
    ],
    germanTerms: ["Webdesign für KMU", "Webentwickler in Zürich", "Website erstellen lassen in Zürich"],
  },
];

export const servicePageBySlug = Object.fromEntries(servicePages.map((page) => [page.slug, page])) as Record<
  string,
  ServicePageData
>;
