import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const StartLink = ({ href }) => (
  <a className="StartLink" href={href}>
    {`Start now`}
  </a>
);

StartLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default StartLink;
