import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const HeadingOne = ({ children }) => <h2 className="HeadingOne">{children}</h2>;

HeadingOne.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeadingOne;
