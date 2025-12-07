import Navbar from "@/components/navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Guestbook - Anurag Sharma",
  description: "A place to leave your thoughts and messages.",
};

export default function GuestBookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-2xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
