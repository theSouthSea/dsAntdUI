import { Country } from "./step1/select-country-from-component"

export const SelectCountryFormComponent = ({
  onChange,
}: {
  onChange: (country: Country) => void
}) => {
  return <SelectCountry onChange={onChange} />
}
