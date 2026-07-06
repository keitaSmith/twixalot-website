import { AboutPreview } from "@/components/AboutPreview";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import { homeFaqItems } from "@/data/homeFaqs";
import { createPageMetadata, faqJsonLd } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Websites, Apps & Digital Systems for Small Businesses",
  description:
    "Twixalot builds fast websites, booking systems, e-commerce platforms, mobile apps and custom digital tools for small businesses and organisations in Zurich, Switzerland and beyond.",
  path: "/",
});

export default function Home() {
  const homeFaqSchema = faqJsonLd(
    homeFaqItems.map((item) => ({ question: item.question, answer: item.answer.join("\n\n") })),
    "/",
  );

  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="overflow-hidden bg-[#010613] text-white">
        <JsonLd data={homeFaqSchema} />
        <Hero />

        <AboutPreview />

        <FAQSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
