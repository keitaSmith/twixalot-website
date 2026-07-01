import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { SmoothScroll } from "@/components/SmoothScroll";
import { navItems, processSteps, startingPoints } from "@/data/site";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="overflow-hidden bg-[#010613] text-white">
        <Hero />
        <FeaturedWork />

        <section className="twix-section">
          <div className="twix-container">
            <SectionHeading eyebrow="Starting points" title="A few practical ways to begin, from focused launches to custom systems." />
            <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
              {startingPoints.map((item) => (
                <article key={item.title} className="min-h-72 bg-[#030a1c] p-6 transition hover:bg-[#071138]">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-magenta)]">{item.price}</p>
                  <h3 className="mt-8 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/66">{item.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/58">
              Final pricing depends on scope, timeline, integrations and content needs.
            </p>
          </div>
        </section>

        <section className="twix-section">
          <div className="twix-container">
            <SectionHeading eyebrow="Process" title="A calm route from rough idea to reliable launch." />
            <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="bg-[#030a1c] p-6">
                    <div className="mb-8 flex items-center justify-between">
                      <Icon size={24} className="text-[var(--color-electric)]" aria-hidden="true" />
                      <span className="font-mono text-sm text-white/36">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/62">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="twix-section border-y border-white/10 bg-[#020819]">
          <div className="twix-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="twix-eyebrow">About</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">Software engineering with a visual storyteller&apos;s eye.</h2>
            </div>
            <p className="text-lg leading-8 text-white/70">
              Twixalot is led by Keita Smith, a Swiss software developer and creative technologist with roots in Trinidad and Tobago. The studio brings together software engineering, visual storytelling and practical business thinking to build digital products that feel distinctive and work in the real world.
            </p>
          </div>
        </section>

        <section className="twix-section bg-[linear-gradient(135deg,#03143a,#050816_52%,#21051d)]">
          <div className="twix-container grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="twix-eyebrow">Contact</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Have a project in mind?</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Tell me what you are building, what needs to change, or what you wish your current website or system could do better.
              </p>
            </div>
            <div className="border border-white/10 bg-black/18 p-5 backdrop-blur-xl sm:p-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-4xl">
      <p className="twix-eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#01040e] px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/58">
            Swiss-based freelance software studio for polished websites, web apps, CMS platforms and automations.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm text-white/66">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/impressum" className="hover:text-white">Impressum</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </nav>
        <div className="text-sm leading-7 text-white/62">
          <p>hello@twixalot.example</p>
          <p>Switzerland</p>
        </div>
      </div>
    </footer>
  );
}
