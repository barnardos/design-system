import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Swatch = ({ hex, name, hasBorder }) => {
  const exampleClassName = `Swatch-example ${
    hasBorder ? "Swatch-example--border" : ""
  }`;
  return (
    <div className="Swatch">
      <div className={exampleClassName} style={{ backgroundColor: hex }} />
      <p className="Swatch-name">{name}</p>
      <p className="Swatch-hex">{hex}</p>
    </div>
  );
};

Swatch.propTypes = {
  hasBorder: PropTypes.bool,
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Swatch;
