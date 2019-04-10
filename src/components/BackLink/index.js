import PropTypes from "prop-types";
import React from "react";

import Link from "../GatsbyLink";

import "./index.css";

const BackLink = ({ href }) => (
  <Link className="BackLink" href={href}>
    Back
  </Link>
);

BackLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default BackLink;
