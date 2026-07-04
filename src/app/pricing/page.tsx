import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Check,
  Clock3,
  FileText,
  Languages,
  LifeBuoy,
  Palette,
  PlugZap,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { PricingTierCard } from "@/components/pricing/PricingTierCard";

export const metadata: Metadata = {
  title: "Pricing | Twixalot",
  description:
    "Transparent starting points and a project estimate calculator for Twixalot websites, content platforms and custom digital systems.",
};

const pricingTiers = [
  {
    title: "Launch Website",
    price: "From CHF 2\u2019900",
    description:
      "A focused website or landing page for a small business, campaign, event or early-stage idea that needs to look credible fast.",
    bestFor: ["Small business websites", "Landing pages", "Campaign pages", "Simple service websites"],
  },
  {
    title: "Signature Website",
    price: "From CHF 6\u2019900",
    description:
      "A custom branded website with stronger visual direction, responsive design, polished interactions and launch support.",
    bestFor: [
      "Premium business websites",
      "Personal brands",
      "Studios and consultants",
      "Organisations that need a stronger first impression",
    ],
    featured: true,
  },
  {
    title: "Content Platform",
    price: "From CHF 9\u2019500",
    description:
      "A content-managed website for teams that need to update pages, news, events, media, people, services or resources without relying on a developer for every change.",
    bestFor: ["CMS websites", "News and media sections", "Event websites", "Community platforms", "Bilingual content"],
  },
  {
    title: "Custom System",
    price: "Scoped after discovery",
    description:
      "Dashboards, portals, booking flows, internal tools and workflow systems designed around how your organisation actually works.",
    bestFor: ["Booking systems", "Dashboards", "Portals", "Workflow tools", "Internal admin systems", "API integrations"],
  },
  {
    title: "Care And Support",
    price: "From CHF 290 per month",
    description:
      "Ongoing updates, small fixes, technical checks, content support and improvements after launch.",
    bestFor: ["Post-launch updates", "Small fixes", "Technical checks", "Content support", "Incremental improvements"],
    note: "Hosting, domains, paid plugins, licences and third-party services remain client-owned and are billed directly to the client.",
  },
];

const priceFactors = [
  {
    title: "Scope And Page Count",
    description: "More pages usually mean more structure, design states, copy handling and review time.",
    icon: FileText,
  },
  {
    title: "Design Complexity",
    description: "Custom visual systems, brand polish and detailed responsive work add depth to the design phase.",
    icon: Palette,
  },
  {
    title: "CMS And Content Structure",
    description: "Editable pages, people, resources, events or media need clean content models and handover.",
    icon: Blocks,
  },
  {
    title: "Animations And Visual Polish",
    description: "Subtle motion can be lightweight, while cinematic interaction needs more careful build and testing.",
    icon: Sparkles,
  },
  {
    title: "Integrations And Automations",
    description: "Forms, calendars, payments, APIs and workflow connections affect both build and QA effort.",
    icon: PlugZap,
  },
  {
    title: "Content Support",
    description: "Final copy, rewriting, content planning and page population can materially change project scope.",
    icon: Languages,
  },
  {
    title: "Timeline And Launch Pressure",
    description: "Rush work compresses planning, review and testing, so it needs priority scheduling.",
    icon: Clock3,
  },
  {
    title: "Training And Ongoing Support",
    description: "Handover sessions, documentation and care plans keep the system useful after launch.",
    icon: LifeBuoy,
  },
];

