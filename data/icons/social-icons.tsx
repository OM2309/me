// data/icons/social-icons.tsx
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiDiscord, SiGmail } from "react-icons/si";
import { RxTwitterLogo } from "react-icons/rx"; 

export const socialIcons = [
  {
    name: "Discord",
    description: "Chat & Community",
    icon: <SiDiscord className="text-[#5865F2] text-4xl" />,
  },
  {
    name: "Gmail",
    description: "Email",
    icon: <SiGmail className="text-[#EA4335] text-4xl" />,
  },
  {
    name: "LinkedIn",
    description: "Professional Network",
    icon: <FaLinkedin className="text-[#0A66C2] text-4xl" />,
  },
  {
    name: "Instagram",
    description: "Photos & Reels",
    icon: <FaInstagram className="text-[#E4405F] text-4xl" />,
  },
  {
    name: "X",
    description: "x.com",
    icon: <RxTwitterLogo className="text-black dark:text-white text-4xl" />,
  },
  {
    name: "Git & GitHub",
    description: "Version Control",
    icon: <FaGithub className="text-black dark:text-white text-4xl" />,
  },
];