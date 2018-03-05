import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Swatch = ({ hex, label, bordered, inverted, primary }) => {
  const className = `Swatch ${bordered ? "Swatch--bordered" : ""}
  ${inverted ? "Swatch--inverted" : ""}
  ${primary ? "Swatch--primary" : ""}`;
  return (
    <div className={className} style={{ backgroundColor: hex }}>
      <p className="Swatch-label">{label}</p>
      <p className="Swatch-hex">{hex}</p>
    </div>
  );
};

Swatch.propTypes = {
  bordered: PropTypes.bool,
  hex: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool
};

export default Swatch;
