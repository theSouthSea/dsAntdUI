import { omit } from "lodash-es"
import { memo } from "react"
import shallowequal from "shallowequal"

let renderCnt = 0
const MemoComp = memo(
  function ({ onClick }) {
    return (
      <div className="case">
        <div className="caseHeader">通过 React.memo 优化后的组件</div>
        渲染次数为：{++renderCnt}
        <div>
          <button onClick={onClick} style={{ color: "red" }}>
            点我回调，回调弹出值为 0（错误的优化方式）
          </button>
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return shallowequal(omit(prevProps, "onClick"), omit(nextProps, "onClick"))
  },
)

export default MemoComp
