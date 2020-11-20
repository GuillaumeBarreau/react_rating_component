import React from "react";
import PropTypes from "prop-types";
import "./Typography.css";

export const Typography = ({
  children,
  component,
  variant,
  fontBold,
  ...props
}) => {
  let className = `${variant ? `typography--${variant}` : "typography"}`;
  if (fontBold) {
    className += " typography--bold";
  }

  return React.createElement(
    component,
    {
      className: className,
      ...props,
    },
    children
  );
};

Typography.defaultProps = {
  component: "p",
  variant: null,
  fontBold: false,
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.string,
  variant: PropTypes.string,
  fontBold: PropTypes.bool,
};
