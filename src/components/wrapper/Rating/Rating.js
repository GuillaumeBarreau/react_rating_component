import React from "react";
import PropTypes from "prop-types";
import { Typography, ProgressBar, StarIconList } from "../../commun";
import "./Rating.css";

export const Rating = (props) => {
  const { statsUsers } = props;
  const { stars, averageGrade, ratings, reviews } = statsUsers;

  return (
    <div className="rating">
      <Typography component="h1" variant="large" fontBold>
        Overall
      </Typography>
      <div className="rating-star-icon">
        <StarIconList
          size={32}
          stars={stars}
          average={parseInt(averageGrade)}
        />
        <Typography variant="medium" fontBold>
          {averageGrade} out of 5
        </Typography>
      </div>
      <Typography fontBold>
        This assets has {ratings} user ratings and {reviews} user reviews
      </Typography>
      {Object.entries(stars)
        .map((star, index) => {
          return (
            <div key={index} className="rating-star-progress">
              <Typography>{star[0]} star</Typography>
              <ProgressBar average={(star[1] / ratings) * 100} />
              <Typography>{star[1]}</Typography>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

Rating.propTypes = {
  statsUsers: PropTypes.shape({
    averageGrade: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    stars: PropTypes.object,
  }).isRequired,
};
