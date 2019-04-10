import PropTypes from "prop-types";
import React from "react";

import Link from "../GatsbyLink";

import "./index.css";

const ProminentLink = ({ colour, href, full, text }) => (
  <Link
    className={`ProminentLink ProminentLink--${colour} ${
      full ? "ProminentLink--full" : ""
    }`}
    href={href}
  >
    {text}
  </Link>
);

ProminentLink.propTypes = {
  colour: PropTypes.oneOf(["black", "orange", "pink", "purple", "teal"]),
  href: PropTypes.string.isRequired,
  full: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default ProminentLink;
