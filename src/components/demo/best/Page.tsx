import { useState } from "react"

import { CountriesList } from "@/libs/best/select-country-library/list"
import { SelectedCountry } from "@/libs/best/select-country-library/selected-country"

import { Country } from "./step1/select-country-from-component"

export const Page = ({ countries }: { countries: Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0])

  return (
    <>
      <h1>Country settings</h1>
      <div>
        <CountriesList
          countries={countries}
          onCountryChanged={(c) => setSelectedCountry(c)}
          savedCountry={savedCountry}
        />
        <SelectedCountry
          country={selectedCountry}
          onCountrySaved={() => setSavedCountry(selectedCountry)}
        />
      </div>
    </>
  )
}
