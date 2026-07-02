"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { navItems } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent transition-all duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[var(--rail-pad)] py-5 sm:py-6">
        <Logo priority />
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/76 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center gap-2 bg-white/95 px-4 text-sm font-semibold text-[#03143c] shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)]"
        >
          <Sparkles aria-hidden="true" size={16} />
          <span className="hidden sm:inline">Start a project</span>
          <span className="sm:hidden">Start</span>
        </Link>
      </div>
    </header>
  );
}
