## OSearchForm

### 功能

- 封装的列表页搜索表单

### Props

| 参数                     | 说明                 | 类型                                                       | 默认值       |
|------------------------|--------------------|----------------------------------------------------------|-----------|
| initialValues                  | 表单字段初始值               | `{[field]: value}` &#124; `string`                              | `{}` |
| formOptions             | 表单字段选项            | `{label,name,fieldType:'input' \| 'select' \| 'rangePicker' \| 'treeSelect',placeholder}[]`  | - |
| onSearch             |  查询回调函数                | `(values) => void`                               | -         |

### 示例

```tsx
import { OSearchForm } from '@ocloud/antd'
import { useCallback } from 'react'

const OSearchFormDemo = () => {
  const handleSearch = useCallback((values) => {
    console.log('values', values)
  }, [])
  const formOptions = [
    {
      name: 'name',
      label: '姓名',
      fieldType: 'input',
    },
    {
      name: 'age',
      fieldType: 'select',
      label: '年龄',
      options: [
        {
          label: '少年',
          value: '1',
        },
        {
          label: '青年',
          value: '2',
        },
        {
          label: '中年',
          value: '3',
        },
        {
          label: '老年',
          value: '4',
        },
      ],
    },
  ]
  const initialValues = {
    name: 'xx',
    age: '1',
  }
  return (
    <>
      <div>OSearchForm</div>
      <OSearchForm initialValues={initialValues} formOptions={formOptions} onSearch={handleSearch} />
    </>
  )
}
export default OSearchFormDemo
```
