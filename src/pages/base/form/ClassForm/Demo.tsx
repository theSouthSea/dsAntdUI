import { Component, FormEvent } from "react"

import Field from "./Field"
import Form from "./Form"
import { FormStore } from "./FormStore"

export default class App extends Component {
  store: FormStore
  constructor(props: any) {
    super(props)

    // this.store = new FormStore();
    this.store = new FormStore(
      {
        username: "123",
        password: "admin",
        passwordAgain: "",
      },
      {
        username: (val: string) => !!val.trim() || "用户名不能为空",
        password: (val: string) =>
          !!(val.length > 6 && val.length < 18) || "密码长度必须大于6个字符，小于18个字符",
        passwordAgain: (val: string, vals: any) => val === vals.password || "两次输入密码不一致",
      }
    )
  }

  onSubmit = (e: FormEvent<Element>) => {
    // 阻止默认行为
    e.preventDefault()
    const [error, data] = this.store.validate()
    console.log("error", error)
    console.log("form-data", data)
    if (!error) {
      console.log("提交成功")
    }
    // ...
  }

  render() {
    return (
      <Form store={this.store} onSubmit={this.onSubmit}>
        <Field name="username">
          <input />
        </Field>
        <Field name="password">
          <input type="password" />
        </Field>
        <Field name="passwordAgain">
          <input type="password" />
        </Field>
        <button>Submit</button>
      </Form>
    )
  }
}
