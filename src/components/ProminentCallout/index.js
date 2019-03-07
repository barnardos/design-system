import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ProminentCallout = ({ colour, children, heading, id }) => (
  <div
    className={`ProminentCallout ${
      colour ? `ProminentCallout--${colour}` : ""
    }`}
    id={id}
  >
    <h2 className="ProminentCallout-heading">{heading}</h2>
    <div className="ProminentCallout-children">{children}</div>
  </div>
);

ProminentCallout.propTypes = {
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string
};

export default ProminentCallout;
