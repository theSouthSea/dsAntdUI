import axios from "axios"
import { useState } from "react"

const DownloadBlob = () => {
  const [imgUrl, setImgUrl] = useState<string>("")
  const handleDown = () => {
    // axios
    //   .get("http://localhost:3000/image?filename=th.jpg", {
    //     responseType: "blob",
    //     params: {
    //       name: "th.jpg",
    //     },
    //   })
    //   .then((res) => {
    //     const blob = res.data
    //     const url = window.URL.createObjectURL(blob)
    //     const a = document.createElement("a")
    //     setImgUrl(url)
    //     a.href = url
    //     a.download = "test.png"
    //     a.click()
    //     // window.URL.revokeObjectURL(url)
    //   })
    axios
      .get("http://localhost:3000/image?filename=th.jpg", {
        responseType: "arraybuffer",
        params: {
          name: "th.jpg",
        },
      })
      .then((res) => {
        const blob = new Blob([res.data], { type: "image/jpeg" })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        setImgUrl(url)
        a.href = url
        a.download = "test.png"
        a.click()
        // window.URL.revokeObjectURL(url)
      })
  }
  return (
    <>
      <div>DownloadBlob</div>
      {imgUrl && <img src={imgUrl} alt="img" />}
      <button onClick={handleDown}>下载</button>
    </>
  )
}
export default DownloadBlob
