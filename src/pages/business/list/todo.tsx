/* 特殊的过滤器 */
const config1: Config = {
  filters: [
    {
      type: FilterFieldTypeEnum.Slot,
      label: "年龄",
      field: "age",
      children: (
        <Input.Group compact>
          <Form.Item name={["age", "value"]} noStyle>
            <InputNumber style={{ width: "calc(100% - 64px)" }} />
          </Form.Item>
          <Form.Item name={["age", "unit"]} noStyle>
            <Select style={{ width: 64 }} options={ageUnitOptionList} />
          </Form.Item>
        </Input.Group>
      ),
    },
  ],
  // 此处是为了添加过滤器的默认值
  params: {
    age: {
      unit: 0,
    },
  },
}
/* 操作表格中的数据 */
async function handleBatchDelete({
  selectedRowKeys,
  setSelectedRowKeys,
  searchPage,
}: ListTableOperateParam) {
  if (selectedRowKeys.length === 0) {
    return
  }
  await userApi.batchDelete(selectedRowKeys)
  setSelectedRowKeys([])
  await searchPage()
}

const config2 = useMemo<Config>(
  () => ({
    tableOperate: (params) => <Button onClick={() => handleBatchDelete(params)}>删除选中</Button>,
  }),
  []
)
/* 下拉框异步请求数据 */
const testOptionList = useAsyncMemo([], dictApi.list)
const config = useMemo<Config>(
  () => ({
    filters: [
      {
        type: FilterFieldTypeEnum.Select,
        label: "测试字段",
        field: "test",
        options: testOptionList,
      },
    ],
  }),
  [testOptionList]
)
