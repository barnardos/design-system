import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Submit = ({ children }) => (
  <button className="Submit" type="submit">
    {children}
  </button>
);

Submit.propTypes = {
  children: PropTypes.node.isRequired
};

export default Submit;
