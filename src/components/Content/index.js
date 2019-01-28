import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Content = ({ children }) => <div className="Content">{children}</div>;

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;
