import { Button, DatePicker, Form, Select, Space, TreeSelect } from '@base'
import { FC } from 'react'

import { FieldGap } from './constants'
import { ONoSpaceInput } from './noSpaceInput'

const { RangePicker } = DatePicker

interface Props {
  initialValues?: any
  formOptions: any[]
  onSearch: (values: any) => void
}

interface FormItem {
  options?: any[]
  fieldNames?: any
  placeholder?: string
}

// Input
const formInput = ({ placeholder = '' }: FormItem) => {
  return <ONoSpaceInput placeholder={placeholder} allowClear />
}

// Select
const formSelect = ({ placeholder = '', options = [], fieldNames = {} }: FormItem) => {
  return (
    <Select
      showSearch
      style={{ width: 240 }}
      optionFilterProp={fieldNames.label || 'label'}
      fieldNames={fieldNames}
      placeholder={placeholder}
      options={options}
    />
  )
}

// TreeSelect
const formTreeSelect = ({ placeholder = '', options = [], fieldNames = {} }: FormItem) => {
  return (
    <TreeSelect
      showSearch
      allowClear
      treeData={options}
      style={{ width: 240 }}
      treeNodeFilterProp={fieldNames.label || 'label'}
      fieldNames={fieldNames}
      placeholder={placeholder}
    />
  )
}

// DatePicker-RangePicker
const formDatePicker = () => {
  return <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
}

/**
 * 所有的表单项
 * input => <Input />
 * select => <Select />
 * rangePicker => <RangePicker />
 * TreeSelect => <TreeSelect />
 */
const allFormItem: any = {
  input: (item: FormItem) => formInput(item),
  select: (item: FormItem) => formSelect(item),
  rangePicker: () => formDatePicker(),
  treeSelect: (item: FormItem) => formTreeSelect(item),
}

const formItemList = (formOptions: any[]) => {
  return formOptions.map((item: any) => {
    return (
      <Form.Item label={item.label} name={item.name} key={item.name}>
        {allFormItem[item.fieldType](item)}
      </Form.Item>
    )
  })
}

const SearchForm: FC<Props> = ({ initialValues = {}, formOptions, onSearch }) => {
  const [queryForm] = Form.useForm()
  // 查询
  const onFinish = (values: any) => {
    onSearch(values)
  }
  // 重置
  const onReset = () => {
    queryForm.resetFields()
    const values = queryForm.getFieldsValue(true)
    onSearch(values)
  }

  return (
    <Form layout="inline" form={queryForm} onFinish={onFinish} initialValues={initialValues}>
      <Space size={FieldGap} wrap>
        {formItemList(formOptions)}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
        <Form.Item>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Space>
    </Form>
  )
}

export default SearchForm
