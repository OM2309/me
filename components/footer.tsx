import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden mt-16 border-t border-zinc-200 dark:border-zinc-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg-dark.webp"
          alt="Footer Samurai Background"
          fill
          sizes="100vw"
          className="object-cover object-center dark:brightness-[0.35] brightness-[0.8] saturate-[0.7]"
        />
        {/* Theme-dependent overlay to ensure readable text contrast */}
        <div className="absolute inset-0 bg-white/75 dark:bg-zinc-950/80 backdrop-blur-[0.5px]" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 flex flex-col items-center justify-center text-center space-y-2.5 font-mono text-[11px] sm:text-xs">
        <p className="text-zinc-700 dark:text-zinc-300 tracking-wide">
          Built by{" "}
          <Link
            href="https://github.com/OM2309"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black dark:text-white underline hover:opacity-85"
          >
            om2309
          </Link>
          . The code is available on{" "}
          <Link
            href="https://github.com/OM2309"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black dark:text-white underline hover:opacity-85"
          >
            GitHub
          </Link>
          .
        </p>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium">
          &copy; 2026 Anurag Sharma &middot; All rights reserved
        </p>
      </div>
    </footer>
  );
}
