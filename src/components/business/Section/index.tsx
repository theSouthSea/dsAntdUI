import { ReactElement, ReactNode } from "react"

import styles from "./index.module.less"

interface SectionProps {
  title: string
  icon?: ReactElement
  rightJsx?: ReactNode
  classNames?: Record<SemanticDOM, string>
  titleSize?: "small" | "middle" | "large"
  children?: ReactNode
  footerJsx?: ReactNode
}
const Section = (props: SectionProps) => {
  const { title, icon, classNames, titleSize = "middle", children, rightJsx, footerJsx } = props
  return (
    <div className={`${styles.sectionContainer} ${classNames?.container || ""}`}>
      <div className={`${styles.titleBox} ${classNames?.title || ""}`}>
        <div className={`${styles.leftBox} ${styles["title-" + titleSize]}`}>
          {icon ? icon : null}
          {title}
        </div>
        {rightJsx && <div className={styles.rightBox}>{rightJsx}</div>}
      </div>
      <div className={`${styles.contentBox} ${classNames?.body || ""}`}>{children}</div>
      {footerJsx && (
        <div className={`${styles.footerBox} ${classNames?.footer || ""}`}>{footerJsx}</div>
      )}
    </div>
  )
}
export default Section
