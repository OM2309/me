import { Link } from "next-view-transitions";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 dark:bg-black/50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Footer Content Grid */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Left: Copyright */}
          <div className="text-xs sm:text-sm text-zinc-400 font-mono">
            © 2026 Anurag Sharma.
          </div>

          {/* Center: Navigation Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <Link
              href="/about"
              className="text-zinc-400 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/guest-book"
              className="text-zinc-400 hover:text-foreground transition-colors"
            >
              Guestbook
            </Link>
            <a
              href="https://github.com/OM2309"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-foreground transition-colors"
            >
              Projects
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/om2309"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-foreground transition-colors"
              title="Twitter"
            >
              <FaTwitter className="h-4 w-4" />
            </a>
            <a
              href="mailto:23anuragsharma@gmail.com"
              className="text-zinc-400 hover:text-foreground transition-colors"
              title="Email"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/om2309"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-foreground transition-colors"
              title="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
