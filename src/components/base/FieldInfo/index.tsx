import { ReactNode } from "react"

interface FieldInfoProps {
  name: string
  // right?: ReactNode
  children: ReactNode
}
const FieldInfo = (props: FieldInfoProps) => {
  const { name, children } = props
  return (
    <div className="flex justify-between align-middle">
      <div className="w-[200px]">{name}</div>
      {children}
    </div>
  )
}
export default FieldInfo
