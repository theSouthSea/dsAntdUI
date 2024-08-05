import lazy from "@loadable/component"

import Layout from "@/layout"
import SubLayout from "@/layout/SubLayout"

const ComponentWillUnmount = lazy(() => import("@/pages/base/useEffect/ComponentWillUnmount"))
const UseIsomorphicLayoutEffect = lazy(
  () => import("@/pages/base/useEffect/UseIsomorphicLayoutEffect"),
)
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
  ],
}
