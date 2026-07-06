import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Check,
  Code2,
  LifeBuoy,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { processOverview, processSteps } from "@/data/processSteps";
import { servicePages } from "@/data/servicePages";
import { startingPoints } from "@/data/site";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Web Design, Development & Digital Services",
  description:
    "Twixalot services for web design, web development, e-commerce, booking systems, mobile apps, SEO, website maintenance and custom digital systems in Zurich and Switzerland.",
  path: "/services",
});

const buildServices = [
  {
    title: "Websites & Landing Pages",
    description:
      "For businesses, campaigns, events, and organisations that need a credible, polished online presence without unnecessary complexity.",
    icon: MonitorSmartphone,
  },
  {
    title: "Content-Managed Platforms",
    description:
      "For teams that need to update pages, news, media, events, people, resources, or galleries without calling a developer for every change.",
    icon: Blocks,
  },
  {
    title: "Custom Web Systems",
    description:
      "For booking flows, dashboards, portals, directories, admin tools, and workflows that do not fit neatly into a normal website.",
    icon: Code2,
  },
  {
    title: "Ongoing Support & Improvements",
    description:
      "For updates, fixes, small features, content support, hosting guidance, and continued technical help after launch.",
    icon: LifeBuoy,
  },
];

const inclusions = [
  "Responsive website design",
  "CMS setup",
  "News, blog, media, or event management",
  "Forms and contact flows",
  "Booking or registration flows",
  "User dashboards or admin tools",
  "SEO basics and metadata",
  "Domain and deployment setup",
  "Analytics setup if needed",
  "Training or handover",
  "Ongoing maintenance",
];

const bestFit = [
  "You want a website that feels custom, not template-like.",
  "You need content, media, events, or pages your team can update.",
  "You need someone who understands both design details and technical structure.",
  "You are building something that may grow beyond a simple brochure website.",
  "You want the technical side explained clearly without unnecessary jargon.",
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="work-atmosphere min-h-screen overflow-hidden bg-[#010613] text-white">
        <section className="relative pb-16 pt-36 sm:pt-44 lg:pb-24">
          <div className="twix-container grid gap-12 lg:grid-cols-[1fr_0.62fr] lg:items-end">
            <div className="twix-fade-up max-w-4xl">
              <p className="twix-eyebrow">Services</p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Websites, Platforms And Systems Built Around How Your Business Actually Works
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                From polished launch websites to content platforms, booking flows, member portals, and custom internal
                tools, Twixalot helps small teams turn messy digital needs into clean, usable web experiences.
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
                  href="#build-paths"
                  className="inline-flex min-h-13 items-center justify-center border border-white/18 px-6 font-semibold text-white transition hover:border-white/42 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
                >
                  View build paths
                </Link>
              </div>
            </div>

            <div className="twix-fade-up relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [animation-delay:120ms]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(226,7,86,0.16),transparent_16rem),radial-gradient(circle_at_90%_85%,rgba(11,79,217,0.16),transparent_18rem)]"
                aria-hidden="true"
              />
              <div className="relative">
                <Sparkles aria-hidden="true" className="text-[var(--color-magenta)]" size={22} />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white/46">
                  Built For Real Workflows
                </p>
                <p className="mt-4 text-base leading-8 text-white/68">
                  The work can start simple or grow into a platform. The shape comes from what your team needs to
                  publish, manage, automate, explain, sell, or support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="What I Build"
              heading="Digital Builds That Go Beyond A Basic Template"
              intro="Some clients need a fast, credible web presence. Others need a platform their team can update, or a custom workflow that saves time behind the scenes. The right build depends on what the business actually needs to do."
            />
            <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
              {buildServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="twix-fade-up group relative h-full overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_0%,rgba(226,7,86,0.12),transparent_13rem),radial-gradient(circle_at_92%_92%,rgba(11,79,217,0.12),transparent_13rem)]"
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <Icon aria-hidden="true" className="text-white/86" size={24} />
                      <h3 className="mt-6 text-xl font-semibold leading-tight text-white">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/62">{service.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Dedicated Services"
              heading="Explore The Core Service Pages"
              intro="Each service page explains who it is for, what can be included, typical use cases, process and practical FAQs."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-[8px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/24 hover:bg-white/[0.065] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
                >
                  <p className="twix-eyebrow">{service.eyebrow}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{service.metaDescription}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    View service
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="build-paths" className="relative scroll-mt-28 py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Choose Your Build Path"
              heading="Practical Ways To Start"
              intro="Every project starts with a clear build path. These options show the usual starting points before the final scope is confirmed."
            />
            <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
              {startingPoints.map((item, index) => (
                <article
                  key={item.title}
                  className="twix-fade-up relative min-h-72 bg-[linear-gradient(155deg,rgba(6,14,36,0.9),rgba(2,8,23,0.82))] p-5"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(226,7,86,0.08),transparent_12rem),radial-gradient(circle_at_90%_90%,rgba(11,79,217,0.11),transparent_12rem)]"
                    aria-hidden="true"
                  />
                  <div className="relative flex min-h-full flex-col">
                    <div className="flex min-h-12 items-start justify-between gap-4 font-mono text-[0.7rem] leading-5 text-white/46">
                      <span>0{index + 1}</span>
                      <span className="max-w-32 text-right text-white/72">{item.price}</span>
                    </div>
                    <h3 className="mt-10 text-xl font-semibold leading-tight text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58">
              Final pricing depends on scope, timeline, integrations, content needs and support requirements.
            </p>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label={processOverview.label}
              heading={processOverview.heading}
              intro={processOverview.intro}
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="twix-fade-up relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-6"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div className="flex items-center justify-between font-mono text-sm text-white/42">
                      <span>0{index + 1}</span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#032059]/30 text-white/82">
                        <Icon aria-hidden="true" size={20} />
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionIntro
              label="What Can Be Included"
              heading="The Right Pieces For The Job"
              intro="Each build is scoped around what needs to work on launch day and what your team should be able to manage afterwards."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div
                  key={item}
                  className="flex min-h-14 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium leading-6 text-white/72"
                >
                  <Check aria-hidden="true" className="shrink-0 text-[var(--color-magenta)]" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="twix-fade-up max-w-3xl">
              <p className="twix-eyebrow">Best Fit</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                For Teams That Need More Than A Nice-Looking Page
              </h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                Twixalot is a good fit when you need a website that looks custom, a CMS your team can actually use, or
                a system that has to support how your organisation works behind the scenes.
              </p>
            </div>
            <div className="twix-fade-up rounded-[8px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] [animation-delay:90ms]">
              <ul className="grid gap-3">
                {bestFit.map((item) => (
                  <li key={item} className="flex gap-3 rounded-[6px] bg-[#050b1d]/72 p-4 text-sm leading-7 text-white/68">
                    <Check aria-hidden="true" className="mt-1 shrink-0 text-[var(--color-electric)]" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative pb-24 pt-12 sm:pb-32">
          <div className="twix-container">
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(226,7,86,0.18),transparent_24rem),radial-gradient(circle_at_90%_80%,rgba(11,79,217,0.18),transparent_26rem)]"
                aria-hidden="true"
              />
              <div className="relative">
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                  Not Sure Which Path Fits?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                  Tell me what you are trying to build, and I&apos;ll help you figure out whether you need a launch
                  website, a content platform, or a custom system.
                </p>
              </div>
              <Link
                href="/contact"
                className="relative mt-8 inline-flex min-h-12 items-center gap-2 bg-white px-5 font-semibold text-[#03143c] transition hover:bg-white/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)] lg:mt-0"
              >
                Start a project
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
