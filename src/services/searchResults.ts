import request from "@/config/request"

export async function getSearchResults(params) {
  return request({
    url: "/data/searchResults",
    method: "get",
    params: params,
  })
}
