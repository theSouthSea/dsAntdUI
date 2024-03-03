interface HeaderProps {
  header: {
    list: Array<string>
    placeholder: string
  }
}
const Header = (props: HeaderProps) => {
  const {
    header: { list },
  } = props
  console.log("Header-props", props)
  return (
    <div>
      <div>
        {list.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </div>
    </div>
  )
}
export default Header
