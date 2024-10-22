import { Button, theme } from "antd"
import React from "react"

const { useToken } = theme

const App: React.FC = () => {
  const { token } = useToken()

  return (
    <div
      style={{
        backgroundColor: token.colorPrimaryBg,
        padding: token.padding,
        borderRadius: token.borderRadius,
        color: token.colorPrimaryText,
        fontSize: token.fontSize,
      }}
    >
      使用 Design Token
    </div>
  )
}

export default App
