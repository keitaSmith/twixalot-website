import { AboutPreview } from "@/components/AboutPreview";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="overflow-hidden bg-[#010613] text-white">
        <Hero />

        <AboutPreview />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
