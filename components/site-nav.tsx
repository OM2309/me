"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-3xl mx-auto px-6">
      <nav className="flex items-center gap-5 py-4 text-[15px] font-mono">
        {links.map(({ href, label }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors",
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
