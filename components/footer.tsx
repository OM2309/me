import { Link } from "next-view-transitions";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg-dark.webp"
          alt="Footer Samurai Background"
          fill
          sizes="100vw"
          className="object-cover object-center dark:brightness-[0.4] brightness-[0.8] saturate-[0.8]"
          priority
        />
        {/* Sleek overlay for text readability */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/50" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 flex flex-col items-center justify-center text-center space-y-3 font-sans text-xs sm:text-[13px]">
        <p className="text-zinc-800 dark:text-zinc-100 tracking-wide font-normal">
          Built by{" "}
          <Link
            href="https://github.com/OM2309"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            om2309
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/OM2309"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            GitHub
          </Link>
          .
        </p>
        <p className="text-zinc-550 dark:text-zinc-400 text-[11px] sm:text-xs">
          &copy; 2026 Anurag Sharma &middot; All rights reserved
        </p>
      </div>
    </footer>
  );
}
