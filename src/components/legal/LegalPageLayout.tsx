import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type LegalSection = {
  title: string;
  body: Array<string | string[]>;
};

type LegalPageLayoutProps = {
  title: string;
  intro?: string;
  sections: LegalSection[];
};

export function LegalPageLayout({ title, intro, sections }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#010613] py-32 text-white sm:py-40">
        <div className="twix-container">
          <div className="max-w-3xl">
            <p className="twix-eyebrow">Legal</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
            {intro ? <p className="mt-6 text-base leading-8 text-white/66">{intro}</p> : null}
          </div>

          <article className="mt-12 max-w-4xl rounded-[8px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8">
            <div className="grid gap-10">
              {sections.map((section) => (
                <section key={section.title} className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold leading-tight text-white">{section.title}</h2>
                  <div className="mt-4 grid gap-4 text-sm leading-7 text-white/66 sm:text-base sm:leading-8">
                    {section.body.map((item, index) =>
                      Array.isArray(item) ? (
                        <ul key={`${section.title}-${index}`} className="grid gap-2 pl-5">
                          {item.map((listItem) => (
                            <li key={listItem} className="list-disc">
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p key={`${section.title}-${index}`}>{renderLegalText(item)}</p>
                      ),
                    )}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center justify-center border border-white/18 px-5 font-semibold text-white transition hover:border-white/42 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
          >
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function renderLegalText(text: string) {
  const email = "keita.smith@twixalot.com";
  const website = "https://www.twixalot.com";

  if (text === email) {
    return (
      <Link href={`mailto:${email}`} className="text-white underline decoration-[var(--color-magenta)] decoration-2 underline-offset-4">
        {email}
      </Link>
    );
  }

  if (text === website) {
    return (
      <Link href={website} className="text-white underline decoration-[var(--color-magenta)] decoration-2 underline-offset-4">
        {website}
      </Link>
    );
  }

  return text;
}
