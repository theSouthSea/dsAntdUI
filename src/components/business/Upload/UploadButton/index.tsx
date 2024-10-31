import { PlusOutlined, UploadOutlined } from "@ant-design/icons"
import { Button } from "antd"

interface UploadButtonProps {
  listType: "picture" | "picture-card" | "text"
}
const UploadButton = (props: UploadButtonProps) => {
  const { listType } = props
  if (listType.indexOf("picture") !== -1) {
    return (
      <div className="upload-btn">
        <PlusOutlined></PlusOutlined>
        <div>上传</div>
      </div>
    )
  }
  return <Button icon={<UploadOutlined></UploadOutlined>}>Upload</Button>
}
export default UploadButton
