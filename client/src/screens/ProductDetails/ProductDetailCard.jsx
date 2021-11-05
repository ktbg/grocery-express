import React from "react";
import { useState, useEffect } from "react";
import StarRating from "../../components/StarRating/StarRating";
import './ProductDetails.css'

const ProductDetailCard = (props) => {
  const [rating, setRating] = useState(null);
  const { product, ratings, setRatings, currentUser, id } = props;

  useEffect(() => {
    if(currentUser){
      const findRating = ratings.find(
        (rating) =>
          rating.user_id === currentUser.id && rating.product_id === Number(id)
      );
      setRating(findRating);
    }
  }, [currentUser, id, ratings]);

  return (
    <React.Fragment>
      
        {product.image && (
          <div className="details-left">
            <img src={require(`../../assets/images/products/${product.image}`).default} alt={product.name}/>
            </div>
        )}
      
      <div className="details-right">

        <h3 className="details-name">{product?.name}</h3>

        {/* star rating shows conditionally based on currentUser */}
        {currentUser ? (<div className="rating"><StarRating rating={rating} setRating={setRating}/></div>) : null}

        {product.brand ? <div className="brand">{product?.brand}</div> : null}

        {product.size ? (<div className="size">{product.size} {product?.uom}</div>) : null}

        {product.size ? (<div className="price">{product?.price}</div>) : 
          (<div className="price">{product?.price} / {product.uom}</div>)}

        {/* if no rating, add to cart and "add rating" */}
        {/* if rating, add to cart and "edit rating" */}
        {/* if in edit rating mode, "delete rating" appears */}
        <div className="bottom-box">
          {currentUser ? <button className="invisible">Edit Rating</button> : null }
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default ProductDetailCard;
