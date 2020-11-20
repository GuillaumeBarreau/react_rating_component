import React from "react";
import PropTypes from "prop-types";
import "./Select.css";

export const Select = (props) => {
  const { options, handleChangeFilter } = props;

  return (
    <select
      className="select"
      onChange={(e) => handleChangeFilter(e.target.value)}
    >
      <option value="0" className="select-option">
        Reset filter
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="select-option">
          {option} star
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  options: [],
  handleChangeFilter: () => false,
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleChangeFilter: PropTypes.func,
};
