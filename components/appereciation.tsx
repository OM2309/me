"use client";
import React, { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Appreciation = () => {
  const [isAppreciated, setIsAppreciated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preload the audio (so it plays instantly)
  useEffect(() => {
    audioRef.current = new Audio("/audio/tap.mp3");
    audioRef.current.preload = "auto";
  }, []);

  const handleClick = () => {
    const willLike = !isAppreciated;

    setIsAppreciated(willLike);

    if (willLike) {
      // Play sound + bounce animation only when liking
      setIsAnimating(true);
      audioRef.current?.play();

      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  return (
    <Button
      variant="outline"
      size="default"
      onClick={handleClick}
      className={cn(
        "transition-all duration-300 cursor-pointer select-none",
        isAppreciated &&
          "border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
      )}
    >
      <Heart
        className={cn(
          "mr-2 h-5 w-5 transition-all duration-300",
          isAppreciated
            ? "fill-red-500 text-red-500"
            : "fill-none text-muted-foreground",
          isAnimating && "animate-bounce-once"
        )}
      />
      <span className="font-medium  ">
        {isAppreciated ? "Appreciated" : "Appreciate"}
      </span>
    </Button>
  );
};

export default Appreciation;
