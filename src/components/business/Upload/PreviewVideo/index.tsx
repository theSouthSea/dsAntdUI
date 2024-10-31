import { PlusOutlined } from "@ant-design/icons"
import { GetProp, message, Modal, Upload, UploadFile } from "antd"
import { UploadChangeParam, UploadProps } from "antd/es/upload"
import axios from "axios"
import { useState } from "react"

import UploadButton from "../UploadButton"

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0]
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
    axios
      .post("/api/uploadFile", formData)
      .then((response) => {
        console.log("response=", response)
        if (response.data.status === 200) {
          console.log("上传成功:", response.data.message)
          onSuccess?.(response.data.data)
        } else {
          console.log("上传失败:", response.data.message)
          onError?.(new Error(response.data.message || "上传失败"))
        }
      })
      .catch((error) => {
        console.error("上传失败:", error)
        onError?.(new Error(error.message || "上传失败"))
      })
  }

  const handleRemove = (file: UploadFile<any>) => {
    console.log("handleRemove-file=", file)
    /* 下面的代码不需要,antd组件已经做了处理 */
    // const newFileList = fileList.filter((item) => {
    //   if (item.status === "removed") {
    //     return false
    //   }
    //   return true
    // })
    // setFileList(newFileList)
    // const newValue = newFileList.map((item) => {
    //   return item.response?.url || item.url
    // })
    // onChange?.(newValue)
  }

  // 限制上传的文件类型和大小,否则不上传
  const beforeUpload = (file: FileType) => {
    const isVideo = file.type.startsWith("video/")
    if (!isVideo) {
      message.error("You can only upload video files!")
    }
    const isLtMaxSize = file.size / 1024 / 1024 < maxSize
    if (!isLtMaxSize) {
      message.error(`Video must be smaller than ${maxSize}MB!`)
    }
    return isVideo && isLtMaxSize
  }

  return (
    <>
      <Upload
        onPreview={handlePreview}
        name="file"
        className="upload-wrap"
        // withCredentials
        fileList={fileList}
        beforeUpload={beforeUpload}
        onChange={handleFileChange}
        customRequest={customRequest}
        listType={listType}
        maxCount={maxCount}
        // onRemove={handleRemove}
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
        title="视频预览"
        footer={null}
        onCancel={() => {
          setOpen(false)
        }}
      >
        <video src={previewImage} controls className="preview-content" />
      </Modal>
    </>
  )
}

export default CustomUpload
