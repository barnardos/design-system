import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Caption = ({ label, children }) => (
  <figure className="Caption">
    <div className="Caption-children">
      <div className="Caption-childrenInner">{children}</div>
    </div>
    <figcaption className="Caption-label">{label}</figcaption>
  </figure>
);

Caption.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
};

export default Caption;
