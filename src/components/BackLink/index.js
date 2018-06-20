import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const BackLink = ({ href }) => (
  <a className="BackLink" href={href}>
    {`Back`}
  </a>
);

BackLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default BackLink;
