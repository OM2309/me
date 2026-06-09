"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    { icon: <FaTwitter className="h-[18px] w-[18px]" />, href: "https://x.com/0xAnuragWeb", label: "X" },
    { icon: <FaLinkedin className="h-[18px] w-[18px]" />, href: "https://www.linkedin.com/in/anuragxcodes/", label: "LinkedIn" },
    { icon: <FaGithub className="h-[18px] w-[18px]" />, href: "https://github.com/OM2309/", label: "GitHub" },
    { icon: <FaInstagram className="h-[18px] w-[18px]" />, href: "https://instagram.com/_whyom", label: "Instagram" },
    { icon: <FaDiscord className="h-[18px] w-[18px]" />, href: "https://discord.com/users/anuragsharma_13107", label: "Discord" },
    { icon: <FaEnvelope className="h-[18px] w-[18px]" />, href: "mailto:23anuragsharma@gmail.com", label: "Email" },
  ];

  return (
    <div className="flex items-center gap-4.5 pt-1.5 flex-wrap">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-200"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
