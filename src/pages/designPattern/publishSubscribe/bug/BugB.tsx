import { useEffect, useState } from "react"

const BugB = () => {
  const [detail, setDetail] = useState({})
  useEffect(() => {
    const detailData = JSON.parse(localStorage.getItem("xDetailData")) || {}
    console.log("detailData=", detailData)
    setDetail(detailData)
  }, [])
  return (
    <>
      <h2>BugB</h2>
      <div style={{ fontSize: 16, fontWeight: "bold" }}>{detail.title}</div>
      <div>{detail.content}</div>
    </>
  )
}
export default BugB
