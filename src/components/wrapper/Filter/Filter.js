import React from "react";
import PropTypes from "prop-types";
import { Select } from "../../commun";
import "./Filter.css";

export const Filter = (props) => {
  const { stars, handleChangeFilter } = props;
  return (
    <div className="filter">
      <Select
        handleChangeFilter={handleChangeFilter}
        options={Object.keys(stars)}
      />
    </div>
  );
};

Filter.propTypes = {
  stars: PropTypes.object.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
