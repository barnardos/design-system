import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Title = ({ children }) => <h1 className="Title">{children}</h1>;

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
