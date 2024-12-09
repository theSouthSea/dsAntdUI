import SearchInputResult, { IResult } from "@business/SearchInputResult"
import { useState } from "react"

import { getSearchResults } from "@/services/searchResults"

const SearchInputResultDemo = () => {
  const [result, setResult] = useState<IResult[]>([])
  const handleSearch = async (val) => {
    console.log("onSearch", val)
    // catchAsyncError(handleSearchAsync, val)
    try {
      const res = await getSearchResults({
        keyword: val,
      })
      console.log("res=", res)
      setResult(res.data)
    } catch (err) {
      console.log("err=", err)
    }
  }
  const handleSelect = (val) => {
    console.log("onSelect", val)
  }

  return (
    <>
      <SearchInputResult
        onSearch={handleSearch}
        onSelect={handleSelect}
        result={result}
      ></SearchInputResult>
    </>
  )
}
export default SearchInputResultDemo
