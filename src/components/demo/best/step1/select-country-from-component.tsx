import { Country, SelectCountry } from "@/libs/best/select-country-library"
import { useFormAPI } from "@/pages/best/FormDataProvider"
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
  console.info("SelectCountryFormComponent render")

  return <SelectCountry onChange={onCountryChange} />
}
