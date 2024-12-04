import { TreeSelect } from "antd"
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react"

interface PersonalScopeProps {
  value?: string[]
  onChange?: (value: string[]) => void
  treeData: any[]
}
interface PersonalScopeRef {
  getValue: () => string[]
}
const PersonalScope = forwardRef<PersonalScopeRef, PersonalScopeProps>((props, ref) => {
  const { value, onChange, treeData } = props
  const checkedValuesRef = useRef<string[]>([])

  const handleChange = useCallback((value: string[]) => {
    checkedValuesRef.current = value
    onChange && onChange(value)
  }, [])
  // 非受控组件,获取选中的值
  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return checkedValuesRef.current
      },
    }),
    [],
  )
  return value ? (
    <TreeSelect
      value={value}
      onChange={handleChange}
      treeData={treeData}
      showCheckedStrategy={TreeSelect.SHOW_CHILD}
      treeCheckable
      showSearch
      treeNodeFilterProp="title"
    ></TreeSelect>
  ) : (
    <TreeSelect
      onChange={handleChange}
      treeData={treeData}
      showCheckedStrategy={TreeSelect.SHOW_CHILD}
      treeCheckable
      showSearch
      treeNodeFilterProp="title"
    ></TreeSelect>
  )
})
export default PersonalScope
