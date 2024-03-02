import * as React from "react"

import { FormStore } from "./FormStore"
// import { createContext } from "react"
// export const FormStoreContext = createContext(undefined)
const FormStoreContext = React.createContext<FormStore | undefined>(undefined)

export default FormStoreContext
