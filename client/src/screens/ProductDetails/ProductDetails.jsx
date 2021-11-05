import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { verifyUser } from "../../services/auth";
import ProductDetailCard from "./ProductDetailCard";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { products, ratings, setProduct, product } = props;
  const { id } = useParams();

  // verifies use to conditionally render the star ratings within the product detail card
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  // fetch one product to render from the params id
  useEffect(() => {
    const fetchProduct = products.find((product) => product.id === Number(id));
    setProduct(fetchProduct);
  }, [setProduct, products, id]);

  return (
    <div className="details-container">
      {product && (
        <ProductDetailCard
          product={product}
          ratings={ratings}
          currentUser={currentUser}
          id={id}
        />
      )}
    </div>
  );
};

export default ProductDetails;
