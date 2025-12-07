import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Spotify from "@/components/spotify";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-background text-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 mx-auto">
          <aside className="lg:col-span-6 space-y-8 lg:sticky lg:top-10 lg:h-fit">
            <Profile />
            <About />
          </aside>

          <main className="lg:col-span-6 space-y-12 pb-20">
            <Experience />
            <Projects />
            <Technologies />
            <Spotify />
          </main>
        </div>
      </div>
    </>
  );
}
