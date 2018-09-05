import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Figure = ({ caption, children }) => (
  <figure className="Figure">
    <div className="Figure-children">
      <div className="Figure-childrenInner">{children}</div>
    </div>
    <figcaption className="Figure-caption">{caption}</figcaption>
  </figure>
);

Figure.propTypes = {
  caption: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Figure;
