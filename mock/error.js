// mock.js
import Mock from "mockjs"

// 模拟500错误
Mock.mock("/api/error/500", "get", {
  status: 500,
  message: "Internal Server Error",
})

// 模拟404错误
Mock.mock("/api/error/404", "get", {
  status: 404,
  message: "Not Found",
})

// 模拟403错误
Mock.mock("/api/error/403", "get", {
  status: 403,
  message: "Forbidden",
})
