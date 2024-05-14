import { Button } from "antd"
import { Component, lazy, Suspense, useState } from "react"

// 对加载失败进行容错处理
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <h1>这里处理出错场景</h1>
    }

    return this.props.children
  }
}

const Comp = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random()
      console.log("random", random)
      if (random > 0.9) {
        reject(new Error("模拟网络出错"))
      } else {
        resolve(import("./components/ContentOfLazyLoad"))
      }
    }, 1000)
  })
})

export default function App() {
  const [, forceUpdate] = useState({})

  return (
    <div className="App">
      <div style={{ marginBottom: 20 }}>
        实现懒加载优化时，不仅要考虑加载态，还需要对加载失败进行容错处理。
      </div>
      <Button type="primary" onClick={() => forceUpdate({})}>
        强制更新页面组件
      </Button>
      <ErrorBoundary>
        <Suspense fallback="Loading...">
          <Comp />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
