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
const CloneElementBase = lazy(() => import("@/pages/reactAPI/cloneElement/Base"))
const NoPropsChild = lazy(() => import("@/pages/rerender/NoPropsChild"))
const NoPropsChildFix = lazy(() => import("@/pages/rerender/NoPropsChildFix"))
const ListPage = lazy(() => import("@/pages/rerender/ListPage"))
const HooksBaseDemo = lazy(() => import("@/pages/best/hooks/BaseDemo"))
const IncludeClosure = lazy(() => import("@/pages/best/closure/IncludeClosure"))
const BaseClosure = lazy(() => import("@/pages/best/closure/BaseClosure"))
const RefClosure = lazy(() => import("@/pages/best/closure/RefClosure"))
const FixClosure = lazy(() => import("@/pages/best/closure/FixClosure"))
const FixClosure1 = lazy(() => import("@/pages/best/closure/FixClosure1"))
const BaseHoc = lazy(() => import("@/pages/best/hoc/BaseHoc"))
const EnhanceCallback = lazy(() => import("@/pages/best/hoc/App"))
const InterceptEvent = lazy(() => import("@/pages/best/hoc/InterceptEvent"))
const HocContextDemo = lazy(() => import("@/pages/best/hoc/HocContextDemo"))
const ConditionRender = lazy(() => import("@/pages/best/reconciliation/ConditionRender"))
const ConditionRenderFix = lazy(() => import("@/pages/best/reconciliation/ConditionRenderFix"))
const ConditionRenderArr = lazy(() => import("@/pages/best/reconciliation/ConditionRenderArr"))
const ConditionRenderSameKey = lazy(
  () => import("@/pages/best/reconciliation/ConditionRenderSameKey"),
)
const ArrayOuterKey = lazy(() => import("@/pages/best/reconciliation/ArrayOuterKey"))
const ArrayOrderConditionKey = lazy(
  () => import("@/pages/best/reconciliation/ArrayOrderConditionKey"),
)
const RenderCount = lazy(() => import("@/pages/best/reconciliation/RenderCount"))
const ChildrenBaseDemo = lazy(() => import("@/pages/best/children/BaseDemo"))
const BaseDemoMemoFix = lazy(() => import("@/pages/best/children/BaseDemoMemoFix"))
const BaseDemoChildrenFix = lazy(() => import("@/pages/best/children/BaseDemoChildrenFix"))
const MemoChildrenComp = lazy(() => import("@/pages/best/children/MemoChildrenComp"))
const MemoRenderProps = lazy(() => import("@/pages/best/children/MemoRenderProps"))
const ErrorStepOne = lazy(() => import("@/pages/best/error/ErrorStepOne"))
const ErrorStepTwo = lazy(() => import("@/pages/best/error/ErrorStepTwo"))
const ErrorStepThree = lazy(() => import("@/pages/best/error/ErrorStepThree"))
const ErrorStepFour = lazy(() => import("@/pages/best/error/ErrorStepFour"))
const ErrorStepFive = lazy(() => import("@/pages/best/error/ErrorStepFive"))
const ErrorStepSix = lazy(() => import("@/pages/best/error/ErrorStepSix"))
const ErrorStepSeven = lazy(() => import("@/pages/best/error/ErrorStepSeven"))
const ErrorStepEight = lazy(() => import("@/pages/best/error/ErrorStepEight"))
const PropsStepTwo = lazy(() => import("@/pages/best/props/PropsStepTwo"))
const PropsStepThree = lazy(() => import("@/pages/best/props/PropsStepThree"))
const PropsStepFour = lazy(() => import("@/pages/best/props/PropsStepFour"))
const SplitCompOne = lazy(() => import("@/pages/best/splitComp/SplitCompOne"))
const SplitCompTwo = lazy(() => import("@/pages/best/splitComp/SplitCompTwo"))
const SplitCompThree = lazy(() => import("@/pages/best/splitComp/SplitCompThree"))
const SplitCompFour = lazy(() => import("@/pages/best/splitComp/SplitCompFour"))
const ArrayStepOne = lazy(() => import("@/pages/best/performance/ArrayStepOne"))
const ArrayStepTwo = lazy(() => import("@/pages/best/performance/ArrayStepTwo"))
const ContextStepOne = lazy(() => import("@/pages/best/performance/ContextStepOne"))
const ContextStepTwo = lazy(() => import("@/pages/best/performance/ContextStepTwo"))
const StateMovedDown = lazy(() => import("@/pages/best/performance/StateMovedDown"))
const ChildrenMemoComp = lazy(() => import("@/pages/best/performance/ChildrenMemoComp"))
const PropsMemoComp = lazy(() => import("@/pages/best/performance/PropsMemoComp"))
const MemoChildren = lazy(() => import("@/pages/best/performance/MemoChildren"))
const BaseForm = lazy(() => import("@/pages/base/form/ClassForm/Demo"))
const BadModalDemo = lazy(() => import("@/pages/base/modal/BadModalDemo"))
const BadModalDemoFix = lazy(() => import("@/pages/base/modal/BadModalDemoFix"))
const MessageDemo = lazy(() => import("@/pages/base/message/MessageDemo"))
const BasicListExample = lazy(() => import("@/pages/business/list/ListPage"))

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
            <Route path="hoc/*">
              <Route index element={<BaseHoc />} />
              <Route path="basehoc" element={<BaseHoc />} />
              <Route path="enhancecallback" element={<EnhanceCallback />} />
              <Route path="interceptevent" element={<InterceptEvent />} />
              <Route path="hoccontext" element={<HocContextDemo />} />
            </Route>
            <Route path="render/*">
              <Route index element={<ConditionRender />} />
              <Route path="conditionrender" element={<ConditionRender />} />
              <Route path="conditionrenderfix" element={<ConditionRenderFix />} />
              <Route path="conditionrenderarr" element={<ConditionRenderArr />} />
              <Route path="conditionrendersamekey" element={<ConditionRenderSameKey />} />
              <Route path="arrayouterkey" element={<ArrayOuterKey />} />
              <Route path="arrayorderconditionkey" element={<ArrayOrderConditionKey />} />
              <Route path="rendercount" element={<RenderCount />} />
            </Route>
            <Route path="children/*">
              <Route index element={<ChildrenBaseDemo />} />
              <Route path="basedemo" element={<ChildrenBaseDemo />} />
              <Route path="basedemomemofix" element={<BaseDemoMemoFix />} />
              <Route path="basedemochildrenfix" element={<BaseDemoChildrenFix />} />
              <Route path="memochildrencomp" element={<MemoChildrenComp />} />
              <Route path="memorenderprops" element={<MemoRenderProps />} />
            </Route>
            <Route path="error/*">
              <Route index element={<ErrorStepOne />} />
              <Route path="stepone" element={<ErrorStepOne />} />
              <Route path="steptwo" element={<ErrorStepTwo />} />
              <Route path="stepthree" element={<ErrorStepThree />} />
              <Route path="stepfour" element={<ErrorStepFour />} />
              <Route path="stepfive" element={<ErrorStepFive />} />
              <Route path="stepsix" element={<ErrorStepSix />} />
              <Route path="stepseven" element={<ErrorStepSeven />} />
              <Route path="stepeight" element={<ErrorStepEight />} />
            </Route>
            <Route path="props/*">
              <Route index element={<PropsStepTwo />} />
              <Route path="steptwo" element={<PropsStepTwo />} />
              <Route path="stepthree" element={<PropsStepThree />} />
              <Route path="stepfour" element={<PropsStepFour />} />
            </Route>
            <Route path="splitComp/*">
              <Route index element={<SplitCompOne />} />
              <Route path="stepone" element={<SplitCompOne />} />
              <Route path="steptwo" element={<SplitCompTwo />} />
              <Route path="stepthree" element={<SplitCompThree />} />
              <Route path="stepfour" element={<SplitCompFour />} />
            </Route>
            <Route path="performance/*">
              <Route index element={<ArrayStepOne />} />
              <Route path="arraystepone" element={<ArrayStepOne />} />
              <Route path="arraysteptwo" element={<ArrayStepTwo />} />
              <Route path="contextstepone" element={<ContextStepOne />} />
              <Route path="contextsteptwo" element={<ContextStepTwo />} />
              <Route path="statemoveddown" element={<StateMovedDown />} />
              <Route path="childrenmemocomp" element={<ChildrenMemoComp />} />
              <Route path="propsmemocomp" element={<PropsMemoComp />} />
              <Route path="memochildren" element={<MemoChildren />} />
            </Route>
            <Route path="comp/*">
              <Route index element={<SplitCompOne />} />
              <Route path="form" element={<BaseForm />} />
              <Route path="badmodaldemo" element={<BadModalDemo />} />
              <Route path="badmodaldemofix" element={<BadModalDemoFix />} />
              <Route path="messagedemo" element={<MessageDemo />} />
              <Route path="listdemo" element={<BasicListExample />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}
