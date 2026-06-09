import { Link } from "next-view-transitions";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

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

      <div className="fixed inset-0 z-50 flex min-h-dvh items-end justify-center overflow-hidden bg-black">
        <Image
          src="/images/404.webp"
          alt="404 — Page not found"
          fill
          priority
          className="object-cover object-center opacity-40 saturate-50"
          sizes="100vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />

        <div className="relative z-10 flex flex-col items-center px-6 pb-12 sm:pb-16 text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-tag-bg)] px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-[var(--color-button-bg)]"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Return home
          </Link>
        </div>
      </div>
    </>
  );
}
