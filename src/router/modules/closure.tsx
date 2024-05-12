import lazy from "@loadable/component"

import Layout from "@/layout"

const IncludeClosure = lazy(() => import("@/pages/best/closure/IncludeClosure"))
const BaseClosure = lazy(() => import("@/pages/best/closure/BaseClosure"))
const RefClosure = lazy(() => import("@/pages/best/closure/RefClosure"))
const FixClosure = lazy(() => import("@/pages/best/closure/FixClosure"))
const FixClosure1 = lazy(() => import("@/pages/best/closure/FixClosure1"))
export default {
  path: "closure/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <IncludeClosure /> },
    { path: "includeclose", element: <IncludeClosure /> },
    { path: "baseclosure", element: <BaseClosure /> },
    { path: "refclosure", element: <RefClosure /> },
    { path: "fixclosure", element: <FixClosure /> },
    { path: "fixclosure1", element: <FixClosure1 /> },
  ],
}
