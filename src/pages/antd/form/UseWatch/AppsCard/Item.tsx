import { Button } from "antd"

import { StyledActionBox, StyledImg, StyledItem, StyledTitle } from "./style"

export interface IApp {
  name: string
  id: number
  url: string
  imgUrl: string
}
interface ItemProps extends IApp {
  onDelete: (id: number) => void
  onEdit: (data: any) => void
}
const Item = (props: ItemProps) => {
  const { name, id, url, imgUrl, onDelete, onEdit } = props
  return (
    <StyledItem href={url} target="_blank">
      <StyledTitle>{name}</StyledTitle>
      <StyledImg src={imgUrl}></StyledImg>
      <StyledActionBox>
        <Button type="primary" onClick={() => onEdit({ id, name })}>
          编辑
        </Button>
        <Button type="primary" danger onClick={() => onDelete(id)}>
          删除
        </Button>
      </StyledActionBox>
    </StyledItem>
  )
}
export default Item
