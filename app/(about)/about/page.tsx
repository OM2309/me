import { webdev, tools, database, devops } from "@/data/icons/tech-stack";
import GithubContribution from "@/components/github-contribution";
import PageHeader from "@/components/page-header";
import SectionHeading from "@/components/ui/section-heading";

const techGroups = [
  { title: "Web Development", items: webdev },
  { title: "Tools & Platforms", items: tools },
  { title: "Database & Storage", items: database },
  { title: "DevOps & Cloud", items: devops },
];

export default function About() {
  return (
    <div className="space-y-14">
      <PageHeader
        title="About"
        description="Full-stack developer building scalable, performant, and beautiful web applications — from pixel-perfect UIs to robust backend systems."
      />

      <section className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          I love clean code, modern tools, and shipping fast. When I&apos;m not
          coding, I explore new tech, contribute to open-source, and help junior
          developers grow.
        </p>
      </section>

      <section className="space-y-8">
        <SectionHeading>Stack & Tools</SectionHeading>
        {techGroups.map((group) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              {group.title}
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-tag-bg)]/40 hover:bg-[var(--color-tag-bg)] transition-colors"
                >
                  <div className="shrink-0 [&_svg]:!w-5 [&_svg]:!h-5">
                    {tech.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {tech.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
