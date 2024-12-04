import styles from "./index.module.less"

interface IconTextProps {
  icon?: React.ReactNode
  text?: string | number
  onClick?: () => void
  className?: string
}
const IconText = (props: IconTextProps) => {
  const { icon, text, onClick, className } = props
  return (
    <div className={`${styles.container} ${className || ""}`} onClick={onClick}>
      {icon}
      {text}
    </div>
  )
}
export default IconText
