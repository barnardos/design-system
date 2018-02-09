import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Lede = ({ children }) => <p className="Lede">{children}</p>;

Lede.propTypes = {
  children: PropTypes.node.isRequired
};

export default Lede;
