import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Figure = ({ caption, secondaryCaption, tertiaryCaption, children }) => (
  <figure className="Figure">
    <div className="Figure-children">{children}</div>
    <figcaption className="Figure-caption">
      {caption}
      {secondaryCaption && (
        <span className="Figure-secondaryCaption">{secondaryCaption}</span>
      )}
      {tertiaryCaption && (
        <span className="Figure-tertiaryCaption">{tertiaryCaption}</span>
      )}
    </figcaption>
  </figure>
);

Figure.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string.isRequired,
  secondaryCaption: PropTypes.string,
  tertiaryCaption: PropTypes.string
};

export default Figure;
