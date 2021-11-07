import React from "react";
import { useState, useEffect } from "react";
import StarRating from "../StarRating/StarRating";
import ProductDetailsButton from "../ProductDetailsButton/ProductDetailsButton";
import ProductInfo from "./ProductInfo";
import "../../screens/ProductDetails/ProductDetails.css";

const ProductDetailCard = (props) => {
  const [rating, setRating] = useState(null);
  const [active, setActive] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const {
    product,
    ratings,
    currentUser,
    id,
    handleRatingCreate,
    handleRatingUpdate,
    handleRatingDelete,
  } = props;

  // filter ratings for this product and user, set to newRating to either
  // user's rating or 0 if user has not yet rated product
  useEffect(() => {
    if(currentUser){
      const findRating = ratings.find(
        (rating) =>
          rating.user_id === currentUser.id && rating.product_id === Number(id)
      );
      if (findRating) {
        setRating(findRating)
        setButtonName("edit rating");
      } else {
        setRating({rating: 0})
        setButtonName("add rating");
      };
    }
  }, [currentUser, id, ratings]);

  return (
    <React.Fragment>
      {product.image && (
        <div className="details-left">
          <img
            src={
              require(`../../assets/images/products/${product.image}`).default
            }
            alt={product.name}
            className="details-img"
          />
        </div>
      )}

      <div className="details-right">
        <h3 className="details-name">{product?.name}</h3>

        {/* ----------- star rating renders if currentUser -------------- */}

        {currentUser ? (
          <div className="rating">
            <StarRating
              currentUser={currentUser}
              rating={rating}
              active={active}
              setActive={setActive}
              buttonName={buttonName}
              setButtonName={setButtonName}
              product_id={id}
              handleRatingCreate={handleRatingCreate}
              handleRatingUpdate={handleRatingUpdate}
              handleRatingDelete={handleRatingDelete}
            />
          </div>
        ) : null}

        <ProductInfo product={product} />

        {/* ----------- conditional button name and action dependent on StarRating -------- */}

        <div className="bottom-box">
          {currentUser ? (
            <ProductDetailsButton buttonName={buttonName} setActive={setActive}/>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailCard;
