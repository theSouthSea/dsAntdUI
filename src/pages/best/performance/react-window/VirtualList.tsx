import { FixedSizeList as List } from "react-window"

const Row = ({ index, style }) => <div style={style}>Row {index}</div>

const VirtualList = () => (
  <List
    height={150}
    itemCount={1000}
    itemSize={35} // 每项的高度为 35
    width={300}
  >
    {Row}
  </List>
)
export default VirtualList
