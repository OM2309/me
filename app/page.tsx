import About from "@/components/about";
import { getTotalProfileViews } from "@/actions/profile-views";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import AnimeQuote from "@/components/anime-quote";
import BlurFade from "@/components/ui/blur-fade";
import HomeSection from "@/components/home-section";
import BlogPost from "@/components/blog-post";
import GithubContribution from "@/components/github-contribution";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export const revalidate = 60;

export default async function Home() {
  const viewCount = await getTotalProfileViews();

  return (
    <>
      <main className="bg-background text-foreground max-w-3xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* Banner Cover Image */}
          <div className="relative w-full h-[160px] sm:h-[180px]  overflow-hidden bg-zinc-950">
            <Image
              src="/images/d.png"
              alt="Profile Banner"
              fill
              className="object-cover opacity-80 select-none pointer-events-none"
              priority
            />

            {/* <div className="absolute top-3 right-3 z-20">
              <AnimatedThemeToggler className="bg-black/40 backdrop-blur-md text-white hover:bg-black/60 active:scale-95 transition-all border border-white/10 rounded-full h-8 w-8 [&_svg]:size-4" />
            </div> */}
          </div>
          <BlurFade
            inView={false}
            delay={0.12}
            duration={0.75}
            yOffset={14}
            blur="6px"
          >
            <About initialViewCount={viewCount} />
          </BlurFade>

          <HomeSection id="contributions">
            <GithubContribution />
          </HomeSection>

          <HomeSection id="stack" delay={0.04}>
            <Technologies />
          </HomeSection>

          <HomeSection id="experience" title="Experience So Far" delay={0.04}>
            <Experience />
          </HomeSection>

          <HomeSection id="projects" title="Selected Work" delay={0.04}>
            <Projects />
          </HomeSection>

          <HomeSection id="quote" delay={0.06} className="pt-2">
            <AnimeQuote />
          </HomeSection>
        </div>
      </main>
    </>
  );
}
