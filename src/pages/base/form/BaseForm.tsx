import { Component } from "react"

interface State {
  username: string
  password: string
}
type Props = any
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      username: "",
      password: "",
    }
  }

  onUsernameChange = (e: any) => {
    this.setState({ username: e.target.value })
  }

  onPasswordChange = (e: any) => {
    this.setState({ password: e.target.value })
  }

  onSubmit = () => {
    const data = this.state
    console.log("form-data", data)
    // ...
  }

  render() {
    const { username, password } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <input value={username} onChange={this.onUsernameChange} />
        <input type="password" value={password} onChange={this.onPasswordChange} />
        <button>Submit</button>
      </form>
    )
  }
}
