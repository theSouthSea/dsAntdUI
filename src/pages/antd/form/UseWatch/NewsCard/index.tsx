import Item, { INews } from "./Item"
import { StyledContainer } from "./style"

interface NewsCardProps {
  data: INews[]
  onDelete: (id: number) => void
  onEdit: (item: any) => void
  isEditable?: boolean
}
const NewsCard = (props: NewsCardProps) => {
  const { data, onDelete, onEdit, isEditable = false } = props
  return (
    <StyledContainer>
      {data?.length > 0 ? (
        data.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              url={item.url}
              imgs={item.imgs}
              summary={item.summary}
              onDelete={onDelete}
              onEdit={onEdit}
              isEditable={isEditable}
            ></Item>
          )
        })
      ) : (
        <div>暂无数据</div>
      )}
    </StyledContainer>
  )
}
export default NewsCard
