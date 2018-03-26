import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Submit = ({ text }) => {
  return <input className="Submit" type="submit" value={text} />;
};

Submit.propTypes = {
  text: PropTypes.string.isRequired
};

export default Submit;
