"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowIcon, heroServiceCards } from "@/data/site";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reveal = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);
  const circuit = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isSmall = window.matchMedia("(max-width: 767px)").matches;

      if (reduceMotion || isSmall) {
        return;
      }

      const serviceCards = gsap.utils.toArray<HTMLElement>("[data-hero-service]", root.current);
      const revealParts = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]", root.current);

      gsap.set(reveal.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(curtain.current, { opacity: 0, yPercent: 38, scale: 0.82 });
      gsap.set(serviceCards, { opacity: 0, y: 42, rotateX: 8, scale: 0.96 });
      gsap.set(revealParts, { opacity: 0, y: 28 });
      gsap.set("[data-ink-blob]", { y: 180, scale: 0.7, opacity: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=280%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(copy.current, { y: -86, opacity: 0, scale: 0.98, duration: 0.34, ease: "power2.out" }, 0)
        .to(video.current, { scale: 1.42, xPercent: 13, duration: 1.22, ease: "none" }, 0)
        .to(circuit.current, { opacity: 0.48, xPercent: -8, duration: 1.05, ease: "none" }, 0.08)
        .to(reveal.current, { opacity: 1, pointerEvents: "auto", duration: 0.32, ease: "power2.out" }, 0.2)
        .to(revealParts, { opacity: 1, y: 0, stagger: 0.08, duration: 0.32, ease: "power2.out" }, 0.28)
        .to(serviceCards, { opacity: 1, y: 0, rotateX: 0, scale: 1, stagger: 0.08, duration: 0.44, ease: "power2.out" }, 0.42)
        .to(reveal.current, { opacity: 1, duration: 0.24, ease: "none" }, 0.9)
        .to(curtain.current, { opacity: 1, yPercent: 0, scale: 1.18, duration: 0.72, ease: "power1.inOut" }, 1.12)
        .to("[data-ink-blob]", { opacity: 1, y: -120, scale: 2.35, stagger: 0.06, duration: 0.82, ease: "power2.inOut" }, 1.12)
        .to(reveal.current, { y: -320, scale: 0.94, opacity: 0.04, filter: "blur(2px)", duration: 0.68, ease: "power1.out" }, 1.36)
        .to(root.current, { "--hero-shade": 0.94, duration: 0.5 }, 1.2);
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className={styles.hero}
      style={{ "--hero-shade": 0.72 } as React.CSSProperties}
    >
      <video
        ref={video}
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/twixalot-hat-poster.webp"
        aria-hidden="true"
      >
        <source src="/videos/twixalot-hat-hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.shadowOverlay} aria-hidden="true" />
      <div className={styles.glowOverlay} aria-hidden="true" />
      <div ref={circuit} className={styles.circuitLayer} aria-hidden="true" />
      <div ref={curtain} className={styles.curtain} aria-hidden="true">
        <span data-ink-blob className={styles.inkBlobOne} />
        <span data-ink-blob className={styles.inkBlobTwo} />
        <span data-ink-blob className={styles.inkBlobThree} />
      </div>
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-28">
        <div ref={copy} className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 bg-white/[0.055] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/72 backdrop-blur-xl">
            Swiss software studio
          </p>
          <h1 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
            Digital products with a little magic and a lot of engineering.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/76 sm:text-xl sm:leading-8">
            Twixalot designs and builds polished websites, web apps, CMS platforms and automations for businesses, nonprofits and creative brands.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 bg-white px-6 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)]"
              >
                Start a project
                <ArrowIcon size={18} aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/work"
                className="inline-flex min-h-13 items-center justify-center border border-white/18 px-6 font-semibold text-white transition hover:border-white/42 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
              >
                View the work
              </Link>
            </motion.div>
          </div>
        </div>

        <div ref={reveal} className={styles.serviceReveal}>
          <div className={styles.revealIntro}>
            <p data-hero-reveal className="twix-eyebrow">
              Build paths
            </p>
            <h2 data-hero-reveal className="mt-3 max-w-2xl text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              What do you need built?
            </h2>
            <p data-hero-reveal className="mt-4 max-w-3xl text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
              From premium websites to custom systems, Twixalot turns ideas, content and workflows into digital products that look sharp, work reliably and are easy to manage after launch.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {heroServiceCards.map((service, index) => (
              <article key={service.title} data-hero-service className={styles.servicePanel}>
                <span className={styles.serviceNumber}>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div data-hero-reveal className={styles.proofRow}>
            <span>Selected builds:</span>
            <span>Animae Caribe</span>
            <span>Pride TT</span>
            <span>TTCSI / NSEP</span>
            <span>PMATT</span>
            <span>QICU</span>
          </div>

          <div data-hero-reveal className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)]"
            >
              Start a project
              <ArrowIcon size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center border border-white/18 px-5 font-semibold text-white transition hover:border-white/42 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
            >
              View selected work
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.revealBand} aria-hidden="true" />
    </section>
  );
}
