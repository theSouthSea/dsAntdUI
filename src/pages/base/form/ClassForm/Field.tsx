import React, { ChangeEvent } from "react"

import { FormOptions } from "./FormOptionContext"
import FormStoreContext from "./FormStoreContext"

// 从onChange事件中获取表单值，这里主要应对checkbox的特殊情况
function getValueFromEvent(...args: any[]) {
  const e = args[0] as ChangeEvent<HTMLInputElement>
  return e && e.target ? (e.target.type === "checkbox" ? e.target.checked : e.target.value) : e
}
export interface Props extends FormOptions {
  className?: string
  label?: string
  name?: string
  valueProp?: string | ((type: any) => string)
  valueGetter?: (...args: any[]) => any
  suffix?: React.ReactNode
  children?: React.ReactNode
}
export default function Field(props: Props) {
  const { label, name, children } = props

  // 拿到Form传下来的FormStore实例
  const store = React.useContext(FormStoreContext)

  // 组件内部状态，用于触发组件的重新渲染
  const [value, setValue] = React.useState(name && store ? store.get(name) : undefined)
  const [error, setError] = React.useState(name && store ? store.error(name) : undefined)

  // 表单组件onChange事件，用于从事件中取得表单值
  const onChange = React.useCallback(
    (...args: any[]) => name && store && store.set(name, getValueFromEvent(...args)),
    [name, store]
  )

  // 订阅表单数据变动
  React.useEffect(() => {
    if (!name || !store) return

    return store.subscribe((n) => {
      // 当前name的数据发生了变动，获取数据并重新渲染
      if (n === name || n === "*") {
        setValue(store.get(name))
        setError(store.error(name))
      }
    })
  }, [name, store])

  let child = children

  // 如果children是一个合法的组件，传入value和onChange
  if (name && store && React.isValidElement(child)) {
    const childProps = { value, onChange }
    child = React.cloneElement(child, childProps)
  }

  // 表单结构，具体的样式就不贴出来了
  return (
    <div className="form">
      <label className="form__label">{label}</label>
      <div className="form__content">
        <div className="form__control">{child}</div>
        <div className="form__message">{error}</div>
      </div>
    </div>
  )
}
