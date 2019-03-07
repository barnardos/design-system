import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Feedback = ({ children, heading }) => (
  <aside className="Feedback" id="feedback">
    <h2 className="Feedback-heading">{heading}</h2>
    <div className="Feedback-children">{children}</div>
  </aside>
);

Feedback.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired
};

export default Feedback;
