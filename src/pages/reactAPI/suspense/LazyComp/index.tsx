import { Select } from "antd"
import { ComponentType, lazy, ReactElement, Suspense, useMemo, useState } from "react"

const COMPONENT_ASYNCS = {
  Child1: lazy(() => import("./Child1")),
  Child2: lazy(() => import("./Child2")),
}
const COMP_OPTIONS = Object.entries(COMPONENT_ASYNCS).map(([key, val]) => {
  return {
    label: key,
    value: key,
    // value: val,
  }
})
const LazyComp = () => {
  // const [Comp, setComp] = useState<React.LazyExoticComponent<() => JSX.Element>>(
  //   COMPONENT_ASYNCS["Child1"],
  // )
  const [compKey, setCompKey] = useState()
  const handleChange = (val: any) => {
    // setComp(val)
    setCompKey(val)
  }
  const Comp = useMemo<() => ReactElement>(() => {
    if (compKey && COMPONENT_ASYNCS[compKey]) {
      return COMPONENT_ASYNCS[compKey] as () => ReactElement
    }
    return () => <div></div>
  }, [compKey])
  return (
    <>
      <div>LazyComp</div>
      {/* <Select options={COMP_OPTIONS} onChange={handleChange}></Select> */}
      <Select options={COMP_OPTIONS} onChange={handleChange}></Select>
      <Suspense fallback={<div>loading</div>}>
        <Comp></Comp>
      </Suspense>
    </>
  )
}
export default LazyComp
