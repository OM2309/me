import "server-only";
import { headers } from "next/headers";

export async function getPublicIP() {
  const h = await headers();

  const forwarded = h.get("x-forwarded-for");
  const realIp = h.get("x-real-ip");
  const cfIp = h.get("cf-connecting-ip");

  const ip =
    forwarded?.split(",")[0]?.trim() ||
    realIp?.trim() ||
    cfIp?.trim();

  if (!ip || ip === "0.0.0.0" || ip === "::1") return null;

  return ip;
}
