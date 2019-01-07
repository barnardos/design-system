import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Promo = ({ children, href, title, meta, src }) => (
  <a className="Promo" href={href}>
    {src && (
      <div className="Promo-media">
        <img alt="" className="Promo-image" src={src} />
      </div>
    )}
    <div className="Promo-text">
      <h2 className="Promo-title">{title}</h2>
      {meta && <h3 className="Promo-meta">{meta}</h3>}
      <div className="Promo-children">{children}</div>
    </div>
  </a>
);

Promo.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string
};

export default Promo;
