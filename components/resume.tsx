import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Resume() {
  return (
    <Button
      size="lg"
      className="cursor-pointer"
      variant="outline"
      onClick={() => window.open("/Anurag-2yr.pdf", "_blank")}
    >
      <Link className="w-5 h-5"/>
      <span className="  font-semibold text-base leading-[1.6]">Resume</span>
    </Button>
  );
}
