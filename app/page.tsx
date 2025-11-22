import About from "@/components/about";
import Experience from "@/components/experience";
import GithubContribution from "@/components/github-contribution";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import SocialMedia from "@/components/social-media";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-6 p-8 h-screen overflow-hidden">
      <div className="mt-20 sticky top-0 h-fit">
        <Profile />
        <About />
        <SocialMedia />
      </div>

      <div className="h-screen pr-4 overflow-y-auto hide-scrollbar">
        <Experience />
        <Projects />
        <Technologies />
        <GithubContribution />
      </div>
    </div>
  );
}
