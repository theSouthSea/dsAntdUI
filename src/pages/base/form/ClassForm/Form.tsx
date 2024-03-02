import { FormOptions } from "./FormOptionContext"
import { FormStore } from "./FormStore"
import FormStoreContext from "./FormStoreContext"

export interface Props extends FormOptions {
  store: FormStore
  className?: string
  children?: React.ReactNode
  onSubmit?: (e: React.FormEvent) => void
}
export default function Form(props: Props) {
  const { store, children, onSubmit } = props
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit && onSubmit(e)
  }
  return (
    <FormStoreContext.Provider value={store}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormStoreContext.Provider>
  )
}
