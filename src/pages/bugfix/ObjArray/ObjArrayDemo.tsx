import { useState } from "react"

interface Product {
  id: number
  name: string
  count: number
}
const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          }
        }
        return product
      }),
    )
  }
  const handleDelete = (productId: number) => {
    setProducts(products.filter((product) => product.id !== productId))
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id)
            }}
          >
            +
          </button>
          <button onClick={() => handleDelete(product.id)}>-</button>
        </li>
      ))}
    </ul>
  )
}
