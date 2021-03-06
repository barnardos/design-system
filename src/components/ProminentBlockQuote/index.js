import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ProminentBlockQuote = ({ children, colour, name, role }) => (
  <blockquote
    className={`ProminentBlockQuote ${
      colour ? `ProminentBlockQuote--${colour}` : ""
    }`}
  >
    <div className="ProminentBlockQuote-children">{children}</div>
    <cite className="ProminentBlockQuote-cite">
      <p className="ProminentBlockQuote-nameAndRole">
        {`${role ? `${name} – ${role}` : name}`}
      </p>
    </cite>
  </blockquote>
);

ProminentBlockQuote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["black", "orange", "pink", "purple", "teal"]),
  name: PropTypes.string.isRequired,
  role: PropTypes.string
};

export default ProminentBlockQuote;
