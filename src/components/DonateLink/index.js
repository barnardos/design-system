import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const DonateLink = ({ href }) => (
  <Link className="DonateLink" href={href}>
    {`Donate`}
  </Link>
);

DonateLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default DonateLink;
