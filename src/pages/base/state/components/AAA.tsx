import { memo } from "react"

import { ArrayItemProps } from "../ArrayState"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AAA = (props: ArrayItemProps) => {
  console.log("AAA render")
  return <div>AAA</div>
}
export default memo(AAA)
