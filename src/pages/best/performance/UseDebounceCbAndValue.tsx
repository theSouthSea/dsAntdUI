import InputWithCache from "./components/InputWithCache"
import InputWithCallback from "./components/InputWithCallback"

const UseDebounceCbAndValue = () => {
  return (
    <div>
      <InputWithCallback defaultValue="useDebouncedCallback" />
      <InputWithCache defaultValue="useDebounce" />
    </div>
  )
}
export default UseDebounceCbAndValue
