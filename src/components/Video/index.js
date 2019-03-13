import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Video = ({ src }) => (
  <div className="Video">
    <iframe className="Video-media" src={src} allowFullscreen />
  </div>
);

Video.propTypes = {
  src: PropTypes.string.isRequired
};

export default Video;
