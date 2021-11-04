import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { verifyUser } from '../../services/auth'
import './ProductDetails.css'

const ProductDetails = (props) => {
  const [product, setProduct] = useState([])
  // const [rating, setRating] = useState([])
  // const [currentUser, setCurrentUser] = useState(null);
  const { products, ratings } = props
  const { id } = useParams()

  // useEffect(() => {
  //   const handleVerify = async () => {
  //     const userData = await verifyUser();
  //     setCurrentUser(userData);
  //   };
  //   handleVerify();
  // }, []);

  useEffect(() => {
    const fetchProduct = products.find(product => product.id === Number(id));
    setProduct(fetchProduct);
  }, [id, products])

  // fetch rating conditional on user logged in
  // useEffect(() => {
  //   const fetchRating = 
  // })

  return (
    <div className="details-container">
      <div className="details-left">
        <img src={require(`../../assets/images/products/${product?.image}`).default} className="details-img" alt={product?.name} />
      </div>
      <div className="details-right">
        {/* rating conditional if logged in */}
        <h3 className="details-name">{product?.name}</h3>
        <div className="rating">
          {/* {currentUser ? "Your Rating" : "no current user"} */}
        </div>
        <div className="brand">{product?.brand}</div>
        <div className="size">{product?.size} {product?.uom}</div>
        <div className="price">{product?.price}</div>
        {/* if no rating, add to cart and "add rating" */}
        {/* if rating, add to cart and "edit rating" */}
        {/* if in edit rating mode, "delete rating" appears */}

      </div>
    </div>
  )
}

export default ProductDetails
