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
const GrandParentChildOptimize1 = lazy(() => import("@/pages/best/GrandParentChildOptimize1"))
const GrandParentChildOptimize2 = lazy(() => import("@/pages/best/GrandParentChildOptimize2"))
const BestDemo = lazy(() => import("@/pages/best/BestDemo"))
const DebounceDemo1 = lazy(() => import("@/best/debounce/demo1"))
const DebounceDemo2 = lazy(() => import("@/best/debounce/demo2"))
const DebounceDemo = lazy(() => import("@/best/debounce/demo"))

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
              <Route path="grandparentchildoptimize1" element={<GrandParentChildOptimize1 />} />
              <Route path="grandparentchildoptimize2" element={<GrandParentChildOptimize2 />} />
              <Route path="debounce/*">
                <Route index element={<DebounceDemo2 />} />
                <Route path="demo" element={<DebounceDemo />} />
                <Route path="demo1" element={<DebounceDemo1 />} />
                <Route path="demo2" element={<DebounceDemo2 />} />
              </Route>
              <Route path="bestdemo" element={<BestDemo />} />
              {/* </Suspense> */}
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}
