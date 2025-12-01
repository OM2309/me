"use client";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { Coffee } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 gap-8 font-jetbrains-mono">
        {/* Logo */}
        <Link href="/" className="group">
          <Coffee className="h-4 w-4 text-orange-500 transition-transform group-hover:rotate-12"  />
        </Link>

        {/* Navigation links + Mode toggle */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/guest-book" className="text-foreground/70 hover:text-foreground transition-colors">
            Guestbook
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;