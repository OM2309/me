"use client";

import dynamic from "next/dynamic";

const Penflow = dynamic(
  () => import("penflow/react").then((mod) => mod.Penflow),
  {
    ssr: false,
    loading: () => (
      <span className="font-serif text-[2rem] sm:text-4xl text-foreground">
        OM
      </span>
    ),
  }
);

interface NamePenflowProps {
  text?: string;
  className?: string;
}

export default function NamePenflow({
  text = "OM",
  className,
}: NamePenflowProps) {
  return (
    <div className={className}>
      <span className="sr-only">{text}</span>
      <Penflow
        text={text}
        fontUrl="/fonts/BrittanySignature.ttf"
        color="oklch(92.8% 0.006 264.531)"
        size={52}
        speed={1}
        quality="balanced"
        seed="anurag"
        className="block max-w-full [&_svg]:max-w-full [&_svg]:h-auto"
      />
    </div>
  );
}
