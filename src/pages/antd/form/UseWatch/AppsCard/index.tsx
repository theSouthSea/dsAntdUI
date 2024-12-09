import Item, { IApp } from "./Item"
import { StyledContainer } from "./style"

interface AppsCardProps {
  data: IApp[]
  onDelete: (id: number) => void
  onEdit: (item: any) => void
}
const AppsCard = (props: AppsCardProps) => {
  const { data, onDelete, onEdit } = props
  return (
    <StyledContainer>
      {data?.length > 0 ? (
        data.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              imgUrl={item.imgUrl}
              onDelete={onDelete}
              onEdit={onEdit}
            ></Item>
          )
        })
      ) : (
        <div>暂无数据</div>
      )}
    </StyledContainer>
  )
}
export default AppsCard
