import { Cell, Grid } from "@/components/base/GridLayout"

const cellStyle = {
  fontSize: "0.8em",
  border: "1px solid #999",
  background: "#f5f2f0",
  lineHeight: 1,
  color: "#905",
}
export default function App() {
  return (
    <Grid columns={3} height="200px">
      <Cell center middle style={cellStyle}>
        Top Left
      </Cell>
      <Cell center middle style={cellStyle} left={3}>
        Top Right
      </Cell>
      <Cell center middle style={cellStyle} left={2} top={2}>
        Middle
      </Cell>
      <Cell center middle style={cellStyle} top={3}>
        Bottom Left
      </Cell>
      <Cell center middle style={cellStyle} top={3} left={3}>
        Bottom Right
      </Cell>
    </Grid>
  )
}
