import Navbar from "@/components/navbar";

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
