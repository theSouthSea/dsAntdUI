import { cloneElement, Children, ReactElement, useState } from "react"
import styled from "@emotion/styled"
interface TabsProps {
  children: ReactElement<any>[]
}
const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const TabsFn = (props: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const newChildren = Children.map(props.children, (child: ReactElement<any>, index) => {
    if (child.type) {
      return cloneElement(child, {
        active: activeIndex === index,
        onClick: () => setActiveIndex(index),
      })
    } else {
      return child
    }
  })

  return <TabsContainer>{newChildren}</TabsContainer>
}
export default TabsFn
