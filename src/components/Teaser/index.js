import PropTypes from "prop-types";
import React from "react";

import Link from "../GatsbyLink";

import "./index.css";

const Teaser = ({ children, heading, href, meta, src }) => (
  <Link className="Teaser" href={href}>
    {src && (
      <div className="Teaser-media">
        <img alt="" className="Teaser-image" src={src} />
      </div>
    )}
    <div className="Teaser-text">
      <p className="Teaser-heading">{heading}</p>
      {meta && <p className="Teaser-meta">{meta}</p>}
      <div className="Teaser-children">{children}</div>
    </div>
  </Link>
);

Teaser.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string
};

export default Teaser;
