import React from "react"

import { CellProps } from "../interface"

const middleStyle = (middle: boolean) => {
  if (middle) {
    return {
      display: "inline-flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      justifySelf: "stretch",
    }
  }
}

const Cell = ({
  width = 1,
  height = 1,
  area,
  middle = true,
  style = {},
  left,
  top,
  center,
  children,
}: CellProps) => {
  const mergedstyle: any = {
    height: "100%",
    minWidth: 0,
    gridColumnEnd: `span ${width}`, // 使用 grid-column-end 属性设置网格元素跨越多少列，或者在哪一列结束。
    gridRowEnd: `span ${height}`, // grid-row-start 属性指定哪一行开始显示网格元素
    gridColumnStart: left, // grid-column-start 属性定义了网格元素从哪一列开始
    gridRowStart: top, // grid-row-end 属性指定哪一行停止显示网格元素，或设置跨越多少行
    textAlign: center && "center",
    ...middleStyle(middle),
    ...style,
  }
  if (area) mergedstyle.gridArea = area
  return <div style={mergedstyle}>{children}</div>
}
const CellMemo = React.memo(Cell)
export { CellMemo as Cell }
