import { Button, ButtonGroup } from "antd"
import { useRef } from "react"

import UseForm, { UseFormRef } from "./components/UseForm"

const RefFormValue = () => {
  const formRef = useRef<UseFormRef>(null)
  const handleFormValues = () => {
    console.log(formRef.current)
    console.log(formRef.current?.getFormValues())
    formRef.current?.getFormValues().then((values) => {
      console.log(values)
    })
  }
  return (
    <>
      <UseForm ref={formRef}></UseForm>
      <Button onClick={handleFormValues}>获取表单值</Button>
    </>
  )
}
export default RefFormValue
