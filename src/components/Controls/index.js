import PropTypes from "prop-types";
import React from "react";

import AnyOfManyChoiceControl from "../AnyOfManyChoiceControl";
import ChoiceControl from "../ChoiceControl";
import MultilineTextControl from "../MultilineTextControl";
import OneOfManyChoiceControl from "../OneOfManyChoiceControl";
import SinglelineTextControl from "../SinglelineTextControl";

const controls = {
  anyOfManyChoice: AnyOfManyChoiceControl,
  choice: ChoiceControl,
  multilineText: MultilineTextControl,
  oneOfManyChoice: OneOfManyChoiceControl,
  singlelineText: SinglelineTextControl
};

import "./index.css";

const renderControl = control => {
  const Control = controls[control.control];
  return <Control {...control} />;
};

const Controls = ({ controls }) => (
  <div className="Controls">
    {controls.map((control, index) => (
      <div className="Controls-control" key={index}>
        {renderControl(control)}
      </div>
    ))}
  </div>
);

Controls.propTypes = {
  controls: PropTypes.array.isRequired
};

export default Controls;
