import { useEffect, useRef, useState } from "react"

import { StyledSearchContainer, StyledSearchInput } from "./styled"

const SearchInputResult = () => {
  // const { onSearch, onSelect } = props;
  const [searchText, setSearchText] = useState("")
  // const [isComposing, setIsComposing] = useState(false)
  const isComposingRef = useRef(false)

  const handleChange = (e) => {
    console.log("handleChange-val=", e.data, e.target.value, isComposingRef.current)
    setSearchText(e.target.value)
    // if (!isComposingRef.current) {
    //   setSearchText(e.target.value)
    // }

    // onSelect(e.target.value);
  }

  useEffect(() => {
    const handleCompositionStart = () => {
      console.log("handleCompositionStart-val")
      isComposingRef.current = true
      // setIsComposing(true)
    }
    const handleCompositionUpdate = (e) => {
      console.log("handleCompositionUpdate-val", e.data, e.target.value, isComposingRef.current)
      isComposingRef.current = true
      // setIsComposing(true)
    }

    // 最后执行的
    const handleCompositionEnd = (e) => {
      console.log("handleCompositionEnd-val=", e.data, e.target.value, isComposingRef.current)
      // setIsComposing(false)
      isComposingRef.current = false
      setSearchText(e.target.value)
      // onSearch(e.target.value);
      // if (!isComposing) {
      //   setSearchText(e.target.value);
      //   onSearch(e.target.value);
      // }
    }

    const handleInput = (e) => {
      console.log("handleInput-val=", e.data, e.target.value, isComposingRef.current)
      // if (!isComposingRef.current) {
      //   setSearchText(e.target.value)
      //   // onSearch(e.target.value);
      // }
    }
    const inputElement = document.getElementById("search-input")
    if (inputElement) {
      inputElement.addEventListener("compositionstart", handleCompositionStart)
      inputElement.addEventListener("compositionupdate", handleCompositionUpdate)
      inputElement.addEventListener("compositionend", handleCompositionEnd)
      inputElement.addEventListener("input", handleInput)
      return () => {
        inputElement.removeEventListener("compositionstart", handleCompositionStart)
        inputElement.removeEventListener("compositionupdate", handleCompositionUpdate)
        inputElement.removeEventListener("compositionend", handleCompositionEnd)
        inputElement.removeEventListener("input", handleInput)
      }
    }
  }, [])

  return (
    <StyledSearchContainer>
      <h2>监听汉字输入</h2>
      <StyledSearchInput
        id="search-input"
        onChange={handleChange}
        value={searchText}
      ></StyledSearchInput>
      <h3>事件执行顺序</h3>
      <p>handleCompositionStart-val</p>
      <p>index.tsx:28 handleCompositionUpdate-val n true</p>
      <p>index.tsx:46 handleInput-val= n n true</p>
      <p>index.tsx:12 handleChange-val= undefined n true</p>
      <p>index.tsx:28 handleCompositionUpdate-val ni n true</p>
      <p>index.tsx:46 handleInput-val= ni ni true</p>
      <p>index.tsx:12 handleChange-val= undefined ni true</p>
      <p>index.tsx:28 handleCompositionUpdate-val nih ni true</p>
      <p>index.tsx:46 handleInput-val= nih nih true</p>
      <p>index.tsx:12 handleChange-val= undefined nih true</p>
      <p>index.tsx:28 handleCompositionUpdate-val niha nih true</p>
      <p>index.tsx:46 handleInput-val= niha niha true</p>
      <p>index.tsx:12 handleChange-val= undefined niha true</p>
      <p>index.tsx:28 handleCompositionUpdate-val nihao niha true</p>
      <p>index.tsx:46 handleInput-val= nihao nihao true</p>
      <p>index.tsx:12 handleChange-val= undefined nihao true</p>
      <p>index.tsx:28 handleCompositionUpdate-val 你好 nihao true</p>
      <p>index.tsx:46 handleInput-val= 你好 你好 true</p>
      <p>index.tsx:12 handleChange-val= undefined 你好 true</p>
      <p>index.tsx:34 handleCompositionEnd-val= 你好 你好 true</p>
    </StyledSearchContainer>
  )
}

export default SearchInputResult
