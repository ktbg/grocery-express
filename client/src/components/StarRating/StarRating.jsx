import { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate"; 
// import styled from "styled-components";
import { StyledStar } from "./StarStyled";
import "./StarRating.css";


const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {/* resize below */}
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              
            />
            <StarRateIcon
              // className="star"
              // style={{ color: "red", cursor: "pointer" }}
              // color={ratingValue <= (hover || rating ? "red": "grey}"
              rating={rating}
              ratingValue={ratingValue}
              onMouseEnter={()=> setHover(ratingValue)}
              onMouseLeave={()=> setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
