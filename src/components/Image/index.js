import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Image = ({ alt, src }) => <img className="Image" alt={alt} src={src} />;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
