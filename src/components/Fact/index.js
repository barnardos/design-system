import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Fact = ({ children, colour, label }) => {
  const className = `Fact ${colour ? `Fact--${colour}` : ""}`;
  return (
    <aside className={className}>
      <div className="Fact-children">{children}</div>
      <p className="Fact-label">{label}</p>
    </aside>
  );
};

Fact.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  label: PropTypes.string
};

export default Fact;
