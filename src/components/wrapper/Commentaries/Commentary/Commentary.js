import React from "react";
import PropTypes from "prop-types";
import { Typography, StarIconList } from "../../../commun";
import "./Commentary.css";

export const Commentary = (props) => {
  const { stars, user } = props;

  return (
    <div className="commentary">
      <Typography>{user.author.username}</Typography>
      <div className="commentary-info-grade">
        <StarIconList size={20} stars={stars} average={parseInt(user.grade)} />
        <Typography fontBold>{user.title}</Typography>
      </div>
      <Typography>{user.content}</Typography>
    </div>
  );
};

Commentary.defaultProps = {};

Commentary.propTypes = {
  stars: PropTypes.object.isRequired,
  user: PropTypes.shape({
    author: PropTypes.shape({
      username: PropTypes.string,
    }),
    grade: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};
