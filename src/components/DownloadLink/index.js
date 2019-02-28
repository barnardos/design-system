import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const DownloadLink = ({ children, format, href, size }) => (
  <Link className="DownloadLink-link" href={href}>
    <span className="DownloadLink-children">{children}</span>
    <span className="DownloadLink-meta">{`– ${format}, ${size}`}</span>
  </Link>
);

DownloadLink.propTypes = {
  children: PropTypes.node.isRequired,
  format: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default DownloadLink;
