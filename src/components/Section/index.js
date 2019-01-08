import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Section = ({ children }) => (
  <section className="Section">{children}</section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;
