import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("space-y-2 mb-10", className)}>
      <SectionHeading as="h1" className="text-2xl sm:text-[1.75rem]">
        {title}
      </SectionHeading>
      {description ? (
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}
