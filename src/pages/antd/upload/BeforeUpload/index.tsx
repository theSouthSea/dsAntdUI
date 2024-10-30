import { LoadingOutlined, PlusOutlined } from "@ant-design/icons"
import type { UploadProps } from "antd"
import { Flex, message, Upload } from "antd"
import { RcFile } from "antd/es/upload"
import React, { useState } from "react"

const getBase64 = (img: any, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile, FileList: RcFile[]) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!")
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!")
  }
  return isJpgOrPng && isLt2M
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()

  const handleChange: UploadProps["onChange"] = (info) => {
    console.log("info", info)
    if (info.file.status === "uploading") {
      setLoading(true)
      return
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

  return (
    <Flex gap="middle" wrap="wrap">
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        action="/upload/file"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
      </Upload>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
      </Upload>
    </Flex>
  )
}

export default App
