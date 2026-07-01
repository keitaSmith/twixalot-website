import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#010613] px-6 py-32 text-white">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="twix-eyebrow">Contact</p>
          <h1 className="mt-5 text-5xl font-semibold">Start a project</h1>
          <p className="mt-5 text-white/64">Share the shape of the work and Twixalot can take it from there.</p>
          <Link href="/" className="mt-8 inline-flex text-white underline decoration-[var(--color-magenta)] decoration-2 underline-offset-8">
            Back home
          </Link>
        </div>
        <div className="border border-white/10 bg-white/[0.035] p-5 sm:p-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
