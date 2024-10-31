import { InboxOutlined, PlusOutlined } from "@ant-design/icons"
import FileItem, { FileInfo } from "@business/FileItem"
import { GetProp, message, Modal, Upload, UploadFile } from "antd"
import { UploadChangeParam, UploadProps } from "antd/es/upload"
import axios from "axios"
import { useMemo, useRef, useState } from "react"

import PreviewContent from "../PreviewContent"
// import { uploadFile } from "@/services/upload"
import UploadButton from "../UploadButton"
import styles from "./index.module.less"

const { Dragger } = Upload
interface CustomUploadProps {
  value?: string[]
  onChange?: (value: string[]) => void
  listType: "text" | "picture" | "picture-card"
  maxCount?: number
  maxSize?: number
  isShowBtn?: boolean
  documentUploadApi?: string
  videoUploadApi?: string
  audioUploadApi?: string
  getVideoUploadResultApi?: string
  disabled?: boolean
}
interface UploadFileExtends<T> extends UploadFile<T> {
  id?: string | number
  originalText?: string
  creationDate?: string
}
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0]

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const CustomUpload = (props: CustomUploadProps) => {
  const {
    value = [],
    onChange,
    listType,
    maxCount = 10,
    // 上传文件最大大小,默认为1GB
    maxSize = 1024,
    isShowBtn = true,
    disabled = false,
    documentUploadApi = "/api/uploadFileType/doc",
    videoUploadApi = "/api/uploadFileType/video",
    audioUploadApi = "/api/uploadFileType/audio",
    getVideoUploadResultApi = "/api/uploadFileType/getVideoUploadResult",
  } = props
  const [open, setOpen] = useState(false)
  const [previewFile, setPreviewFile] = useState<FileInfo>()
  const [fileList, setFileList] = useState<UploadFileExtends<any>[]>([])
  const handlePreview = (file: UploadFile<any>) => {
    const url = file.thumbUrl || file.url
    console.log("handlePreview-file=", file, url)
    setPreviewFile(file)
    setOpen(true)
  }
  const [uploadedFileIds, setUploadedFileIds] = useState<string[]>([])
  const getVideoResultTimerRef = useRef<NodeJS.Timeout>()
  const getAudioVideoData = (streamId: string, uid: string) => {
    getVideoResultTimerRef.current = setTimeout(() => {
      axios.post(getVideoUploadResultApi, { streamId }).then((res: any) => {
        if (res.id) {
          clearTimeout(getVideoResultTimerRef.current)
          setFileList((fileList) => {
            const newFileList = fileList.map((item) => {
              if (item.uid === uid) {
                return {
                  ...item,
                  status: "done",
                  url: res.url,
                  originalText: res.originalText,
                  creationDate: res.creationDate,
                  id: res.id,
                }
              }
              return item
            })
            return newFileList
          })
        }
      })
    }, 3000)
  }
  const handleFileChange = (options: UploadChangeParam<UploadFile<any>>) => {
    const { file, fileList } = options
    console.log("handleFileChange-file=", file)
    console.log("handleFileChange-fileList=", fileList)
    const idList = []
    const newFileList = fileList.map((file) => {
      if (file.response) {
        if (typeof file.response !== "string") {
          idList.push(file.response?.id)
          return {
            ...file,
            originalText: file.response.originalText,
            creationDate: file.response.creationDate,
            id: file.response?.id,
            url: file.response?.url,
          }
        } else {
          getAudioVideoData(file.response, file.uid)
        }
      }
      file.id && idList.push(file.id)
      return file
    })
    setFileList(newFileList)
    setUploadedFileIds(idList)
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
      .post(UploadApiRef.current, formData)
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
          onError?.(new Error(response.data.message || "上传失败"))
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
  const isDocumentRef = useRef(true)
  const UploadApiRef = useRef(documentUploadApi)
  // 限制上传的文件类型和大小,否则不上传
  const beforeUpload = (file: FileType) => {
    console.log("file", file)
    const { type, size } = file
    const isLtMaxSize = size / 1024 / 1024 < maxSize
    if (!isLtMaxSize) {
      message.error(`file must smaller than ${maxSize}MB!`)
      return isLtMaxSize
    }

    if (type.indexOf("video/") === 0) {
      isDocumentRef.current = false
      UploadApiRef.current = videoUploadApi
    } else if (type.indexOf("audio/") === 0) {
      isDocumentRef.current = false
      UploadApiRef.current = audioUploadApi
    } else {
      isDocumentRef.current = true
      UploadApiRef.current = documentUploadApi
    }
  }
  const handleEdit = (data: FileInfo) => {
    console.log("data=", data)
  }
  const handleDelete = (id: number | string) => {
    console.log("id=", id)
    setFileList((fileList) => {
      const newFileList = fileList.filter((item) => {
        if (item.id === id) {
          item.status = "removed"
          return false
        }
        return true
      })
      return newFileList
    })
  }
  const handleDeleteError = (uid: string) => {
    console.log("uid=", uid)
    setFileList((fileList) => {
      const newFileList = fileList.filter((item) => {
        if (item.uid === uid) {
          item.status = "removed"
          return false
        }
        return true
      })
      return newFileList
    })
  }
  // const itemRender: UploadProps["itemRender"] = (originNode, file) => {
  const itemRender = (originNode, file) => {
    return (
      <FileItem
        data={file}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDeleteError={handleDeleteError}
        onPreview={handlePreview}
      ></FileItem>
    )
  }
  const draggerContent = useMemo(() => {
    if (isShowBtn) {
      return fileList.length < maxCount && <UploadButton listType={listType}></UploadButton>
    }
    return (
      <>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or
          other banned files.
        </p>
      </>
    )
  }, [listType, isShowBtn, fileList.length, maxCount])

  return (
    <>
      <Dragger
        // onPreview={handlePreview}
        name="file"
        accept="video/*,audio/*,.pdf,.pptx,.ppt,.docx,.doc,.xlsx,.xls"
        // withCredentials
        fileList={fileList}
        beforeUpload={beforeUpload}
        onChange={handleFileChange}
        customRequest={customRequest}
        listType={listType}
        maxCount={maxCount}
        itemRender={itemRender}
        className={styles.listContainer}
        disabled={disabled}
        // onRemove={handleRemove}
      >
        {draggerContent}
      </Dragger>
      <Modal
        destroyOnClose={true}
        open={open}
        title="预览"
        footer={null}
        onCancel={() => {
          setOpen(false)
        }}
      >
        <PreviewContent file={previewFile!}></PreviewContent>
      </Modal>
    </>
  )
}
export default CustomUpload
