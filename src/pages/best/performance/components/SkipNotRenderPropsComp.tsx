import { omit } from "lodash-es"
import { Children, cloneElement, useEffect, useMemo, useRef } from "react"
import shallowEqual from "shallowequal"

let renderCnt = 0

const useShallowCompareMemo = (factory, deps) => {
  const ref = useRef([])

  const isEqual = deps.every((dep, index) => {
    return shallowEqual(ref.current[index], dep)
  })
  if (!isEqual) {
    ref.current = deps
  }

  return useMemo(factory, ref.current)
}

export function SkipNonRenderProps({ children, skips }) {
  if (!skips) {
    // 默认跳过所有回调函数
    skips = (prop) => prop.startsWith("on")
  }

  const child = Children.only(children)
  const childProps = child.props
  const propsRef = useRef({})
  const nextSkippedPropsRef = useRef({})
  Object.keys(childProps)
    .filter((it) => skips(it))
    .forEach((key) => {
      // 代理函数只会生成一次，其值始终不变
      nextSkippedPropsRef.current[key] =
        nextSkippedPropsRef.current[key] ||
        function skipNonRenderPropsProxy(...args) {
          propsRef.current[key].apply(this, args)
        }
    })

  useEffect(() => {
    propsRef.current = childProps
  })

  // 这里使用 useMemo 优化技巧
  // 除去回调函数，其他属性改变生成新的 React.Element
  return useShallowCompareMemo(() => {
    return cloneElement(child, {
      ...child.props,
      ...nextSkippedPropsRef.current,
    })
  }, [omit(childProps, Object.keys(nextSkippedPropsRef.current))])
}

// SkipNotRenderPropsComp 组件内容和 Normal 内容一样
export function SkipNotRenderPropsComp({ onClick }) {
  return (
    <div className="case">
      <div className="caseHeader">跳过『与渲染无关的 Props』改变触发的重新渲染</div>
      渲染次数为：{++renderCnt}
      <div>
        <button onClick={onClick} style={{ color: "blue" }}>
          点我回调，回调弹出值为 1000（优化成功）
        </button>
      </div>
    </div>
  )
}

export default SkipNotRenderPropsComp
