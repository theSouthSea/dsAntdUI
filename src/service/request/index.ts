import { REQUEST_TIMEOUT } from "@/config/service";
import { createRequest } from "./request";

export const request = createRequest({
  baseURL: import.meta.env.VITE_HTTP_URL,
  timeout: REQUEST_TIMEOUT,
});

export const mockRequest = createRequest({
  baseURL: "",
  timeout: REQUEST_TIMEOUT,
});
