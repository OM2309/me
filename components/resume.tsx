import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Resume() {
  return (
    <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black">
        <Link className="w-5 h-5"/>
      <span className="font-inter font-semibold text-base leading-[1.6]">Resume</span>
    </Button>
  );
}
