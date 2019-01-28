import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Promo = ({ children, to, title, meta, src }) => (
  <GatsbyLink className="Promo" to={to}>
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
  </GatsbyLink>
);

Promo.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default Promo;
