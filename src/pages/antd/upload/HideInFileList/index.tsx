import { UploadOutlined } from "@ant-design/icons"
import type { UploadProps } from "antd"
import { Button, message, Upload } from "antd"
import React from "react"

const props: UploadProps = {
  beforeUpload: (file) => {
    const isPNG = file.type === "image/png"
    if (!isPNG) {
      message.error(`${file.name} is not a png file`)
    }
    // 返回false或Promise.reject时,只会拦截上传行为,不会阻止文件进入上传列表
    // 如果需要阻止列表展现，可以通过返回 Upload.LIST_IGNORE 实现。
    // return isPNG
    return isPNG || Upload.LIST_IGNORE
    // 阻止列表展现，可以通过返回 Upload.LIST_IGNORE 实现。
    // return Upload.LIST_IGNORE
  },
  onChange: (info) => {
    console.log(info.fileList)
  },
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload png only</Button>
  </Upload>
)

export default App
