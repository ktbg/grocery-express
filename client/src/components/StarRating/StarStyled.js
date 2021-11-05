import StarRateIcon from "@mui/icons-material/StarRate";
import { styled } from "@mui/material/styles";

const StyledStar = styled(StarRateIcon)`
  cursor: pointer;
  color: ${({ ratingValue, rating }) => ratingValue <= rating ? "red" : "#c4c4c4"}
`;

// export StyledStar