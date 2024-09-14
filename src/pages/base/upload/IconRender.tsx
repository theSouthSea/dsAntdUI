import { CheckOutlined, CloseOutlined, LoadingOutlined, UploadOutlined } from "@ant-design/icons"
import type { UploadFile, UploadProps } from "antd"
import { Button, message, Space, Tag, Upload } from "antd"
import { UploadListType } from "antd/es/upload/interface"
import React, { ReactElement } from "react"

const props: UploadProps = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  iconRender: (file: UploadFile, listType?: UploadListType) => {
    console.log("iconRender-file=", file)
    console.log("iconRender-listType=", listType)
    if (file.status === "uploading") {
      return <LoadingOutlined />
    }
    if (file.status === "done") {
      return <CheckOutlined />
    }
    if (file.status === "error") {
      return <CloseOutlined />
    }
    return <UploadOutlined />
  },
  itemRender: (
    originNode: ReactElement,
    file: UploadFile,
    fileList: object[],
    actions: { download: Function; preview: Function; remove: Function },
  ) => {
    console.log("itemRender-originNode=", originNode)
    console.log("itemRender-file=", file)
    console.log("itemRender-fileList=", fileList)
    console.log("itemRender-actions=", actions)
    // return originNode
    return (
      <Space>
        <Tag>{file.name}</Tag>
        <Tag>{file.status}</Tag>
        <Button type="link">编辑</Button>
        <Button type="text" danger>
          删除
        </Button>
      </Space>
    )
  },
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
)

export default App
