"use client";

import Cookies from "js-cookie";

export function getTokenClient(): string | undefined {
  return Cookies.get("token");
}
