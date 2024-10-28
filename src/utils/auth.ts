import { sessionCache } from "./cache"

export function getToken() {
  return sessionCache.getCache<string>("__TOKEN__") || ""
}

export function setToken(data: string) {
  return sessionCache.setCache("__TOKEN__", data)
}
export function removeToken() {
  return sessionCache.removeCache("__TOKEN__")
}
