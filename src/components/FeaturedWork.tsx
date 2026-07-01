"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/data/site";
import { LeoConstellation } from "./LeoConstellation";
import styles from "./FeaturedWork.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function FeaturedWork() {
  const section = useRef<HTMLElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isSmall = window.matchMedia("(max-width: 767px)").matches;

      if (reduceMotion || isSmall) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>("[data-work-card]", section.current);

      gsap.set(content.current, {
        opacity: 0,
        scale: 0.84,
        y: 120,
        filter: "blur(12px)",
        transformOrigin: "center top",
      });
      gsap.set(heading.current, { opacity: 0, scale: 0.92, y: 70, filter: "blur(10px)" });
      gsap.set(cards, { opacity: 0, scale: 0.88, y: 90, rotateX: 10, filter: "blur(8px)" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 110%",
          end: "top 22%",
          scrub: 0.9,
        },
      });

      timeline
        .to(content.current, { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.72, ease: "power2.out" }, 0)
        .to(heading.current, { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.56, ease: "power2.out" }, 0.08)
        .to(cards, { opacity: 1, scale: 1, y: 0, rotateX: 0, filter: "blur(0px)", stagger: 0.08, duration: 0.72, ease: "power2.out" }, 0.22);
    },
    { scope: section },
  );

  return (
    <section ref={section} className={`twix-section ${styles.section}`}>
      <LeoConstellation />
      <div ref={content} className={`twix-container ${styles.content}`}>
        <div ref={heading} className={styles.heading}>
          <p className="twix-eyebrow">Featured work</p>
          <h2 className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Selected platforms, websites and content systems built around real organisations.
          </h2>
        </div>

        <div className={`mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3 ${styles.grid}`}>
          {projects.map((project, index) => (
            <article key={project.name} data-work-card className={styles.card}>
              <div className="relative z-10 mb-10 flex items-center justify-between text-sm text-white/42">
                <span>0{index + 1}</span>
                <span>{project.built}</span>
              </div>
              <h3 className="relative z-10 text-2xl font-semibold">{project.name}</h3>
              <p className="relative z-10 mt-4 min-h-16 text-sm leading-7 text-white/66">{project.description}</p>
              <dl className="relative z-10 mt-7 grid gap-3 border-t border-white/10 pt-5 text-sm">
                <div>
                  <dt className="text-white/38">Built</dt>
                  <dd className="mt-1 text-white/76">{project.built}</dd>
                </div>
                <div>
                  <dt className="text-white/38">Stack / tools</dt>
                  <dd className="mt-1 text-white/76">{project.stack}</dd>
                </div>
              </dl>
              <Link href="/work" className="relative z-10 mt-7 inline-flex font-semibold text-white underline decoration-[var(--color-magenta)] decoration-2 underline-offset-8">
                View case study
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
