import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import HeroBanner from "@/components/hero-banner";
import AnimeQuote from "@/components/anime-quote";
import BlurFade from "@/components/ui/blur-fade";
import BlogPost from "@/components/blog-post";
import GithubContribution from "@/components/github-contribution";
import ProfileStats from "@/components/profile-stats";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-background text-foreground max-w-3xl mx-auto px-6 pb-20 space-y-12">
        {/* Banner Section */}
        <BlurFade delay={0.05} duration={0.5}>
          <HeroBanner />
        </BlurFade>

        {/* Profile Card Header */}
        <BlurFade delay={0.15} duration={0.5}>
          <div className="pt-4">
            <About />
          </div>
        </BlurFade>

        {/* GitHub Contributions */}
        <BlurFade delay={0.35} duration={0.5}>
          <GithubContribution />
        </BlurFade>

        {/* Profile Stats
        <BlurFade delay={0.2} duration={0.5}>
          <ProfileStats />
        </BlurFade> */}

        {/* Experience Section */}
        <BlurFade delay={0.25} duration={0.5}>
          <Experience />
        </BlurFade>


        {/* Projects Section */}
        <BlurFade delay={0.45} duration={0.5}>
          <Projects />
        </BlurFade>

        {/* Technologies Section */}
        <BlurFade delay={0.55} duration={0.5}>
          <Technologies />
        </BlurFade>

        {/* Blog Section */}
        <BlurFade delay={0.65} duration={0.5}>
          <BlogPost />
        </BlurFade>

        {/* Anime Quote Section */}
        <BlurFade delay={0.75} duration={0.5}>
          <AnimeQuote />
        </BlurFade>
      </div>
    </>
  );
}
