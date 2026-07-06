import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, faqJsonLd, ogImage, serviceJsonLd, siteName } from "@/data/seo";

const path = "/web-developer-zurich";

const faqs = [
  {
    question: "Is Twixalot a freelance web developer in Zurich?",
    answer:
      "Twixalot is led by Keita Smith, a Zurich-region software developer who builds websites, web apps, booking flows, e-commerce foundations and custom digital systems for small businesses, organisations and growing projects.",
  },
  {
    question: "Do you only work with clients in Zurich?",
    answer:
      "No. Zurich is local to Twixalot, but the work is not limited by location. Twixalot works with clients in the Zurich region, across Switzerland and internationally.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Twixalot can improve an existing website's design, mobile experience, speed, SEO structure, content flow and technical foundation.",
  },
  {
    question: "Can you build booking systems or e-commerce websites?",
    answer:
      "Yes. Twixalot can build booking flows, structured enquiry forms, product catalogues, online shops, payment-ready experiences and custom workflows depending on the project scope.",
  },
  {
    question: "Do you support German-speaking clients and Swiss search terms?",
    answer:
      "Yes. Twixalot can structure website content for English and German-speaking audiences in Switzerland. This Zurich page and related service pages include natural search wording such as Website erstellen lassen in Zürich, Webdesign für KMU, Webentwickler in Zürich and Webdesigner in Zürich where it helps clients understand the service.",
  },
  {
    question: "Can I get an estimate before contacting you?",
    answer:
      "Yes. You can use the estimate calculator for a rough starting point. The calculator gives a rough, non-binding estimate. Final pricing may be lower or higher depending on the exact scope, content, timeline, integrations, and technical requirements.",
  },
];

const audiences = [
  "Local service businesses that need a professional website clients can trust.",
  "Consultants, independent professionals and small businesses with a clear offer but an outdated online presence.",
  "NGOs, community organisations, events and creative projects that need content presented clearly.",
  "Startups, founders and growing projects that need a practical digital foundation before adding more features.",
  "Existing businesses that rely on Instagram, WhatsApp or referrals but now need a proper website.",
];

const buildOptions = [
  {
    title: "Business Websites",
    description:
      "Clear websites for services, organisations and small businesses that need to explain what they do, show credibility and guide people to enquire.",
  },
  {
    title: "Website Redesigns",
    description:
      "A careful rebuild of an outdated site with stronger structure, clearer copy flow, better mobile behaviour and a more professional first impression.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for campaigns, launches, events or offers where the message needs to be concise, persuasive and easy to act on.",
  },
  {
    title: "Booking Systems",
    description:
      "Booking forms, consultation requests, event registrations and structured enquiry flows that reduce back-and-forth and collect the right details.",
  },
  {
    title: "E-Commerce And Product Catalogues",
    description:
      "Online shops, product catalogues and payment-ready experiences for small brands, creators and product-focused businesses.",
  },
  {
    title: "CMS-Backed Websites",
    description:
      "Editable websites for teams that need to manage services, news, events, people, resources, products or multilingual content after launch.",
  },
  {
    title: "SEO And Performance Improvements",
    description:
      "Technical SEO, metadata, page structure, internal links, image handling and performance improvements that make the site clearer and faster.",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing support, content changes, technical fixes and improvements so the website does not become neglected after launch.",
  },
  {
    title: "Custom Dashboards Or Workflows",
    description:
      "Digital systems, dashboards, portals and internal tools for work that does not fit neatly into a standard marketing website.",
  },
];

const situations = [
  "You have an outdated website that no longer reflects the quality of your business.",
  "You rely on Instagram, WhatsApp or word of mouth but need a proper website people can trust.",
  "You need clients to book appointments, send enquiries or request quotes online.",
  "You want to launch a small online shop or product catalogue.",
  "You need a website that works in English and German.",
  "You need ongoing technical support instead of being left alone after launch.",
];

