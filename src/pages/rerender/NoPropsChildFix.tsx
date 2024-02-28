import { useMemo, useState } from "react"

const CountriesList = () => {
  console.log("Re-render!!!!!")
  return <div>countries list, always re-renders</div>
}

export const Page = () => {
  const [counter, setCounter] = useState<number>(1)

  const list = useMemo(() => {
    return <CountriesList />
  }, [])

  return (
    <>
      <h1>Country settings</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Click here to re-render Countries list (open the console) {counter}
      </button>
      {list}
    </>
  )
}
export default Page
