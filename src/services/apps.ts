import request from "@/config/request"

export async function getApps() {
  return request({
    url: "/data/apps",
    method: "get",
  })
}
