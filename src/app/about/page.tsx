import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Blocks, MessageCircle, PenTool, Settings2 } from "lucide-react";
import { SiBlender, SiUnrealengine } from "react-icons/si";
import { ConstellationMorph } from "@/components/ConstellationMorph";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Keita Smith & Twixalot",
  description:
    "Meet Keita Smith, the developer and creative technologist behind Twixalot, a Zurich-based software studio for websites, content platforms and digital systems.",
  path: "/about",
});

const buildTags = [
  "Websites",
  "Content platforms",
  "Custom digital systems",
  "CMS editing",
  "Multilingual websites",
  "Booking flows",
  "Community platforms",
  "Workflow tools",
];

const careCards = [
  {
    title: "Clear Communication",
    description: "Good work starts with understanding what needs to be built and why it matters.",
    icon: MessageCircle,
  },
  {
    title: "Polished Visual Execution",
    description: "Interfaces should feel considered, credible and appropriate for the people using them.",
    icon: PenTool,
  },
  {
    title: "Systems Clients Can Manage",
    description: "CMS structures, content flows and handovers should make everyday updates feel calmer.",
    icon: Blocks,
  },
  {
    title: "Maintainable Engineering",
    description: "The work under the surface should stay reliable, readable and ready to evolve.",
    icon: Settings2,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="work-atmosphere min-h-screen overflow-hidden bg-[#010613] text-white">
        <section className="relative pb-20 pt-36 sm:pt-44 lg:pb-28">
          <div className="twix-container grid items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
            <div className="twix-fade-up max-w-4xl">
              <p className="twix-eyebrow">About Twixalot</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Creative Software, Built With Care
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                I&apos;m Keita Smith, the developer and creative technologist behind Twixalot. I&apos;m based in
                Zurich, Switzerland, and I&apos;ve been building websites, platforms and digital systems since 2019,
                starting while I was completing my Bachelor&apos;s degree in Computer Science.
              </p>
            </div>

            <div className="twix-fade-up relative [animation-delay:120ms]">
              <div className="absolute inset-8 rounded-full bg-[rgba(226,7,86,0.16)] blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_34px_110px_rgba(0,0,0,0.34)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-[#050b1d]">
                  <Image
                    src="/images/me.jpeg"
                    alt="Portrait of Keita Smith"
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="twix-fade-up relative min-h-[18rem]">
              <div className="relative flex min-h-[18rem] items-center justify-center">
                <Image
                  src="/logos/twixalot-logo-icon.png"
                  alt="Twixalot wizard hat logo icon"
                  width={320}
                  height={320}
                  className="h-56 w-56 opacity-95 drop-shadow-[0_0_48px_rgba(226,7,86,0.26)] sm:h-72 sm:w-72"
                />
              </div>
            </div>
            <div className="twix-fade-up max-w-3xl [animation-delay:90ms]">
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">The Feeling Behind Twixalot</h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                Software has always felt a little magical to me. There is something exciting about turning lines of
                code into something people can see, use, update, book through, publish with, sell from, or build a
                business around. Technology has reached a point where the right idea, structure and execution can make
                things feel almost impossible until they suddenly work.
              </p>
              <p className="mt-5 text-base leading-8 text-white/66">
                That is the feeling behind Twixalot. Not magic as a gimmick, but the kind of magic that happens when
                design, logic and problem solving come together properly.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="twix-fade-up max-w-3xl">
                <p className="twix-eyebrow">What Twixalot Builds</p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                  Websites, Platforms And Systems Shaped Around Real Needs
                </h2>
                <p className="mt-6 text-base leading-8 text-white/66">
                  Today, I work with businesses, organisations and creative projects that need polished websites, content
                  platforms and custom digital systems. Some projects need a strong first impression. Some need a CMS that
                  makes content easier to manage. Some need a workflow, booking flow or internal system that reduces
                  manual work. My job is to understand the shape of the problem and build something that feels clear,
                  useful and reliable.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {buildTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-medium text-white/68"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="twix-fade-up relative min-h-[22rem] [animation-delay:100ms]">
              <ConstellationMorph variant="plain" className="opacity-80" />
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container">
            <div className="twix-fade-up max-w-3xl">
              <p className="twix-eyebrow">What I Care About</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Polished Outside, Calm Under The Hood
              </h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                I care about digital products that do more than look good on launch day. A website should be easy to
                update. A CMS should make sense to the person using it. A custom system should reduce confusion, not
                create more of it. The best work feels polished on the outside and calm under the hood.
              </p>
            </div>

            <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
              {careCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="twix-fade-up h-full rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <Icon aria-hidden="true" className="text-white/86" size={22} />
                    <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/60">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-20">
          <div className="twix-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="twix-fade-up relative min-h-[18rem]">
              <div className="relative flex min-h-[18rem] items-center justify-center text-white">
                <span className="relative z-10 inline-flex text-white drop-shadow-[0_0_42px_rgba(255,255,255,0.22)]">
                  <SiUnrealengine aria-hidden="true" size={136} />
                </span>
                <span className="relative -ml-10 mt-16 inline-flex text-[var(--color-magenta)] drop-shadow-[0_0_46px_rgba(226,7,86,0.32)]">
                  <SiBlender aria-hidden="true" size={136} />
                </span>
              </div>
            </div>
            <div className="twix-fade-up max-w-3xl [animation-delay:90ms]">
              <p className="twix-eyebrow">Creative Exploration</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">Still Learning, Still Building</h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                My interest in software also stretches into more playful and experimental areas. I&apos;m interested in
                game development, and I&apos;ve recently been exploring 3D modelling and animation in Blender. It comes
                from the same curiosity that led me to create the animated Twixalot hat for this site.
              </p>
              <p className="mt-5 text-base leading-8 text-white/66">
                Twixalot is where creative direction, software engineering and practical business thinking meet, with a
                little magic in the way it all comes together.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-24 pt-12 sm:pb-32">
          <div className="twix-container">
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(226,7,86,0.18),transparent_24rem),radial-gradient(circle_at_90%_80%,rgba(11,79,217,0.18),transparent_26rem)]" />
              <div className="relative">
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">Have Something In Mind?</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                  If you are building a website, platform or digital system and want it to feel polished, practical and
                  easy to manage, I&apos;d be happy to hear what you are working on.
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
