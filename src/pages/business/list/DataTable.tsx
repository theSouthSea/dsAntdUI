import { Table } from "antd"
import { useEffect } from "react"

import { getUserData } from "@/services/user"

import { useListContext, useListDataContext } from "./ListProvider"
// 从行数据中获取数据的唯一id
const getRowKey = (record: any) => {
  return record.id ?? record.key
}
// DataTableProps
const DataTable = (props: any) => {
  const { columns } = props
  // const { onDataChange } = useListContext()
  const data = useListDataContext()
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await getUserData()
  //     console.log("getUserData", data)
  //     onDataChange(res.data)
  //   }
  //   getData()
  // }, [])
  return (
    <div>
      <Table columns={columns} dataSource={data} rowKey="id" />
      {/* <Table columns={columns} dataSource={data} rowKey={getRowKey} /> */}
    </div>
  )
}
export default DataTable
