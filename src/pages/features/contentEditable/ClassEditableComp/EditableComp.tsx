import React, { RefObject } from "react"

import styles from "./index.module.less"

interface TextEditorProps {
  enabled: boolean
  onChange: (data: { value: string }) => void
  value: string
  style?: React.CSSProperties
  className?: string
}
export class TextEditor extends React.Component<TextEditorProps> {
  ref: RefObject<HTMLDivElement> = React.createRef()
  lastHtml: string = ""
  constructor(props) {
    super(props)
    // this.ref = React.createRef()
    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    const html = this.ref.current?.innerHTML || ""
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({ value: html })
    }
    this.lastHtml = html
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.ref.current?.innerHTML
  }

  componentDidUpdate() {
    if (this.ref.current && this.props.value !== this.ref.current?.innerHTML) {
      this.ref.current.innerHTML = this.props.value
    }
  }

  render() {
    const { enabled, style, className, value } = this.props
    console.log("classComp-render-value=", value)
    return (
      <div>
        <div
          contentEditable={enabled}
          dangerouslySetInnerHTML={{ __html: value }}
          ref={this.ref}
          onInput={this.onChange}
          onBlur={this.onChange}
          className={styles.editable}
          placeholder="Optional Notes..."
        />
      </div>
    )
  }
}
