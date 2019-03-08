import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Fieldset = ({ children, errored, id, legend }) => (
  <fieldset
    className={`Fieldset ${errored ? "Fieldset--errored" : ""}`}
    id={id}
  >
    <legend className="Fieldset-legend">{legend}</legend>
    <div className="Fieldset-children">{children}</div>
  </fieldset>
);

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  errored: PropTypes.bool,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired
};

export default Fieldset;
