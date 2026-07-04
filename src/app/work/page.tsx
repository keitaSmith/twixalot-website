import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers3, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WebsiteProjectCard } from "@/components/work/WebsiteProjectCard";
import { WebsiteProjectGrid } from "@/components/work/WebsiteProjectGrid";
import { websiteProjects } from "@/data/websiteProjects";

export const metadata: Metadata = {
  title: "Website Work | Twixalot",
  description:
    "Website projects by Twixalot across modern React builds, content platforms, business websites, community sites and e-commerce.",
};

export default function WorkPage() {
  const modernProjects = websiteProjects.filter((project) => project.group === "modern");
  const archiveProjects = websiteProjects.filter((project) => project.group === "archive");

  return (
    <>
      <Header />
      <main className="work-atmosphere min-h-screen overflow-hidden bg-[#010613] text-white">
        <section className="relative pb-20 pt-36 sm:pt-44 lg:pb-28">
          <div className="twix-container grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="twix-fade-up max-w-4xl">
              <p className="twix-eyebrow">Website Work</p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Websites And Digital Presences Built Across Brands, Communities And Organisations
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                A selection of website projects built over the years, from polished business sites and community
                platforms to content-managed digital ecosystems.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/46">
                Some projects are current, some are earlier builds, and some are shown as selected previews.
              </p>
            </div>

            <div className="twix-fade-up rounded-[8px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] [animation-delay:120ms]">
              <div className="grid grid-cols-2 gap-3">
                <WorkStat value={modernProjects.length.toString()} label="Modern CMS Builds" />
                <WorkStat value={archiveProjects.length.toString()} label="Archive Previews" />
              </div>
              <div className="mt-5 rounded-[8px] border border-white/10 bg-[#060c21]/72 p-5">
                <Sparkles aria-hidden="true" className="text-[var(--color-magenta)]" size={20} />
                <p className="mt-4 text-sm leading-7 text-white/62">
                  Current work leads with React, Node.js and structured content. Earlier WordPress builds show the
                  long-running website experience behind that evolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-8 sm:py-12">
          <div className="twix-container">
            <SectionIntro
              label="Modern Builds"
              heading="React, Node.js And CMS-Backed Websites Built For Real Organisations"
              intro="These selected projects represent the current Twixalot direction: custom frontends, structured content, scalable architecture and polished digital experiences."
            />
            <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
              {modernProjects.map((project, index) => (
                <div key={project.slug} className="twix-fade-up h-full" style={{ animationDelay: `${index * 80}ms` }}>
                  <WebsiteProjectCard project={project} variant="featured" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16 sm:py-24">
          <div className="twix-container">
            <SectionIntro
              label="Website Archive"
              heading="Earlier Website Builds Across Business, Community And E-Commerce"
              intro="Selected WordPress and earlier website projects built for organisations, small businesses, associations and personal brands."
            />
            <div className="mt-8 flex items-start gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-white/58">
              <Layers3 aria-hidden="true" className="mt-1 shrink-0 text-[var(--color-electric)]" size={18} />
              <p>
                Years of website delivery sit behind the current React and CMS direction, spanning business services,
                creative organisations, community groups, professional associations, e-commerce and personal brands.
              </p>
            </div>
            <div className="mt-10">
              <WebsiteProjectGrid projects={archiveProjects} />
            </div>
          </div>
        </section>

        <section className="relative pb-24 pt-8 sm:pb-32">
          <div className="twix-container">
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(226,7,86,0.18),transparent_24rem),radial-gradient(circle_at_90%_80%,rgba(11,79,217,0.18),transparent_26rem)]" />
              <div className="relative">
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                  Need A Website That Feels Like It Belongs To Your Business
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                  Whether you need a focused launch site, a stronger brand presence or a content-managed platform,
                  Twixalot can help turn the structure, visuals and technical details into something usable.
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

function WorkStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-[#050b1d]/76 p-4">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/46">{label}</p>
    </div>
  );
}
