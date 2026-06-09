import { ReactNode } from "react";

interface TechTagProps {
  icon: ReactNode;
  name: string;
}

export default function TechTag({ icon, name }: TechTagProps) {
  return (
    <span className="inline-flex text-foreground bg-[var(--color-tag-bg)] items-center gap-1 px-2 py-0.5 border border-[var(--color-border-subtle)] rounded-sm text-xs font-medium align-middle mx-0.5">
      <span className="flex items-center [&_svg]:!w-3.5 [&_svg]:!h-3.5">
        {icon}
      </span>
      {name}
    </span>
  );
}
