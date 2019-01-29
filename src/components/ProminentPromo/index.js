import PropTypes from "prop-types";
import React from "react";

import ProminentLink from "../ProminentLink";

import "./index.css";

const ProminentPromo = ({ children, colour, href, text, title, meta, src }) => {
  const className = `ProminentPromo ProminentPromo--${colour}`;
  return (
    <a className={className} href={href}>
      {src && (
        <div className="ProminentPromo-media">
          <img alt="" className="ProminentPromo-image" src={src} />
        </div>
      )}
      <div className="ProminentPromo-text">
        <p className="ProminentPromo-title">{title}</p>
        {meta && <p className="ProminentPromo-meta">{meta}</p>}
        <div className="ProminentPromo-children">{children}</div>
        <div className="ProminentPromo-link">
          <ProminentLink colour={colour} href={href} isFull text={text} />
        </div>
      </div>
    </a>
  );
};

ProminentPromo.propTypes = {
  colour: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string
};

export default ProminentPromo;
