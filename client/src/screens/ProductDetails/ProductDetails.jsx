import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
// import { verifyUser } from '../../services/auth'
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const [product, setProduct] = useState({});
  const { products, ratings, setToggle } = props;
  const { id } = useParams();

  // useEffect(() => {
  //   const handleVerify = async () => {
  //     const userData = await verifyUser();
  //     setCurrentUser(userData);
  //   };
  //   handleVerify();
  // }, []);

  useEffect(() => {
    const fetchProduct = products.find((product) => product.id === Number(id));
    setProduct(fetchProduct);
    // setLoading(false);
    setToggle(prevState => !prevState);
  }, []);

  return (
    <div className="details-container">
      <div className="details-left">
        { product.image && <img src={require(`../../assets/images/products/${product.image}`).default} alt={product.name} />}
      </div>
      <div className="details-right">
        {/* rating conditional if logged in */}
        <h3 className="details-name">{product?.name}</h3>
        <div className="rating">
          {/* {currentUser ? "Your Rating" : "no current user"} */}
          <StarRating />
        </div>
        {product.brand ? <div className="brand">{product?.brand}</div> : null}
        {product.size ? (
          <div className="size">
            {product.size} {product?.uom}
          </div>
        ) : null}
        {product.size ? (
          <div className="price">{product?.price}</div>
        ) : (
          <div className="price">
            {product?.price} / {product.uom}
          </div>
        )}
        {/* if no rating, add to cart and "add rating" */}
        {/* if rating, add to cart and "edit rating" */}
        {/* if in edit rating mode, "delete rating" appears */}
      </div>
    </div>
  );
};

export default ProductDetails;
