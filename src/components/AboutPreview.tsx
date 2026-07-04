"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "@/data/site";
import styles from "./AboutPreview.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AboutPreview() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      const elements = gsap.utils.toArray<HTMLElement>("[data-about-reveal]", section.current);

      gsap.set(elements, { opacity: 0, y: 46, filter: "blur(10px)" });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.12,
        duration: 0.78,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 72%",
          end: "center 52%",
          scrub: 0.7,
        },
      });
    },
    { scope: section },
  );

  return (
    <section ref={section} className={styles.section} data-header-glass-sentinel>
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={`twix-container ${styles.inner}`}>
        <div data-about-reveal className={styles.portraitFrame}>
          <div className={styles.portraitGlow} aria-hidden="true" />
          <div className={styles.portrait}>
            <Image
              src="/images/me.jpeg"
              alt="Portrait of Keita Smith"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.copy}>
          <p data-about-reveal className="twix-eyebrow">
            ABOUT TWIXALOT
          </p>
          <h2 data-about-reveal>Creative Software, Built With Care</h2>
          <p data-about-reveal>
            Twixalot is led by Keita Smith, a Zurich, Switzerland-based software developer and creative technologist with roots in Trinidad and Tobago. I build polished websites, content platforms and custom digital systems that bring together strong visual direction, practical engineering and clear communication.
          </p>
          <div data-about-reveal>
            <Link href="/about" className={styles.button}>
              Read more
              <ArrowIcon size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
