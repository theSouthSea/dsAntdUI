import { Form as AForm } from 'antd'
import React from 'react'

export type FormRef = React.ElementRef<typeof AForm>

export type FormProps = React.ComponentProps<typeof AForm>

/**
 * Form
 */
export const Form = React.forwardRef((props: FormProps, ref: React.Ref<FormRef>) => {
  const { children, ...rest } = props

  return (
    <AForm {...rest} ref={ref}>
      {children}
    </AForm>
  )
})

if (process.env.NODE_ENV !== 'production') {
  Form.displayName = 'Form'
}
