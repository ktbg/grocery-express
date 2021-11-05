import React, { useState, useEffect, useRef } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
// import { getAllRatings } from "../../services/star-ratings";
import "./StarRating.css";

const StarRating = (props) => {
  const [newRating, setNewRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [formData, setFormData] =useState({
    rating: "", 
    product_id: "", 
    user_id: ""
  })
  const editRating = useRef(0)
  const {
    currentUser,
    rating,
    active,
    setActive,
    buttonName,
    setButtonName,
    handleRatingCreate,
    handleRatingUpdate,
    handleRatingDelete,
    product_id
  } = props;

  useEffect(() => {
    const presetRating = () => {
      setNewRating(rating?.rating);
    }
    if (rating?.id) presetRating();
  },[rating])
  // ---------- handles click on stars to set rating ---------------

   const handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;
    // setFormData({
    //   rating: value, 
    //   user_id: currentUser.id,
    //   product_id: product_id,
    // })
 
    if (buttonName === "add rating"){
      handleRatingCreate(product_id, {
        rating: value, 
        user_id: currentUser.id,
        product_id: product_id,
      });
      setButtonName('edit rating');     // changes button from 'add' to 'edit' if initial rating did not exist
    } else {
      handleRatingUpdate(rating.id, {
        rating: value, 
        user_id: currentUser.id,
        product_id: product_id,
      });
    }
    setNewRating(value);    // sets star rating state
    setActive(false);       // stop hover     
                                            
    // setFormData({
    //   rating: "", 
    //   product_id: "", 
    //   user_id: ""
    // })                               
  };

  // ---------- handles rating delete if rating exists already --------------

  const handleDeleteClick = () => {
    handleRatingDelete(rating.id);
    setNewRating(0);
    setHover(null);
    setActive(false);
    console.log('rating deleted'); // DUCHESS
  };

  return (
    <React.Fragment>
      {/* resize below */}

      <div className="star-container">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                // defaultValue={rating}
                // ref={editRating}
                value={ratingValue}
                onClick={(e) => handleClick(e)}
              />
              <StarRateIcon
                sx={{
                  color:
                    ratingValue <= (hover || newRating) ? "red" : "#C4C4C4",
                }}
                // newRating={newRating}
                ratingValue={ratingValue}
                onMouseEnter={() => active && setHover(ratingValue)}
                onMouseLeave={() => active && setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className="rating-text-container">
        {active ? (
          <button className="invisible" onClick={handleDeleteClick}>
            Delete Rating
          </button>
        ) : (
          <p className="rating-text">Your Rating</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default StarRating;


// ================== TEST CODE ================================

  // const editRating = useRef("");
  // const { rating, setRating, currentUser } = props;
  // const { currentUser, product_id, ratings } = props;

  // filter ratings for this product and user, set to newRating to either
  // user's rating or 0 if user has not yet rated product
  //  useEffect(() => {
  //   if(currentUser){
  //     const findRating = ratings.find(
  //       (rating) =>
  //         rating.user_id === currentUser.id && rating.product_id === Number(product_id)
  //     );
  //     if (findRating) setNewRating(findRating.rating);
  //     else setNewRating(0);
  //   }
  // }, [currentUser, product_id]);

 