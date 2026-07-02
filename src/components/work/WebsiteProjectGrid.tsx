import { WebsiteProjectCard } from "@/components/work/WebsiteProjectCard";
import type { WebsiteProject } from "@/data/websiteProjects";

type WebsiteProjectGridProps = {
  projects: WebsiteProject[];
};

export function WebsiteProjectGrid({ projects }: WebsiteProjectGridProps) {
  return (
    <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <div key={project.slug} className="twix-fade-up h-full" style={{ animationDelay: `${index * 45}ms` }}>
          <WebsiteProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
