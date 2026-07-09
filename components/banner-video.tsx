"use client";

import { useEffect, useRef } from "react";

export default function BannerVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Set initial mute state from localStorage
    const stored = localStorage.getItem("banner-video-muted");
    const initialMuted = stored !== null ? stored === "true" : true;
    if (videoRef.current) {
      videoRef.current.muted = initialMuted;
    }

    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (videoRef.current) {
        videoRef.current.muted = customEvent.detail.isMuted;
      }
    };
    window.addEventListener("toggle-banner-audio", handleToggle);
    return () => window.removeEventListener("toggle-banner-audio", handleToggle);
  }, []);

  return (
    <video
      ref={videoRef}
      src="/videos/stories.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="object-cover w-full h-full opacity-80 select-none pointer-events-none rounded-xl"
    />
  );
}
