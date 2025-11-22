import About from "@/components/about";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-6 p-8">
      <div className="mt-20">
        <Profile />
        <About />
      </div>
      <div className="">
        Column 2
      </div>
    </div>
  );
}
