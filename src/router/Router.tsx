import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
// 异步加载组件
const Layout = lazy(() => import("@/layout/Layout"))
const App = lazy(() => import("@/App"))
const Slogan = lazy(() => import("@/pages/Slogan"))
const RerenderBase = lazy(() => import("@/pages/best/RerenderBase"))
const BestDemo = lazy(() => import("@/pages/best/BestDemo"))

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
              <Route path="bestdemo" element={<BestDemo />} />
              {/* </Suspense> */}
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}
