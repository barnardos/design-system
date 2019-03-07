import PropTypes from "prop-types";
import React from "react";

import ProminentLink from "../ProminentLink";

import "./index.css";

const ProminentTeaser = ({
  children,
  colour,
  href,
  text,
  title,
  meta,
  src
}) => (
  <div className={`ProminentTeaser ProminentTeaser--${colour}`}>
    {src && (
      <div className="ProminentTeaser-media">
        <img alt="" className="ProminentTeaser-image" src={src} />
      </div>
    )}
    <div className="ProminentTeaser-text">
      <p className="ProminentTeaser-title">{title}</p>
      {meta && <p className="ProminentTeaser-meta">{meta}</p>}
      <div className="ProminentTeaser-children">{children}</div>
      <div className="ProminentTeaser-link">
        <ProminentLink colour={colour} href={href} full text={text} />
      </div>
    </div>
  </div>
);

ProminentTeaser.propTypes = {
  colour: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string
};

export default ProminentTeaser;
