const ConsumerComponent = () => {
  const { Dialog, open } = useModal()

  return (
    <>
      <button onClick={open}>Click me</button>
      <Dialog />
    </>
  )
}
