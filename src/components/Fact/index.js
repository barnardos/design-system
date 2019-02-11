import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Fact = ({ children, colour, label }) => (
  <div className={`Fact ${colour ? `Fact--${colour}` : ""}`}>
    <div className="Fact-children">{children}</div>
    <p className="Fact-label">{label}</p>
  </div>
);

Fact.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  label: PropTypes.string
};

export default Fact;
