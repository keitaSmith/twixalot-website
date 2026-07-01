import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#010613] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="twix-eyebrow">Twixalot</p>
        <h1 className="mt-5 text-5xl font-semibold">About</h1>
        <p className="mt-5 text-white/64">This page is ready for the next content pass.</p>
        <Link href="/" className="mt-8 inline-flex bg-white px-5 py-3 font-semibold text-[#03143c]">
          Back home
        </Link>
      </div>
    </main>
  );
}
