import Mock from "mockjs"

// mock方法,详细的可以看官方文档
const Random = Mock.Random

export default [
  {
    url: /\/data\/searchResults\?.*/,
    type: "get",
    response: (config) => {
      console.log("res-config=", config)
      const searchParams = config.url.split("?")[1]
      // const url = new URL(config.url)
      // const searchParamsObj = new URLSearchParams(url.search)
      const searchParamsObj = new URLSearchParams(searchParams)

      const keyword = decodeURIComponent(searchParamsObj.get("keyword") || "")
      console.log("res-keyword=", keyword)
      const mockData = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "list|1-10": [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            "id|+1": 1,
            name: keyword + "@cname",
            imgUrl: Random.image("200x100", "#894FC4", "#FFF", "png", "!"),
            url: "@url",
          },
        ],
      })
      return {
        code: 200,
        data: mockData.list,
      }
    },
  },
]
