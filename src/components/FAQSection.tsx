"use client";

import Link from "next/link";
import { useState } from "react";
import { homeFaqItems } from "@/data/homeFaqs";
import styles from "./FAQSection.module.css";

const calculatorHref = "/pricing#estimate-calculator";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="home-faq-heading">
      <div className={`twix-container ${styles.inner}`}>
        <div className={styles.intro}>
          <p className="twix-eyebrow">FAQ</p>
          <h2 id="home-faq-heading">Frequently Asked Questions</h2>
          <p>Have questions before starting a project? Here are a few things clients usually ask before reaching out.</p>
        </div>

        <div className={styles.list}>
          {homeFaqItems.map((item, index) => (
            <article key={item.question} className={styles.item} data-open={openIndex === index ? "true" : "false"}>
              <h3>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={openIndex === index}
                  aria-controls={`home-faq-answer-${index}`}
                  id={`home-faq-question-${index}`}
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true" />
                </button>
              </h3>
              <div
                id={`home-faq-answer-${index}`}
                className={styles.answerWrap}
                role="region"
                aria-labelledby={`home-faq-question-${index}`}
                aria-hidden={openIndex !== index}
              >
                <div className={styles.answer}>
                  {item.answer.map((paragraph, paragraphIndex) => (
                    <p key={paragraph}>
                      {index === 4 && paragraphIndex === 0 ? (
                        <>
                          Yes. You can use the <Link href={calculatorHref}>estimate calculator</Link> to get a rough
                          idea of what your project might cost. If you send the estimate to Twixalot, it will be
                          reviewed based on your actual needs, timeline, content, features, and technical requirements.
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
