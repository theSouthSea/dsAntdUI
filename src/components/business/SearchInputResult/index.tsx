import { debounce } from "lodash-es"
import { ComponentType, useCallback, useRef, useState } from "react"

import { StyledResults, StyledSearchContainer, StyledSearchInput } from "./styled"

export interface IResult {
  id: number
  name: string
}
interface SearchInputResultProps {
  onSearch: (text: string) => void
  onSelect?: (item: IResult) => void
  result?: IResult[]
  // ResultComp?: ComponentType
  resultJsx?: React.ReactElement
}
const SearchInputResult = (props: SearchInputResultProps) => {
  const { onSearch, onSelect, result, resultJsx } = props
  const [searchText, setSearchText] = useState("")
  const valueRef = useRef(searchText)
  // const [result, setResult] = useState<IResult[]>([])
  const handleSearch = useCallback(
    debounce(() => {
      onSearch(valueRef.current)
    }, 500),
    [],
  )
  const handleChange = useCallback((e) => {
    const value = e.target.value
    setSearchText(value)
    valueRef.current = value
    // handleSearch(e)
    if (!isComposingRef.current) {
      handleSearch()
    }
  }, [])
  const isComposingRef = useRef(false)
  const handleCompositionStart = useCallback(() => {
    isComposingRef.current = true
  }, [])
  const handleCompositionEnd = useCallback(() => {
    isComposingRef.current = false
    handleSearch()
  }, [])
  return (
    <StyledSearchContainer>
      <StyledSearchInput
        onChange={handleChange}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        value={searchText}
      ></StyledSearchInput>
      {result && !resultJsx ? (
        <StyledResults>
          {result.length > 0 ? (
            result.map((item) => {
              return (
                <div key={item.id} onClick={() => onSelect?.(item)}>
                  {item.name}
                </div>
              )
            })
          ) : (
            <div>暂无数据</div>
          )}
        </StyledResults>
      ) : (
        resultJsx
      )}
    </StyledSearchContainer>
  )
}
export default SearchInputResult
