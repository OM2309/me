"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { recordProfileView } from "@/actions/profile-views";

interface ProfileViewCounterProps {
  initialCount: number;
}

export default function ProfileViewCounter({
  initialCount,
}: ProfileViewCounterProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    recordProfileView().then(setCount).catch(() => {});
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
      <span>
        <span className="text-foreground font-medium tabular-nums">
          {count.toLocaleString()}
        </span>{" "}
        profile views
      </span>
    </span>
  );
}
