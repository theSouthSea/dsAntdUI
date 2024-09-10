import { useEffect, useState } from "react"

import { ps } from "./publishSubscribe.ts"

const BugB = () => {
  const [detail, setDetail] = useState({})
  useEffect(() => {
    // const detailDataStr = localStorage.getItem("xDetailData")
    // const detailData = JSON.parse(detailDataStr)
    // console.log("detailDataStr=", detailDataStr)
    // console.log("detailData=", detailData)
    // if (detailData) {
    //   setDetail(detailData)
    // } else {
    //   ps.subscribe((data) => {
    //     setDetail(data)
    //   })
    // }
    if (ps.data) {
      setDetail(ps.data)
    }
    ps.subscribe((data) => {
      setDetail(data)
    })
  }, [])
  return (
    <>
      <h2>FixB</h2>
      <div style={{ fontSize: 16, fontWeight: "bold" }}>{detail.title}</div>
      <div>{detail.content}</div>
    </>
  )
}
export default BugB
