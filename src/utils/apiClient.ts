import type { AxiosRequestConfig } from "axios";
import { createAxiosInstance } from "./http";

const axios = createAxiosInstance({
  baseURL: "https://banhang.zoneauto.vn/api/",
});

export async function apiGet<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axios.get<T>(url, config);
  return response.data;
}

export async function apiPost<T, D = unknown>(
  url: string,
  data: D,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axios.post<T>(url, data, config);
  return response.data;
}
