import { useFormContext } from "./HocContext"
import { withContextSelector } from "./withContextSelector"
import { withFormIdSelector } from "./withFormIdSelector"

export const Countries = () => {
  // using only id from context here
  const { id } = useFormContext()

  console.log("Countries re-render")
  return (
    <div>
      <h3>List on countries for form: {id}</h3>
      <ul>
        <li>Australia</li>
        <li>USA</li>
      </ul>
    </div>
  )
}
export const CountriesWithFormId = ({ formId }: { formId: string }) => {
  // using only id from context here
  // const { id } = useFormContext();

  console.log("Countries with selector re-render")
  return (
    <div>
      <h3>List on countries for form: {formId}</h3>
      <ul>
        <li>Australia</li>
        <li>USA</li>
      </ul>
    </div>
  )
}
export const CountriesWithFormIdSelector = withFormIdSelector(CountriesWithFormId)

const CountriesWithFormIdWithSelectorObj = ({
  formId,
  countryName,
}: {
  formId: string
  countryName: string
}) => {
  console.log("Countries with common selector re-render")
  return (
    <div>
      <h3>List of countries for form: {formId}</h3>
      Selected country: {countryName}
      <ul>
        <li>Australia</li>
        <li>USA</li>
      </ul>
    </div>
  )
}
export const CountriesWithFormIdCommonSelector = withContextSelector(
  CountriesWithFormIdWithSelectorObj,
  {
    formId: (data) => data.id,
    countryName: (data) => data.country,
  }
)
