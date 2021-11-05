import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate"; 
// import { getAllRatings } from "../../services/star-ratings";
import "./StarRating.css";


const StarRating = (props) => {
  const [newRating, setNewRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { rating, setRating } = props;


  return (
    <React.Fragment>
      {/* resize below */}
      <div className="star-container" >
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setNewRating(ratingValue)}
            />
            <StarRateIcon
              sx={{color: ratingValue <= (hover || newRating) ? "red" : "#C4C4C4"}}
              defaultValue={rating}
              newRating={newRating}
              ratingValue={ratingValue}
              onMouseEnter={()=> setHover(ratingValue)}
              onMouseLeave={()=> setHover(null)}
            />
          </label>
        );
      })}
      </div>
      <div className="rating-text-container"> 
        <p className="rating-text">Your Rating</p>
      </div>
    </React.Fragment>
  );
};

export default StarRating;
