import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Anurag Sharma",
  description:
    "Full-stack developer passionate about building scalable, performant web applications.",
};

export default function AboutLayout({
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
