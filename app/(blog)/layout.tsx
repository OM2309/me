import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Anurag Sharma",
  description: "Notes on web development, databases, tools, and DevOps.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pb-24 pt-2">{children}</div>
    </div>
  );
}
