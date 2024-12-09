import Mock from "mockjs"

const Random = Mock.Random

export const apps = [
  {
    name: "微信",
    imgUrl: "http://dummyimage.com/200x100/894FC4/FFF&text=微信",
    url: "http://dummyimage.com/200x100/894FC4/FFF&text=微信",
  },
  {
    name: "今日头条",
    imgUrl: "http://dummyimage.com/200x100/894FC4/FFF&text=今日头条",
    url: "http://dummyimage.com/200x100/894FC4/FFF&text=今日头条",
  },
  {
    name: "抖音",
    imgUrl: "http://dummyimage.com/200x100/894FC4/FFF&text=抖音",
    url: "http://dummyimage.com/200x100/894FC4/FFF&text=抖音",
  },
  {
    name: "支付宝",
    imgUrl: "http://dummyimage.com/200x100/894FC4/FFF&text=支付宝",
    url: "http://dummyimage.com/200x100/894FC4/FFF&text=支付宝",
  },
]
export const newsMock = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      title: "@title",
      author: "@cname",
      content: "@cparagraph",
      "tags|1-3": ["@cname"],
      summary: "@cparagraph",
      // abstract: "@cparagraph",
      "imgs|3": [Random.image("200x100", "#894FC4", "#FFF", "png", "@name")],
      lastUpdateDate: "@date",
      createDate: "@date",
    },
  ],
})
