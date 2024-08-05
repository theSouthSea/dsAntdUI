import { Outlet } from "react-router-dom"

interface SubLayoutProps {
  title?: string
}
const SubLayout = (props: SubLayoutProps) => {
  const { title = "子标题" } = props
  return (
    <>
      <div>{title}</div>
      <Outlet></Outlet>
    </>
  )
}
export default SubLayout
