import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const DonateLink = ({ href }) => (
  <a className="DonateLink" href={href}>
    {`Donate`}
  </a>
);

DonateLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default DonateLink;
