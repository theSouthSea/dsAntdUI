import request from "@/config/request"

export async function getNews() {
  return request({
    url: "/data/news",
    method: "get",
  })
}
