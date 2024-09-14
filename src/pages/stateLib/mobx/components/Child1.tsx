import { inject, MobXProviderContext, observer } from "mobx-react"
import React from "react"

// @inject("store")
// @observer
class Child1 extends React.Component {
  constructor(props) {
    super(props)
    console.log("this.props=", props)
  }
  render() {
    console.log("this.props-render=", this.props)
    // const { store } = this.props
    return (
      <MobXProviderContext.Consumer>
        {({ store }) => (
          <>
            count:{store?.count}|double:{store?.double}
            <button onClick={() => store.increase()}>increase</button>
            <button onClick={() => store.decrease()}>decrease</button>
          </>
        )}
      </MobXProviderContext.Consumer>
    )
  }
}
export default observer(Child1)
