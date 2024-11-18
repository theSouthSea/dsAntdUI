import { Button } from "antd"
import { MouseEvent, ReactNode } from "react"

interface FooterProps {
  okText?: ReactNode
  cancelText?: ReactNode
  onOk: (e: MouseEvent<HTMLButtonElement>) => void
  onCancel: (e: MouseEvent<HTMLButtonElement>) => void
}
const Footer = (props: FooterProps) => {
  const { okText = "确定", onOk, cancelText = "取消", onCancel } = props
  return (
    <div className="row-span-1 flex justify-between align-middle">
      <Button type="primary" onClick={onOk}>
        {okText}
      </Button>
      <Button type="default" onClick={onCancel}>
        {cancelText}
      </Button>
    </div>
  )
}
export default Footer
