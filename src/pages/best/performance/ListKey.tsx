import { useEffect, useMemo, useRef, useState } from "react"

const ITEM_COUNT_PER_PAGE = 2000
function getList(page) {
  const list = []
  for (let i = 0, start = (page - 1) * ITEM_COUNT_PER_PAGE; i < ITEM_COUNT_PER_PAGE; ++i) {
    list.push(i + start)
  }

  return list
}

function Item({ id }) {
  return <li>{id}</li>
}

function useMeasureTime(label) {
  const startTimeRef = useRef()
  useEffect(() => {
    if (startTimeRef.current) {
      console.log(label, `${+new Date() - startTimeRef.current}ms`)
    }
  })

  return {
    start: () => {
      startTimeRef.current = +new Date()
    },
  }
}

function ListWithoutKey() {
  const [page, setPage] = useState(1)
  const list = useMemo(() => getList(page), [page])
  const measure = useMeasureTime("使用 Index 作为 Key，耗时")
  const onClickNextPageBtn = () => {
    measure.start()
    setPage(page + 1)
  }
  useEffect(() => {})

  return (
    <fieldset>
      <legend>使用 Index 作为 Key</legend>
      <div>
        <button onClick={onClickNextPageBtn} style={{ position: "fixed", right: 10, top: 10 }}>
          使用 Index 作为 Key，点击下一页
        </button>
      </div>
      <ul>
        {list.map((it, idx) => (
          <Item key={idx} id={it}></Item>
        ))}
      </ul>
    </fieldset>
  )
}

function ListWithKey() {
  const [page, setPage] = useState(1)
  const list = useMemo(() => getList(page), [page])
  const measure = useMeasureTime("使用 ID 作为 Key，耗时")
  const onClickNextPageBtn = () => {
    measure.start()
    setPage(page + 1)
  }
  return (
    <fieldset>
      <legend>使用 ID 作为 Key</legend>
      <div>
        <button onClick={onClickNextPageBtn} style={{ position: "fixed", left: 10, top: 10 }}>
          使用 ID 作为 Key，点击下一页
        </button>
      </div>

      <ul>
        {list.map((it) => (
          <Item key={it} id={it}></Item>
        ))}
      </ul>
    </fieldset>
  )
}

export default function App() {
  return (
    <div className="App">
      <ListWithKey />
      <ListWithoutKey />
    </div>
  )
}
