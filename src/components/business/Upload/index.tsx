import { PlusOutlined } from "@ant-design/icons"
import { message, Modal, Upload, UploadFile } from "antd"
import { RcFile, UploadChangeParam, UploadProps } from "antd/es/upload"
import axios from "axios"
import { useState } from "react"

import { uploadFile } from "@/services/upload"

import UploadButton from "./UploadButton"

interface CustomUploadProps {
  value?: string[]
  onChange?: (value: string[]) => void
  listType: "text" | "picture" | "picture-card"
  maxCount?: number
  maxSize?: number
  isShowBtn?: boolean
}
const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const CustomUpload = (props: CustomUploadProps) => {
  const { value = [], onChange, listType, maxCount = 10, maxSize = 2, isShowBtn = true } = props
  const [open, setOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [fileList, setFileList] = useState<UploadFile<any>[]>([])
  const handlePreview = (file: UploadFile<any>) => {
    const url = file.thumbUrl || file.url
    if (url && listType.indexOf("picture") > -1) {
      setPreviewImage(url)
      setOpen(true)
    }
  }
  const handleFileChange = (options: UploadChangeParam<UploadFile<any>>) => {
    const { file, fileList } = options
    const { size: fileSize } = file
    console.log("handleFileChange-file=", file)
    console.log("handleFileChange-fileList=", fileList)

    const newFileList = fileList.filter((item) => {
      if (item.status === "removed") {
        return false
      }
      return true
    })
    setFileList(newFileList)
    const newValue = newFileList.map((item) => {
      return item.response?.url || item.url
    })
    onChange?.(newValue)
  }
  const customRequest: UploadProps["customRequest"] = (option) => {
    const { data, file, onProgress, onSuccess, onError } = option
    const formData = new FormData()
    formData.append("file", file)
    // fetch("/api/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    axios
      .post("/api/uploadFile", formData)
      // .post("/api/uploadFile", formData, {
      //   onUploadProgress: (progressEvent) => {
      //     if (progressEvent.total) {
      //       const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      //       console.log(`上传进度: ${percentCompleted}%`)
      //       onProgress?.(progressEvent)
      //     }
      //   },
      // })
      .then((response) => {
        console.log("response=", response)
        if (response.data.status === 200) {
          console.log("上传成功:", response.data.message)
          onSuccess?.(response.data.data)
        } else {
          console.log("上传失败:", response.data.message)
        }
      })
      .catch((error) => {
        console.error("上传失败:", error)
        onError?.(new Error(error.message || "上传失败"))
      })
    // uploadFile(formData)
    //   .then((res) => {
    //     console.log('res=', res);
    //     // return res.json()
    //     return res;
    //   })
    //   .then((res) => {
    //     if (res.code === 200) {
    //       onSuccess?.(res.data)
    //     } else {
    //       onError?.(new Error(res.message || "上传失败"))
    //     }
    //   })
  }
  const handleRemove = (file: UploadFile<any>) => {
    const newFileList = fileList.filter((item) => {
      if (item.status === "removed") {
        return false
      }
      return true
    })
    setFileList(newFileList)
    const newValue = newFileList.map((item) => {
      return item.response?.url || item.url
    })
    onChange?.(newValue)
  }
  // 限制上传的文件类型和大小,否则不上传
  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!")
    }
    const isLtMaxSize = file.size / 1024 / 1024 < maxSize
    if (!isLtMaxSize) {
      message.error(`Image must smaller than ${maxSize}MB!`)
    }
    return isJpgOrPng && isLtMaxSize
  }
  return (
    <>
      <Upload
        onPreview={handlePreview}
        name="file"
        className="upload-wrap"
        withCredentials
        fileList={fileList}
        beforeUpload={beforeUpload}
        onChange={handleFileChange}
        customRequest={customRequest}
        listType={listType}
        maxCount={maxCount}
        onRemove={handleRemove}
      >
        {isShowBtn ? (
          fileList.length < maxCount && <UploadButton listType={listType}></UploadButton>
        ) : (
          <PlusOutlined></PlusOutlined>
        )}
      </Upload>
      <Modal
        destroyOnClose={true}
        open={open}
        title="图片预览"
        footer={null}
        onCancel={() => {
          setOpen(false)
        }}
      >
        <img src={previewImage} alt="image" className="preview-content" />
      </Modal>
    </>
  )
}
export default CustomUpload
