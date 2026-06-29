"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { cloneElement } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";

const selectLastFourteenMonths = (contributions: any[]) => {
  const today = new Date();

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthDifference =
      (today.getFullYear() - date.getFullYear()) * 12 +
      (today.getMonth() - date.getMonth());
    return monthDifference < 12;
  });
};

export default function GithubContribution() {
  return (
    <div className="w-full flex justify-center overflow-x-auto hide-scrollbar rounded-lg">
      <div className="min-w-max">
        <GitHubCalendar
          username="om2309"
          transformData={(data) => selectLastFourteenMonths(data)}
          blockSize={10}
          blockMargin={5}
          fontSize={11}
          theme={{
            light: ["#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a"],
            dark: ["#27272a", "#52525b", "#71717a", "#d4d4d8", "#f4f4f5"],
          }}
          renderBlock={(block: any, activity: any) =>
            cloneElement(block, {
              "data-tooltip-id": "github-tooltip",
              "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
            })
          }
        />
        <Tooltip id="github-tooltip" />
      </div>
    </div>
  );
}