import React from "react";
import PropTypes from "prop-types";
import { Commentary } from "./Commentary";
import "./Commentaries.css";

export const Commentaries = (props) => {
  const { usersData, statsUsers } = props;
  const { stars } = statsUsers;

  return (
    <div className="Commentaries">
      {usersData.map((data, index) => {
        return (
          data.content && <Commentary key={index} stars={stars} user={data} />
        );
      })}
    </div>
  );
};

Commentaries.defaultProps = {};

Commentaries.propTypes = {
  usersData: PropTypes.array.isRequired,
  statsUsers: PropTypes.shape({
    averageGrade: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    stars: PropTypes.object,
  }).isRequired,
};