const carePlans = [
  {
    title: "No Monthly Care",
    subtitle: "Project Handover Only",
    price: "CHF 0 per month",
    bestFor: "Finished websites that rarely change, or clients who prefer to request updates only when needed.",
    chooseIf: [
      "Your website is mostly static.",
      "You do not expect regular changes.",
      "You are comfortable requesting future work separately.",
      "You only need the project delivered and handed over.",
    ],
    includes: ["Final launch support", "Basic handover", "Basic documentation where appropriate", "Future work quoted separately"],
    suitedFor: ["Static websites", "Finished handovers", "As-needed updates"],
    limitation:
      "Does not include regular technical checks, ongoing content updates, priority support or included monthly update time.",
    note: "Good for simple sites that do not need regular attention after launch.",
  },
  {
    title: "Basic Care",
    subtitle: "Peace Of Mind For Simple Websites",
    price: "CHF 290 per month",
    bestFor: "Small websites that need light ongoing support, occasional fixes and someone technical keeping an eye on things.",
    chooseIf: [
      "Your site is small and does not change often.",
      "You want light technical support after launch.",
      "You may need occasional text, image or layout fixes.",
      "You want a safer option than only asking for help when something breaks.",
    ],
    includes: [
      "Monthly technical check",
      "Minor bug fixes",
      "Small text, image or layout updates",
      "Email support",
      "Up to 1 hour of small updates per month",
    ],
    suitedFor: ["Launch websites", "Simple business websites", "Landing pages", "Small service websites"],
    limitation: "Does not include new full pages every month, major redesign work, complex new features or advanced integrations.",
    note: "Choose this when your site is simple, but you still want light ongoing help.",
  },
  {
    title: "Standard Care",
    subtitle: "Regular Support For CMS Websites",
    price: "CHF 490 per month",
    bestFor: "Websites and content platforms that need regular updates, CMS help, small improvements and more active support.",
    chooseIf: [
      "Your website has a CMS.",
      "You publish or update content regularly.",
      "You may need help formatting pages, news, events, services or resources.",
      "You want small improvements handled without starting a new quote every time.",
    ],
    includes: [
      "Everything in Basic Care",
      "Up to 2.5 hours of updates per month",
      "CMS content support",
      "Small design or layout improvements",
      "Quarterly review of issues or improvements",
    ],
    suitedFor: ["Signature websites", "CMS websites", "Organisation websites", "Community websites", "Content platforms"],
    limitation: "Does not include large new features, major redesigns, complex integrations, full content writing or campaign management.",
    note: "Choose this when your website is part of your regular communication and needs ongoing attention.",
    featured: true,
  },
  {
    title: "Growth Care",
    subtitle: "Ongoing Improvements For Active Platforms",
    price: "CHF 900 per month",
    bestFor: "Active websites and platforms that are used often, updated frequently or tied closely to business, community or operational goals.",
    chooseIf: [
      "Your site or platform changes often.",
      "You regularly publish content, events, updates or campaigns.",
      "You want ongoing improvements, not just maintenance.",
      "You want a closer technical partner after launch.",
    ],
    includes: [
      "Everything in Standard Care",
      "Up to 5 hours of updates or improvements per month",
      "New small sections or page improvements",
      "Ongoing UX and content improvements",
      "Monthly planning check-in",
    ],
    suitedFor: ["Content platforms", "Community platforms", "Event websites", "Active organisation websites", "Growing business websites"],
    limitation:
      "Does not include full product rebuilds, large custom systems, major new modules, complex API integrations or 24/7 emergency support unless separately agreed.",
    note: "Choose this when the website is not just online, but actively supporting your work.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="work-atmosphere min-h-screen overflow-hidden bg-[#010613] text-white">
        <section className="relative pb-16 pt-36 sm:pt-44 lg:pb-24">
          <div className="twix-container grid gap-12 lg:grid-cols-[1fr_0.56fr] lg:items-end">
            <div className="twix-fade-up max-w-4xl">
              <p className="twix-eyebrow">Pricing</p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Clear Starting Points For Serious Digital Projects
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Every project is different, but pricing should not feel mysterious. Use the calculator below to get a
                realistic starting estimate based on the type of website, platform or system you want to build.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/54">
                Final pricing depends on scope, timeline, content, integrations and support needs.
              </p>
            </div>

            <div className="twix-fade-up relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [animation-delay:120ms]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(226,7,86,0.16),transparent_16rem),radial-gradient(circle_at_90%_85%,rgba(11,79,217,0.16),transparent_18rem)]"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-white/46">Estimate, not quote</p>
                <p className="mt-5 text-base leading-8 text-white/68">
                  The calculator gives a planning range so you can sense budget fit before a discovery conversation
                  turns the work into a precise proposal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Ways To Start"
              heading="Ways To Start"
              intro="These are calm starting points for different project shapes. The final scope is always confirmed around the real work, not a generic package."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {pricingTiers.map((tier, index) => (
                <div key={tier.title} style={{ animationDelay: `${index * 70}ms` }}>
                  <PricingTierCard {...tier} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing-calculator" className="relative scroll-mt-28 py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Estimate Your Project"
              heading="Estimate Your Project"
              intro="Answer a few questions and get a rough project range. The estimate is meant to help with planning. A final quote comes after a short discovery conversation."
            />
            <div className="mt-10">
              <PricingCalculator />
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Care And Support"
              heading="Support After Launch, Matched To How Active Your Site Is"
              intro="Care plans are optional monthly support choices. They sit separately from the one-time project estimate and help cover small fixes, technical checks, content support and agreed improvements after launch."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {carePlans.map((plan, index) => (
                <article
                  key={plan.title}
                  className={`twix-fade-up relative overflow-hidden rounded-[8px] border p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] ${
                    plan.featured
                      ? "border-[rgba(226,7,86,0.34)] bg-white/[0.065]"
                      : "border-white/10 bg-white/[0.045]"
                  }`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(226,7,86,0.1),transparent_16rem),radial-gradient(circle_at_92%_92%,rgba(11,79,217,0.12),transparent_16rem)]"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/44">{plan.price}</p>
                        <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{plan.title}</h3>
                        <p className="mt-2 text-sm font-semibold text-white/58">{plan.subtitle}</p>
                      </div>
                      {plan.featured ? (
                        <span className="w-fit rounded-full border border-[rgba(226,7,86,0.34)] bg-[rgba(226,7,86,0.12)] px-3 py-1 text-xs font-semibold text-white/70">
                          Popular for CMS sites
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-white/64">{plan.bestFor}</p>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Choose This If</p>
                        <ul className="mt-3 grid gap-2">
                          {plan.chooseIf.slice(0, 4).map((item) => (
                            <li key={item} className="flex gap-2 text-xs leading-5 text-white/58">
                              <Check aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--color-electric)]" size={14} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Includes</p>
                        <ul className="mt-3 grid gap-2">
                          {plan.includes.slice(0, 5).map((item) => (
                            <li key={item} className="flex gap-2 text-xs leading-5 text-white/58">
                              <Check aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--color-magenta)]" size={14} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="mt-6 rounded-[8px] bg-white/[0.04] p-3 text-xs leading-6 text-white/52">
                      Best suited for: {plan.suitedFor.join(", ")}.
                    </p>
                    <p className="mt-3 text-xs leading-6 text-white/46">{plan.limitation}</p>
                    <p className="mt-3 text-sm leading-7 text-white/62">{plan.note}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 grid gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-white/58">
              <p>
                Care plans cover support, small fixes, technical checks and agreed improvements. Hosting, domains, paid
                plugins, licences, premium tools and third-party services remain client-owned and are billed directly to
                the client.
              </p>
              <p>Large new features, major redesigns, complex integrations, custom systems or large content projects are scoped separately.</p>
              <p>Unused monthly support time does not automatically roll over unless agreed in writing.</p>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <SectionIntro
              label="Pricing Factors"
              heading="What Affects The Price?"
              intro="The biggest changes usually come from complexity, content, integrations and timeline pressure."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {priceFactors.map((factor, index) => {
                const Icon = factor.icon;

                return (
                  <article
                    key={factor.title}
                    className="twix-fade-up relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-6"
                    style={{ animationDelay: `${index * 55}ms` }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(226,7,86,0.08),transparent_12rem),radial-gradient(circle_at_90%_92%,rgba(11,79,217,0.1),transparent_12rem)]"
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <Icon aria-hidden="true" className="text-white/84" size={23} />
                      <h3 className="mt-6 text-xl font-semibold leading-tight text-white">{factor.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/62">{factor.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(226,7,86,0.12),transparent_24rem),radial-gradient(circle_at_90%_80%,rgba(11,79,217,0.14),transparent_26rem)]"
                aria-hidden="true"
              />
              <div className="relative max-w-4xl">
                <p className="twix-eyebrow">Transparency</p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                  What Is Usually Billed Separately?
                </h2>
                <p className="mt-6 text-base leading-8 text-white/66">
                  Domains, hosting, paid plugins, premium fonts, third-party tools, licences, payment provider fees and
                  external services are usually owned and paid directly by the client. Twixalot can help set them up,
                  connect them and document them.
                </p>
              </div>
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
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">Have A Number In Mind?</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                  Use the estimate as a starting point. If the range feels realistic, send a short message about what
                  you want to build and I can help turn it into a clearer scope.
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
