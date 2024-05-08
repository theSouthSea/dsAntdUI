import Mock from "mockjs"

const Random = Mock.Random
const mockData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      name: "@cname",
      avatar: Random.image("200x100", "#894FC4", "#FFF", "png", "!"),
      birthday: "@date",
      address: "@county(true)",
      createTime: "@datetime",
    },
  ],
})
console.log("mockData", mockData)
