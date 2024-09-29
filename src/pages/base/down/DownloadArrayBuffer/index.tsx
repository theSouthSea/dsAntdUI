import { useState } from "react"

const DownloadArrayBuffer = () => {
  const [imgUrl, setImgUrl] = useState("")

  const handleDown = async () => {
    const res = await fetch("http://localhost:3000/image?filename=th.jpg")
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    setImgUrl(url)
  }
  return (
    <>
      <div>DownloadArrayBuffer</div>
      {imgUrl && <img src={imgUrl} alt="img" />}
      <button onClick={handleDown}>下载</button>
    </>
  )
}
export default DownloadArrayBuffer
