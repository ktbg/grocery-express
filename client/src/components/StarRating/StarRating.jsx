import React, { useState, useEffect, useRef } from "react";
import StarRateIcon from "@mui/icons-material/StarRate"; 
// import { getAllRatings } from "../../services/star-ratings";
import "./StarRating.css";


const StarRating = (props) => {
  const { rating, active, setActive } = props;
  const [newRating, setNewRating] = useState(null);
  const [hover, setHover] = useState(null);
  const editRating = useRef("");
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





  const handleClick = (e, value) => {
    e.preventDefault();
    // postRating
    // stop hover
    // update button name to edit (from delete or add)
    setNewRating(value);
    setActive(false);
  }

  return (
    <React.Fragment>
      {/* resize below */}
     
        <div className="star-container" >
          {[...Array(5)].map((star, index) => {
            const initialValue = rating?.rating;
            console.log(initialValue)
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  // defaultValue={initialValue}
                  // ref={editRating}
                  value={ratingValue}
                  onClick={(e) => handleClick(e, ratingValue)}
                />
                <StarRateIcon
                  sx={{color: ratingValue <= (hover || newRating) ? "red" : "#C4C4C4"}}
                  // newRating={newRating}
                  ratingValue={ratingValue}
                  onMouseEnter={()=> active && setHover(ratingValue) }
                  onMouseLeave={()=> active && setHover(null)}
                />
              </label>
            )}
          )}
        </div>
        <div className="rating-text-container"> 
          <p className="rating-text">Your Rating</p>
        </div> 
    </React.Fragment>
  );
};

export default StarRating;
