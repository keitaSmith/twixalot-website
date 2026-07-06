import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import type { ServicePageData } from "@/data/servicePages";
import { faqJsonLd, serviceJsonLd } from "@/data/seo";

type ServiceLandingPageProps = {
  service: ServicePageData;
};

export function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const path = `/services/${service.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            title: service.title,
            description: service.metaDescription,
            path,
            audience: service.audience,
          }),
          faqJsonLd(service.faqs, path),
        ]}
      />
      <section className="relative pb-16 pt-36 sm:pt-44 lg:pb-24">
        <div className="twix-container grid gap-12 lg:grid-cols-[1fr_0.54fr] lg:items-end">
          <div className="twix-fade-up max-w-4xl">
            <p className="twix-eyebrow">{service.eyebrow}</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              {service.h1}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{service.intro}</p>
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
                Estimate this project
              </Link>
            </div>
          </div>

          <aside className="twix-fade-up rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [animation-delay:120ms]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/44">Good fit for</p>
            <p className="mt-4 text-base leading-8 text-white/68">{service.audience}</p>
            {service.germanTerms ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {service.germanTerms.map((term) => (
                  <span key={term} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/60">
                    {term}
                  </span>
                ))}
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <InfoGrid title="Who This Is For" items={service.whoFor} />
      <InfoGrid title="What Can Be Included" items={service.included} />
      <InfoGrid title="Example Use Cases" items={service.useCases} />

      <section className="relative py-12 sm:py-20">
        <div className="twix-container">
          <SectionIntro
            label="Process"
            heading="A Clear Build Process"
            intro="The exact workflow depends on the project, but the work stays structured so scope, content, design and technical decisions remain clear."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, index) => (
              <article key={step} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <p className="font-mono text-sm text-white/40">0{index + 1}</p>
                <p className="mt-5 text-sm leading-7 text-white/68">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-20" id="faq">
        <div className="twix-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionIntro
            label="FAQ"
            heading={`${service.title} FAQ`}
            intro="A few practical questions clients often ask before scoping this kind of work."
          />
          <div className="grid gap-4">
            {service.faqs.map((faq) => (
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
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">Ready To Scope The Right Build?</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                Send a short message or use the estimate calculator to get a planning range before a discovery conversation.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {service.related.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm font-semibold text-white underline decoration-[var(--color-magenta)] underline-offset-8">
                    {link.label}
                  </Link>
                ))}
              </div>
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
    </>
  );
}

function InfoGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="relative py-12 sm:py-20">
      <div className="twix-container">
        <SectionIntro label={title} heading={title} intro="Clear scope beats generic packages. These points show how this service is usually shaped." />
        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="flex gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-white/66">
              <Check aria-hidden="true" className="mt-1 shrink-0 text-[var(--color-electric)]" size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
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
