import "./styles.css"

import { Component } from "react"
import ContentEditable from "react-contenteditable"

class MyComponent extends Component {
  constructor() {
    super()
    this.state = { html: "Edit <b>me</b> !" }
  }

  handleChange = (evt) => {
    this.setState({ html: evt.target.value })
  }

  render = () => {
    return (
      <ContentEditable
        className="baseContentEditable"
        html={this.state.html} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
      />
    )
  }
}

export default MyComponent
