import Navbar from "@/components/navbar";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Navbar />
    {children}
  </>;
}
