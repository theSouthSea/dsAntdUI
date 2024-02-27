import { Country, SelectCountry } from "@/libs/best/select-country-library"
import { useFormAPI, useFormCountry } from "@/pages/best/FormDataProvider"
// import { SelectCountry, Country } from "@libs/best/select-country-library"

export type { Country }

// export const SelectCountryFormComponent = ({
//   onChange,
// }: {
//   onChange: (country: Country) => void
// }) => {
//   console.info("SelectCountryFormComponent render")

//   return <SelectCountry onChange={onChange} />
// }

export const SelectCountryFormComponent = () => {
  const { onCountryChange } = useFormAPI()
  // const { country } = useFormData()
  const country = useFormCountry()
  console.info("SelectCountryFormComponent render")

  return <SelectCountry onChange={onCountryChange} activeCountry={country} />
}
