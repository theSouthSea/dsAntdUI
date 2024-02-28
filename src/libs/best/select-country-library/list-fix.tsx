import { useTheme } from "./theme"
import { Country } from "./types"

type CountriesListProps = {
  countries: Country[]
  onCountryChanged: (country: Country) => void
  savedCountry: Country
}
type ItemProps = {
  country: Country
  savedCountry: Country
  onItemClick: () => void
}

// turned out savedCountry and onItemClick were also used
// but it was not obvious at all in the previous implementation
const Item = ({ country, savedCountry, onItemClick }: ItemProps) => {
  const { mode } = useTheme()
  const className = `country-item ${savedCountry.id === country.id ? "saved" : ""} ${
    mode === "dark" ? "dark" : ""
  }`

  return (
    <button className={className} onClick={() => onItemClick()}>
      <img src={country.flagUrl} width={50} style={{ marginRight: "8px" }} alt={country.name} />
      <div>{country.name}</div>
    </button>
  )
}

export const CountriesList = ({
  countries,
  onCountryChanged,
  savedCountry,
}: CountriesListProps) => {
  return (
    <div>
      {countries.map((country) => (
        <Item
          country={country}
          key={country.id}
          savedCountry={savedCountry}
          onItemClick={() => onCountryChanged(country)}
        />
      ))}
    </div>
  )
}
