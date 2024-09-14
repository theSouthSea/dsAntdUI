import { inject, observer, Provider } from "mobx-react"
import React from "react"

@inject("color")
@observer
class Button extends React.Component {
  render() {
    console.log("this.props=", this.props)
    return <button style={{ background: this.props.color }}>{this.props.children}</button>
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    )
  }
}

class MessageList extends React.Component {
  render() {
    const children = this.props.messages.map((message) => (
      <Message key={message.text} text={message.text} />
    ))
    return (
      <Provider color="red">
        <div>{children}</div>
      </Provider>
    )
  }
}
export default function SimpleDemo() {
  return <MessageList messages={[{ text: "Hello" }, { text: "World" }]} />
}
