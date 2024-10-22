import { Button } from "antd"
import { useRef } from "react"

import Form, { FormRef } from "./Form"

const FormWithRef = () => {
  const formRef = useRef<FormRef>(null)
  const handleFormValues = () => {
    formRef.current
      ?.getValues()
      .then((values) => {
        console.log("form-values=", values)
      })
      .catch(({ values, errorFields, outOfDate }) => {
        console.log("catch-values=", values)
        console.log("catch-errorFields=", errorFields)
        console.log("catch-outOfDate=", outOfDate)
      })
  }
  return (
    <>
      <div>FormWithRef</div>
      <Form ref={formRef}></Form>
      <div className="btnGroup">
        <Button onClick={handleFormValues}>获取表单的值</Button>
      </div>
    </>
  )
}
export default FormWithRef
