"use client";
import { SocialMediaPlatform } from "@/types";
import { Github, Instagram, Linkedin, X } from "lucide-react";
import Resume from "@/components/resume";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaDiscord } from "react-icons/fa";
import Contact from "./contact";
import Appreciation from "./appereciation";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  const handleNavigate = (socialMediaPlatform: SocialMediaPlatform) => {
    switch (socialMediaPlatform) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/anuragxcodes/", "_blank");
        break;
      case "github":
        window.open("https://github.com/OM2309/", "_blank");
        break;
      case "instagram":
        window.open("https://instagram.com/_whyom", "_blank");
        break;
      case "x":
        window.open("https://x.com/0xAnuragWeb", "_blank");
        break;
      case "discord":
        window.open("https://discord.com/users/anuragsharma_13107", "_blank");
        break;
      case "gmail":
        window.open("mailto:23anuragsharma@gmail.com", "_blank");
        break;
    }
  };

  return (
    <>
      <div className="flex justify-between max-w-lg items-center">
        <div className="p-4 grid grid-cols-6 gap-4">
          <Tooltip>
            <TooltipTrigger>
              <Linkedin
                onClick={() => handleNavigate("linkedin")}
                className="cursor-pointer w-5 h-5"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Github
                onClick={() => handleNavigate("github")}
                className="cursor-pointer w-5 h-5"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Instagram
                onClick={() => handleNavigate("instagram")}
                className="cursor-pointer w-5 h-5"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <X
                onClick={() => handleNavigate("x")}
                className="cursor-pointer w-5 h-5"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>X</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <FaDiscord
                onClick={() => handleNavigate("discord")}
                className="cursor-pointer w-5 h-5"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Discord</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <SiGmail
                onClick={() => handleNavigate("gmail")}
                className="cursor-pointer w-5 h-5"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Gmail</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Appreciation />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Resume />
        <Contact />
      </div>
    </>
  );
};

export default SocialMedia;
