import React, { useState, useEffect } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./StarRating.css";

const StarRating = (props) => {
  const [newRating, setNewRating] = useState(null);
  const [hover, setHover] = useState(null);

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
    product_id,
  } = props;

  useEffect(() => {
    const presetRating = () => {
      setNewRating(rating?.rating);
    };
    if (rating?.id) presetRating();
  }, [rating]);
  // ---------- handles click on stars to set rating ---------------

  const handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (buttonName === "add rating") {
      handleRatingCreate(product_id, {
        rating: value,
        user_id: currentUser.id,
        product_id: product_id,
      });
      setButtonName("edit rating"); // changes button from 'add' to 'edit' if initial rating did not exist
    } else {
      handleRatingUpdate(rating.id, {
        rating: value,
        user_id: currentUser.id,
        product_id: product_id,
      });
    }
    setNewRating(value); // sets star rating state
    setActive(false); // stop hover
  };

  // ---------- handles rating delete if rating exists already --------------

  const handleDeleteClick = () => {
    handleRatingDelete(rating.id);
    setNewRating(0);
    setHover(null);
    setActive(false);
  };

  return (
    <React.Fragment>
      <div className="star-container">
        {/* creates stars */}

        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={(e) => handleClick(e)}
              />
              <StarRateIcon
                sx={{
                  color:
                    ratingValue <= (hover || newRating) ? "red" : "#C4C4C4",
                }}
                onMouseEnter={() => active && setHover(ratingValue)}
                onMouseLeave={() => active && setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className="rating-text-container">
        {/* toggles based on whether a user has an existing rating or is creating a new one */}

        {active ? (
          <React.Fragment>
            <p className="delete-rating" onClick={handleDeleteClick}>
              <DeleteForeverIcon
                color="#404040"
                sx={{ cursor: "pointer", marginBottom: "-5px" }}
              />
              Delete Rating
            </p>
          </React.Fragment>
        ) : (
          <p className="rating-text">Your Rating</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default StarRating;
