"use client";

import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { DropdownMenuHeader } from "@/components/dropdown-menu";


const Header: React.FC = () => {
  return (
    <div className="flex justify-end items-center p-4 gap-4 font-jetbrains-mono ">
      <Link href="/about">
        <p className="text-sm text-foreground/70 hover:text-foreground">
          About
        </p>
      </Link>
      <Link href="/blog">
        <p className="text-sm text-foreground/70 hover:text-foreground">
          Blog
        </p>
      </Link>
      <Link href="/guest-book">
        <p className="text-sm text-foreground/70 hover:text-foreground">
          Guestbook
        </p>
      </Link>
      <DropdownMenuHeader />
      <ModeToggle />
    </div>
  );
};

export default Header;
