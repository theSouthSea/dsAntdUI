import { Button } from "antd"
import { useRef } from "react"
import { FixedSizeGrid as Grid } from "react-window"

// These item sizes are arbitrary.
// Yours should be based on the content of the item.
const columnWidths = new Array(1000).fill(true).map(() => 75 + Math.round(Math.random() * 50))
const rowHeights = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 50))

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div style={style}>
    Item {rowIndex},{columnIndex}
  </div>
)

const Example = () => {
  const gridRef = useRef<{
    scrollToItem: (arg0: { rowIndex?: number; columnIndex?: number; align: string }) => void
  }>()
  const handleScrollRowColumn = () => {
    // Then call the scrollToItem() API method with the item indices:
    gridRef.current?.scrollToItem({
      columnIndex: 50,
      rowIndex: 100,
    })
  }
  const handleScrollRowColumnStart = () => {
    // The Grid will scroll as little as possible to ensure the item is visible.
    // You can also specify a custom alignment: center, start, or end.
    // For example:
    gridRef.current?.scrollToItem({
      align: "start",
      columnIndex: 150,
      rowIndex: 300,
    })
  }
  const handleScrollColumn = () => {
    // You can specify only columnIndex or rowIndex if you just want to scroll one axis.
    // For example:
    gridRef.current?.scrollToItem({
      columnIndex: 100,
    })
  }
  return (
    <>
      <Button type="primary" onClick={handleScrollRowColumn}>
        {`scrollToItem({columnIndex: 50,rowIndex: 100});`}
      </Button>
      <Button type="primary" onClick={handleScrollRowColumnStart}>
        {`scrollToItem({align: "start",columnIndex: 150,rowIndex: 300})`}
      </Button>
      <Button type="primary" onClick={handleScrollColumn}>
        {`scrollToItem({columnIndex: 100});`}
      </Button>
      <Grid
        ref={gridRef}
        columnCount={1000}
        columnWidth={(index) => columnWidths[index]}
        height={150}
        rowCount={1000}
        rowHeight={(index) => rowHeights[index]}
        width={300}
      >
        {Cell}
      </Grid>
    </>
  )
}
export default Example
