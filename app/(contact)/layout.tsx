import Navbar from "@/components/navbar";

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
