import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ProminentCallout = ({ colour, children, id, title }) => (
  <div
    className={`ProminentCallout ${
      colour ? `ProminentCallout--${colour}` : ""
    }`}
    id={id}
  >
    <h2 className="ProminentCallout-title">{title}</h2>
    <div className="ProminentCallout-children">{children}</div>
  </div>
);

ProminentCallout.propTypes = {
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default ProminentCallout;
