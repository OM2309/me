import { Link } from "next-view-transitions";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 relative overflow-hidden max-w-3xl mx-auto">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/footer-bg-dark.webp')",
        }}
      />
      
      {/* Gradient Overlays for Better Text Visibility and Color */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />

      {/* Content */}
      <div className="relative px-6 py-20">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {/* Main Message */}
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-zinc-300 font-light tracking-wide">
              Built by{" "}
              <a
                href="https://github.com/om2309"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                OM
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/om2309"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                GitHub
              </a>
              .
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/om2309"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-400 transition-colors duration-200"
              title="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:23anuragsharma@gmail.com"
              className="text-zinc-400 hover:text-amber-400 transition-colors duration-200"
              title="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/om2309"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-purple-400 transition-colors duration-200"
              title="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-zinc-500 font-mono pt-4 border-t border-zinc-700/50">
            © 2026 Anurag Sharma · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
