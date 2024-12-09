import { Select } from "antd"
import { lazy, Suspense, useState } from "react"

const COMPONENT_ASYNCS = {
  Child1: lazy(() => import("./Child1")),
  Child2: lazy(() => import("./Child2")),
}
const COMP_OPTIONS = Object.entries(COMPONENT_ASYNCS).map(([key, val]) => {
  return {
    label: key,
    value: val,
  }
})
const LazyComp = () => {
  const [Comp, setComp] = useState<React.LazyExoticComponent<() => JSX.Element>>(
    COMPONENT_ASYNCS["Child1"],
  )
  const handleChange = (val: any) => {
    setComp(val)
  }
  return (
    <>
      <div>LazyComp</div>
      <p>报错lazyComponents不能作为value</p>
      <Select options={COMP_OPTIONS} onChange={handleChange}></Select>
      <Suspense fallback={<div>loading</div>}>
        <Comp></Comp>
      </Suspense>
    </>
  )
}
export default LazyComp
