"use client";
import { SocialMediaPlatform } from "@/types";
import { Github, Instagram, Linkedin, X } from "lucide-react";
import Resume from "@/components/resume";

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
        window.open("https://instagram.com/anurag_sharma", "_blank");
        break;
      case "x":
        window.open("https://x.com/0xAnuragWeb", "_blank");
        break;
    }
  };

  return (
    <div className="flex justify-between max-w-lg items-center">
      <div className="p-4 flex items-center gap-4">
        <Linkedin
          onClick={() => handleNavigate("linkedin")}
          className="cursor-pointer"
        />
        <Github
          onClick={() => handleNavigate("github")}
          className="cursor-pointer"
        />
        <Instagram
          onClick={() => handleNavigate("instagram")}
          className="cursor-pointer"
        />
        <X onClick={() => handleNavigate("x")} className="cursor-pointer" />
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default SocialMedia;
