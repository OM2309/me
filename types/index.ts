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
  link: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string | Date;
  userName: string | null;
  userImage: string | null;
  userType: string | null;
  userId: string | null
};


export interface Frontmatter {
  title: string
  description: string
  date: string
  image?: string
  tags?: string[]
  isPublished?: boolean
}

export interface Post  {
  slug: string
  frontmatter: Frontmatter
}