import Image from "next/image";
import { ExperienceCardProps } from "@/types";
import { Badge } from "@/components/ui/badge";



const ExperienceCard = ({
  name,
  role,
  duration,
  logo,
  current,
  address,
  
}: ExperienceCardProps) => {
  return (
    <div className="flex items-start gap-4  ">
      <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-row items-center gap-2 justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="  font-semibold text-lg text-black dark:text-white">
                {name}
              </h3>
            </div>

            <div>
              {current && (
                <Badge
                  variant="secondary"
                  className="dark:text-white text-black"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-green-500 animate-spin-slow animate-glow-slow animate-blink"
                  ></div>
                  Working
                </Badge>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 leading-relaxed text-zinc-600 dark:text-zinc-300 text-sm mt-1">
            <span>{duration}</span> 
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 justify-between">
          <div className="flex items-center gap-2 leading-relaxed text-zinc-600 dark:text-zinc-300 text-sm mt-1">
            <span>{role}</span> 
          </div>
          <div className="flex items-center gap-2  leading-relaxed text-zinc-600 dark:text-zinc-300 text-sm mt-1">
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
