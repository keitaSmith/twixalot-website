import Link from "next/link";
import { AboutPreview } from "@/components/AboutPreview";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { SmoothScroll } from "@/components/SmoothScroll";
import { navItems } from "@/data/site";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="overflow-hidden bg-[#010613] text-white">
        <Hero />

        <AboutPreview />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#01040e] py-12 text-white">
      <div className="twix-container grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
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
