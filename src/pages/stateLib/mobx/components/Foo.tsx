import { IObservableArray } from "mobx"
import { observer, PropTypes as observablePropTypes } from "mobx-react"
import { Component } from "react"

interface BarProps {
  queue: number[]
}
@observer
class Bar extends Component<BarProps> {
  // static propTypes = {
  //   queue: observablePropTypes.observableArray,
  // }
  render() {
    const queue = this.props.queue
    return <span>{queue.length}</span>
  }
}
export interface Cache {
  queue: IObservableArray<number>
}
interface FooProps {
  // cache: ObservableObject<Cache>
  cache: Cache
  refresh: () => void
}
export class Foo extends Component<FooProps> {
  // static propTypes = {
  //   cache: observablePropTypes.observableObject,
  // }
  render() {
    const cache = this.props.cache
    return (
      <div>
        <button onClick={this.props.refresh}>点击 + 1</button>
        当前数值：
        <Bar queue={cache.queue} />
      </div>
    )
  }
}
