import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook - Anurag Sharma",
  description: "Leave a note, feedback, or just say hi.",
};

export default function GuestBookLayout({
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
