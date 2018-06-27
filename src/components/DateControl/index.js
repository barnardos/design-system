import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const DateControl = ({ errored, hint, id, label, validation }) => {
  const className = `DateControl ${errored ? "DateControl--errored" : ""}`;
  return (
    <fieldset className={className}>
      <legend className="DateControl-legend">{label}</legend>
      {hint && <p className="DateControl-hint">{hint}</p>}
      {validation && (
        <p className="DateControl-validation">
          <strong className="DateControl-validationInner">{validation}</strong>
        </p>
      )}
      <div className="DateControl-labelsAndElements">
        <label className="DateControl-label" htmlFor={`${id}-day`}>
          Day
        </label>
        <input
          className="DateControl-element"
          name={`${id}-day`}
          id={`${id}-day`}
          type="number"
        />
        <label className="DateControl-label" htmlFor={`${id}-month`}>
          Month
        </label>
        <input
          className="DateControl-element"
          name={`${id}-month`}
          id={`${id}-month`}
          type="number"
        />
        <label className="DateControl-label" htmlFor={`${id}-year`}>
          Year
        </label>
        <input
          className="DateControl-element"
          name={`${id}-year`}
          id={`${id}-year`}
          type="number"
        />
      </div>
    </fieldset>
  );
};

DateControl.propTypes = {
  errored: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validation: PropTypes.string
};

export default DateControl;
