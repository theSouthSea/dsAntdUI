import styles from "./index.module.less"

export interface IconTitleBtnItem {
  icon: React.ReactNode
  title: string
  id: string | number
}
interface IconTitleBtnProps extends IconTitleBtnItem {
  onClick?: () => void
}
const IconTitleBtn = (props: IconTitleBtnProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.infoBox}>
        <div className={styles.icon}>{props.icon}</div>
        <div className={styles.title}>{props.title}</div>
      </div>
      <div className={styles.btn} onClick={props.onClick}>
        更多
      </div>
    </div>
  )
}
export default IconTitleBtn
