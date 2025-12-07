import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Anurag Sharma",
  description: "A page where you can reach out to me.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-3xl mx-auto">
    <Navbar />
    {children}
  </div>;
}
