import PropTypes from "prop-types";
import React from "react";

const Preformatted = ({ children }) => (
  <pre className="Preformatted">{children}</pre>
);

Preformatted.propTypes = {
  children: PropTypes.node.isRequired
};

export default Preformatted;
