import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// 异步加载组件
const Layout = lazy(() => import("@/layout/Layout"))
const App = lazy(() => import("@/App"))
const Slogan = lazy(() => import("@/pages/Slogan"))
const RerenderBase = lazy(() => import("@/pages/best/RerenderBase"))
const RerenderBase1 = lazy(() => import("@/pages/best/RerenderBase1"))
const GrandParentChild = lazy(() => import("@/pages/best/GrandParentChild"))
const GrandParentChildOptimize = lazy(() => import("@/pages/best/GrandParentChildOptimize"))
const GrandParentChildOptimizeFix = lazy(() => import("@/pages/best/GrandParentChildOptimizeFix"))
const GrandParentChildOptimizeFix1 = lazy(() => import("@/pages/best/GrandParentChildOptimizeFix1"))
const GrandParentChildOptimize1 = lazy(() => import("@/pages/best/GrandParentChildOptimize1"))
const GrandParentChildOptimize2 = lazy(() => import("@/pages/best/GrandParentChildOptimize2"))
const GrandParentChildOptimize3 = lazy(() => import("@/pages/best/GrandParentChildOptimize3"))
const BestDemo = lazy(() => import("@/pages/best/BestDemo"))
const DebounceDemo1 = lazy(() => import("@/best/debounce/demo1"))
const DebounceDemo2 = lazy(() => import("@/best/debounce/demo2"))
const DebounceDemo = lazy(() => import("@/best/debounce/demo"))
const ErrorBoundaryDemo = lazy(() => import("@/best/AsyncErrorBoundary/demo"))
const UseDebounceDemo = lazy(() => import("@/best/debounce/demo2"))
const CloneElementBase = lazy(() => import("@/pages/cloneElement/Base"))
const NoPropsChild = lazy(() => import("@/pages/rerender/NoPropsChild"))
const NoPropsChildFix = lazy(() => import("@/pages/rerender/NoPropsChildFix"))
const ListPage = lazy(() => import("@/pages/rerender/ListPage"))
const HooksBaseDemo = lazy(() => import("@/pages/best/hooks/BaseDemo"))
const IncludeClosure = lazy(() => import("@/pages/best/closure/IncludeClosure"))
const BaseClosure = lazy(() => import("@/pages/best/closure/BaseClosure"))
const RefClosure = lazy(() => import("@/pages/best/closure/RefClosure"))
const FixClosure = lazy(() => import("@/pages/best/closure/FixClosure"))
const FixClosure1 = lazy(() => import("@/pages/best/closure/FixClosure1"))

export default function ProjectRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="slogan" element={<Slogan />} />
            {/* 对于多级路由，也可以嵌套 <Route> */}
            <Route path="best/*">
              {/* <Suspense fallback={<div>Loading best practice...</div>}> */}
              <Route index element={<RerenderBase />} />
              <Route path="rerederbase" element={<RerenderBase />} />
              <Route path="rerederbase1" element={<RerenderBase1 />} />
              <Route path="grandparentchild" element={<GrandParentChild />} />
              <Route path="grandparentchildoptimize" element={<GrandParentChildOptimize />} />
              <Route path="grandparentchildoptimizefix" element={<GrandParentChildOptimizeFix />} />
              <Route
                path="grandparentchildoptimizefix1"
                element={<GrandParentChildOptimizeFix1 />}
              />
              <Route path="grandparentchildoptimize1" element={<GrandParentChildOptimize1 />} />
              <Route path="grandparentchildoptimize2" element={<GrandParentChildOptimize2 />} />
              <Route path="grandparentchildoptimize3" element={<GrandParentChildOptimize3 />} />
              <Route path="debounce/*">
                <Route index element={<DebounceDemo2 />} />
                <Route path="demo" element={<DebounceDemo />} />
                <Route path="demo1" element={<DebounceDemo1 />} />
                <Route path="demo2" element={<DebounceDemo2 />} />
              </Route>
              <Route path="bestdemo" element={<BestDemo />} />
              <Route path="errorboundary" element={<ErrorBoundaryDemo />} />
              <Route path="useDebounce" element={<UseDebounceDemo />} />
              <Route path="useDebounce" element={<UseDebounceDemo />} />
              {/* </Suspense> */}
            </Route>
            <Route path="cloneElement/*">
              <Route index element={<CloneElementBase />} />
              <Route path="base" element={<CloneElementBase />} />
            </Route>
            <Route path="rerender/*">
              <Route index element={<NoPropsChild />} />
              <Route path="nopropschild" element={<NoPropsChild />} />
              <Route path="nopropschildfix" element={<NoPropsChildFix />} />
              <Route path="listpage" element={<ListPage />} />
            </Route>
            <Route path="hooks/*">
              <Route index element={<HooksBaseDemo />} />
              <Route path="basedemo" element={<HooksBaseDemo />} />
            </Route>
            <Route path="closure/*">
              <Route index element={<IncludeClosure />} />
              <Route path="includeclose" element={<IncludeClosure />} />
              <Route path="baseclosure" element={<BaseClosure />} />
              <Route path="refclosure" element={<RefClosure />} />
              <Route path="fixclosure" element={<FixClosure />} />
              <Route path="fixclosure1" element={<FixClosure1 />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}
