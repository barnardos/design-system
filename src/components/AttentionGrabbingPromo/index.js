import PropTypes from "prop-types";
import React from "react";

import AttentionGrabbingLink from "../AttentionGrabbingLink";

import "./index.css";

const AttentionGrabbingPromo = ({
  children,
  colour,
  href,
  text,
  title,
  meta,
  src
}) => {
  const className = `AttentionGrabbingPromo AttentionGrabbingPromo--${colour}`;
  return (
    <a className={className} href={href}>
      {src && (
        <div className="AttentionGrabbingPromo-media">
          <img alt="" className="AttentionGrabbingPromo-image" src={src} />
        </div>
      )}
      <div className="AttentionGrabbingPromo-text">
        <h2 className="AttentionGrabbingPromo-title">{title}</h2>
        {meta && <h3 className="AttentionGrabbingPromo-meta">{meta}</h3>}
        <div className="AttentionGrabbingPromo-children">{children}</div>
        <div className="AttentionGrabbingPromo-link">
          <AttentionGrabbingLink
            colour={colour}
            href={href}
            isFull
            text={text}
          />
        </div>
      </div>
    </a>
  );
};

AttentionGrabbingPromo.propTypes = {
  colour: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string
};

export default AttentionGrabbingPromo;
