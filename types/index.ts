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

export type Comment = {
  id: number;
  content: string;
  createdAt: string | Date;
  userName: string | null;
  userImage: string | null;
  userType: "admin" | "github" | null;
};