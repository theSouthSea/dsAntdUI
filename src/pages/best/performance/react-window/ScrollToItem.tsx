import { Button } from "antd"
import { useRef } from "react"
import { FixedSizeList as List } from "react-window"

const Row = ({ index, isScrolling, style }) => (
  <div style={style}>{isScrolling ? "Scrolling" : `Row ${index}`}</div>
)

// If your component's items are expensive to render,
// You can boost performance by rendering a placeholder while the user is scrolling.
// To do this, add the `useIsScrolling` property to your List or Grid.
// Now an additional parameter, `isScrolling`, will be passed to your render method:
const Example = (props) => {
  const listRef = useRef<{ scrollToItem: (index: number, position?: string) => void }>()
  const handleScroll200 = () => {
    // Then call the scrollToItem() API method with an item index:
    listRef.current?.scrollToItem(200)
  }

  const handleScroll300 = () => {
    // The List will scroll as little as possible to ensure the item is visible.
    // You can also specify a custom alignment: center, start, or end.
    // For example:
    listRef.current?.scrollToItem(300, "center")
  }

  return (
    <>
      <Button type="primary" onClick={handleScroll200}>
        滚动到索引为200的项目:scrollToItem(200)
      </Button>
      <Button type="primary" onClick={handleScroll300}>
        滚动到索引为300的项目:scrollToItem(300, "center")
      </Button>
      <List
        ref={listRef}
        useIsScrolling
        {...props}
        height={600}
        itemCount={1000}
        itemSize={35} // 每项的高度为 35
      >
        {Row}
      </List>
    </>
  )
}
export default Example
