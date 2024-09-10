class Adapter {
  dataSouce = []

  constructor(dataSouce) {
    this.dataSouce = dataSouce
  }

  transformToList(columns) {
    // 转换成列表数据格式
    return this.dataSouce.map((item) => {
      const obj = {}
      for (const c of columns) {
        const field = c.field
        obj[field] = item[field]
      }
      return obj
    })
  }

  transformToSelectOptions(options) {
    // 转换成下拉框数据格式
    const { labelField, valueField } = options
    return this.dataSouce.map((item) => ({
      label: item[labelField],
      value: item[valueField],
    }))
  }

  transformToCheckedOptions(options) {
    // 转换成多选框数据格式
    const { valueField } = options
    return this.dataSouce.map((item) => ({
      label: item[valueField],
      value: item[valueField],
    }))
  }
}
export default Adapter
