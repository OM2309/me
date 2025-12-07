import Navbar from "@/components/navbar";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "About me - Anurag Sharma",
  description: "Personal about page showcasing technical skills in web development, database management, tools, and DevOps.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-3xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
