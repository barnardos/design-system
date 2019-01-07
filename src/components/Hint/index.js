import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Hint = ({ children }) => <p className="Hint">{children}</p>;

Hint.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hint;
