type ButtonProps = {
  onClick: () => void
  children: ReactNode
}

const Button = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}
const SomePage = () => {
  const log = useLoggingSystem()

  const onClick = () => {
    log("Button was clicked")
  }

  return <Button onClick={onClick}>Click here</Button>
}

// const Button = ({ onClick }: ButtonProps) => {
//   const log = useLoggingSystem()

//   const onButtonClick = () => {
//     log("Button was clicked")
//     onClick()
//   }

//   return <button onClick={onButtonClick}>{children}</button>
// }

// const Button = ({ onClick, loggingData }: ButtonProps) => {
//   const onButtonClick = () => {
//     log("Button was clicked", loggingData)
//     onClick()
//   }
//   return <button onClick={onButtonClick}>{children}</button>
// }
const ListItem = ({ onClick, loggingData }: ListItemProps) => {
  const onListItemClick = () => {
    log("List item was clicked", loggingData)
    onClick()
  }
  return <Item onClick={onListItemClick}>{children}</Item>
}
