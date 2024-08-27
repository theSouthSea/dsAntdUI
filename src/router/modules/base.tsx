import lazy from "@loadable/component"

import Layout from "@/layout"
import SubLayout from "@/layout/SubLayout"

const ComponentWillUnmount = lazy(() => import("@/pages/base/useEffect/ComponentWillUnmount"))
const UseIsomorphicLayoutEffect = lazy(
  () => import("@/pages/base/useEffect/UseIsomorphicLayoutEffect"),
)
const ArrayState = lazy(() => import("@/pages/base/state/ArrayState"))
const AFormDemo = lazy(() => import("@/pages/base/AForm/Demo"))
const AFormDemoOpt = lazy(() => import("@/pages/base/AForm/DemoOpt"))
export default {
  path: "base/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "useEffect/*",
      element: <SubLayout title="useEffect"></SubLayout>,
      children: [
        {
          path: "componentWillUnmount",
          element: <ComponentWillUnmount />,
        },
        {
          path: "useIsomorphicLayoutEffect",
          element: <UseIsomorphicLayoutEffect />,
        },
      ],
    },
    {
      path: "state/*",
      element: <SubLayout title="state"></SubLayout>,
      children: [
        {
          path: "arrayState",
          element: <ArrayState />,
        },
      ],
    },
    {
      path: "AForm/*",
      element: <SubLayout title="AForm Demo"></SubLayout>,
      children: [
        {
          path: "demo",
          element: <AFormDemo />,
        },
        {
          path: "demoOpt",
          element: <AFormDemoOpt />,
        },
      ],
    },
  ],
}
