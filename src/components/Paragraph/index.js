import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Paragraph = ({ children }) => <p className="Paragraph">{children}</p>;

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
};

export default Paragraph;
