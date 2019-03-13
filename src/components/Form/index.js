import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Form = ({ action, children, ...props }) => (
  <form className="Form" action={action} {...props}>
    {children}
  </form>
);

Form.propTypes = {
  action: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func
};

export default Form;
