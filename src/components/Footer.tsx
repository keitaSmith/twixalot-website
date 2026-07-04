import Link from "next/link";
import { Logo } from "@/components/Logo";

const mainMenuLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Calculator / Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Impressum", href: "/impressum" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#01040e] py-12 text-white">
      <div className="twix-container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.75fr_0.75fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/58">
              Zurich, Switzerland-based freelance software studio for polished websites, web apps, CMS platforms and automations.
            </p>
            <div className="mt-6 text-sm leading-7 text-white/62">
              <p>keita.smith@twixalot.com</p>
              <p>Zurich, Switzerland</p>
            </div>
          </div>
          <nav className="text-sm text-white/66" aria-label="Main Menu">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Main Menu</h2>
            <ul className="mt-4 grid gap-3">
              {mainMenuLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="text-sm text-white/66" aria-label="Legal">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Legal</h2>
            <ul className="mt-4 grid gap-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/38">
          Copyright © {year} Twixalot Software Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
