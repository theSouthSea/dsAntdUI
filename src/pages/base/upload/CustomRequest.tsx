import { UploadOutlined } from "@ant-design/icons"
import { Button, message, Upload, UploadFile, UploadProps } from "antd"
import { useState } from "react"

interface CustomRequestParams {
  onProgress(event: { percent: number }): void
  onError(event: Error, body?: object): void
  onSuccess(body: object): void
  data: object
  filename: string
  file: File
  withCredentials: boolean
  action: string
  headers: object
}
const BeforeUpload = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "xxx.png",
      status: "done",
      url: "http://www.baidu.com/xxx.png",
    },
  ])

  const handleChange: UploadProps["onChange"] = (info) => {
    let newFileList = [...info.fileList]

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2)

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url
      }
      return file
    })

    setFileList(newFileList)
  }

  const beforeUpload = (file, fileList) => {
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
  const customRequest = ({ file, onSuccess, onError }: CustomRequestParams) => {
    console.log("customRequest-file:", file)
    const formData = new FormData()
    formData.append("file", file)
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:3000/upload", true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("xhr.response", xhr.response)
        console.log("xhr.responseText", xhr.responseText)
        onSuccess(JSON.parse(xhr.response))
      } else {
        onError(new Error("error"))
      }
    }
    xhr.timeout = 5000
    xhr.onerror = function () {
      onError(new Error("Network error occurred"))
    }
    xhr.ontimeout = function () {
      onError(new Error(`Request timed out after ${xhr.timeout}ms`))
    }
    xhr.send(formData)
  }
  const customRequestFetch = ({ file, onSuccess, onError }: CustomRequestParams) => {
    const formData = new FormData()
    formData.append("file", file)

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        onSuccess(data)
      })
      .catch((error) => {
        onError(error)
      })
  }
  const props = {
    action: "http://localhost:3000/upload",
    accept: "image/*",
    onChange: handleChange,
    beforeUpload,
    customRequest,
    multiple: true,
  }
  return (
    <Upload {...props} fileList={fileList}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  )
}
export default BeforeUpload