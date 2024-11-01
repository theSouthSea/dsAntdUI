import { MouseEvent } from "react"

const BindParams = () => {
  const handleClick = (type: string, e: MouseEvent<HTMLDivElement>) => {
    console.log("type=", type)
    console.log("e=", e)
    e.stopPropagation()
  }
  function handleClickFn(type: string, e: MouseEvent<HTMLDivElement>) {
    console.log("type=", type)
    console.log("e=", e)
    e.stopPropagation()
  }
  const handleDetail = (e) => {
    console.log("handleDetail-e=", e)
  }
  return (
    <div className="container" onClick={handleDetail} style={{ height: 200, background: "#f00" }}>
      <div onClick={handleClickFn.bind(null, "edit")} style={{ background: "#ff0" }}>
        编辑,click事件,箭头函数绑定参数
      </div>
      <div onClick={handleClick.bind(null, "preview")} style={{ background: "#f0f" }}>
        预览,click事件,普通函数绑定参数
      </div>
      <div onClick={(e) => handleClick("preview", e)} style={{ background: "#f0f" }}>
        预览,click事件,普通函数绑定参数
      </div>
    </div>
  )
}
export default BindParams
