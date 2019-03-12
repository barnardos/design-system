import PropTypes from "prop-types";
import React from "react";

import Error from "../Error";
import Fieldset from "../Fieldset";
import Hint from "../Hint";
import Switch from "../Switch";

import "./index.css";

const Switches = ({ hint, id, items, legend, error, type, name }) => (
  <Fieldset errored={error ? true : false} legend={legend} id={id}>
    {hint && <Hint>{hint}</Hint>}
    {error && <Error>{error}</Error>}
    <div className="Switches-items">
      {items.map((option, index) => (
        <div className="Switches-item" key={index}>
          <Switch name={name} type={type} {...option} />
        </div>
      ))}
    </div>
  </Fieldset>
);

Switches.propTypes = {
  error: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["checkbox", "radio"])
};

export default Switches;
