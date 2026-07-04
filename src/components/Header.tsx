"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [isGlassActive, setIsGlassActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateGlassState = () => {
      frame = 0;
      const usesMobileMenu = window.matchMedia("(max-width: 1023px)").matches;

      if (usesMobileMenu) {
        setIsGlassActive(window.scrollY > 8);
        return;
      }

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

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const pillState = isGlassActive ? "twx-pill-active" : "twx-pill-idle";
  const ctaState = isGlassActive ? "twx-pill-active" : "twx-pill-cta-idle";

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full bg-transparent transition-all duration-500"
      data-glass-active={isGlassActive}
    >
      <div
        className={`twix-container twx-header-container flex items-center justify-between transition-[padding] duration-500 ${
          isGlassActive ? "py-4" : "py-5 sm:py-6"
        }`}
      >
        <Logo priority className={`twx-refractive-pill twx-header-logo-pill twx-mobile-solid-pill ${pillState}`} />
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
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={`twx-refractive-pill twx-header-cta-pill inline-flex min-h-11 items-center gap-2 px-4 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)] ${ctaState}`}
          >
            <Sparkles aria-hidden="true" size={16} />
            <span className="hidden sm:inline">Start a project</span>
            <span className="sm:hidden">Start</span>
          </Link>
          <button
            type="button"
            className={`twx-refractive-pill twx-mobile-solid-pill inline-flex h-11 w-11 items-center justify-center text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)] lg:hidden ${
              isGlassActive || isMenuOpen ? "twx-pill-active" : "bg-[#020817] shadow-[0_14px_40px_rgba(0,0,0,0.28)]"
            }`}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`twx-mobile-menu-wrap mx-auto w-[min(100%,var(--rail-width))] transition lg:hidden ${
          isMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav
          className="grid gap-1 bg-[#020817] p-3 shadow-[0_26px_90px_rgba(0,0,0,0.56)]"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-12 items-center px-4 text-base font-semibold transition hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-electric)] ${
                pathname === item.href ? "bg-white/[0.08] text-white" : "text-white/78"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
