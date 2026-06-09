import About from "@/components/about";
import { getTotalProfileViews } from "@/actions/profile-views";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import HeroBanner from "@/components/hero-banner";
import AnimeQuote from "@/components/anime-quote";
import BlurFade from "@/components/ui/blur-fade";
import HomeSection from "@/components/home-section";
import BlogPost from "@/components/blog-post";
import GithubContribution from "@/components/github-contribution";

export const revalidate = 60;

export default async function Home() {
  const viewCount = await getTotalProfileViews();

  return (
    <>
      <Header />
      <main className="bg-background text-foreground max-w-3xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-16 sm:gap-20">
          <BlurFade
            inView={false}
            delay={0}
            duration={0.8}
            yOffset={20}
            blur="8px"
            className="pt-2"
          >
            <HeroBanner />
          </BlurFade>

          <BlurFade
            inView={false}
            delay={0.12}
            duration={0.75}
            yOffset={14}
            blur="6px"
          >
            <About initialViewCount={viewCount} />
          </BlurFade>

          <HomeSection id="contributions" title="Contributions">
            <GithubContribution />
          </HomeSection>

          <HomeSection id="stack" delay={0.04}>
            <Technologies />
          </HomeSection>

          <HomeSection id="experience" delay={0.04}>
            <Experience />
          </HomeSection>

          <HomeSection id="projects" title="Selected Work" delay={0.04}>
            <Projects />
          </HomeSection>

          <HomeSection id="writing" delay={0.04}>
            <BlogPost limit={2} showViewAll />
          </HomeSection>

          <HomeSection id="quote" delay={0.06} className="pt-2">
            <AnimeQuote />
          </HomeSection>
        </div>
      </main>
    </>
  );
}
