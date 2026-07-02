"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [isGlassActive, setIsGlassActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateGlassState = () => {
      frame = 0;

      if (pathname === "/") {
        const sentinel = document.querySelector<HTMLElement>("[data-header-glass-sentinel]");

        if (sentinel) {
          setIsGlassActive(sentinel.getBoundingClientRect().top <= 112);
          return;
        }
      }

      setIsGlassActive(window.scrollY > 20);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateGlassState);
    };

    updateGlassState();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname]);

  const pillState = isGlassActive ? "twx-pill-active" : "twx-pill-idle";
  const ctaState = isGlassActive ? "twx-pill-active" : "twx-pill-cta-idle";

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full bg-transparent transition-all duration-500"
      data-glass-active={isGlassActive}
    >
      <div
        className={`twix-container flex items-center justify-between transition-[padding] duration-500 ${
          isGlassActive ? "py-4" : "py-5 sm:py-6"
        }`}
      >
        <Logo priority className={`twx-refractive-pill twx-header-logo-pill ${pillState}`} />
        <nav
          className={`twx-refractive-pill twx-header-nav-pill hidden items-center gap-8 text-sm font-medium transition-all duration-500 lg:flex ${pillState} ${
            isGlassActive ? "text-white/82" : "text-white/76"
          }`}
        >
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
          className={`twx-refractive-pill twx-header-cta-pill inline-flex min-h-11 items-center gap-2 px-4 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)] ${ctaState}`}
        >
          <Sparkles aria-hidden="true" size={16} />
          <span className="hidden sm:inline">Start a project</span>
          <span className="sm:hidden">Start</span>
        </Link>
      </div>
    </header>
  );
}
