import PropTypes from "prop-types";
import React from "react";

import Image from "../Image";
import Link from "../Link";

import "./index.css";

const Teaser = ({ children, heading, href, meta, src, alt = "" }) => (
  <Link className="Teaser" href={href}>
    {src && (
      <div className="Teaser-image">
        <Image alt={alt} src={src} />
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
