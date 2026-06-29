import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - OM",
  description: "Get in touch — I'll get back to you as soon as possible.",
};

export default function ContactLayout({
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
