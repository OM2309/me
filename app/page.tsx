import About from "@/components/about";
import Profile from "@/components/profile";
import SocialMedia from "@/components/social-media";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-6 p-8">
      <div className="mt-20">
        <Profile />
        <About />     
        <SocialMedia/>  
      </div>
      <div>
       <Technologies />
      </div>
    </div>
  );
}
