import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Swatch = ({ hex, label, bordered }) => {
  const className = `Swatch-color ${bordered ? "Swatch-color--bordered" : ""}`;
  return (
    <div className="Swatch">
      <div className={className} style={{ backgroundColor: hex }} />
      <p className="Swatch-label">{label}</p>
      <p className="Swatch-hex">{hex}</p>
    </div>
  );
};

Swatch.propTypes = {
  bordered: PropTypes.bool,
  hex: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Swatch;
