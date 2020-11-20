import React from "react";
import PropTypes from "prop-types";
import { StarIcon } from "./StarIcon";

export const StarIconList = (props) => {
  const { stars, average, size } = props;
  return Object.entries(stars).map((value, index) => (
    <StarIcon size={size} key={index} color={average >= value[0]} />
  ));
};

StarIconList.defaultProps = {
  average: 0,
  size: 32,
};

StarIconList.propTypes = {
  stars: PropTypes.object.isRequired,
  average: PropTypes.number,
  size: PropTypes.number,
};
