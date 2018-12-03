import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Code = ({ children }) => <code className="Code">{children}</code>;

Code.propTypes = {
  children: PropTypes.node.isRequired
};

export default Code;
