import React, { ComponentType } from "react"

import { useFormContext } from "./HocContext"

export const withFormIdSelector = <TProps extends unknown>(
  Component: ComponentType<TProps & { formId: string }>
) => {
  const MemoisedComponent = React.memo(Component) as ComponentType<TProps & { formId: string }>

  return (props: TProps) => {
    const { id } = useFormContext()

    return <MemoisedComponent {...props} formId={id} />
  }
}
