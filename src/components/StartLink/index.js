import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const StartLink = ({ href }) => (
  <Link className="StartLink" href={href}>
    Start now
  </Link>
);

StartLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default StartLink;
