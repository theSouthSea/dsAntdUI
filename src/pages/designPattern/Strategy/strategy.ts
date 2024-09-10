// 维护一个规则的map
const ruleMap = {
  isRequired: (name, v) => {
    if (v === undefined) {
      return `${name}是必需的`
    }
  },
  isNonEmpty: (name, v) => {
    if (v === "") {
      return `${name}不能为空`
    }
  },
  minLength: (name, v, len) => {
    if (v.length < len) {
      return `${name}不能少于${len}位`
    }
  },
  maxLength: (name, v, len) => {
    if (v.length < len) {
      return `${name}不能多于${len}位`
    }
  },
  phone: (name, v) => {
    if (!/(^1[3|5|8|7|9][0-9]{9}$)/.test(v)) {
      return `${name}不是一个手机号`
    }
  },
}

class Validator {
  // 记录校验结果
  result = []

  constructor(formData) {
    this.formData = formData
  }

  add({ name, field, validator }) {
    const formItem = this.formData[field]
    console.log("name-field-value=", name, field, formItem)
    console.log("name-validator=", name, validator)
    // 区分length与其他规则
    if (validator.includes("Length")) {
      const va = validator.split(":")
      this.result.push(ruleMap[va[0]](name, formItem, va[1]))
    } else {
      this.result.push(ruleMap[validator](name, formItem))
    }
  }

  start() {
    return new Promise((resolve, reject) => {
      const fails = this.result.filter((v) => v)
      if (fails.length) {
        // 失败走catch
        reject(fails)
      } else {
        // 成功走then
        resolve(true)
      }
    })
  }
}
export { Validator }
