import request from "@/config/request"

export function getUserData(params: any) {
  return request({
    url: "/system/user/123",
    method: "get",
    params: params,
  })
}
