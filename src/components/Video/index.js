import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Video = ({ src, title }) => (
  <div className="Video">
    <iframe className="Video-media" title={title} src={src} allowFullscreen />
  </div>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Video;
