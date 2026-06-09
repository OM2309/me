"use client";

import { Link } from "next-view-transitions";
import ModeToggle from "./mode-toggle";
import { Coffee } from "lucide-react";
import { DropdownMenuHeader } from "./dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <div className="flex items-center justify-between py-4 font-jetbrains-mono">

        {/* Left Side */}
        <div className="flex items-center gap-6">

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Blog
            </Link>

            {/* <Link
              href="/guest-book"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Guestbook
            </Link> */}

            {/* <DropdownMenuHeader /> */}
          </nav>
        </div>

        {/* Right Side */}
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;