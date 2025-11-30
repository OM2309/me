"use client";
// import { selectLastHalfYear } from "@/utils/selectlasthalfyear";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubContribution() {
  return (
    <GitHubCalendar
      username="om2309"
      // transformData={selectLastHalfYear}
      labels={{
        totalCount: "{{count}} contributions in the last half year",
      }}
    />
  );
}
