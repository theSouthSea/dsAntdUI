import { ReactElement, useEffect } from "react"

import { getUserData } from "@/services/user"

import DataTable from "./DataTable"
import FilterForm from "./FilterForm"
import Header from "./Header"
import { useListContext, useListFormContext, useListPaginationContext } from "./ListProvider"
// import ListProvider from "./ListProvider"
import Pagination from "./Pagination"

interface BasicListProps {
  [key: string]: any
}
const ListContainer = ({ children }: { children: ReactElement[] }) => {
  const { onDataChange } = useListContext()
  const pagination = useListPaginationContext()
  const formData = useListFormContext()
  console.log("ListContainer")
  useEffect(() => {
    const getData = async () => {
      const res = await getUserData({
        ...formData,
        pageSize: pagination.pageSize,
        page: pagination.current,
      })
      console.log("getUserData", res)
      onDataChange(res.data)
    }
    getData()
  }, [formData, pagination.pageSize, pagination, onDataChange])
  return <div>{children}</div>
}
const BasicList = (props: BasicListProps) => {
  const { header, filters, columns, api } = props
  console.log("BasicList")
  return (
    <ListContainer>
      <Header header={header}></Header>
      <FilterForm filters={filters}></FilterForm>
      <DataTable columns={columns} api={api}></DataTable>
      <Pagination></Pagination>
    </ListContainer>
  )
}

export default BasicList
// export default function App() {
//   return (
//     <ListProvider>
//       <BasicList></BasicList>
//     </ListProvider>
//   )
// }
