export type WebsiteProjectGroup = "modern" | "archive";

export type WebsiteProject = {
  slug: string;
  title: string;
  image: string;
  categories: string[];
  group: WebsiteProjectGroup;
  summary: string;
  description: string;
  role: string;
  whatWasBuilt?: string;
  keyFeatures?: string[];
  tags: string[];
  status: string;
  url?: string;
};

export const websiteProjects: WebsiteProject[] = [
  {
    slug: "animae-caribe",
    title: "Animae Caribe",
    image: "/images/projects/animae-caribe.webp",
    categories: ["Creative / Events", "Content Platform", "Modern Build"],
    group: "modern",
    summary:
      "A content-managed digital ecosystem for Animae Caribe, connecting the umbrella brand, House experience and Festival presence.",
    description:
      "Animae Caribe required more than a simple website. The project brought together multiple parts of the brand ecosystem, including an umbrella landing experience, House content, Festival pages, past editions, events, partners, showreels, news/media and Sanity-powered content management.",
    role: "Frontend development, CMS architecture, content modelling, animation direction and deployment support.",
    tags: ["Next.js", "React", "TypeScript", "Sanity", "Vercel"],
    status: "Featured modern build",
    url: "https://www.animaecaribe.com/",
  },
  {
    slug: "zoltan-hair-zurich",
    title: "Zoltan Hair Zurich",
    image: "/images/projects/zoltan-hair-zurich.webp",
    categories: ["Business", "Website", "Content Platform", "Modern Build"],
    group: "modern",
    summary: "A polished bilingual website and CMS upgrade for a Zurich hair studio.",
    description:
      "Zoltan Hair Zurich is being shaped into a bilingual English/German business website where key content can be edited by the client, including services, prices, studio content, good-to-know information, page text and images.",
    role: "Website development, bilingual content structure, CMS architecture and frontend implementation.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CMS"],
    status: "Featured modern build / in progress",
    url: "https://www.zoltanhairzurich.ch/",
  },
  {
    slug: "psott",
    title: "Private Sector Organisation of Trinidad and Tobago",
    image: "/images/projects/private-sector-organisation-tt.webp",
    categories: ["Business", "Organisation", "Content Platform", "Modern Build"],
    group: "modern",
    summary:
      "A structured organisational website for private sector news, updates, membership and public information.",
    description:
      "A public-facing organisation website supporting business communication, updates, member information, events and calls to action.",
    role: "Website implementation, content structure and technical support.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Vercel"],
    status: "Featured modern build",
    url: "https://psott.co/",
  },
  {
    slug: "queertt",
    title: "QueerTT",
    image: "/images/projects/queertt.webp",
    categories: ["Community", "Content Platforms", "News & Opportunities"],
    group: "archive",
    summary:
      "A queer community hub for news, events, community development and opportunities in Trinidad and Tobago.",
    description:
      "QueerTT brings together queer-focused news, events, community updates, resources and job/opportunity content, with a focus on Trinidad and Tobago while also allowing space for relevant international LGBTQ+ stories.",
    role:
      "Website/platform development, content structure, community-focused information architecture and technical implementation.",
    whatWasBuilt:
      "A content-driven community platform for publishing news, events, resources and opportunity-related content.",
    keyFeatures: [
      "Queer news publishing",
      "Events and community updates",
      "Job/opportunity content",
      "Resource/content organisation",
      "Community-focused information architecture",
      "Responsive website experience",
    ],
    tags: ["CMS", "Community Platform", "News", "Events", "Opportunities", "Responsive Design"],
    status: "Selected build",
    url: "https://queertt.com/",
  },
  {
    slug: "hirning",
    title: "hirning.ch",
    image: "/images/projects/hirning.webp",
    categories: ["Professional Services", "Website"],
    group: "archive",
    summary: "A professional web presence for project management training and consulting.",
    description:
      "A clean service-focused website for a consultant, presenting expertise, services and contact paths in a professional way.",
    role: "Website development, page structure and responsive implementation.",
    tags: ["WordPress", "Website", "Responsive Design", "Professional Services"],
    status: "Earlier build",
    url: "https://hirning.ch/",
  },
  {
    slug: "pmatt",
    title: "PMATT",
    image: "/images/projects/pmatt.webp",
    categories: ["Professional Association", "Content Platform"],
    group: "archive",
    summary: "A professional association website with structured public information and member-related content.",
    description:
      "A CMS-backed website for the Pest Management Association of Trinidad and Tobago, supporting public information, courses, merchants, newsletters and association content.",
    role: "Website development, WordPress implementation and technical support.",
    tags: ["WordPress", "CMS", "Association Website"],
    status: "Earlier build",
  },
  {
    slug: "pridett",
    title: "PrideTT",
    image: "/images/projects/pridett.webp",
    categories: ["Community", "Website"],
    group: "archive",
    summary: "A community website for Trinidad and Tobago's Pride organisation.",
    description:
      "A community-focused web presence supporting events, news, history, community information and organisational visibility.",
    role: "Website development and content structure.",
    tags: ["WordPress", "Community Website", "Events"],
    status: "Earlier build",
    url: "https://pridett.com/",
  },
  {
    slug: "ectercon",
    title: "Ectercon",
    image: "/images/projects/ectercon.webp",
    categories: ["Business", "Website"],
    group: "archive",
    summary: "A business website for an ecological termite control provider.",
    description:
      "A service-focused business website presenting termite control services, contact information and calls to action for inspection and estimates.",
    role: "Website development and responsive implementation.",
    tags: ["WordPress", "Business Website", "Service Website"],
    status: "Earlier build",
  },
  {
    slug: "bohemian-girl-boutique",
    title: "Bohemian Girl Boutique",
    image: "/images/projects/bohemian-girl-boutique.webp",
    categories: ["E-commerce", "Fashion"],
    group: "archive",
    summary: "An e-commerce fashion website for a boutique brand.",
    description:
      "A retail-focused website presenting products, categories, shopping flows and brand content for a fashion boutique.",
    role: "Website/e-commerce implementation and storefront structure.",
    tags: ["WordPress", "WooCommerce", "E-commerce", "Fashion"],
    status: "Earlier build",
  },
  {
    slug: "live-well-eat-smart",
    title: "Live Well Eat Smart",
    image: "/images/projects/livewelleatsmart.webp",
    categories: ["Health & Wellness", "Website"],
    group: "archive",
    summary: "A health and wellness website for a nutrition-focused brand.",
    description:
      "A content-led web presence for a health and nutrition brand, presenting the story, journey and services in a clear responsive layout.",
    role: "Website development and content structure.",
    tags: ["WordPress", "Health Website", "Wellness"],
    status: "Earlier build",
  },
  {
    slug: "my-virtual-office",
    title: "My Virtual Office",
    image: "/images/projects/my-virtual-office.webp",
    categories: ["Business Services", "Website"],
    group: "archive",
    summary: "A business services website for a virtual administrative support provider.",
    description:
      "A service website presenting virtual administrative support, contact details and company information with a technology-oriented visual style.",
    role: "Website development and responsive implementation.",
    tags: ["WordPress", "Business Website", "Service Website"],
    status: "Earlier build",
  },
  {
    slug: "roaming-gnome-tt",
    title: "Roaming Gnome TT",
    image: "/images/projects/roaminggnomett.webp",
    categories: ["Consulting", "Website"],
    group: "archive",
    summary: "A consulting website for a sustainable social enterprise brand.",
    description:
      "A small business website presenting consulting services, social impact messaging and calls to action.",
    role: "Website development and visual implementation.",
    tags: ["WordPress", "Consulting Website", "Social Enterprise"],
    status: "Earlier build",
  },
  {
    slug: "rudolph-hanamji",
    title: "Rudolph Hanamji",
    image: "/images/projects/rudolphhanamji.com.webp",
    categories: ["Personal Brand", "Website"],
    group: "archive",
    summary: "A personal brand website for a consultant/public-facing professional.",
    description:
      "A personal website presenting identity, projects, consultations and contact pathways.",
    role: "Website development and visual implementation.",
    tags: ["WordPress", "Personal Brand", "Website"],
    status: "Earlier build",
  },
  {
    slug: "tjshana-rai",
    title: "Tjshana Rai",
    image: "/images/projects/tjshanarai.webp",
    categories: ["E-commerce", "Beauty"],
    group: "archive",
    summary: "A skincare botanicals website with soft visual branding and product-focused presentation.",
    description:
      "A brand and shop-oriented website for a skincare botanicals business, combining product presentation, soft visuals and simple navigation.",
    role: "Website/e-commerce implementation and responsive design.",
    tags: ["WordPress", "WooCommerce", "E-commerce", "Beauty"],
    status: "Earlier build",
  },
];
