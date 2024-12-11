import request from "@/config/request"

export async function getTodos() {
  return request({
    url: "/todos/list",
    method: "get",
  })
}
export async function getTodosBySearch(params: { search: string }) {
  return request({
    url: "/todos/list",
    method: "get",
    params,
  })
}
