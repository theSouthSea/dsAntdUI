import Mock from "mockjs"

export const todos = [
  {
    id: 1,
    title: "完成项目报告",
    description: "撰写并提交项目报告",
    dueDate: "2024-01-15",
    completed: false,
  },
  {
    id: 2,
    title: "购买食材",
    description: "去超市购买晚餐所需的食材",
    dueDate: "2024-01-16",
    completed: false,
  },
  {
    id: 3,
    title: "学习 MobX",
    description: "阅读 MobX 文档并完成示例代码",
    dueDate: "2024-01-17",
    completed: false,
  },
  {
    id: 4,
    title: "锻炼身体",
    description: "去健身房锻炼一小时",
    dueDate: "2024-01-18",
    completed: false,
  },
  {
    id: 5,
    title: "打扫房间",
    description: "彻底打扫卧室和客厅",
    dueDate: "2024-01-19",
    completed: false,
  },
]

export default [
  {
    url: "/todos/list",
    type: "get",
    response: (config) => {
      console.log("res-config=", config)
      return {
        code: 200,
        data: todos,
      }
    },
  },
  {
    url: /\/todos\/list\?search=.*/,
    type: "get",
    response: (config) => {
      console.log("res-config=", config)
      const searchParams = config.url.split("?")[1]
      const searchParamsObj = new URLSearchParams(searchParams)

      const search = decodeURIComponent(searchParamsObj.get("search") || "")
      const list = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "list|1-10": [
          {
            "id|+1": 1,
            title: search + "@ctitle",
            description: "@cparagraph",
            dueDate: "@date('yyyy-MM-dd')",
            completed: "@boolean",
          },
        ],
      })
      return {
        code: 200,
        data: list.list,
      }
    },
  },
]
