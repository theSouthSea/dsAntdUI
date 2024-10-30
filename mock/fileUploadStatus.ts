import Mock from "mockjs"

export default [
  {
    url: "/api/uploadFile",
    type: "post",
    response: (config) => {
      console.log("response-config=", config)
      return Mock.mock({
        // "status|1": [200, 500,404,403],
        "status|+1": [200, 500, 404, 403],
        message: "@sentence(5, 10)",
        data: {
          url: "@image(200x100, #894FC4, #FFF, Mock)",
        },
      })
    },
  },
]
