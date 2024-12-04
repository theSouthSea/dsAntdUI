import { Button } from "antd"

import styles from "./index.module.less"

interface FooterButtonsProps {
  primaryText: string
  onPrimaryClick: () => void
  secondText: string
  onSecondClick: () => void
  className?: string
  extra?: React.ReactNode
  style: React.CSSProperties
}
const FooterButtons = (props: FooterButtonsProps) => {
  const { primaryText, onPrimaryClick, secondText, onSecondClick, className, style, extra } = props
  return (
    <div className={`${styles.container} ${className || ""}`} style={style}>
      <Button type="primary" onClick={onPrimaryClick}>
        {primaryText}
      </Button>
      <Button onClick={onSecondClick}>{secondText}</Button>
      {extra}
    </div>
  )
}
export default FooterButtons
