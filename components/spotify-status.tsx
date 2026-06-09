"use client";

import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

interface Track {
  title: string;
  artist: string;
}

const TRACKS: Track[] = [
  { title: "Solo (feat. Demi Lovato)", artist: "Clean Bandit, Demi Lovato" },
  { title: "Starboy", artist: "The Weeknd, Daft Punk" },
  { title: "Sweater Weather", artist: "The Neighbourhood" },
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Mockingbird", artist: "Eminem" }
];

export default function SpotifyStatus() {
  const [track, setTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const randomTrack = TRACKS[Math.floor(Math.random() * TRACKS.length)];
    setTrack(randomTrack);
    setIsPlaying(Math.random() > 0.4);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-mono select-none">
        <FaSpotify className="h-4.5 w-4.5 text-zinc-300 dark:text-zinc-800" />
        <span>Loading Spotify status...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-450 select-none">
      {/* Spotify Icon */}
      <FaSpotify className="h-4.5 w-4.5 text-emerald-500 shrink-0" />

      {/* Track Info */}
      <span className="leading-tight font-sans">
        {isPlaying ? "Now playing" : "Last played"} &mdash;{" "}
        <span className="text-zinc-800 dark:text-zinc-200">
          {track.title}
        </span>{" "}
        &middot; <span className="text-zinc-500">{track.artist}</span>
      </span>
    </div>
  );
}
