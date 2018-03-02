import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const SubmitAction = ({ text }) => {
  return <input className="SubmitAction" type="submit" value={text} />;
};

SubmitAction.propTypes = {
  text: PropTypes.string.isRequired
};

export default SubmitAction;
