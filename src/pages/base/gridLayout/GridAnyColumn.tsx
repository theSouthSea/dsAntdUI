import { flatMap, range } from "lodash-es"

import { Cell, Grid } from "@/components/base/GridLayout"

const cellStyle = {
  fontSize: "0.8em",
  border: "1px solid #999",
  background: "#f5f2f0",
  lineHeight: 1,
  color: "#905",
}

const rows = (counts: number[]) =>
  flatMap(counts, (number) =>
    range(number).map((i) => (
      <Cell center middle style={cellStyle} width={12 / number} key={`${number}_${i}`}>
        {i + 1}/{number}
      </Cell>
    )),
  )

const TraditionalGrid = () => (
  <article>
    <Grid columns={12} minRowHeight="45px">
      {rows([12, 6, 4, 2, 1])}
    </Grid>
  </article>
)
export default TraditionalGrid
