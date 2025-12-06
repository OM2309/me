import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const protectedRoutes = ["/blog/create"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userRole = session?.user?.email?.toLowerCase() || null;
  const allowedRole = process.env.NEXT_PUBLIC_ADMIN;

  if (!session || userRole !== allowedRole) {
    const url = request.nextUrl.clone();
    console.log(url);
    url.pathname = "/blog";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blog/create/:path*",
};
