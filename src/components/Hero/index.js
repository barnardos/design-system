import PropTypes from "prop-types";
import React from "react";

import Lede from "../Lede";
import Title from "../Title";

import "./index.css";

const Hero = ({ children, lede, src, title }) => (
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
    <div className="Hero-inner">
      {title && <Title>{title}</Title>}
      {lede && <Lede>{lede}</Lede>}
      {children && <div className="Hero-children">{children}</div>}
    </div>
  </div>
);

Hero.propTypes = {
  children: PropTypes.node,
  lede: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Hero;
