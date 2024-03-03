import { Pagination, PaginationProps } from "antd"

import { useListContext, useListPaginationContext } from "./ListProvider"

const PaginationComp = () => {
  const { current, total, pageSize } = useListPaginationContext()
  const { onPageChange } = useListContext()

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page)
    onPageChange({
      current: page,
    })
  }
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (current, pageSize) => {
    console.log(current, pageSize)
    onPageChange({
      current,
      pageSize,
    })
  }

  return (
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      onChange={onChange}
      defaultCurrent={1}
      current={current}
      total={total}
      hideOnSinglePage
      pageSize={pageSize}
    />
  )
}
export default PaginationComp
