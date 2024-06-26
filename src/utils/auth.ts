import { sessionCache } from "./cache"

export function getToken() {
  return sessionCache.getCache<string>("__TOKEN__") || ""
}

export function setToken(data: string) {
  return sessionCache.setCache("__TOKEN__", data)
}
