import { AboutPreview } from "@/components/AboutPreview";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SmoothScroll } from "@/components/SmoothScroll";
import { homeFaqItems } from "@/data/homeFaqs";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.join("\n\n"),
      },
    })),
  };

  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="overflow-hidden bg-[#010613] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Hero />

        <AboutPreview />

        <FAQSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
