import { useState } from "react"

const useList = () => {
  const { filters, setFilters } = useState({ current: 1 }) // 将网络请求相关的参数，都放到filters中
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)

  const { current } = filters

  const fetchData = () => {
    const res = axios.post("/xxx", { ...filters, pageSize: PAGE_SIZE })
    const { data, total } = res.data

    setData(data)
    setTotal(total)
  }

  useDeepEffect(() => {
    fetchData()
  }, [filters])

  const onFilterChange = (params) => {
    setFilters({ ...filters, ...params, current: 1 })
  } //记得重置current Page

  const onPagination = (page) => {
    setFilters({ ...filters, current: page })
  }
}
// state： loading、dataSource和pagination
// function: setFilter, setPagination, updateListData, refreshListData（updateListData可用于行内编辑，refreshListData适用于新增记录之后刷新数据）
export default useList
