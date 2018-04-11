import PropTypes from "prop-types";
import React from "react";
import slugifyNode from "../../utils/slugifyNode";

import "./index.css";

const HeadingTwo = ({ children }) => (
  <h3 className="HeadingTwo" id={slugifyNode(children)}>
    {children}
  </h3>
);

HeadingTwo.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeadingTwo;
