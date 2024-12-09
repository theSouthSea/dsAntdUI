import { Form } from "antd"
import { lazy, ReactElement, Suspense, useEffect, useMemo } from "react"

import { withDataFetch } from "./hocs/withDataFetch"

const COMPONENT_ASYNCS = {
  NewsCard: lazy(() => import("./NewsCard")),
  AppsCard: lazy(() => import("./AppsCard")),
}
const Preview = (props) => {
  const { value, form, field } = props
  const boundData = Form.useWatch(field, form)
  console.log("value=", value)
  console.log("boundData=", boundData)
  // useEffect(() => {
  //   getAppsData()
  // }, [])
  const Comp = useMemo(() => {
    if (value && COMPONENT_ASYNCS[value]) {
      return withDataFetch(COMPONENT_ASYNCS[value]) as () => ReactElement
    }
    return () => <div></div>
  }, [value])
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Comp apiPath={value}></Comp>
      </Suspense>
    </>
  )
}
export default Preview
