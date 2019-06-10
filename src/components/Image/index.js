import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Image = ({ alt, ratio, src }) => (
  <div className={`Image ${ratio ? `Image--${ratio}` : ""}`}>
    <img className="Image-media" alt={alt} src={src} />
  </div>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  ratio: PropTypes.oneOf[("1by1", "16by9")],
  src: PropTypes.string.isRequired
};

export default Image;
