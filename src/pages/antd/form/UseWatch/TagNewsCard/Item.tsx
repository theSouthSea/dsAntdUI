import { Button } from "antd"
import { useMemo } from "react"

import {
  StyledActionBox,
  StyledImg,
  StyledItem,
  StyledJustify,
  StyledSpaceBetween,
  StyledSummary,
  StyledTitle,
} from "./style"

interface ITag {
  label: string
  color: string
  borderColor: string
}
export interface INews {
  title: string
  id: number
  url: string
  tags: string[] | ITag[]
}
interface ItemProps extends INews {
  onDelete?: (id: number) => void
  onEdit?: (data: any) => void
  isEditable?: boolean
}
const Item = (props: ItemProps) => {
  const { title, id, url, tags, isEditable = false, onDelete, onEdit } = props
  const tagsJsx = useMemo(() => {
    const firstEle = tags?.[0]
    if (!firstEle) {
      return null
    }
    let tagsJsx
    if (typeof firstEle === "string") {
      tagsJsx = tags.map((item) => (
        <Button key={item} type="primary" style={{ color: "white" }}>
          {item}
        </Button>
      ))
    } else {
      tagsJsx = tags.map((item) => (
        <Button
          key={item.label}
          type="primary"
          style={{ color: item.color || "#333", borderColor: item.borderColor || "#666" }}
        >
          {item.label}
        </Button>
      ))
    }
    return <StyledJustify justify="flex-start">{tagsJsx}</StyledJustify>
  }, [tags])
  return (
    <StyledItem href={url} target="_blank">
      <StyledSpaceBetween>
        <StyledTitle>{title}</StyledTitle>
        {tagsJsx}
      </StyledSpaceBetween>
      {isEditable && (
        <StyledActionBox>
          <Button type="primary" onClick={() => onEdit?.({ id, name })}>
            编辑
          </Button>
          <Button type="primary" danger onClick={() => onDelete?.(id)}>
            删除
          </Button>
        </StyledActionBox>
      )}
    </StyledItem>
  )
}
export default Item
