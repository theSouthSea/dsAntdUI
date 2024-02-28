import { useMemo, useState } from "react"

import { CountriesList } from "./list"
import { rawCountries } from "./raw-data"
import { Mode, ThemeProvider } from "./theme"
import { Country } from "./types"

const getCountriesFromRawData = (raw: any[]): Country[] => {
  return raw.map((value: any) => ({
    __typename: "country",
    name: String(value.name.common),
    id: String(value.cca2).toLowerCase(),
    independent: Boolean(value.independent),
    unMember: Boolean(value.unMember),
    flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
    region: String(value.region),
    capital: value.capital.length ? String(value.capital[0]) : "",
    subregion: String(value.subregion),
  }))
}

type SelectCountryProps = {
  activeCountry?: Country
  onChange: (country: Country) => void
}

export type { Country }

export const SelectCountry = ({ activeCountry, onChange }: SelectCountryProps) => {
  const countries = getCountriesFromRawData(rawCountries)
  const [mode, setMode] = useState<Mode>("light")
  // memoising the object!
  const theme = useMemo(() => ({ mode }), [mode])

  return (
    // <ThemeProvider value={{mode}}>
    <ThemeProvider value={theme}>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>Toggle theme</button>
      <div className="content">
        <CountriesList
          countries={countries}
          onCountryChanged={(c) => onChange(c)}
          savedCountry={activeCountry || countries[0]}
        />
      </div>
    </ThemeProvider>
  )
}
