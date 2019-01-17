import PropTypes from "prop-types";
import React from "react";

import Error from "../Error";
import Fieldset from "../Fieldset";
import Hint from "../Hint";
import Label from "../Label";

import "./index.css";

const DateInput = ({ hint, id, legend, error }) => (
  <Fieldset errored={error} legend={legend} id={id}>
    {hint && <Hint>{hint}</Hint>}
    {error && <Error>{error}</Error>}
    <div className="DateInput-labelsAndInputs">
      <div className="DateInput-labelsAndInput">
        <Label inlined htmlFor={`${id}-day`}>
          Day
        </Label>
        <input
          className="DateInput-input"
          id={`${id}-day`}
          name={`${id}-day`}
          type="number"
        />
      </div>
      <div className="DateInput-labelsAndInput">
        <Label inlined htmlFor={`${id}-month`}>
          Month
        </Label>
        <input
          className="DateInput-input"
          id={`${id}-month`}
          name={`${id}-month`}
          type="number"
        />
      </div>
      <div className="DateInput-labelsAndInput">
        <Label inlined htmlFor={`${id}-year`}>
          Year
        </Label>
        <input
          className="DateInput-input"
          id={`${id}-year`}
          name={`${id}-year`}
          type="number"
        />
      </div>
    </div>
  </Fieldset>
);

DateInput.propTypes = {
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default DateInput;
