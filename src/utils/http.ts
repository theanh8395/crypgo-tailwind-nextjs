// lib/createAxiosInstance.ts
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { getToken } from "./helpers/getToken";

type CreateAxiosInstanceOptions = {
  baseURL?: string;
};

export const createAxiosInstance = (
  options: CreateAxiosInstanceOptions = {}
): AxiosInstance => {
  const { baseURL } = options;

  const instance = axios.create({
    baseURL: baseURL || process.env.API_BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const token = await getToken();
      if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
      }

      return config;
    }
  );

  return instance;
};
