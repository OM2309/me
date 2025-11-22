"use client";
import { selectLastHalfYear } from "@/utils/selectlasthalfyear";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubContribution() {
  return (
    <div className="space-y-4">
      <h1 className="font-inter text-lg font-semibold text-black dark:text-white">
        GitHub Contributions
      </h1>
      <div className="overflow-x-auto">
        <GitHubCalendar
          username="om2309"
          transformData={selectLastHalfYear}
          labels={{
            totalCount: "{{count}} contributions in the last half year",
          }}
        />
      </div>
    </div>
  );
}
