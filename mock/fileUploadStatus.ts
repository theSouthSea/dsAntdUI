import Mock from "mockjs"

const obj = {
  "status|+1": [200, 500, 404, 403],
  message: "@sentence(5, 10)",
  data: {
    url: "@image(200x100, #894FC4, #FFF, Mock)",
  },
}
const obj2 = {
  "status|+1": [200, 500],
  "message|+1": ["上传成功", "服务器错误"],
  data: {
    url: "@image(200x100, #894FC4, #FFF, Mock)",
    creationDate: new Date().toISOString(),
    "id|+1": 1,
    originalText: `
    作词 : 陈百潭

    作曲 : 陈百潭
    
    一时失志不免怨叹
    
    一时落魄不免胆寒
    
    哪怕失去希望
    
    每日醉茫茫
    
    无魂有体亲像稻草人
    
    人生可比是海上的波浪
    
    有时起有时落
    
    好运歹运 总嘛要照起工来行
    
    三分天注定 七分靠打拼
    
    爱拼才会赢
    
    一时失志不免怨叹
    
    一时落魄不免胆寒
    
    那怕失去希望
    
    每日醉茫茫
    
    无魂有体亲像稻草人
    
    人生可比是海上的波浪
    
    有时起有时落
    
    好运歹运 总嘛要照起工来行
    
    三分天注定 七分靠打拼
    
    爱拼才会赢
    
    人生可比是海上的波浪
    
    有时起有时落
    
    好运歹运 总嘛要照起工来行
    
    三分天注定 七分靠打拼
    
    爱拼才会赢
    `,
  },
}
// function getRandomData() {
//   return Mock.mock(obj)
// }
// const res1 = getRandomData()
// const res2 = getRandomData()
// console.log("res1=", res1)
// console.log("res2=", res2)
export default [
  {
    url: "/api/uploadFile",
    type: "post",
    response: (config) => {
      console.log("response-config=", config)
      // 不能传一个对象字面量,否则每次调用Mock.mock都算第一次执行,"|+1"没有效果
      // 必须传入一个对象变量,每次调用Mock.mock都会考虑之前的执行次数,"|+1"返回的值才会每次都不一样
      return Mock.mock(obj)
    },
  },
  {
    url: /\/api\/uploadFileEdit\/\d+/,
    type: "put",
    response: (config) => {
      console.log("response-config=", config)
      // 不能传一个对象字面量,否则每次调用Mock.mock都算第一次执行,"|+1"没有效果
      // 必须传入一个对象变量,每次调用Mock.mock都会考虑之前的执行次数,"|+1"返回的值才会每次都不一样
      return Mock.mock({
        status: 200,
        message: "修改成功",
        data: {
          url: "@image(200x100, #894FC4, #FFF, Mock)",
        },
      })
    },
  },
  {
    url: "/api/uploadFileType/doc",
    type: "post",
    response: (config) => {
      console.log("response-config=", config)
      return Mock.mock({
        ...obj2,
        data: {
          ...obj2.data,
          url: "http://localhost:5173/doc/web.pdf",
        },
      })
    },
  },
  {
    url: "/api/uploadFileType/video",
    type: "post",
    response: (config) => {
      console.log("response-config=", config)
      return Mock.mock({
        ...obj2,
        data: {
          ...obj2.data,
          url: "http://localhost:5173/video/guanggao.mp4",
        },
      })
    },
  },
  {
    url: "/api/uploadFileType/audio",
    type: "post",
    response: (config) => {
      console.log("response-config=", config)
      return Mock.mock({
        ...obj2,
        data: {
          ...obj2.data,
          url: "http://localhost:5173/audio/%E5%8F%B6%E5%90%AF%E7%94%B0-%E7%88%B1%E6%8B%BC%E6%89%8D%E4%BC%9A%E8%B5%A2.mp3",
        },
      })
    },
  },
  {
    url: "/api/uploadFileType/getVideoUploadResult",
    type: "post",
    response: (config) => {
      console.log("response-config=", config)
      return Mock.mock({
        ...obj2,
        data: {
          ...obj2.data,
          url: "http://localhost:5173/video/guanggao.mp4",
        },
      })
    },
  },
]
