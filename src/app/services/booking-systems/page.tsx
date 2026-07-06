import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { servicePageBySlug } from "@/data/servicePages";
import { createPageMetadata } from "@/data/seo";

const service = servicePageBySlug["booking-systems"];

export const metadata: Metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/booking-systems",
});

export default function BookingSystemsServicePage() {
  return (
    <>
      <Header />
      <main className="work-atmosphere min-h-screen overflow-hidden bg-[#010613] text-white">
        <ServiceLandingPage service={service} />
      </main>
      <Footer />
    </>
  );
}
