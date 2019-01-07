import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Form = ({ action, children }) => (
  <form className="Form" action={action}>
    {children}
  </form>
);

Form.propTypes = {
  action: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
