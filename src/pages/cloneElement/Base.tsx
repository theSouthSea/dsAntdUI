import React, { ChangeEventHandler, cloneElement, ReactElement, ReactNode, useState } from "react"

interface BaseProps {
  children: ReactElement
}
const Base: React.FC<BaseProps> = ({ children }) => {
  // React.cloneElement()
  const [value, setValue] = useState("")
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const cloneChildren = cloneElement(children, {
    ...children.props,
    value,
    onChange,
  })
  return <div>{cloneChildren}</div>
}
interface ChildProps {
  name: string
  label: string
  type?: string
  disabled?: boolean
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
const Child = ({ value, onChange, name, disabled = false, label, type = "text" }: ChildProps) => {
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} disabled={disabled} value={value} onChange={onChange}></input>
    </fieldset>
  )
}
export default function App() {
  return (
    <>
      <div>cloneElement的基本使用</div>
      <Base>
        <Child name="name" label="用户名"></Child>
      </Base>
      <Base>
        <Child name="pwd" label="密码" type="password"></Child>
      </Base>
    </>
  )
}
// const Form = ({children,onSubmit}) => {
//   const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
//     onSubmit(e)
//   }
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       {children}
//     </form>
//   )
// }
// export function Demo() {
//   const handleSubmit = () => {

//   }
//   return (
//     <Form>
//       <FormItem name="name" label="用户名"></FormItem>
//       <FormItem name="pwd" label="密码"></FormItem>
//       <button onClick={handleSubmit}>提交</button>
//     </Form>
//   )
// }