const reasons = [
  "Practical communication and clear scope before the build gets too complex.",
  "Modern web technology with mobile-first implementation and maintainable structure.",
  "Performance, accessibility and SEO basics considered as part of the build, not as an afterthought.",
  "Support after launch for updates, improvements and technical questions.",
  "Ability to build more than a brochure website when the project needs forms, CMS editing, dashboards or integrations.",
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We clarify the business, audience, current website, content, features, timeline and what success should look like.",
  },
  {
    title: "Estimate And Scope",
    description:
      "You can start with the estimate calculator for a rough guide, then the real scope is reviewed around the actual pages, content and technical needs.",
  },
  {
    title: "Design And Build",
    description:
      "The website or system is structured, designed, built and reviewed with attention to mobile experience, performance and maintainability.",
  },
  {
    title: "Launch And Support",
    description:
      "After testing and final review, the project is launched with handover guidance and optional ongoing support for updates or improvements.",
  },
];

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Web Developer Zurich | Websites, Apps & Digital Systems",
    description:
      "Twixalot builds websites, redesigns, booking systems, e-commerce platforms, and custom digital tools for small businesses, organisations, and growing projects in Zurich, Switzerland, and beyond.",
    path,
  }),
  title: {
    absolute: "Web Developer Zurich | Websites, Apps & Digital Systems | Twixalot",
  },
  keywords: [
    "web developer Zurich",
    "freelance web developer Zurich",
    "web designer Zurich",
    "web design Zurich",
    "Website erstellen lassen in Zürich",
    "Webentwickler in Zürich",
    "Webdesigner in Zürich",
    "Webdesign für KMU",
  ],
  openGraph: {
    title: "Web Developer Zurich | Websites, Apps & Digital Systems | Twixalot",
    description:
      "Twixalot builds websites, redesigns, booking systems, e-commerce platforms, and custom digital tools for small businesses, organisations, and growing projects in Zurich, Switzerland, and beyond.",
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
    title: "Web Developer Zurich | Websites, Apps & Digital Systems | Twixalot",
    description:
      "Twixalot builds websites, redesigns, booking systems, e-commerce platforms, and custom digital tools for small businesses, organisations, and growing projects in Zurich, Switzerland, and beyond.",
    images: [ogImage],
  },
};

