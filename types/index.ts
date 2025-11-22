export type SocialMediaPlatform = "linkedin" | "github" | "instagram" | "x";


export interface ExperienceCardProps {
  name: string;
  role: string;
  duration: string;
  logo: string;
  current: boolean;
  address: string;
}