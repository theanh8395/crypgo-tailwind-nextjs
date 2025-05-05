import { getTokenClient } from "./getTokenClient";
import { getTokenServer } from "./getTokenServer";

export async function getToken(): Promise<string | undefined> {
  if (typeof window === "undefined") {
    return getTokenServer();
  }

  return getTokenClient();
}
