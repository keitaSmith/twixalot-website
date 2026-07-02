"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ContactForm } from "./ContactForm";
import styles from "./ContactSection.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ContactSection() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      const items = gsap.utils.toArray<HTMLElement>("[data-contact-reveal]", section.current);

      gsap.set(items, { opacity: 0, y: 42, filter: "blur(10px)" });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.12,
        duration: 0.72,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 74%",
          end: "center 54%",
          scrub: 0.7,
        },
      });
    },
    { scope: section },
  );

  return (
    <section ref={section} className={styles.section}>
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={`twix-container ${styles.inner}`}>
        <div className={styles.copy}>
          <p data-contact-reveal className="twix-eyebrow">
            Contact
          </p>
          <h2 data-contact-reveal>Have A Project In Mind?</h2>
          <p data-contact-reveal>
            Tell me what you are building, what needs to change, or what you wish your current website or system could do better.
          </p>
        </div>
        <div data-contact-reveal className={styles.formShell}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
