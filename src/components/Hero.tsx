"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGraphql,
  SiGreensock,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";
import { processOverview, processSteps } from "@/data/processSteps";
import { ArrowIcon, heroServiceCards, projects, startingPoints, techStack } from "@/data/site";
import { ConstellationMorph } from "./ConstellationMorph";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reveal = useRef<HTMLDivElement>(null);
  const featured = useRef<HTMLDivElement>(null);
  const paths = useRef<HTMLDivElement>(null);
  const process = useRef<HTMLDivElement>(null);
  const sky = useRef<HTMLDivElement>(null);
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
      const featuredParts = gsap.utils.toArray<HTMLElement>("[data-featured-reveal]", root.current);
      const featuredCards = gsap.utils.toArray<HTMLElement>("[data-featured-card]", root.current);
      const pathParts = gsap.utils.toArray<HTMLElement>("[data-path-reveal]", root.current);
      const pathCards = gsap.utils.toArray<HTMLElement>("[data-path-card]", root.current);
      const processParts = gsap.utils.toArray<HTMLElement>("[data-process-reveal]", root.current);
      const processCards = gsap.utils.toArray<HTMLElement>("[data-process-card]", root.current);
      const processNodes = gsap.utils.toArray<HTMLElement>("[data-process-node]", root.current);
      const morphStars = gsap.utils.toArray<SVGCircleElement>("[data-morph-star]", root.current);
      const extraMorphStars = gsap.utils.toArray<SVGCircleElement>("[data-extra-star]", root.current);
      const hatLine = gsap.utils.toArray<SVGPolylineElement>("[data-hat-line]", root.current);
      const leoLine = gsap.utils.toArray<SVGPolylineElement>("[data-leo-line]", root.current);
      const arrowLine = gsap.utils.toArray<SVGPolylineElement>("[data-arrow-line]", root.current);
      const syncInteractiveLayers = () => {
        const layerEntries = [
          { element: copy.current, threshold: 0.28 },
          { element: reveal.current, threshold: 0.85 },
          { element: featured.current, threshold: 0.85 },
          { element: paths.current, threshold: 0.85 },
          { element: process.current, threshold: 0.85 },
        ];

        layerEntries.forEach(({ element, threshold }) => {
          const opacity = Number(gsap.getProperty(element, "opacity"));
          element?.classList.toggle(styles.interactiveLayer, opacity > threshold);
        });
      };

      gsap.set(reveal.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(sky.current, { opacity: 0 });
      gsap.set(featured.current, { opacity: 0, scale: 1.18, y: 90, filter: "blur(16px)", pointerEvents: "none" });
      gsap.set(paths.current, { opacity: 0, scale: 1.12, y: 92, filter: "blur(16px)", pointerEvents: "none" });
      gsap.set(process.current, { opacity: 0, scale: 0.92, y: 120, filter: "blur(14px)", pointerEvents: "none" });
      gsap.set(curtain.current, { opacity: 0, yPercent: 38, scale: 0.82 });
      gsap.set(serviceCards, { opacity: 0, y: 42, rotateX: 8, scale: 0.96 });
      gsap.set(revealParts, { opacity: 0, y: 28 });
      gsap.set(featuredParts, { opacity: 0, y: 38, scale: 1.08 });
      gsap.set(featuredCards, { opacity: 0 });
      gsap.set(pathParts, { opacity: 0, y: 42, scale: 1.08, filter: "blur(10px)" });
      gsap.set(pathCards, { opacity: 0, y: 78, scale: 1.12, rotateX: -8, filter: "blur(12px)" });
      gsap.set(processParts, { opacity: 0, y: 52, scale: 0.96, filter: "blur(10px)" });
      gsap.set(processCards, { opacity: 0, y: 70, scale: 0.9, rotateX: 8, filter: "blur(10px)" });
      gsap.set(processNodes, { opacity: 0.34, scale: 0.88 });
      gsap.set(morphStars, { x: 0, y: 0, scale: 1, transformOrigin: "center center" });
      gsap.set("[data-ink-blob]", { y: 180, scale: 0.7, opacity: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=520%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          onUpdate: syncInteractiveLayers,
          onRefresh: syncInteractiveLayers,
        },
      });

      timeline
        .to(copy.current, { y: -86, opacity: 0, scale: 0.98, duration: 0.34, ease: "power2.out" }, 0)
        .to(video.current, { scale: 1.42, xPercent: 13, duration: 1.22, ease: "none" }, 0)
        .to(circuit.current, { opacity: 0.48, xPercent: -8, duration: 1.05, ease: "none" }, 0.08)
        .to(reveal.current, { opacity: 1, duration: 0.32, ease: "power2.out" }, 0.2)
        .to(revealParts, { opacity: 1, y: 0, stagger: 0.08, duration: 0.32, ease: "power2.out" }, 0.28)
        .to(serviceCards, { opacity: 1, y: 0, rotateX: 0, scale: 1, stagger: 0.08, duration: 0.44, ease: "power2.out" }, 0.42)
        .to(reveal.current, { opacity: 1, duration: 0.24, ease: "none" }, 0.9)
        .to(curtain.current, { opacity: 1, yPercent: 0, scale: 1.18, duration: 0.72, ease: "power1.inOut" }, 1.12)
        .to("[data-ink-blob]", { opacity: 1, y: -120, scale: 2.35, stagger: 0.06, duration: 0.82, ease: "power2.inOut" }, 1.12)
        .to(video.current, { opacity: 0, duration: 0.36, ease: "power2.out" }, 1.58)
        .to(reveal.current, { y: -560, scale: 0.9, autoAlpha: 0, filter: "blur(3px)", duration: 0.46, ease: "power1.out" }, 1.24)
        .to(sky.current, { opacity: 1, duration: 0.46, ease: "power2.out" }, 1.52)
        .to(featured.current, { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 1.76)
        .to(featuredParts, { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.5, ease: "power2.out" }, 1.84)
        .to(featuredCards, { opacity: 1, stagger: 0.06, duration: 0.66, ease: "power2.out" }, 2.0)
        .to(featured.current, { opacity: 1, duration: 0.34, ease: "none" }, 2.58)
        .to(morphStars, {
          attr: {
            cx: (_index, target) => target.dataset.targetX ?? target.getAttribute("cx") ?? 0,
            cy: (_index, target) => target.dataset.targetY ?? target.getAttribute("cy") ?? 0,
            r: (_index, target) => target.dataset.targetR ?? target.getAttribute("r") ?? 1,
          },
          duration: 0.82,
          stagger: 0.018,
          ease: "power2.inOut",
        }, 2.72)
        .to(extraMorphStars, { opacity: 0, duration: 0.36, ease: "power1.out" }, 2.98)
        .to(hatLine, { opacity: 0, duration: 0.34, ease: "power1.out" }, 2.76)
        .to(leoLine, { opacity: 0.62, duration: 0.48, ease: "power1.out" }, 2.96)
        .to(featured.current, { y: -420, opacity: 0, scale: 0.94, filter: "blur(8px)", duration: 0.58, ease: "power1.inOut" }, 2.86)
        .to(paths.current, { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.72, ease: "power2.out" }, 3.02)
        .to(pathParts, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", stagger: 0.08, duration: 0.48, ease: "power2.out" }, 3.12)
        .to(pathCards, { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", stagger: 0.06, duration: 0.72, ease: "power2.out" }, 3.28)
        .to(paths.current, { opacity: 1, duration: 0.36, ease: "none" }, 3.92)
        .to(leoLine, { opacity: 0, duration: 0.28, ease: "power1.out" }, 4.02)
        .to(arrowLine, { opacity: 0.58, duration: 0.42, ease: "power1.out" }, 4.12)
        .to(morphStars.slice(0, 9), {
          attr: {
            cx: (_index, target) => target.dataset.arrowX ?? target.getAttribute("cx") ?? 0,
            cy: (_index, target) => target.dataset.arrowY ?? target.getAttribute("cy") ?? 0,
            r: (_index, target) => target.dataset.arrowR ?? target.getAttribute("r") ?? 1,
          },
          duration: 0.72,
          stagger: 0.035,
          ease: "power2.inOut",
        }, 4.04)
        .to(pathCards, { opacity: 0.24, y: -42, scale: 0.92, rotateX: 7, filter: "blur(3px)", stagger: 0.035, duration: 0.52, ease: "power1.inOut" }, 4.18)
        .to(pathParts, { opacity: 0.24, y: -46, scale: 0.96, filter: "blur(3px)", stagger: 0.04, duration: 0.42, ease: "power1.out" }, 4.24)
        .to(paths.current, { opacity: 0, y: -160, scale: 0.96, filter: "blur(6px)", duration: 0.54, ease: "power1.inOut" }, 4.42)
        .to(process.current, { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.72, ease: "power2.out" }, 4.48)
        .to(processParts, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", stagger: 0.08, duration: 0.48, ease: "power2.out" }, 4.58)
        .to(processCards, { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", stagger: 0.08, duration: 0.68, ease: "power2.out" }, 4.76)
        .to(processNodes, { opacity: 1, scale: 1, stagger: 0.08, duration: 0.36, ease: "power2.out" }, 4.86)
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
      <div ref={sky} className={styles.nightSky}>
        <ConstellationMorph />
      </div>
      <div className={`twix-container relative z-10 grid min-h-screen items-center pb-16 pt-28 lg:pt-28 ${styles.heroContentShell}`}>
        <div ref={copy} className={`max-w-3xl ${styles.copyContent} ${styles.interactiveLayer}`}>
          <p className="mb-5 inline-flex items-center gap-2 bg-white/[0.055] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/72 backdrop-blur-xl">
            Zurich, Switzerland Software Studio
          </p>
          <h1 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
            Digital Products With A Little Magic And A Lot Of Engineering
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/76 sm:text-xl sm:leading-8">
            Twixalot designs and builds polished websites, web apps, CMS platforms and automations for businesses, nonprofits and creative brands.
          </p>
          <div className="relative z-20 mt-9 flex flex-col gap-3 sm:flex-row">
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
                href="/pricing#pricing-calculator"
                className="inline-flex min-h-13 items-center justify-center border border-white/18 px-6 font-semibold text-white transition hover:border-white/42 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
              >
                Get an estimate
              </Link>
            </motion.div>
          </div>
        </div>

        <div ref={reveal} className={styles.serviceReveal}>
          <div className={styles.revealIntro}>
            <p data-hero-reveal className="twix-eyebrow">
              Build Paths
            </p>
            <h2 data-hero-reveal className="mt-3 max-w-2xl text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              What Do You Need Built?
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

          <div data-hero-reveal className="relative z-20 mt-5 flex flex-col gap-3 sm:flex-row">
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
      <div ref={featured} className={styles.featuredReveal}>
        <div className={styles.featuredContent}>
          <div data-featured-reveal>
            <p className="twix-eyebrow">Featured Work</p>
            <h2 className="mt-3 max-w-4xl text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              Selected Platforms, Websites And Content Systems Built Around Real Organisations
            </h2>
          </div>

          <div className={styles.featuredGrid}>
            {projects.map((project, index) => (
              <article
                key={project.name}
                data-featured-card
                className={styles.featuredPanel}
                tabIndex={0}
                aria-label={`${project.name} preview. Hover or focus to view the website screenshot.`}
              >
                <div className={styles.featuredPanelInner}>
                  <div className={styles.featuredPanelFace}>
                    <div className="flex items-center justify-between text-xs text-white/40">
                      <span>0{index + 1}</span>
                      <span>{project.built}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className={styles.featuredPanelBack}>
                    <Image
                      src={project.image}
                      alt={`${project.name} website screenshot`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className={styles.featuredImage}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div data-featured-reveal className={styles.featuredCtaWrap}>
            <Link href="/work" className={styles.featuredCta}>
              Take a closer look
              <ArrowIcon size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <div ref={paths} className={styles.pathReveal}>
        <div className={styles.pathContent}>
          <div className={styles.pathHeading}>
            <p data-path-reveal className="twix-eyebrow">
              Choose Your Build Path
            </p>
            <h2 data-path-reveal>
              Practical Ways To Start
            </h2>
          </div>

          <div className={styles.pathGrid}>
            {startingPoints.map((item, index) => (
              <article
                key={item.title}
                data-path-card
                className={`${styles.pathPanel} ${item.title === "Custom System" ? styles.scopedPathPanel : ""}`}
              >
                <div className={styles.pathPanelTop}>
                  <span>0{index + 1}</span>
                  <span>{item.price}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p data-path-reveal className={styles.pathNote}>
            Final pricing depends on scope, timeline, integrations, content needs and support requirements.
          </p>

          <div data-path-reveal className="mt-6">
            <Link
              href="/pricing#pricing-calculator"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)]"
            >
              Estimate your project
              <ArrowIcon size={18} aria-hidden="true" />
            </Link>
          </div>

          <div data-path-reveal className={styles.stackMarquee} aria-label="Technology stack">
            <div className={styles.stackTrack}>
              {[...techStack, ...techStack].map((item, index) => {
                const Icon = techIcons[item] ?? SiReact;
                return (
                  <span key={`${item}-${index}`} className={styles.stackItem}>
                    <Icon aria-hidden="true" />
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div ref={process} className={styles.processReveal}>
        <div className={styles.processContent}>
          <div className={styles.processIntro}>
            <p data-process-reveal className="twix-eyebrow">
              {processOverview.label}
            </p>
            <h2 data-process-reveal>
              {processOverview.heading}
            </h2>
            <p data-process-reveal>
              {processOverview.intro}
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} data-process-card className={styles.processPanel}>
                  <div className={styles.processTop}>
                    <span data-process-node className={styles.processNode}>
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.revealBand} aria-hidden="true" />
    </section>
  );
}

const techIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  GSAP: SiGreensock,
  Sanity: SiSanity,
  WordPress: SiWordpress,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  "React Native": SiReact,
  Flutter: SiFlutter,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  Vercel: SiVercel,
  GitHub: SiGithub,
};
