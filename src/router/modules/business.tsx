import lazy from "@loadable/component"

import Layout from "@/layout"

const QuestionNumConfig = lazy(() => import("@/pages/business/QuestionNumConfig"))
export default {
  path: "biz/*",
  element: <Layout></Layout>,
  children: [{ path: "QuestionNumConfig", element: <QuestionNumConfig /> }],
}
