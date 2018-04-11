import PropTypes from "prop-types";
import React from "react";
import slugifyNode from "../../utils/slugifyNode";

import "./index.css";

const HeadingOne = ({ children }) => (
  <h2 className="HeadingOne" id={slugifyNode(children)}>
    {children}
  </h2>
);

HeadingOne.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeadingOne;
