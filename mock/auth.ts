import { LoginRequest } from "@/types/auth"
import type { BackendServiceResult } from "@/types/service"
import { randomStr } from "@/utils/common"

interface PostParam<T> {
  body: T
}
// const a = "1";
// const a = 2;
export default [
  {
    url: "/api/login",
    method: "post",
    response: (data: PostParam<LoginRequest>): BackendServiceResult => {
      const body = JSON.parse(data.body)
      console.log("data.body=", data.body, body)
      if (data.body.code !== data.body.originCode) {
        return {
          code: 201,
          message: "验证码不正确",
          data: null,
        }
      }
      return {
        code: 200,
        message: "ok",
        data: {
          token: 1234,
          username: data.body.name,
        },
      }
    },
  },
  {
    url: "/api/logout",
    method: "post",
    response: (data: PostParam<{ token: string }>): BackendServiceResult => {
      console.log("data.body=", data.body)
      const body = JSON.parse(data.body)
      if (body.token !== undefined) {
        return {
          code: 200,
          message: "退出成功",
          data: true,
        }
      }
      return {
        code: 500,
        message: "退出登录失败",
        data: false,
      }
    },
  },
  {
    url: "/api/getCode",
    method: "get",
    response: (): BackendServiceResult => {
      const code = randomStr("0123456789", 4)
      return {
        code: 200,
        message: "ok",
        data: {
          code,
        },
      }
    },
  },
  {
    url: "/api/getMenu",
    method: "get",
    response: (): BackendServiceResult => {
      return {
        code: 200,
        message: "ok",
        data: {
          list: [
            {
              label: "一级菜单1",
              path: "1",
              children: [
                {
                  label: "二级菜单1",
                  path: "/page1",
                },
                {
                  label: "二级菜单1",
                  path: "/page1/page101",
                },
              ],
            },

            {
              label: "一级菜单2",
              path: "2",
              children: [
                {
                  label: "二级菜单1",
                  path: "/page2",
                },
                {
                  label: "二级菜单1",
                  path: "/page2/page201",
                },
              ],
            },
          ],
        },
      }
    },
  },
] as MockMethod[]
