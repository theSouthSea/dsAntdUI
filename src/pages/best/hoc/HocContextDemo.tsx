/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import {
  Countries,
  CountriesWithFormIdCommonSelector,
  CountriesWithFormIdSelector,
} from "./Countries"
import { FormProvider } from "./HocContext"
import { Name } from "./Name"

const pageCss = css``
const Form = () => {
  return (
    <form css={pageCss}>
      <Name />
      <Countries />
      <CountriesWithFormIdSelector></CountriesWithFormIdSelector>
      <CountriesWithFormIdCommonSelector></CountriesWithFormIdCommonSelector>
    </form>
  )
}

export const Page = () => {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  )
}
export default function App() {
  return (
    <div className="App">
      <Page />
    </div>
  )
}
