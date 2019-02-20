import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Feedback = ({ children, title }) => (
  <aside className="Feedback" id="feedback">
    <h2 className="Feedback-title">{title}</h2>
    <div className="Feedback-children">{children}</div>
  </aside>
);

Feedback.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Feedback;
