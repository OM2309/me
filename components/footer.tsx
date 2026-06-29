import { Link } from "next-view-transitions";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    href: "https://github.com/OM2309",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "mailto:23anuragsharma@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: "https://x.com/_whyom",
    label: "X",
    icon: FaXTwitter,
  },
  {
    href: "https://www.linkedin.com/in/anuragxcodes/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border-subtle)] mt-8">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1.5">
            <p className="font-serif text-[15px] text-foreground">
              OM
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Built with Next.js.{" "}
              <a
                href="https://github.com/OM2309/me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline transition-colors"
              >
                View source
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <Link
              href="/"
              className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors ml-1"
            >
              ↑ Home
            </Link>
          </div>
        </div>

        <p className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] text-xs font-mono text-muted-foreground/70">
          © {new Date().getFullYear()} OM
        </p>
      </div>
    </footer>
  );
}
