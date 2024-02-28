import { useState } from "react"

import { useModal } from "@/pages/best/hooks/useModal"

import { CountriesList } from "./list"
import { SelectedCountry } from "./selected-country"
import { Mode, ThemeProvider } from "./theme"
import { Country } from "./types"

export const Page = ({ countries }: { countries: Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0])
  const [mode, setMode] = useState<Mode>("light")
  const { Dialog, open } = useModal()

  return (
    <ThemeProvider value={{ mode }}>
      <Dialog></Dialog>
      <h1>Country settings</h1>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>Toggle theme</button>
      <button onClick={open}>Open setting</button>
      <div className="content">
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
    </ThemeProvider>
  )
}
