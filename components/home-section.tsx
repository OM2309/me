import BlurFade from "@/components/ui/blur-fade";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

interface HomeSectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
  headingClassName?: string;
  inView?: boolean;
}

export default function HomeSection({
  id,
  title,
  children,
  delay = 0,
  className,
  headingClassName,
  inView = true,
}: HomeSectionProps) {
  return (
    <BlurFade
      inView={inView}
      delay={delay}
      duration={0.7}
      yOffset={16}
      blur="6px"
      inViewMargin="-72px"
      className={cn("scroll-mt-20", className)}
    >
      <section id={id} className="space-y-4">
        {title ? (
          <SectionHeading className={headingClassName}>{title}</SectionHeading>
        ) : null}
        {children}
      </section>
    </BlurFade>
  );
}
