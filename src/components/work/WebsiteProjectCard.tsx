import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WebsiteProject } from "@/data/websiteProjects";

type WebsiteProjectCardProps = {
  project: WebsiteProject;
  variant?: "featured" | "archive";
};

export function WebsiteProjectCard({ project, variant = "archive" }: WebsiteProjectCardProps) {
  const isFeatured = variant === "featured";
  const ctaLabel = project.url ? "View project" : "View details";
  const href = project.url ?? `#${project.slug}`;

  return (
    <article
      id={project.slug}
      className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-white/24 hover:bg-white/[0.065]"
    >
      <div className="relative aspect-video overflow-hidden bg-[#050b1d]">
        <Image
          src={project.image}
          alt={`${project.title} website screenshot`}
          fill
          sizes={isFeatured ? "(min-width: 1024px) 44rem, 100vw" : "(min-width: 1024px) 26rem, 100vw"}
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </div>

      <div className={`flex flex-1 flex-col ${isFeatured ? "p-6 sm:p-7" : "p-5 sm:p-6"}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/66">
            {project.categories[0]}
          </span>
          <span className="rounded-full border border-[rgba(226,7,86,0.32)] bg-[rgba(226,7,86,0.12)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/72">
            {project.status}
          </span>
        </div>

        <h3 className={`${isFeatured ? "mt-6 text-2xl xl:text-3xl" : "mt-5 text-2xl"} font-semibold leading-tight text-white`}>
          {project.title}
        </h3>
        <p className={`${isFeatured ? "mt-5 text-base" : "mt-4 text-sm"} leading-7 text-white/66`}>{project.summary}</p>
        {isFeatured ? <p className="mt-5 text-sm leading-7 text-white/52">{project.description}</p> : null}
        {isFeatured && project.whatWasBuilt ? (
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
            What was built: <span className="normal-case tracking-normal text-white/58">{project.whatWasBuilt}</span>
          </p>
        ) : null}
        {isFeatured && project.keyFeatures ? (
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.keyFeatures.slice(0, 6).map((feature) => (
              <span key={feature} className="rounded-full bg-white/[0.055] px-3 py-2 text-xs text-white/58">
                {feature}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="rounded-full bg-white/[0.065] px-3 py-1 text-xs font-medium text-white/62">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="max-w-[28rem] text-xs leading-6 text-white/48">{project.role}</p>
          <Link
            href={href}
            target={project.url ? "_blank" : undefined}
            rel={project.url ? "noreferrer" : undefined}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition hover:text-white/76 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)]"
            aria-label={`${ctaLabel} for ${project.title}`}
          >
            {ctaLabel}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}
