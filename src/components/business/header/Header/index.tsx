import styles from "./index.module.less"

interface HeaderProps {
  title: string
  right?: React.ReactNode
  center?: React.ReactNode
  children?: React.ReactNode
  onBack?: () => void
}
const Header = (props: HeaderProps) => {
  const { right, title, center, children, onBack } = props
  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      window.history.back()
    }
  }
  const centerJsx = center ? center : children
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <div className={styles.backBtn} onClick={handleBack}>
          返回
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      {centerJsx && <div className={styles.centerBox}>{centerJsx}</div>}
      {right}
    </div>
  )
}
export default Header
