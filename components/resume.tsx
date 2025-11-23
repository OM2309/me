import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Resume() {
  return (
    <Button size="lg" className="bg-white  text-black dark:text-white dark:bg-black ml-2 border border-gray-700">
        <Link className="w-5 h-5"/>
      <span className="font-inter font-semibold text-base leading-[1.6]">Resume</span>
    </Button>
  );
}
