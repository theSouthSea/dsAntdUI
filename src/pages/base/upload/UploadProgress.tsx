import { UploadOutlined } from "@ant-design/icons"
import { Button, message, Upload, UploadFile, UploadProps } from "antd"
import axios from "axios"
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
if (typeof window.MockXMLHttpRequest !== "undefined") {
  console.log("Mock")
  // 实现文件上传进度条及解决axios出现的request.upload.addEventListener in not a function问题
  // MockXMLHttpRequest.prototype.upload = createNativeXMLHttpRequest().upload
  // 整好了，在 node_modules/mockjs/dist/mock.js 中的 //如果未找到匹配的数据模板 上面加入以下代码
  // MockXMLHttpRequest.prototype.upload = createNativeXMLHttpRequest().upload，就能上传了。原因是 Mockjs 中, 封装了原生的 XMLHttpRequest 为 MockXMLHttpRequest.
  // 解决思路是, 把原生 XMLHttpRequest 的 upload 属性赋给 MockXMLHttpRequest 的原型对象
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
    // const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
    // if (!isJpgOrPng) {
    //   message.error("You can only upload JPG/PNG file!")
    // }
    // const isLt2M = file.size / 1024 / 1024 < 2
    // if (!isLt2M) {
    //   message.error("Image must smaller than 2MB!")
    // }
    // return isJpgOrPng && isLt2M
    if (file.type.includes("video")) {
      return true
    }
    return false
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
  /* 通过Fetch请求 */
  const customRequestFetch = ({ file, onSuccess, onProgress, onError }: CustomRequestParams) => {
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
  const customRequestAxios = ({ file, onSuccess, onProgress, onError }: CustomRequestParams) => {
    const formData = new FormData()
    formData.append("file", file)
    axios
      .post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          console.log("onUploadProgress-progressEvent", progressEvent)
          //   {
          //     "loaded": 11911168,
          //     "total": 32404215,
          //     "progress": 0.367580822433131,
          //     "bytes": 163840,
          //     "rate": 168738,
          //     "estimated": 121.44891488579928,
          //     "event": {
          //         "isTrusted": true
          //     },
          //     "upload": true
          // }
          //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
          //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress({ percent: percentCompleted })
        },
      })
      // .then((res) => {
      //   console.log("axios-res", res)
      //   return res.json()
      // })
      .then((data) => {
        console.log("customRequestAxios-data", data)
        onSuccess(data.data)
      })
      .catch((error) => {
        onError(error)
      })
  }
  const props = {
    action: "http://localhost:3000/upload",
    accept: "video/*",
    onChange: handleChange,
    beforeUpload,
    customRequest: customRequestAxios,
    multiple: true,
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent: number) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  }
  return (
    <Upload {...props} fileList={fileList}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  )
}
export default BeforeUpload
