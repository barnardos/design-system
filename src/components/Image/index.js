import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Image = ({ alt, src }) => (
  <div className="Image">
    <img className="Image-media" alt={alt} src={src} />
  </div>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
