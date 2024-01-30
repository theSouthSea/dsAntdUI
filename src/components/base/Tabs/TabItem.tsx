import styled from "@emotion/styled"

export interface TabItemProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}
const TabItemStyled = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    background-color: #eee;
  }
`
export default function TabItem(props: TabItemProps) {
  const { active, onClick } = props
  const tabStyle = {
    "max-width": "150px",
    color: active ? "red" : "green",
    border: active ? "1px red solid" : "0px",
  }
  return (
    <TabItemStyled style={tabStyle} onClick={onClick}>
      {props.children}
    </TabItemStyled>
  )
}