export default function WebDeveloperZurichPage() {
  return (
    <>
      <Header />
      <main className="work-atmosphere min-h-screen overflow-hidden bg-[#010613] text-white">
        <JsonLd
          data={[
            serviceJsonLd({
              title: "Web Developer Zurich",
              description:
                "Web design, web development, redesigns, booking systems, e-commerce and custom digital systems for Zurich-region clients, Swiss organisations and international projects.",
              path,
              audience: "Small businesses, organisations, NGOs, startups, creators and growing projects",
            }),
            faqJsonLd(faqs, path),
          ]}
        />

        <section className="relative pb-16 pt-36 sm:pt-44 lg:pb-24">
          <div className="twix-container grid gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-end">
            <div className="twix-fade-up max-w-4xl">
              <p className="twix-eyebrow">Web Developer Zurich</p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Websites And Digital Systems For Zurich Businesses
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Twixalot helps small businesses, organisations, founders, and growing projects in the Zurich region
                build websites and digital tools that are clear, fast, mobile-friendly, and easy to maintain.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                Whether you need a new website, a redesign, a booking flow, an online shop, or a custom system, the goal
                is simple: create something that looks professional, explains your offer clearly, and keeps working
                after launch.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-13 items-center justify-center gap-2 bg-white px-6 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)]"
                >
                  Start a project
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <Link
                  href="/pricing#estimate-calculator"
                  className="inline-flex min-h-13 items-center justify-center border border-white/18 px-6 font-semibold text-white transition hover:border-white/42 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
                >
                  Estimate your website
                </Link>
              </div>
            </div>

            <aside className="twix-fade-up rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [animation-delay:120ms]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/44">Local, not limited</p>
              <p className="mt-4 text-base leading-8 text-white/68">
                Zurich is local to Twixalot, but the work is not limited by location. Twixalot is based in the Zurich
                region and works with clients across Switzerland and beyond.
              </p>
            </aside>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Who This Is For"
              heading="Who Twixalot Helps"
              intro="The best fit is a client who needs a clear, useful digital presence or workflow, not a generic website dropped into place and forgotten."
            />
            <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {audiences.map((audience) => (
                <InfoCard key={audience}>{audience}</InfoCard>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="What I Can Build"
              heading="Web Design, Development And Digital Systems"
              intro="The work can stay focused as a website or grow into booking flows, e-commerce, CMS editing, dashboards and integrations."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {buildOptions.map((item) => (
                <article key={item.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                  <h2 className="text-xl font-semibold leading-tight text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionIntro
              label="Common Situations"
              heading="Common Reasons Clients Reach Out"
              intro="The starting point is usually practical: something needs to look clearer, work better, reduce manual effort or support the next stage of the project."
            />
            <div className="grid gap-4">
              {situations.map((situation) => (
                <InfoCard key={situation}>{situation}</InfoCard>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionIntro
              label="Why Twixalot"
              heading="Why Work With Twixalot?"
              intro="Twixalot is not trying to be a large agency. The value is careful communication, practical engineering and a website or system that is shaped around the real need."
            />
            <div className="grid gap-3">
              {reasons.map((reason) => (
                <InfoCard key={reason}>{reason}</InfoCard>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Process"
              heading="How A Project Usually Works"
              intro="A clear process keeps the project grounded, especially when the work includes content, forms, CMS editing or custom workflows."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-mono text-sm text-white/40">0{index + 1}</p>
                  <h2 className="mt-5 text-xl font-semibold leading-tight text-white">{step.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-3xl rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-white/58">
              The calculator gives a rough, non-binding estimate. Final pricing may be lower or higher depending on the
              exact scope, content, timeline, integrations, and technical requirements.
            </p>
          </div>
        </section>

        <section className="relative py-12 sm:py-20" id="faq">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionIntro
              label="FAQ"
              heading="Zurich Web Developer FAQ"
              intro="A few practical questions before starting a website, redesign or digital system project."
            />
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                  <h2 className="text-xl font-semibold leading-tight text-white">{faq.question}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-24 pt-12 sm:pb-32">
          <div className="twix-container">
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(226,7,86,0.18),transparent_24rem),radial-gradient(circle_at_90%_80%,rgba(11,79,217,0.18),transparent_26rem)]" />
              <div className="relative">
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                  Need A Website Or Digital System That Works Clearly?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                  Tell Twixalot what you are building, what needs to improve, or where your current website is holding
                  you back. You can start with a short message or use the estimate calculator for a rough starting
                  point.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/services/websites" className="text-sm font-semibold text-white underline decoration-[var(--color-magenta)] underline-offset-8">
                    Website design service
                  </Link>
                  <Link href="/services/seo-optimization" className="text-sm font-semibold text-white underline decoration-[var(--color-magenta)] underline-offset-8">
                    SEO optimisation
                  </Link>
                  <Link href="/work" className="text-sm font-semibold text-white underline decoration-[var(--color-magenta)] underline-offset-8">
                    View website work
                  </Link>
                </div>
              </div>
              <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 font-semibold text-[#03143c] transition hover:bg-white/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)]"
                >
                  Contact Twixalot
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <Link
                  href="/pricing#estimate-calculator"
                  className="inline-flex min-h-12 items-center justify-center border border-white/18 px-5 font-semibold text-white transition hover:border-white/42 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
                >
                  Estimate your website
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionIntro({ label, heading, intro }: { label: string; heading: string; intro: string }) {
  return (
    <div className="twix-fade-up max-w-3xl">
      <p className="twix-eyebrow">{label}</p>
      <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">{heading}</h2>
      <p className="mt-5 text-base leading-8 text-white/62">{intro}</p>
    </div>
  );
}

function InfoCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-white/66">
      <Check aria-hidden="true" className="mt-1 shrink-0 text-[var(--color-electric)]" size={16} />
      <span>{children}</span>
    </div>
  );
}
