import { VariableSizeGrid as Grid } from "react-window"

// These item sizes are arbitrary.
// Yours should be based on the content of the item.
const columnWidths = new Array(1000).fill(true).map(() => 75 + Math.round(Math.random() * 50))
const rowHeights = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 50))

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div style={style}>
    Item {rowIndex},{columnIndex}
  </div>
)

const Example = () => (
  <Grid
    columnCount={1000}
    columnWidth={(index) => columnWidths[index]}
    height={150}
    rowCount={1000}
    rowHeight={(index) => rowHeights[index]}
    width={300}
  >
    {Cell}
  </Grid>
)
export default Example
