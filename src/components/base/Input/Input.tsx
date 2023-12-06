import { Input } from 'antd'
const createNoEmptyInput = (WrapComp) => {
  return function NoEmptyInput({ onBlur, onChange, ...rest }) {
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const value = event.target.value.trim()
      onBlur && onBlur(value)
      onChange && onChange(value)
    }
    return <WrapComp onBlur={handleBlur} {...rest}></WrapComp>
  }
}
const NoEmptyInput = createNoEmptyInput(Input)
export default NoEmptyInput
