import { useState } from "react"

import { CountriesList } from "./list"
import { SelectedCountry } from "./selected-country"
import SettingsButton from "./SettingButton"
import { Mode, ThemeProvider } from "./theme"
import { Country } from "./types"

export const Page = ({ countries }: { countries: Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0])
  const [mode, setMode] = useState<Mode>("light")
  // 引入了Page组件无关的state,在打开modal弹窗时,也会导致此组件更新
  // 解决办法: 抽离成一个小组件SettingsButton,在小组件中管理状态更新
  // const { Dialog, open } = useModal()

  return (
    <ThemeProvider value={{ mode }}>
      {/* <Dialog></Dialog>
      <button onClick={open}>Open setting</button> */}
      <h1>Country settings</h1>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>Toggle theme</button>
      <SettingsButton></SettingsButton>
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
