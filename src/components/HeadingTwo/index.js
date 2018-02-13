import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const HeadingTwo = ({ children }) => <h3 className="HeadingTwo">{children}</h3>;

HeadingTwo.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeadingTwo;
