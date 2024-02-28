/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react"

import { Country } from "@/libs/best/select-country-library"

const Item = ({ country }: { country: Country }) => {
  useEffect(() => {
    console.log("mounted!")
  }, [])
  console.log("render")
  return <div>{country.name}</div>
}
const CountriesList = ({ countries }: { countries: Country[] }) => {
  return (
    <>
      {countries.map((country) => (
        <Item country={country} />
      ))}
    </>
  )
}

export const Page = ({ countries }: { countries: Country[] }) => {
  const [counter, setCounter] = useState<number>(1)

  return (
    <>
      <h1>Country settings</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Click here to re-render Countries list (open the console) {counter}
      </button>
      <CountriesList countries={countries} />
    </>
  )
}
