import lazy from "@loadable/component"

import Layout from "@/layout"

const PublishSubscribeBugA = lazy(() => import("@/pages/designPattern/publishSubscribe/bug/BugA"))
const PublishSubscribeBugB = lazy(() => import("@/pages/designPattern/publishSubscribe/bug/BugB"))
const PublishSubscribeFixA = lazy(() => import("@/pages/designPattern/publishSubscribe/fix/FixA"))
const PublishSubscribeFixB = lazy(() => import("@/pages/designPattern/publishSubscribe/fix/FixB"))
const Adapter = lazy(() => import("@/pages/designPattern/Adapter"))
const Strategy = lazy(() => import("@/pages/designPattern/Strategy"))

export default {
  path: "designPattern/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "publishSubscribe/*",
      children: [
        {
          path: "bug/*",
          children: [
            { path: "BugA", element: <PublishSubscribeBugA /> },
            { path: "BugB", element: <PublishSubscribeBugB /> },
          ],
        },
        {
          path: "fix/*",
          children: [
            { path: "FixA", element: <PublishSubscribeFixA /> },
            { path: "FixB", element: <PublishSubscribeFixB /> },
          ],
        },
      ],
    },
    {
      path: "adapter",
      element: <Adapter />,
    },
    {
      path: "strategy",
      element: <Strategy />,
    },
  ],
}
