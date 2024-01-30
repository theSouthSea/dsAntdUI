import { Component, cloneElement, Children, Fragment, ReactElement } from "react"
interface TabsProps {
  children: ReactElement<any>[]
}
interface TabsState {
  activeIndex: number
}
class Tabs extends Component<TabsProps, TabsState> {
  state = {
    activeIndex: 0,
  }

  render() {
    const newChildren = Children.map(this.props.children, (child: ReactElement<any>, index) => {
      if (child.type) {
        return cloneElement(child, {
          active: this.state.activeIndex === index,
          onClick: () => this.setState({ activeIndex: index }),
        })
      } else {
        return child
      }
    })

    return <Fragment>{newChildren}</Fragment>
  }
}
export default Tabs
