import { webdev, tools, database, devops } from "@/data/icons/tech-stack";
import GithubContribution from "@/components/github-contribution";
import SocialMedia from "@/components/social-media";
import { Suspense } from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am a Full Stack Developer passionate about building scalable,
            performant, and beautiful web applications — from pixel-perfect UIs
            to robust backend systems.
          </p>
          <p>
            I love clean code, modern tools, and shipping fast. Always learning,
            always improving.
          </p>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Technologies & Tools</h2>

        {/* Web Development */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-5">
            Web Development
          </h3>
          <div className="grid gap-4 grid-cols-2">
            {webdev.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-5 p-5 rounded-xl bg-card border border-border hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 cursor-default group"
              >
                <div className="shrink-0 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-5 mt-10">
            Tools & Platforms
          </h3>
          <div className="grid gap-4 grid-cols-2">
            {tools.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-5 p-5 rounded-xl bg-card border border-border hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 cursor-default group"
              >
                <div className="shrink-0 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-5 mt-10">
            Database & Storage
          </h3>
          <div className="grid gap-4 grid-cols-2">
            {database.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-5 p-5 rounded-xl bg-card border border-border hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 cursor-default group"
              >
                <div className="shrink-0 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-5 mt-10">
            DevOps & Cloud
          </h3>
          <div className="grid gap-4 grid-cols-2">
            {devops.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-5 p-5 rounded-xl bg-card border border-border hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 cursor-default group"
              >
                <div className="shrink-0 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="mt-8 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">GitHub Contributions</h2>
        <GithubContribution />
      </section>

      {/* Guestbook */}
      <Suspense fallback={<div>Loading...</div>}>
        <section className="mt-8 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Connect</h2>
          <SocialMedia />
        </section>
      </Suspense>

      {/* Outside of Code */}
      <section className="space-y-6 pb-12">
        <h2 className="text-3xl font-bold">Outside of Code</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          When I&rsquo;m not coding, I enjoy exploring new tech, contributing to
          open-source, writing blogs, and helping junior developers grow. I
          believe in building tools that make development faster, cleaner, and
          more enjoyable.
        </p>
      </section>
    </div>
  );
};

export default About;
