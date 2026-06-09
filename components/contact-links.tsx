import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contactMethods = [
  {
    href: "mailto:23anuragsharma@gmail.com",
    label: "Email",
    value: "23anuragsharma@gmail.com",
    description: "Quick inquiries & questions",
    icon: FaEnvelope,
  },
  {
    href: "https://github.com/OM2309",
    label: "GitHub",
    value: "@OM2309",
    description: "Projects & open source",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://x.com/_whyom",
    label: "X",
    value: "@_whyom",
    description: "Follow for updates & insights",
    icon: FaXTwitter,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/anuragxcodes/",
    label: "LinkedIn",
    value: "anuragxcodes",
    description: "Connect professionally",
    icon: FaLinkedin,
    external: true,
  },
];

export default function ContactLinks() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-tag-bg)]/50 p-6 sm:p-7">
      <div className="mb-6 space-y-2">
        <h2 className="font-serif text-xl text-foreground">Get in Touch</h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          Choose your preferred way to connect and let&apos;s discuss your next
          project.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-[var(--color-border-subtle)]">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-button-bg)] text-muted-foreground group-hover:text-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-medium text-foreground">
                  {method.label}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {method.value}
                </p>
                <p className="text-xs text-muted-foreground/80 mt-0.5">
                  {method.description}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          );
        })}
      </div>

      <div className="mt-auto pt-6 space-y-2.5 border-t border-[var(--color-border-subtle)]">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5 shrink-0" />
          Replies within 24 hours
        </p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
          Open to remote, freelance & full-time
        </p>
      </div>
    </div>
  );
}
