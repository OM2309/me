import Navbar from "@/components/navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog - Anurag Sharma",
  description: "Personal blog - collection of web development, database management, tools, and DevOps related posts.",
};


export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <Navbar />
      {children}
    </div>
  );
}
