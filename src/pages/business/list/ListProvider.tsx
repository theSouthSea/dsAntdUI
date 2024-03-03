import { createContext, ReactElement, useContext, useMemo, useReducer } from "react"

interface TableData {
  [key: string]: any
}
interface FormData {
  [key: string]: any
}
interface Pagination {
  current: number
  pageSize: number
  total: number
}
interface State {
  data: TableData[]
  // filters: []
  formData: FormData
  pagination: Pagination
  api: string
}
type API = {
  onFormDataChange: (formData: Partial<FormData>) => void
  onDataChange: (data: TableData[]) => void
  onPageChange: (pagination: Partial<Pagination>) => void
  onApiChange: (api: string) => void
}
const ListContext = createContext<API>({} as API)
export const useListContext = () => useContext(ListContext)
const ListFormContext = createContext<State["formData"]>({} as State["formData"])
export const useListFormContext = () => useContext(ListFormContext)
const ListDataContext = createContext<State["data"]>({} as State["data"])
export const useListDataContext = () => useContext(ListDataContext)
const ListPaginationContext = createContext<State["pagination"]>({} as State["pagination"])
export const useListPaginationContext = () => useContext(ListPaginationContext)

type Actions =
  | { type: "updateData"; data: TableData[] }
  | { type: "updateFormData"; formData: FormData }
  | { type: "updatePagination"; pagination: Partial<Pagination> }
  | { type: "updateApi"; api: string }
const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "updateData":
      return { ...state, data: action.data }
    case "updateFormData":
      return { ...state, formData: action.formData }
    case "updatePagination":
      return { ...state, pagination: { ...state.pagination, ...action.pagination } }
    // return { ...state, pagination: action.pagination }
    case "updateApi":
      return { ...state, api: action.api }
  }
}
const ListProvider = ({ children }: { children: ReactElement }) => {
  // const [data, setData] = useState<TableData[]>([])
  // const [formData,setFormData] = useState<FormData>({})
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    formData: {},
    pagination: { current: 1, pageSize: 10, total: 0 },
    api: "",
  } as State)
  const api = useMemo(() => {
    const onFormDataChange = (formData: Partial<FormData>) => {
      // setState({ ...state, discount })
      dispatch({ type: "updateFormData", formData })
    }

    const onDataChange = (data: TableData[]) => {
      dispatch({ type: "updateData", data })
    }

    const onPageChange = (pagination: Partial<Pagination>) => {
      dispatch({ type: "updatePagination", pagination })
    }

    const onApiChange = (api: string) => {
      dispatch({ type: "updateApi", api })
    }

    return {
      onFormDataChange,
      onDataChange,
      onPageChange,
      onApiChange,
    }
  }, [])
  return (
    <ListContext.Provider value={api}>
      <ListFormContext.Provider value={state.formData}>
        <ListDataContext.Provider value={state.data}>
          <ListPaginationContext.Provider value={state.pagination}>
            {children}
          </ListPaginationContext.Provider>
        </ListDataContext.Provider>
      </ListFormContext.Provider>
    </ListContext.Provider>
  )
}
export default ListProvider
