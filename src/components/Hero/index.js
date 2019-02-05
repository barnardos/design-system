import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Hero = ({ children, src }) => (
  <div
    className={`Hero ${src ? "Hero--withImage" : ""}`}
    style={
      src
        ? {
            backgroundImage: `url(${src})`
          }
        : {}
    }
  >
    <div className="Hero-children">{children}</div>
  </div>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string
};

export default Hero;
