import { Input } from "antd"

import withData from "./withData"

const DataDisplay = ({ data, value, onChange }) => {
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Data Display</h1>
      <Input value={value} onChange={onChange}></Input>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default withData(DataDisplay)
