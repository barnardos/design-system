import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const Promo = ({ children, href, title, meta, src }) => (
  <Link className="Promo" href={href}>
    {src && (
      <div className="Promo-media">
        <img alt="" className="Promo-image" src={src} />
      </div>
    )}
    <div className="Promo-text">
      <p className="Promo-title">{title}</p>
      {meta && <p className="Promo-meta">{meta}</p>}
      <div className="Promo-children">{children}</div>
    </div>
  </Link>
);

Promo.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Promo;
