import React from "react"

import { TextEditor } from "./EditableComp"

class App extends React.Component {
  state = { value: "" }
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    // this.state = { value: "" }
  }

  onChange({ value }) {
    this.setState({ value })
  }

  render() {
    return <TextEditor enabled={true} onChange={this.onChange} value={this.state.value} />
  }
}
export default App
