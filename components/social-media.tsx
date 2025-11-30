"use client";
import { SocialMediaPlatform } from "@/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Resume from "@/components/resume";
import Contact from "./contact";
import Appreciation from "./appereciation";
import React from "react";

import { socialIcons } from "@/data/icons/social-icons";

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

  // Helper to map name to platform (handles 'Git & GitHub' specially)
  const getPlatform = (name: string): SocialMediaPlatform => {
    const lower = name.toLowerCase();
    if (lower.includes("github")) return "github";
    if (lower === "x") return "x";
    return lower as SocialMediaPlatform;
  };

  return (
    <>
      <div className="flex justify-between max-w-lg items-center">
        <div className="p-4 grid grid-cols-6 gap-4">
          {socialIcons.map((social) => (
            <Tooltip key={social.name}>
              <TooltipTrigger>
                <button
                  onClick={() => handleNavigate(getPlatform(social.name))}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.icon}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
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