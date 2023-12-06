const SlowItem = ({ id }: { id: number }) => {
  const startTime = performance.now()
  while (performance.now() - startTime < 10) {
    // Do nothing for 5 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{id + 1}</li>
}

export const ItemsList = () => {
  const items = [...(Array(100).keys() as any)]

  return (
    <ul className="items">
      {items.map((id) => (
        <SlowItem id={id} />
      ))}
    </ul>
  )
}
