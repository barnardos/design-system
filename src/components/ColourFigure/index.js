import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ColourFigure = ({ type }) => (
  <ul className="ColourFigure">
    <li className="ColourFigure-item" />
    {Array.apply(null, { length: 9 }).map((x, index) => (
      <li
        className={`ColourFigure-item ColourFigure-item--${(index + 1) *
          10}${type}`}
        key={index}
      />
    ))}
  </ul>
);

ColourFigure.propTypes = {
  type: PropTypes.oneOf(["tint", "shade"]).isRequired
};

export default ColourFigure;
