import PropTypes from "prop-types";
import React from "react";

import AttentionGrabbingLink from "../AttentionGrabbingLink";

import "./index.css";

const AttentionGrabbingCard = ({
  children,
  colour,
  href,
  text,
  title,
  meta,
  src
}) => {
  const className = `AttentionGrabbingCard AttentionGrabbingCard--${colour}`;
  return (
    <a className={className} href={href}>
      {src && (
        <div className="AttentionGrabbingCard-media">
          <img alt="" className="AttentionGrabbingCard-image" src={src} />
        </div>
      )}
      <div className="AttentionGrabbingCard-text">
        <h2 className="AttentionGrabbingCard-title">{title}</h2>
        {meta && <h3 className="AttentionGrabbingCard-meta">{meta}</h3>}
        <div className="AttentionGrabbingCard-children">{children}</div>
        <div className="AttentionGrabbingCard-link">
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

AttentionGrabbingCard.propTypes = {
  colour: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  src: PropTypes.string
};

export default AttentionGrabbingCard;
