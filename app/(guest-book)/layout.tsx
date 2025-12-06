import Navbar from "@/components/navbar";

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
