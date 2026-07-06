import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, faqJsonLd, serviceJsonLd } from "@/data/seo";

const path = "/web-developer-zurich";
const faqs = [
  {
    question: "Is Twixalot a freelance web developer in Zurich?",
    answer:
      "Twixalot is led by Keita Smith, a Zurich-area software developer who builds websites, web apps and custom digital systems for small businesses, organisations and growing projects.",
  },
  {
    question: "Can you support German search terms like Website erstellen lassen in Zürich?",
    answer:
      "Yes. German search wording can be included naturally in page structure, service pages and FAQs when it helps Swiss clients understand the offer.",
  },
  {
    question: "Do you only work with Zurich clients?",
    answer:
      "No. Twixalot works with clients in Zurich, across Switzerland and internationally. The Zurich page exists because many local clients search for web design and web development services by location.",
  },
];

const services = [
  "Web design and web development for small businesses",
  "Next.js websites and CMS-backed content platforms",
  "E-commerce websites and product catalogues",
  "Booking systems and structured enquiry flows",
  "Website maintenance, performance and SEO improvements",
  "Custom digital systems, dashboards and integrations",
];

const examples = [
  "A Zurich salon or service business that needs a modern bilingual website.",
  "A Swiss SME replacing an outdated site with a clearer, faster web presence.",
  "An organisation that needs events, people, news or resources managed through a CMS.",
  "A growing project that needs a booking flow, dashboard or custom tool.",
];

export const metadata: Metadata = createPageMetadata({
  title: "Web Developer Zurich | Web Design & Websites for Swiss SMEs",
  description:
    "Freelance web developer in Zurich for web design, websites, Next.js development, booking systems, e-commerce and digital systems for Swiss SMEs.",
  path,
});

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
                "Web design, web development, Next.js websites, booking systems, e-commerce and custom digital systems for Zurich and Swiss clients.",
              path,
              audience: "Zurich small businesses, Swiss SMEs, organisations, startups and creators",
            }),
            faqJsonLd(faqs, path),
          ]}
        />
        <section className="relative pb-16 pt-36 sm:pt-44 lg:pb-24">
          <div className="twix-container grid gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-end">
            <div className="twix-fade-up max-w-4xl">
              <p className="twix-eyebrow">Web Developer Zurich</p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Web Design And Development For Zurich Businesses
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Twixalot helps small businesses, Swiss SMEs, organisations, startups and creators in Zurich and across
                Switzerland build fast websites, booking systems, e-commerce platforms and custom digital systems.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                If you are searching for a Webentwickler in Zürich, Webdesigner in Zürich, Webdesign für KMU or want to
                Website erstellen lassen in Zürich, the goal is simple: a website that explains what you do clearly and
                works reliably after launch.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-13 items-center justify-center gap-2 bg-white px-6 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)]"
                >
                  Start a Zurich project
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
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/44">Local relevance</p>
              <p className="mt-4 text-base leading-8 text-white/68">
                Zurich-area support without pretending to be a large agency. Clear communication, practical scope and
                web development that can grow with the business.
              </p>
            </aside>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Services"
              heading="Web Design, Development And Digital Systems"
              intro="The work can start as a focused website or grow into a CMS, online shop, booking system or custom workflow."
            />
            <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="flex gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-white/66">
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-[var(--color-electric)]" size={16} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionIntro
              label="Examples"
              heading="Useful Zurich And Switzerland Project Shapes"
              intro="Local SEO works best when the page reflects real services and real client needs rather than stuffing keywords into generic copy."
            />
            <div className="grid gap-4">
              {examples.map((example) => (
                <article key={example} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-white/66">
                  {example}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20" id="faq">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionIntro
              label="FAQ"
              heading="Zurich Web Developer FAQ"
              intro="A few practical questions about local web design and development support."
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
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">Need A Zurich Website That Works Clearly?</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                  Start with a short message about your business, current website, ideal timeline and what needs to
                  improve.
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
              <Link
                href="/contact"
                className="relative mt-8 inline-flex min-h-12 items-center gap-2 bg-white px-5 font-semibold text-[#03143c] transition hover:bg-white/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)] lg:mt-0"
              >
                Contact Twixalot
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
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
