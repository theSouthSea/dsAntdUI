import { Component, ReactElement } from "react"

interface Props {
  children: ReactElement | ReactElement[]
  fallback?: ReactElement
}
interface State {
  hasError: boolean
}
export default class ErrorComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }
  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log("error", error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ? this.props.fallback : <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}
