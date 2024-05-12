import { LoginRequest, MenuItem, ResponseMenu } from "@/types/auth"
import { requestMiddleware } from "@/utils/service"

import { fetchMenuMiddleware } from "../middleware"
import { mockRequest } from "../request"

/** 测试mock数据 */
export function fetchLogin(params: LoginRequest) {
  return mockRequest.post<{ token: string }>("/api/login", params)
}
export function fetchGetCode() {
  return mockRequest.get<{ code: string }>("/api/getCode")
}
//  获取菜单
export async function fetchGetMenu() {
  const res = await mockRequest.get<ResponseMenu>("/api/getMenu")
  return requestMiddleware<MenuItem[]>(fetchMenuMiddleware, [res])
}
