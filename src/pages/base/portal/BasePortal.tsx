import { createPortal } from "react-dom"

function App() {
  const content = (
    <div className="btn">
      <button>按钮</button>
    </div>
  )

  return createPortal(content, document.body)
}

export default App
