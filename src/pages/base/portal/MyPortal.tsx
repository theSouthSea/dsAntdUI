import Portal from "@/components/base/Portal"

function App() {
  const content = (
    <div className="btn">
      <button>按钮</button>
    </div>
  )

  return <Portal attach={document.body}>{content}</Portal>
}

export default App
