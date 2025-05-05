"use server";

import { cookies } from "next/headers";

export async function getTokenServer(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value;
}
