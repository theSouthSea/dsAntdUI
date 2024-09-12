// 维护一个规则的map
// type RuleMap = {
//   [key: string]: (name: string, v: string) => string | undefined
// } & {
//   minLength: (name: string, v: string, len: number) => string | undefined
//   maxLength: (name: string, v: string, len: number) => string | undefined
// }
interface RuleMap {
  minLength: (name: string, v: string, len: number) => string | undefined
  maxLength: (name: string, v: string, len: number) => string | undefined
  [key: string]: (name: string, v: any, len: number) => string | undefined
}
// type ITwoParams = {
//   [key: string]: (name: string, v: any) => string | undefined
// }
// interface RuleMap extends ITwoParams{
//   minLength: (name: string, v: string, len: number) => string | undefined
//   maxLength: (name: string, v: string, len: number) => string | undefined

// }
const ruleMap: RuleMap = {
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
  phone: (name, v) => {
    if (!/(^1[3|5|8|7|9][0-9]{9}$)/.test(v)) {
      return `${name}不是一个手机号`
    }
  },
  minLength: (name, v, len) => {
    if (v.length < len) {
      return `${name}不能少于${len}位`
    }
  },
  maxLength: (name, v, len) => {
    if (v.length > len) {
      return `${name}不能多于${len}位`
    }
  },
}
interface AddPramas {
  name: string
  field: string
  validator: string
}
class Validator {
  // 记录校验结果
  result = [] as (string | undefined)[]
  formData: Record<string, any>
  constructor(formData: Record<string, any>) {
    this.formData = formData
  }

  add({ name, field, validator }: AddPramas) {
    const formItem = this.formData[field]
    console.log("name-field-value=", name, field, formItem)
    console.log("name-validator=", name, validator)
    // 区分length与其他规则
    if (validator.includes("Length")) {
      const va = validator.split(":")
      this.result.push(ruleMap[va[0]](name, formItem, Number(va[1])) as string)
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
