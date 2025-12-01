export type SocialMediaPlatform = "linkedin" | "github" | "instagram" | "x" | "discord" | "gmail";


export interface ExperienceCardProps {
  name: string;
  role: string;
  duration: string;
  logo: string;
  current: boolean;
  address: string;
  responsibilities: string[];
  technologies: string[];
}


export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  status: "complete" | "building";
}

export interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  userName: string;
  userImage: string;
  userType: string;
}