import { useEffect, useState } from 'react'
import ProductCard from './ProductCard/ProductCard'

const Products = (props) => {
  const [displayProducts, setDisplayProducts] = useState([])
  const { products, categoryId } = props

  useEffect(() => {
    const filterProducts = products.filter(product => product.category_id === Number(categoryId));
    setDisplayProducts(filterProducts);
  }, [])

  return (
    <>
      {displayProducts.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  )
}

export default Products
