import { Button, ConfigProvider, Space } from "antd"
import React from "react"

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1677ff",
      },
    }}
  >
    <Space>
      <Button type="primary">Theme 1</Button>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        <Button type="primary">Theme 2</Button>
      </ConfigProvider>
    </Space>
  </ConfigProvider>
)

export default App
