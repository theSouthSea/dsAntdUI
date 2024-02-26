import { SelectCountry, Country } from "@/libs/best/select-country-library"
// import { SelectCountry, Country } from "@libs/best/select-country-library"

export type { Country }

export const SelectCountryFormComponent = ({
  onChange,
}: {
  onChange: (country: Country) => void
}) => {
  console.info("SelectCountryFormComponent render")

  return <SelectCountry onChange={onChange} />
}
