"use client";

import { Link } from "next-view-transitions";
import ModeToggle from "./mode-toggle";
import { DropdownMenuHeader } from "@/components/dropdown-menu";

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-6">
      <div className="flex justify-end items-center py-4 gap-6 font-jetbrains-mono">
        <Link href="/about">
          <p className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
            About
          </p>
        </Link>
        <Link href="/blog">
          <p className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
            Blog
          </p>
        </Link>
        <Link href="/guest-book">
          <p className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
            Guestbook
          </p>
        </Link>
        <DropdownMenuHeader />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
