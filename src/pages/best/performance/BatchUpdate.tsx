import { useEffect, useState } from "react"
import { unstable_batchedUpdates } from "react-dom"

const renderCntMap = {}
function renderOnce(name) {
  return (renderCntMap[name] = (renderCntMap[name] || 0) + 1)
}
async function getData() {
  return {
    list: [1, 2, 3, 4],
    info: { name: "MoonBall" },
  }
}

function NormalComponent() {
  const [list, setList] = useState(null)
  const [info, setInfo] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await getData()
      setList(data.list)
      setInfo(data.info)
    })()
  }, [])

  return <div>非批量更新组件时 Render 次数：{renderOnce("normal")}</div>
}

function BatchedComponent() {
  const [list, setList] = useState(null)
  const [info, setInfo] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await getData()
      unstable_batchedUpdates(() => {
        setList(data.list)
        setInfo(data.info)
      })
    })()
  }, [])

  return <div>批量更新组件时 Render 次数：{renderOnce("batched")}</div>
}

export default function App() {
  return (
    <div className="App">
      <h1>批量更新，验证 Render 次数</h1>
      <NormalComponent />
      <BatchedComponent />
    </div>
  )
}
