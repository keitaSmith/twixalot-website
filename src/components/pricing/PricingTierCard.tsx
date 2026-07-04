import { Check } from "lucide-react";

type PricingTierCardProps = {
  title: string;
  price: string;
  description: string;
  bestFor: string[];
  note?: string;
  featured?: boolean;
};

export function PricingTierCard({ title, price, description, bestFor, note, featured }: PricingTierCardProps) {
  return (
    <article
      className={`twix-fade-up relative flex h-full flex-col overflow-hidden rounded-[8px] border p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] ${
        featured
          ? "border-[rgba(226,7,86,0.34)] bg-white/[0.065]"
          : "border-white/10 bg-white/[0.045]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(226,7,86,0.12),transparent_14rem),radial-gradient(circle_at_94%_92%,rgba(11,79,217,0.12),transparent_14rem)]"
        aria-hidden="true"
      />
      <div className="relative flex min-h-full flex-col">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/44">{price}</p>
        <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/64">{description}</p>
        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Best for</p>
          <ul className="mt-4 grid gap-3">
            {bestFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-white/72">
                <Check aria-hidden="true" className="mt-1 shrink-0 text-[var(--color-magenta)]" size={15} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {note ? (
          <p className="mt-7 rounded-[8px] border border-white/10 bg-[#050b1d]/72 p-4 text-xs leading-6 text-white/58">
            {note}
          </p>
        ) : null}
      </div>
    </article>
  );
}
