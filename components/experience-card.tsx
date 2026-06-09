import { ExperienceCardProps } from "@/types";

const ExperienceCard = ({
  name,
  role,
  duration,
  current,
  address,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-sm pt-1 pb-1">
      {/* Left side: Company details and Role */}
      <div className="space-y-0.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-black dark:text-white text-[15px]">
            {name}
          </span>
          {current && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Working
            </span>
          )}
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs font-mono">
          {role}
        </p>
      </div>

      {/* Right side: Duration and Location */}
      <div className="sm:text-right text-xs text-zinc-400 dark:text-zinc-500 font-mono space-y-0.5 shrink-0">
        <p>{duration}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
