let renderCnt = 0
function NormalComp({ onClick }) {
  return (
    <div className="case">
      <div className="caseHeader">正常组件</div>
      渲染次数为：{++renderCnt}
      <div>
        <button onClick={onClick}>点我回调，回调弹出值为 1000</button>
      </div>
    </div>
  )
}

export default NormalComp
