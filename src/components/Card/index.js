import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Card = ({ children, href, title, meta, src }) => (
  <a className="Card" href={href}>
    {src && (
      <div className="Card-media">
        <img alt="" className="Card-image" src={src} />
      </div>
    )}
    <div className="Card-text">
      <h2 className="Card-title">{title}</h2>
      {meta && <h3 className="Card-meta">{meta}</h3>}
      <div className="Card-children">{children}</div>
    </div>
  </a>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string
};

export default Card;
