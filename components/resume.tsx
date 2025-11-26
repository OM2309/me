import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Resume() {
  return (
    <Button size="lg" variant="outline">
        <Link className="w-5 h-5"/>
      <span className="font-inter font-semibold text-base leading-[1.6]">Resume</span>
    </Button>
  );
}
