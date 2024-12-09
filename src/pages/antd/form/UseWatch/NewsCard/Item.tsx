import { Button } from "antd"

import {
  StyledActionBox,
  StyledImg,
  StyledItem,
  StyledSpaceBetween,
  StyledSummary,
  StyledTitle,
} from "./style"

export interface INews {
  title: string
  id: number
  url: string
  imgs: string[]
  summary: string
}
interface ItemProps extends INews {
  onDelete?: (id: number) => void
  onEdit?: (data: any) => void
  isEditable?: boolean
}
const Item = (props: ItemProps) => {
  const { title, id, url, summary, imgs, isEditable = false, onDelete, onEdit } = props
  return (
    <StyledItem href={url} target="_blank">
      <StyledTitle>{title}</StyledTitle>
      <StyledSummary>{summary}</StyledSummary>
      <StyledSpaceBetween>
        {imgs.map((item) => (
          <StyledImg key={item} src={item} />
        ))}
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
