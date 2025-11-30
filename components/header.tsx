"use client";

import Link from "next/link";
import ModeToggle from "./mode-toggle";

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-end items-center p-4 gap-4">
        <Link href="/blog">
          <p className="font-inter text-sm dark:text-white text-black">Blog</p>
        </Link>
        <Link href="/guest-book">
          <p className="font-inter text-sm dark:text-white text-black">
            Guestbook
          </p>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
