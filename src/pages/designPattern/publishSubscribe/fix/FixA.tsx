import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { sleep } from "@/utils"

import { ps } from "./publishSubscribe.ts"

const BugA = () => {
  useEffect(() => {
    sleep(3000).then(() => {
      console.log("请求成功")
      const data = {
        title: "PublishSubscribe pattern",
        content:
          "发布订阅模式是一种行为型设计模式，它允许一个对象（称为发布者）向多个对象（称为订阅者）发送通知，而无需知道这些订阅者的具体细节。",
      }
      ps.publish(data)
      localStorage.setItem("xDetailData", JSON.stringify(data))
    })
  }, [])
  return (
    <>
      <div>FixA</div>
      <Link to="../FixB">跳转到BugB页面</Link>
    </>
  )
}
export default BugA
