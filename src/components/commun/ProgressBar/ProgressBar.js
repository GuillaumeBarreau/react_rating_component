import React from "react";
import PropTypes from "prop-types";
import "./ProgressBar.css";

export const ProgressBar = (props) => {
  const { average } = props;

  return (
    <div className="progressBar">
      <div className="progressBar-range" style={{ width: `${average}%` }} />
    </div>
  );
};

ProgressBar.defaultProps = {
  average: 0,
};

ProgressBar.propTypes = {
  average: PropTypes.number,
};
