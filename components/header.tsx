"use client";

import { Link } from "next-view-transitions";
import ModeToggle from "./mode-toggle";
import { DropdownMenuHeader } from "@/components/dropdown-menu";

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-6">
      <div className="flex items-center justify-between py-4 font-jetbrains-mono">
        
        {/* Left Navigation */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <p className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
              Home
            </p>
          </Link>

          <Link href="/about">
            <p className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
              About
            </p>
          </Link>

          {/* <Link href="/guest-book">
            <p className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
              Guestbook
            </p>
          </Link>

          <DropdownMenuHeader /> */}
        </div>

        {/* Right Actions */}
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;