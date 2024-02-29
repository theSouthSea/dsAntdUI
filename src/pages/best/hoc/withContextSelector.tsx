import React, { ComponentType, Context } from "react"

import { useFormContext } from "./HocContext"

export const withContextSelector = <TProps extends unknown, TValue extends unknown>(
  Component: ComponentType<TProps & Record<string, TValue>>,
  selectors: Record<string, (data: Context<any>) => TValue>
): ComponentType<Record<string, TValue>> => {
  // memoising component generally for every prop
  const MemoisedComponent = React.memo(Component) as ComponentType<Record<string, TValue>>

  return (props: TProps & Record<string, TValue>) => {
    // extracting everything from context
    const data = useFormContext()

    // mapping keys that are coming from "selectors" argument
    // to data from context
    const contextProps = Object.keys(selectors).reduce((acc, key) => {
      acc[key] = selectors[key](data)

      return acc
    }, {})

    // spreading all props to the memoised component
    return <MemoisedComponent {...props} {...contextProps} />
  }
}
