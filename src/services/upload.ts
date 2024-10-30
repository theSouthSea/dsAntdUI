import request from "@/config/request"

export function getFiles() {
  return request({
    url: "/getList/file",
    method: "get",
  })
}

export function uploadFile<T>(data: any): Promise<IResponse<T>> {
  return request({
    url: "/upload/file",
    data,
    method: "post",
  })
}
