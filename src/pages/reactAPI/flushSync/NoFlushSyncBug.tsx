import { useRef, useState } from "react"

export default function TodoList() {
  const listRef = useRef(null)
  const [text, setText] = useState("")
  const [todos, setTodos] = useState(initialTodos)

  function handleAdd() {
    const newTodo = { id: nextId++, text: text }
    setText("")
    setTodos([...todos, newTodo])
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
  }

  return (
    <>
      <button onClick={handleAdd}>添加</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul ref={listRef}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}

let nextId = 0
const initialTodos = []
for (let i = 0; i < 40; i++) {
  initialTodos.push({
    id: nextId++,
    text: "待办 #" + (i + 1),
  })
}
