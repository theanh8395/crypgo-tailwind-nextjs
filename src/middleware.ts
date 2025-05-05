import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const cookie = request.cookies.get("accessToken");

  if (cookie?.value && path === "/login") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (
    !cookie?.value &&
    (path.includes("/user") || path === "/cart" || path === "/checkout")
  ) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  const response = NextResponse.next();
  return response;
}
