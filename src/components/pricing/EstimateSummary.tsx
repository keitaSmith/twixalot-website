import { ShieldCheck } from "lucide-react";

type SummaryLine = {
  label: string;
  detail?: string;
  amount?: string;
  tone?: "included" | "added" | "upgrade";
};

type EstimateSummaryProps = {
  low: string;
  high: string;
  monthlyCare: string;
  hasMonthlyCare: boolean;
  monthlyCareExplanation: string;
  pathwayTitle: string;
  included: string[];
  addedScope: SummaryLine[];
};

export function EstimateSummary({
  low,
  high,
  monthlyCare,
  hasMonthlyCare,
  monthlyCareExplanation,
  pathwayTitle,
  included,
  addedScope,
}: EstimateSummaryProps) {
  return (
    <aside className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[#030817]/88 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:sticky lg:top-28">
      <div
        className="pointer-events-none absolute inset-0 rounded-[8px] bg-[radial-gradient(circle_at_16%_0%,rgba(226,7,86,0.12),transparent_16rem),radial-gradient(circle_at_96%_90%,rgba(11,79,217,0.15),transparent_16rem)]"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center gap-3 text-white/70">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
            <ShieldCheck aria-hidden="true" size={18} />
          </span>
          <p className="text-sm font-semibold uppercase tracking-[0.14em]">Planning range</p>
        </div>

        <p className="mt-7 text-sm text-white/52">Estimated project range</p>
        <p className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {low} to {high}
        </p>

        <div className="mt-6 rounded-[8px] border border-white/10 bg-white/[0.045] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Optional monthly care</p>
          <p className="mt-2 text-xl font-semibold text-white">{hasMonthlyCare ? monthlyCare : "Not selected"}</p>
          <p className="mt-3 text-xs leading-6 text-white/52">{monthlyCareExplanation}</p>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
            Included in {pathwayTitle}
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/66">
            {included.slice(0, 6).map((item) => (
              <li key={item} className="flex items-start justify-between gap-3">
                <span>{item}</span>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-white/42">
                  Included
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Added scope</p>
          {addedScope.length > 0 ? (
            <ul className="mt-3 grid gap-3 text-sm leading-6 text-white/66">
              {addedScope.map((item) => (
                <li key={`${item.label}-${item.amount ?? "included"}`} className="rounded-[8px] bg-white/[0.04] p-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-medium text-white/78">{item.label}</span>
                    {item.amount ? (
                      <span
                        className={`shrink-0 text-xs font-semibold uppercase tracking-[0.12em] ${
                          item.tone === "upgrade" ? "text-[var(--color-electric)]" : "text-[var(--color-magenta)]"
                        }`}
                      >
                        {item.amount}
                      </span>
                    ) : null}
                  </div>
                  {item.detail ? <p className="mt-1 text-xs leading-5 text-white/46">{item.detail}</p> : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 rounded-[8px] bg-white/[0.04] p-3 text-sm leading-6 text-white/58">
              No paid add-ons selected. The estimate is staying close to the selected pathway base scope.
            </p>
          )}
        </div>

        <p className="mt-6 text-xs leading-6 text-white/52">
          This estimate is for planning only. A final proposal depends on the exact scope, content, timeline,
          integrations and handover needs.
        </p>

      </div>
    </aside>
  );
}
