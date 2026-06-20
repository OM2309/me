"use client";

import { useState, useEffect, useRef } from "react";
import MapLibreGL from "maplibre-gl";
import { Map, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map";
import { Loader2, Navigation } from "lucide-react";

export default function LocationMap() {
  const mapRef = useRef<MapLibreGL.Map | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const jaipurCoords: [number, number] = [75.7873, 26.9124];

  const handleLocate = () => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: jaipurCoords,
      zoom: 2.5,
      essential: true,
      duration: 1500,
    });
  };

  if (!mounted) {
    return (
      <div className="w-full max-w-sm aspect-square h-[300px] border border-zinc-800 rounded-2xl bg-zinc-950 flex items-center justify-center font-mono text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin text-zinc-600" />
          <span>LOADING GLOBE...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm aspect-square h-[300px] rounded-2xl overflow-hidden border border-zinc-800 bg-[#121316] shadow-xl relative group">
      
      {/* 3D Globe Map */}
      <Map
        ref={mapRef}
        center={jaipurCoords}
        zoom={2}
        projection={{ type: "globe" }}
        theme="dark"
        className="w-full h-full"
      >
        <MapMarker longitude={jaipurCoords[0]} latitude={jaipurCoords[1]}>
          <MarkerContent>
            <div className="relative flex items-center justify-center">
              {/* Pulsing glow ring */}
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-cyan-500/40 dark:bg-cyan-400/40 animate-ping" />
              {/* Central solid dot */}
              <span className="relative inline-flex h-4 w-4 rounded-full bg-cyan-400 border-2 border-white dark:border-zinc-950 shadow-md ring-4 ring-cyan-500/20" />
            </div>
          </MarkerContent>
          <MarkerTooltip className="font-mono text-[10px] bg-zinc-900 text-zinc-100 border border-zinc-800 rounded px-2 py-1 shadow-md">
            Jaipur, India
          </MarkerTooltip>
        </MapMarker>
      </Map>

      {/* Top Right Locator Button */}
      <button
        onClick={handleLocate}
        title="Center on Location"
        className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800 text-zinc-300 hover:text-zinc-100 shadow-lg cursor-pointer transition-all active:scale-95"
      >
        <Navigation className="h-4 w-4 rotate-45 fill-zinc-300/20" />
      </button>
    </div>
  );
}
