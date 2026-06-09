import React from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  const errorSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(errorSchema) }}
      />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 font-jetbrains-mono max-w-md mx-auto py-12">
        {/* 404 Image Frame */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 mb-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] bg-zinc-100 dark:bg-zinc-900">
          <Image
            src="/images/404.webp"
            alt="404 - Page Not Found"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 256px, 288px"
          />
        </div>

        <h1 className="text-3xl font-bold mb-3 text-black dark:text-white">404</h1>
        <h2 className="text-xl font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Page Not Found</h2>
        <p className="text-muted-foreground text-sm mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="cursor-pointer">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </>
  );
}