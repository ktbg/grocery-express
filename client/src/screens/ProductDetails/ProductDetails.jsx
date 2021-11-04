import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = (props) => {
  const [product, setProduct] = useState([])
  const [rating, setRating] = useState([])
  const { products, ratings } = props
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = products.find(product => product.id === Number(id));
    setProduct(fetchProduct);
  }, [])

  // fetch rating conditional on user logged in
  // useEffect(() => {
  //   const fetchRating = 
  // })

  return (
    <div className="details-container">
      <div className="details-left">

      </div>
      <div className="details-right">
        {/* rating conditional if logged in */}
        <div className="rating">Your Rating</div>
        <div className="brand"></div>
        <div className="size"></div>
        <div className="price"></div>
        {/* if no rating, add to cart and "add rating" */}
        {/* if rating, add to cart and "edit rating" */}
        {/* if in edit rating mode, "delete rating" appears */}
      </div>
    </div>
  )
}

export default ProductDetails
