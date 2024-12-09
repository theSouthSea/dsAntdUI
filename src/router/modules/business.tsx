import lazy from "@loadable/component"

import Layout from "@/layout"

const QuestionNumConfig = lazy(() => import("@/pages/business/QuestionNumConfig"))
const SearchInputResult = lazy(() => import("@/pages/business/search/SearchInputResult"))
export default {
  path: "biz/*",
  element: <Layout></Layout>,
  children: [
    { path: "QuestionNumConfig", element: <QuestionNumConfig /> },
    { path: "search/*", children: [{ path: "SearchInputResult", element: <SearchInputResult /> }] },
  ],
}
