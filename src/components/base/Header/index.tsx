import { ExclamationCircleFilled } from "@ant-design/icons"
import { Modal } from "antd"
import { ReactNode } from "react"

import styles from "./index.module.less"

interface HeaderProps {
  title: string
  children?: ReactNode
  rightJsx?: ReactNode
  onBack?: () => void
  isShowModal?: boolean
  onOk: () => void
}
const Header = (props: HeaderProps) => {
  const { title, children, rightJsx, isShowModal = false, onOk } = props

  const handleBack = async () => {
    if (isShowModal) {
      Modal.confirm({
        title: "您确定要返回吗？",
        icon: <ExclamationCircleFilled />,
        content: "您将丢失所有未保存的修改！",
        async onOk() {
          await onOk()
          console.log("OK")
        },
        onCancel() {
          console.log("Cancel")
        },
      })
    } else {
      await onOk()
    }
  }
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.backBtn} onClick={handleBack}>
            返回
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        {children}
        {rightJsx}
      </div>
    </>
  )
}
export default Header
